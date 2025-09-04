type JSONObject = Record<string, any>;

/**
 * Normalize keys so that:
 *  - All objects with the same property name (e.g., "price") share the union of keys seen anywhere.
 *  - All objects inside the same array share the union of keys at that array level.
 * Missing keys are filled with `null`.
 */
export default function normalizeKeys(input: any): any {
    // 1) Collect templates by property name: e.g., "price" -> Set<"currency" | "value" | ...>
    const templatesByPropName: Record<string, Set<string>> = Object.create(
        null,
    );

    const collectTemplates = (node: any): void => {
        if (Array.isArray(node)) {
            // Recurse into array items
            node.forEach(collectTemplates);

            // Also collect a per-array union (used later when applying)
            // We won't store this globally; we'll recompute per-array on apply.
            return;
        }
        if (node && typeof node === "object") {
            // For each property: if it's an object (non-array), record its keys under the property name
            for (const [k, v] of Object.entries(node)) {
                if (v && typeof v === "object" && !Array.isArray(v)) {
                    const set = (templatesByPropName[k] ||= new Set<string>());
                    Object.keys(v).forEach((childKey) => set.add(childKey));
                }
                collectTemplates(v);
            }
        }
    };

    // 2) Apply templates and within-array unions
    const applyTemplates = (node: any): any => {
        if (Array.isArray(node)) {
            // Compute union of keys across all object elements for this array level
            const arrayUnion = new Set<string>();
            for (const item of node) {
                if (item && typeof item === "object" && !Array.isArray(item)) {
                    Object.keys(item).forEach((k) => arrayUnion.add(k));
                }
            }

            return node.map((item) => {
                if (item && typeof item === "object" && !Array.isArray(item)) {
                    // Ensure array-level union keys
                    const next: JSONObject = { ...item };
                    arrayUnion.forEach((k) => {
                        if (!(k in next)) next[k] = null;
                    });

                    // Now apply templates per property name for nested objects
                    for (const [k, v] of Object.entries(next)) {
                        // If this property holds an object, align it to the template for that property name
                        if (v && typeof v === "object" && !Array.isArray(v)) {
                            next[k] = fillFromTemplate(k, v);
                        } else {
                            next[k] = applyTemplates(v);
                        }
                    }
                    return next;
                }
                return applyTemplates(item);
            });
        }

        if (node && typeof node === "object") {
            const out: JSONObject = {};
            for (const [k, v] of Object.entries(node)) {
                if (v && typeof v === "object" && !Array.isArray(v)) {
                    // Align object to the template for this property name (k)
                    out[k] = fillFromTemplate(k, v);
                } else {
                    out[k] = applyTemplates(v);
                }
            }
            return out;
        }

        return node; // primitives unchanged
    };

    // Helper: apply the template for a given property name `prop`
    const fillFromTemplate = (prop: string, obj: any): any => {
        const templ = templatesByPropName[prop];
        // Recurse first on children so nested arrays/objects also normalize
        const base: JSONObject = applyTemplates(obj);
        if (!templ) return base; // no known template keys for this prop

        const filled: JSONObject = { ...base };
        templ.forEach((k) => {
            if (!(k in filled)) filled[k] = null;
        });
        return filled;
    };

    // Run passes
    collectTemplates(input);
    return applyTemplates(input);
}
