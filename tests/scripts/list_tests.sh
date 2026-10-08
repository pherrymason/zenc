#!/bin/bash
# Prints the .zc tests that the C-mode runner would execute on this machine,
# one per line: same exclusions as run_tests.sh (helper modules, backends,
# MISRA, REQUIRE: CHECK/CUDA/OBJC, x86-only tests on other architectures).
# Usage: tests/scripts/list_tests.sh [dir]   (default: tests)
TEST_DIR=${1:-tests}
arch=$(uname -m)
find "$TEST_DIR" -name "*.zc" -not -name "_*.zc" -not -path "*/backends/*" -not -path "*/misra/*" | sort |
    while IFS= read -r f; do
        if grep -qE '// REQUIRE: (CHECK|CUDA|OBJC)' "$f"; then continue; fi
        case "$arch" in
            *86*|amd64) ;;
            *) case "$f" in *test_asm*|*test_intel*|*test_simd_x86*) continue ;; esac ;;
        esac
        echo "$f"
    done
