'use strict';

let html = `
<section>
   <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
   <div id="2" class="note"></div>
   <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
   <div id="4" class="note"></div>
   <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
   <div class="otherclass"></div>
   <div></div>
</section>`


let parents = querySelectorAll("div.note < input.is-complete");
//console.log(parents);


function simpleSelector(selector, htmlStr) {
    const [elementType, elementClass] = selector.split('.');
    let fullPattern = new RegExp(`<${elementType}.*?/${elementType}>`, 'g');
    let openingPatter = new RegExp(`<${elementType}.*?>`, 'g');
    let elementsIt = htmlStr.matchAll(fullPattern);

    if (elementsIt) {
        var elementsList = [...elementsIt].map(e => e[0]);
        if (elementClass) {
            elementsList = elementsList.filter(e => {
                let openElement = e.matchAll(openingPatter);
                openElement = [...openElement].map(e => e[0])[0];
                let hasClass = openElement.search(`class="${elementClass}"`)
                return hasClass > -1;
            })
        }
    } else {
        return [];
    }
    return elementsList;
}

function querySelectorAll(selector) {
    while (selector.includes(' ')) {
        selector = selector.replace(' ', '');
    }
    const [parentSelector, childrenSelector] = selector.split('<');

    var parentsList = simpleSelector(parentSelector, html);

    if (childrenSelector) {
        parentsList = parentsList.filter(p => {
            let children = simpleSelector(childrenSelector, p);
            return true;
        })
    }
    return parentsList;


}