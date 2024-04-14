"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
var CacheFactory = (function () {
    var instance;
    return {
        getInstance: function () {
            if (instance == null) {
                instance = new node_cache_1.default({ stdTTL: 3600, checkperiod: 300 });
            }
            return instance;
        }
    };
})();
function default_1() {
    return CacheFactory.getInstance();
}
exports.default = default_1;
