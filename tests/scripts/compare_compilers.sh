#!/bin/bash
# Runs every test with two zc binaries and lists the tests whose outcome
# (exit code of `zc run`) differs. Use it to check that a compiler change
# does not regress anything compared with a reference build. A test marked
# `// EXPECT: FAIL` counts as passing (0) when `zc run` fails and as failing
# (1) when it succeeds, as in run_tests.sh.
#
# Usage: tests/scripts/compare_compilers.sh OLD_ZC NEW_ZC [test.zc...]
#   Without test files it uses tests/scripts/list_tests.sh.
#   ZC_TEST_JOBS sets the parallelism (default 8).
# Exit code: 1 if some test passes with OLD_ZC and fails with NEW_ZC.
. "$(dirname "$0")/lib_portable.sh"

if [ $# -lt 2 ]; then
    echo "Usage: $0 OLD_ZC NEW_ZC [test.zc...]"
    exit 2
fi
OLD_ZC=$1
NEW_ZC=$2
shift 2
JOBS=${ZC_TEST_JOBS:-8}

if [ $# -gt 0 ]; then
    TESTS=("$@")
else
    read_lines TESTS < <("$(dirname "$0")/list_tests.sh")
fi
if [ ${#TESTS[@]} -eq 0 ]; then
    echo "Error: no tests to compare"
    exit 2
fi

WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

run_one() {
    # $1 = label, $2 = zc binary, $3 = test file
    local id
    id=$(printf '%s' "$3" | tr '/.' '__')
    "$2" run -w "$3" -o "$WORK/$1$id" >/dev/null 2>&1
    local rc=$?
    if grep -q "// EXPECT: FAIL" "$3"; then
        if [ $rc -ne 0 ]; then rc=0; else rc=1; fi
    fi
    echo "$rc $3" >> "$WORK/$1.txt"
}
export -f run_one
export WORK

for side in old new; do
    if [ "$side" = old ]; then zc=$OLD_ZC; else zc=$NEW_ZC; fi
    printf '%s\n' "${TESTS[@]}" | xargs -P "$JOBS" -I{} bash -c 'run_one "$0" "$1" "$2"' "$side" "$zc" {}
    sort -k2 "$WORK/$side.txt" > "$WORK/$side.sorted"
done

echo "Compared ${#TESTS[@]} tests: $OLD_ZC vs $NEW_ZC"
join -1 2 -2 2 "$WORK/old.sorted" "$WORK/new.sorted" > "$WORK/joined"
regressions=$(awk '$2 == 0 && $3 != 0' "$WORK/joined" | wc -l | tr -d ' ')
fixes=$(awk '$2 != 0 && $3 == 0' "$WORK/joined" | wc -l | tr -d ' ')
other=$(awk '$2 != 0 && $3 != 0 && $2 != $3' "$WORK/joined" | wc -l | tr -d ' ')
awk '$2 == 0 && $3 != 0 {print "  REGRESSION " $1}' "$WORK/joined"
awk '$2 != 0 && $3 == 0 {print "  FIXED      " $1}' "$WORK/joined"
awk '$2 != 0 && $3 != 0 && $2 != $3 {print "  EXIT " $2 " -> " $3 " " $1}' "$WORK/joined"
echo "Regressions: $regressions  Fixed: $fixes  Other changes: $other"
[ "$regressions" -eq 0 ]
