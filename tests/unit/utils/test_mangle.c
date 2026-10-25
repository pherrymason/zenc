// SPDX-License-Identifier: MIT
// Unit tests of src/utils/mangle.c: the C names of Zen C symbols.
#include "utils/mangle.h"
#include <string.h>
#include "unit_test.h"

UTEST(merge_underscores, collapses_four_or_more_and_keeps_three)
{
    ASSERT_STREQ("a__b", merge_underscores("a____b"));
    ASSERT_STREQ("a__b", merge_underscores("a______b"));
    ASSERT_STREQ("a___b", merge_underscores("a___b"));
    ASSERT_STREQ("a__b", merge_underscores("a__b"));
}

UTEST(mangle_method_symbol, plain_and_trait_methods)
{
    ASSERT_STREQ("Point__add", mangle_method_symbol("Point", NULL, "add"));
    ASSERT_STREQ("Point__Drop__drop", mangle_method_symbol("Point", "Drop", "drop"));
}

// A leading `_` keeps its third underscore, so `_reset` and `reset` stay apart.
UTEST(mangle_method_symbol, a_leading_underscore_is_kept)
{
    ASSERT_STREQ("Point___reset", mangle_method_symbol("Point", NULL, "_reset"));
    ASSERT_STRNE(mangle_method_symbol("Point", NULL, "reset"),
                 mangle_method_symbol("Point", NULL, "_reset"));
}

UTEST(mangle_method_symbol, has_no_length_limit)
{
    char long_name[5001];
    memset(long_name, 'a', 5000);
    long_name[5000] = '\0';
    char *s = mangle_method_symbol(long_name, NULL, "m");
    ASSERT_EQ((size_t)5003, strlen(s));
    ASSERT_STREQ("__m", s + 5000);
}

// The name a declaration registers, used as is by every lookup: no merging.
UTEST(mangle_module_symbol, joins_without_merging)
{
    ASSERT_STREQ("util__parse", mangle_module_symbol("util", "parse"));
    ASSERT_STREQ("util____internal", mangle_module_symbol("util", "__internal"));
}
