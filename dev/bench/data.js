window.BENCHMARK_DATA = {
  "lastUpdate": 1792950496511,
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
      }
    ]
  }
}