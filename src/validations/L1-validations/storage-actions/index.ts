import { store_search, loadFor_search } from "./search";
import { store_on_search, loadFor_on_search } from "./on_search";
import { store_select, loadFor_select } from "./select";
import { store_on_select, loadFor_on_select } from "./on_select";
import { store_init, loadFor_init } from "./init";
import { store_on_init, loadFor_on_init } from "./on_init";
import { store_confirm, loadFor_confirm } from "./confirm";
import { store_on_confirm, loadFor_on_confirm } from "./on_confirm";
import { store_status, loadFor_status } from "./status";
import { store_on_status, loadFor_on_status } from "./on_status";
import { store_update, loadFor_update } from "./update";
import { store_on_update, loadFor_on_update } from "./on_update";
import { store_cancel, loadFor_cancel } from "./cancel";
import { store_on_cancel, loadFor_on_cancel } from "./on_cancel";
import StorageInterface from "../interfaces/storage-interface";
import { StorageConfig } from "../types/storage-types";

export async function performL1validationsSave(
    action: string,
    uniquePrefix: string,
    payload: any,
    store: StorageInterface,
    config?: Partial<StorageConfig>,
) {
    const completeConfig: StorageConfig = {
        ...{
            retryAttempts: 3,
            retryDelayMs: 1000,
        },
        ...config,
    };
    switch (action) {
        case "search":
            return await store_search(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "on_search":
            return await store_on_search(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "select":
            return await store_select(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "on_select":
            return await store_on_select(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "init":
            return await store_init(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "on_init":
            return await store_on_init(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "confirm":
            return await store_confirm(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "on_confirm":
            return await store_on_confirm(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "status":
            return await store_status(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "on_status":
            return await store_on_status(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "update":
            return await store_update(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "on_update":
            return await store_on_update(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "cancel":
            return await store_cancel(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        case "on_cancel":
            return await store_on_cancel(
                uniquePrefix,
                payload,
                store,
                completeConfig,
            );
        default:
            throw new Error("Action not found");
    }
}

export async function performL1validationsLoad(
    action: string,
    uniquePrefix: string,
    store: StorageInterface,
) {
    switch (action) {
        case "search":
            return await loadFor_search(uniquePrefix, store);
        case "on_search":
            return await loadFor_on_search(uniquePrefix, store);
        case "select":
            return await loadFor_select(uniquePrefix, store);
        case "on_select":
            return await loadFor_on_select(uniquePrefix, store);
        case "init":
            return await loadFor_init(uniquePrefix, store);
        case "on_init":
            return await loadFor_on_init(uniquePrefix, store);
        case "confirm":
            return await loadFor_confirm(uniquePrefix, store);
        case "on_confirm":
            return await loadFor_on_confirm(uniquePrefix, store);
        case "status":
            return await loadFor_status(uniquePrefix, store);
        case "on_status":
            return await loadFor_on_status(uniquePrefix, store);
        case "update":
            return await loadFor_update(uniquePrefix, store);
        case "on_update":
            return await loadFor_on_update(uniquePrefix, store);
        case "cancel":
            return await loadFor_cancel(uniquePrefix, store);
        case "on_cancel":
            return await loadFor_on_cancel(uniquePrefix, store);
        default:
            throw new Error("Action not found");
    }
}
