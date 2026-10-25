// SPDX-License-Identifier: MIT
// Unit tests of src/parser/utils/utils_registry.c: the cache of the names that
// find_struct_def did not find. A cached miss must not hide a struct or enum
// registered after it.
#include "unit_parse.h"
#include "unit_test.h"

static ASTNode *new_struct(const char *name)
{
    ASTNode *node = ast_create(NODE_STRUCT);
    node->strct.name = (char *)name;
    return node;
}

static ASTNode *new_enum(const char *name)
{
    ASTNode *node = ast_create(NODE_ENUM);
    node->enm.name = (char *)name;
    return node;
}

// A parsed program with one struct, and the miss cache turned on as codegen does.
static ParserContext *context_with_miss_cache(void)
{
    parse_source("struct Point { x: int; y: int; }\n");
    ParserContext *ctx = parse_source_context();
    struct_miss_cache_enable(ctx);
    return ctx;
}

UTEST(struct_miss_cache, finds_a_parsed_struct)
{
    ParserContext *ctx = context_with_miss_cache();
    ASSERT_TRUE(find_struct_def(ctx, "Point") != NULL);
    ASSERT_TRUE(find_struct_def(ctx, "Missing") == NULL);
    ASSERT_TRUE(find_struct_def(ctx, "Missing") == NULL);
}

UTEST(struct_miss_cache, sees_a_struct_registered_after_a_miss)
{
    ParserContext *ctx = context_with_miss_cache();
    ASSERT_TRUE(find_struct_def(ctx, "Later") == NULL);

    ASTNode *later = new_struct("Later");
    register_struct_def(ctx, "Later", later);
    ASSERT_TRUE(find_struct_def(ctx, "Later") == later);
}

UTEST(struct_miss_cache, sees_a_struct_added_to_the_list_after_a_miss)
{
    ParserContext *ctx = context_with_miss_cache();
    ASSERT_TRUE(find_struct_def(ctx, "Listed") == NULL);

    ASTNode *listed = new_struct("Listed");
    add_to_struct_list(ctx, listed);
    ASSERT_TRUE(find_struct_def(ctx, "Listed") == listed);
}

UTEST(struct_miss_cache, sees_an_enum_added_after_a_miss)
{
    ParserContext *ctx = context_with_miss_cache();
    ASSERT_TRUE(find_struct_def(ctx, "Color") == NULL);

    ASTNode *color = new_enum("Color");
    add_to_enum_list(ctx, color);
    ASSERT_TRUE(find_struct_def(ctx, "Color") == color);
}

// The contract of the cache: a struct added to a list without calling
// struct_registry_changed stays hidden by a cached miss until someone does.
UTEST(struct_miss_cache, needs_struct_registry_changed_for_a_direct_change)
{
    ParserContext *ctx = context_with_miss_cache();
    ASSERT_TRUE(find_struct_def(ctx, "Direct") == NULL);

    ASTNode *direct = new_struct("Direct");
    direct->next = ctx->instantiated_structs;
    ctx->instantiated_structs = direct;
    ASSERT_TRUE(find_struct_def(ctx, "Direct") == NULL);

    struct_registry_changed(ctx);
    ASSERT_TRUE(find_struct_def(ctx, "Direct") == direct);
}

// Without the cache (the parser's own lookups), a struct added directly is found.
UTEST(struct_miss_cache, is_off_until_enabled)
{
    parse_source("struct Point { x: int; }\n");
    ParserContext *ctx = parse_source_context();
    ASSERT_TRUE(find_struct_def(ctx, "Direct") == NULL);

    ASTNode *direct = new_struct("Direct");
    direct->next = ctx->instantiated_structs;
    ctx->instantiated_structs = direct;
    ASSERT_TRUE(find_struct_def(ctx, "Direct") == direct);
}
