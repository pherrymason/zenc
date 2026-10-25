window.BENCHMARK_DATA = {
  "lastUpdate": 1792955414225,
  "repoUrl": "https://github.com/pherrymason/zenc",
  "entries": {
    "Zen Compiler Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "raul.ferras@gmail.com",
            "name": "Raul",
            "username": "pherrymason"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "353d9cd8acd4067edca2048d01702ea81a7aa022",
          "message": "Merge pull request #447 from Yuuki1578/main\n\nFix conflicting macro from being used as variable",
          "timestamp": "2026-10-14T09:35:42+02:00",
          "tree_id": "70f1e2ef46aada9666d9b540c96f0da24871cbfe",
          "url": "https://github.com/pherrymason/zenc/commit/353d9cd8acd4067edca2048d01702ea81a7aa022"
        },
        "date": 1791967966750,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Compiler (Full Suite Transpilation)",
            "value": 20804,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_bigint_factorial)",
            "value": 2,
            "unit": "ms"
          },
          {
            "name": "Compile (test_bigint_factorial)",
            "value": 219,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_comptime)",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "Compile (test_comptime)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_fib_recursive)",
            "value": 73,
            "unit": "ms"
          },
          {
            "name": "Compile (test_fib_recursive)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_hashmap)",
            "value": 157,
            "unit": "ms"
          },
          {
            "name": "Compile (test_hashmap)",
            "value": 91,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_hello)",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "Compile (test_hello)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_json_parse)",
            "value": 250,
            "unit": "ms"
          },
          {
            "name": "Compile (test_json_parse)",
            "value": 787,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_mandelbrot)",
            "value": 26,
            "unit": "ms"
          },
          {
            "name": "Compile (test_mandelbrot)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_sha256)",
            "value": 113,
            "unit": "ms"
          },
          {
            "name": "Compile (test_sha256)",
            "value": 624,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_sort_large)",
            "value": 78,
            "unit": "ms"
          },
          {
            "name": "Compile (test_sort_large)",
            "value": 84,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_string_concat)",
            "value": 1,
            "unit": "ms"
          },
          {
            "name": "Compile (test_string_concat)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_vec_ops)",
            "value": 19,
            "unit": "ms"
          },
          {
            "name": "Compile (test_vec_ops)",
            "value": 137,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zuhaitz.zechhub@gmail.com",
            "name": "Zuhaitz"
          },
          "committer": {
            "email": "zuhaitz.zechhub@gmail.com",
            "name": "Zuhaitz"
          },
          "distinct": true,
          "id": "b3f550e938be3fd395e9ebf657669f89dbb3453b",
          "message": "fix(tests): update unit AST/LSP tests after syntax removal\n\nThe unless node was removed from the AST, but the ast_children test still created NODE_UNLESS and the LSP index test used the old column for 'unless v'. Use NODE_IF and the new column; all 50 unit tests pass.",
          "timestamp": "2026-10-25T10:06:59+02:00",
          "tree_id": "c5df43c37cf45ca39a2b87fcae8d4049d1fa7075",
          "url": "https://github.com/pherrymason/zenc/commit/b3f550e938be3fd395e9ebf657669f89dbb3453b"
        },
        "date": 1792950496436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Compiler (Full Suite Transpilation)",
            "value": 35343,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_bigint_factorial)",
            "value": 3,
            "unit": "ms"
          },
          {
            "name": "Compile (test_bigint_factorial)",
            "value": 217,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_comptime)",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "Compile (test_comptime)",
            "value": 63,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_fib_recursive)",
            "value": 58,
            "unit": "ms"
          },
          {
            "name": "Compile (test_fib_recursive)",
            "value": 59,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_hashmap)",
            "value": 149,
            "unit": "ms"
          },
          {
            "name": "Compile (test_hashmap)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_hello)",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "Compile (test_hello)",
            "value": 57,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_json_parse)",
            "value": 264,
            "unit": "ms"
          },
          {
            "name": "Compile (test_json_parse)",
            "value": 917,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_mandelbrot)",
            "value": 23,
            "unit": "ms"
          },
          {
            "name": "Compile (test_mandelbrot)",
            "value": 61,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_sha256)",
            "value": 126,
            "unit": "ms"
          },
          {
            "name": "Compile (test_sha256)",
            "value": 694,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_sort_large)",
            "value": 64,
            "unit": "ms"
          },
          {
            "name": "Compile (test_sort_large)",
            "value": 92,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_string_concat)",
            "value": 1,
            "unit": "ms"
          },
          {
            "name": "Compile (test_string_concat)",
            "value": 437,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_vec_ops)",
            "value": 18,
            "unit": "ms"
          },
          {
            "name": "Compile (test_vec_ops)",
            "value": 147,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "raulferras@gmail.com",
            "name": "Raúl Ferràs",
            "username": "pherrymason"
          },
          "committer": {
            "email": "raulferras@gmail.com",
            "name": "Raúl Ferràs",
            "username": "pherrymason"
          },
          "distinct": true,
          "id": "de49ae8472e27e20e1cd6229408ce498d769bead",
          "message": "parser: parse a match expression with the match statement's parser\n\nThe expression form had its own copy of the match parser. It registered\nevery binding as an untyped value, so comparing one failed (\"cannot\ncompare 'uint8_t' and 'unknown'\"), and its patterns only took\nidentifiers, so literals, ranges, `||` alternatives and strings were\nrejected with \"Expected '=>'\".\n\nparse_match is split after the keyword and the expression form calls\nthe rest. The statement parser takes over the expression parser's rule\nthat a boolean literal in a field pattern (`has_value: true`) binds no\nname; it used to emit `ZC_AUTO_INIT(true, ...)`.",
          "timestamp": "2026-10-25T19:40:14+01:00",
          "tree_id": "11ab9ff8d86037a71f5ea129c5f03340b238b783",
          "url": "https://github.com/pherrymason/zenc/commit/de49ae8472e27e20e1cd6229408ce498d769bead"
        },
        "date": 1792953835849,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Compiler (Full Suite Transpilation)",
            "value": 36034,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_bigint_factorial)",
            "value": 3,
            "unit": "ms"
          },
          {
            "name": "Compile (test_bigint_factorial)",
            "value": 237,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_comptime)",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "Compile (test_comptime)",
            "value": 64,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_fib_recursive)",
            "value": 58,
            "unit": "ms"
          },
          {
            "name": "Compile (test_fib_recursive)",
            "value": 61,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_hashmap)",
            "value": 150,
            "unit": "ms"
          },
          {
            "name": "Compile (test_hashmap)",
            "value": 104,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_hello)",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "Compile (test_hello)",
            "value": 60,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_json_parse)",
            "value": 269,
            "unit": "ms"
          },
          {
            "name": "Compile (test_json_parse)",
            "value": 938,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_mandelbrot)",
            "value": 23,
            "unit": "ms"
          },
          {
            "name": "Compile (test_mandelbrot)",
            "value": 64,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_sha256)",
            "value": 124,
            "unit": "ms"
          },
          {
            "name": "Compile (test_sha256)",
            "value": 729,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_sort_large)",
            "value": 63,
            "unit": "ms"
          },
          {
            "name": "Compile (test_sort_large)",
            "value": 96,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_string_concat)",
            "value": 1,
            "unit": "ms"
          },
          {
            "name": "Compile (test_string_concat)",
            "value": 450,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_vec_ops)",
            "value": 18,
            "unit": "ms"
          },
          {
            "name": "Compile (test_vec_ops)",
            "value": 150,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "raulferras@gmail.com",
            "name": "Raúl Ferràs",
            "username": "pherrymason"
          },
          "committer": {
            "email": "raulferras@gmail.com",
            "name": "Raúl Ferràs",
            "username": "pherrymason"
          },
          "distinct": true,
          "id": "20c4354bc0b255c8e42de43a232f0589677dbc37",
          "message": "codegen: emit the arms of a match expression in their value form\n\nWhen the value of a match is used, each arm was emitted with the\nstatement generator after `_r_N = `. A nested match or an if gave a\nstatement block (\"expected expression\"), a string literal was printed\ninstead of being the value, and `return`/`assert` produced\n`_r_N = return ...;`.\n\nAn arm that is not a block is now emitted with codegen_expression, and\nan arm that returns, asserts or expects is emitted as a statement with\nnothing to assign.",
          "timestamp": "2026-10-25T20:07:35+01:00",
          "tree_id": "e5908546ca6b4eafaf58ea5e55168d19eed76d55",
          "url": "https://github.com/pherrymason/zenc/commit/20c4354bc0b255c8e42de43a232f0589677dbc37"
        },
        "date": 1792955414145,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Compiler (Full Suite Transpilation)",
            "value": 22330,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_bigint_factorial)",
            "value": 3,
            "unit": "ms"
          },
          {
            "name": "Compile (test_bigint_factorial)",
            "value": 177,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_comptime)",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "Compile (test_comptime)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_fib_recursive)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "Compile (test_fib_recursive)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_hashmap)",
            "value": 103,
            "unit": "ms"
          },
          {
            "name": "Compile (test_hashmap)",
            "value": 80,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_hello)",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "Compile (test_hello)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_json_parse)",
            "value": 219,
            "unit": "ms"
          },
          {
            "name": "Compile (test_json_parse)",
            "value": 673,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_mandelbrot)",
            "value": 20,
            "unit": "ms"
          },
          {
            "name": "Compile (test_mandelbrot)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_sha256)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "Compile (test_sha256)",
            "value": 535,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_sort_large)",
            "value": 55,
            "unit": "ms"
          },
          {
            "name": "Compile (test_sort_large)",
            "value": 74,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_string_concat)",
            "value": 1,
            "unit": "ms"
          },
          {
            "name": "Compile (test_string_concat)",
            "value": 351,
            "unit": "ms"
          },
          {
            "name": "Runtime (test_vec_ops)",
            "value": 14,
            "unit": "ms"
          },
          {
            "name": "Compile (test_vec_ops)",
            "value": 118,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}