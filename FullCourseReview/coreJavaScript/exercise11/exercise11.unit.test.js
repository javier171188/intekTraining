/**
 * @jest-environment jsdom
 */

const { querySelectorAll } = require('./exercise11');
document.body.innerHTML = `<section>
<div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
<div id="2" class="note"></div>
<div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
<div id="4" class="note"></div>
<div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
<div id="6" class="note"><input type="checkbox" class="is-complete" ></div>
<div class="anotherclass"></div>
<div></div>
<div id="A">
<p><span class="B">selected</span></p>
</div>
</section>`

let mainSection = [...document.querySelectorAll('section')];
let divs = [...mainSection[0].querySelectorAll('div')];

test('Simple test', () => {
    let parents = querySelectorAll("div.note < input.is-complete[checked]");
    expect(parents).toEqual([
        divs[0], divs[2], divs[4]
    ])
})

test('Basic selectors', () => {
    let elements = querySelectorAll("div");
    expect(elements).toEqual(divs);

    let section = querySelectorAll('section');
    expect(section).toStrictEqual(mainSection)

    let empty = querySelectorAll('');
    expect(empty).toEqual([]);

    let other = querySelectorAll('div.anotherclass');
    expect(other).toEqual([divs[6]])
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