import payloadUtils from "../utils/json-path-utils";
import saveUtils from "../utils/save-utils";
import StorageInterface from "../interfaces/storage-interface";
import { StorageConfig } from "../types/storage-types";

export async function store_search(
    uniquePrefix: string,
    payload: any,
    store: StorageInterface,
    config: StorageConfig,
) {
    await saveFunction(payload, uniquePrefix, "_SELF", "", store, config);
}

export async function loadFor_search(
    uniquePrefix: string,
    store: StorageInterface,
) {
    return {};
}

async function saveFunction(
    payload: any,
    uniquePrefix: string,
    key: string,
    path: string,
    store: StorageInterface,
    config: StorageConfig,
): Promise<void> {
    if (path === "" || key === "_SELF") {
        return;
    }
    const value = payloadUtils.getJsonPath(payload, path);
    const data = {
        stored_from: "search_action",
        key_path: path,
        value: value,
        timestamp: new Date().toISOString(),
    };
    const dataString = JSON.stringify(data);
    await saveUtils.saveData(uniquePrefix, key, dataString, store, config);
}

async function loadFunction(
    store: StorageInterface,
    uniquePrefix: string,
    key: string,
): Promise<any[] | []> {
    try {
        const value = await store.getKey(uniquePrefix, key);
        if (!value) {
            return [];
        }
        return JSON.parse(value).value;
    } catch (err) {
        return [];
    }
}
