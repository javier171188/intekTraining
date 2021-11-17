'use strict';
const { querySelectorAll } = require('./exercise11');


test('Simple test', () => {
    let parents = querySelectorAll("div.note < input.is-complete[checked]");
    expect(parents).toEqual([
        '<div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>',
        '<div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>',
        '<div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>'
    ])
})

test('Basic selectors', () => {
    let elements = querySelectorAll("div");
    expect(elements).toEqual([
        '<div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>',
        '<div id="2" class="note"></div>',
        '<div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>',
        '<div id="4" class="note"></div>',
        '<div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>',
        '<div id="6" class="note"><input type="checkbox" class="is-complete" ></div>',
        '<div class="otherclass"></div>',
        '<div></div>'
    ]);

    let section = querySelectorAll('section');
    section = section.map(s => s.replace(/\s/g, ''))
    expect(section).toEqual([
        `<section>
            <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
            <div id="2" class="note"></div>
            <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
            <div id="4" class="note"></div>
            <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
            <div id="6" class="note"><input type="checkbox" class="is-complete" ></div>
            <div class="otherclass"></div>
            <div></div>
            </section>`.replace(/\s/g, '')
    ])

    let empty = querySelectorAll('');
    expect(empty).toEqual([]);

    let other = querySelectorAll('div.otherclass');
    expect(other).toEqual(['<div class="otherclass"></div>'])
})

test('No checked', () => {
    let parents = querySelectorAll("div.note < input.is-complete");
    expect(parents).toEqual([
        '<div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>',
        '<div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>',
        '<div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>',
        '<div id="6" class="note"><input type="checkbox" class="is-complete" ></div>'
    ])
})