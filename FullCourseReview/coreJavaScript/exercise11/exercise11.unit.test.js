'use strict';
///**
//* @jest-environment jest-environment-jsdom
//*/
const puppeteer = require('puppeteer');
//const { querySelectorAll } = require('./exercise11');
//jest.setTimeout(10000);
/*document.body.innerHTML = `<section>
<div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
<div id="b" class="note"></div>
<div id="c" class="note"><input type="checkbox" class="is-complete" checked></div>
<div id="d" class="note"></div>
<div id="e" class="note"><input type="checkbox" class="is-complete" checked></div>
<div id="f" class="note"><input type="checkbox" class="is-complete" ></div>
<div class="anotherclass"></div>
<div></div>
<div id="A">
<p><span class="B">selected</span></p>
</div>
</section>`

let mainSection = [...document.querySelectorAll('section')];
let divs = [...mainSection[0].querySelectorAll('div')];*/





test('Simple test', () => {
    let parents = querySelectorAll("div.note < input.is-complete[checked]");
    expect(parents).toEqual([
        divs[0], divs[2], divs[4]
    ])
})

test('Basic selectors', () => {
    const elements = querySelectorAll("div");
    expect(elements).toEqual(divs);

    const section = querySelectorAll('section');
    expect(section).toStrictEqual(mainSection)

    const empty = querySelectorAll('');
    expect(empty).toEqual([]);

    const other = querySelectorAll('div.anotherclass');
    expect(other).toEqual([divs[6]]);

    const divSpan = querySelectorAll("#A < p .B");
    expect(divSpan).toEqual([divs[8]]);

})

test('Just direct parents', () => {
    let elements = querySelectorAll('#A < .B');
    expect(elements).toEqual([]);
})

test('No checked', () => {
    let parents = querySelectorAll("div.note < input.is-complete");
    expect(parents).toEqual([
        divs[0], divs[2], divs[4], divs[5]
    ])
})

test('No match', () => {
    let parents = querySelectorAll("div.note < input.anotherclass");
    expect(parents).toEqual([])
})

fit('puppeteer', async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const targets = await browser.targets();
    const page = await browser.newPage();

    await page.goto('http://localhost:5500/coreJavaScript/exercise11/exercise11.html');


    const jsHandle = await page.evaluateHandle(() => {
        const elements = querySelectorAll('div.note < input.is-complete[checked]');
        console.log(elements);
        return elements;
    });

    const result = await page.evaluate(els => {
        return els.map(e => e.innerHTML)
    }, jsHandle);
    console.log(result);

    await browser.close();
}, 30000)