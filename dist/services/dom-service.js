"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
function default_1(html) {
    return new jsdom_1.JSDOM(html);
}
exports.default = default_1;
