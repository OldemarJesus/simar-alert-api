import { JSDOM } from "jsdom"

export default function (dom: JSDOM) {
    const data = dom.window.document.querySelectorAll("#inner-body div")
    let counter = 0
    let divList: string[] = []
    for (let index = 0; index < data.length; index++) {
        let curDiv = data[index]

        if (curDiv.classList.length == 0) {
            if (counter > 0) {
                if(curDiv.textContent){
                    divList.push(curDiv.textContent)
                }
            }
            counter++;
        }
    }

    return divList
}