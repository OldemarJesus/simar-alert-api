"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(dom) {
    const data = dom.window.document.querySelectorAll("#inner-body div");
    let counter = 0;
    let divList = [];
    for (let index = 0; index < data.length; index++) {
        let curDiv = data[index];
        if (curDiv.classList.length == 0) {
            if (counter > 0) {
                if (curDiv.textContent) {
                    divList.push(curDiv.textContent);
                }
            }
            counter++;
        }
    }
    return divList;
}
exports.default = default_1;
