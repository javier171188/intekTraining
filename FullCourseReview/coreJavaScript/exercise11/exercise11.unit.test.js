/**
 * @jest-environment jest-environment-jsdom
 */

const { querySelectorAll } = require('./exercise11');
document.body.innerHTML = `<section>
<div id="a" class="note"><input type="checkbox" class="is-complete" checked> </div>
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
let divs = [...mainSection[0].querySelectorAll('div')];

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