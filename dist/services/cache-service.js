"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_system_cache_1 = __importDefault(require("file-system-cache"));
function default_1() {
    return (0, file_system_cache_1.default)({
        basePath: "./.cache", // (optional) Path where cache files are stored (default).
        ns: "my-namespace", // (optional) A grouping namespace for items.
        hash: "sha1", // (optional) A hashing algorithm used within the cache key.
        ttl: 3500 // (optional) A time-to-live (in secs) on how long an item remains cached.
    });
}
exports.default = default_1;
