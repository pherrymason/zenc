// SPDX-License-Identifier: MIT
#include "mangle.h"
#include "arena.h"
#include "constants.h"
#include <stdio.h>
#include <string.h>

char *merge_underscores(const char *name)
{
    if (!name)
    {
        return NULL;
    }

    size_t len = strlen(name);
    char *res = xmalloc((size_t)(len + 1));
    char *out = res;
    const char *in = name;

    while (*in)
    {
        if (in[0] == '_' && in[1] == '_' && in[2] == '_' && in[3] == '_')
        {
            // Quadruple or more underscores -> collapse to double.
            // A run of exactly three underscores is kept: it encodes the "__"
            // separator plus an identifier that begins with "_" (e.g.
            // `Struct::_method` vs `Struct::method`), so collapsing it would
            // make distinct symbols collide.
            *out++ = '_';
            *out++ = '_';
            in += 4;
            while (*in == '_')
            {
                in++;
            }
        }
        else
        {
            *out++ = *in++;
        }
    }
    *out = '\0';
    return res;
}

// Canonical symbol for a method: `Struct__Method` (or `Struct__Trait__Method`).
// A method whose name starts with `_` must keep the resulting run of three
// underscores (separator "__" plus the method's leading "_"), otherwise
// merge_underscores would collapse it to two and collide with the plain
// `method` symbol on the same struct. This preserves injectivity while keeping
// mangled names readable.
char *mangle_method_symbol(const char *struct_name, const char *trait_name, const char *method_name)
{
    char tmp[MAX_MANGLED_NAME_LEN];
    if (trait_name)
    {
        snprintf(tmp, sizeof(tmp), "%s__%s__%s", struct_name, trait_name, method_name);
    }
    else
    {
        snprintf(tmp, sizeof(tmp), "%s__%s", struct_name, method_name);
    }
    if (method_name && method_name[0] == '_')
    {
        return xstrdup(tmp);
    }
    return merge_underscores(tmp);
}
