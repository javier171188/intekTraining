'use strict';

let html = `
<section>
   <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
   <div id="2" class="note"></div>
   <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
   <div id="4" class="note"></div>
   <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
   <div id="6" class="note"><input type="checkbox" class="is-complete" ></div>
   <div class="otherclass"></div>
   <div></div>
</section>`


let parents = querySelectorAll("div.note < input.is-complete[checked]");
console.log(parents);


function simpleSelector(selector, htmlStr) {
    let [elementType, elementClass] = selector.split('.');

    let propertyPattern = new RegExp(/\[.*?\]/, 'g');
    let fullPattern = new RegExp(`<${elementType}.*?/${elementType}>`, 'g');
    let openingPattern = new RegExp(`<${elementType}.*?/?>`, 'g');

    var propertyIt = elementClass.matchAll(propertyPattern);
    let propertyLi = [...propertyIt];
    propertyLi = propertyLi.map(p => p[0]);


    let property = '';
    if (propertyLi.length > 0) {
        property = propertyLi[0];
        elementClass = elementClass.replace(property, '');
        property = property.slice(1, -1);
    }


    let elementsIt = htmlStr.matchAll(fullPattern);
    let openingIt = htmlStr.matchAll(openingPattern);


    var elementsList = [];
    if (elementsIt) {
        elementsList = [...elementsIt].map(e => e[0]);
        let openingList = [...openingIt].map(e => e[0]);
        if (elementsList.length < openingList.length) {
            elementsList = openingList;
        }
    }
    if (elementClass) {
        elementsList = elementsList.filter(e => {
            let openElement = e.matchAll(openingPattern);
            openElement = [...openElement].map(e => e[0])[0];

            let hasClass = openElement.search(`class="${elementClass}"`);
            let hasProperty = openElement.search(` ${property}`);


            return hasClass > -1;
        })
    }

    if (property) {
        elementsList = elementsList.filter(e => {
            let openElement = e.matchAll(openingPattern);
            openElement = [...openElement].map(e => e[0])[0];
            let hasProperty = openElement.search(` ${property}`);

            return hasProperty > -1;
        })
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
            return children.length > 0;
        })
    }

    return parentsList;
}