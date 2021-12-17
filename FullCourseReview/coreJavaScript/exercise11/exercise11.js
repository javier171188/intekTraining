'use strict';
let html =
    `<section>
    <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
    <div id="2" class="note"></div>
    <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
    <div id="4" class="note"></div>
    <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
    <div id="6" class="note"><input type="checkbox" class="is-complete" ></div>
    <div class="otherclass"></div>
    <div></div>
    </section>`;

//let html = '<div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>';

let selector = "div.note < input.is-complete[checked]";
let result = querySelectorAll(selector);
console.log(result);


function simpleSelector(selector, htmlStr) {
    let [elementType, elementClass] = selector.split('.');

    //let propertyPattern = new RegExp(/\[.*?\]/, 'g');
    let fullPattern = new RegExp(`<${elementType}.*?\/${elementType}>`, 'gs');
    let openingPattern = new RegExp(`<${elementType}.*?/?>`, 'g');

    let property = '';
    if (elementClass) {
        /*var propertyIt = elementClass.matchAll(propertyPattern);
        let propertyLi = [...propertyIt];
        propertyLi = propertyLi.map(p => p[0]);

        console.log(propertyLi);*/

        let openingIndex = [];
        let closingIndex = [];
        for (let i in elementClass) {
            if (elementClass[i] === '[') {
                openingIndex.push(i);
            }
            else if (elementClass[i] === ']') {
                closingIndex.push(i);
            }
        }

        let propertyLi = [];
        for (let i in openingIndex) {
            propertyLi.push(elementClass.slice(openingIndex[i], closingIndex[i] + 1));
        }


        if (propertyLi.length > 0) {
            property = propertyLi[0];
            elementClass = elementClass.replace(property, '');
            property = property.slice(1, -1);
        }
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
    if (!selector) {
        return [];
    }
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

//module.exports = { querySelectorAll };