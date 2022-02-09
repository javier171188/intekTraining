'use strict';
const puppeteer = require('puppeteer');
const { querySelectorAll } = require('./exercise11');
/*<section>
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
*/


test('Simple test', async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();

    await page.goto('http://localhost:5500/coreJavaScript/exercise11/exercise11.html');

    const parentsHandle = await page.evaluateHandle(() => {
        const elements = querySelectorAll('div.note < input.is-complete[checked]');
        return elements;
    });
    const parents = await page.evaluate(els => {
        return els.map(e => e.innerHTML)
    }, parentsHandle);


    expect(parents).toEqual(["<input type=\"checkbox\" class=\"is-complete\" checked=\"\"> ",
        "<input type=\"checkbox\" class=\"is-complete\" checked=\"\">",
        "<input type=\"checkbox\" class=\"is-complete\" checked=\"\">"]);

    await browser.close();
})

test('Basic selectors', async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();

    await page.goto('http://localhost:5500/coreJavaScript/exercise11/exercise11.html');

    const divsHandle = await page.evaluateHandle(() => {
        const elements = querySelectorAll('div');
        return elements;
    });
    const divs = await page.evaluate(els => {
        return els.map(e => e.innerHTML.trim())
    }, divsHandle);

    expect(divs).toEqual(["<input type=\"checkbox\" class=\"is-complete\" checked=\"\">",
        "",
        "<input type=\"checkbox\" class=\"is-complete\" checked=\"\">",
        "",
        "<input type=\"checkbox\" class=\"is-complete\" checked=\"\">",
        "<input type=\"checkbox\" class=\"is-complete\">",
        "",
        "",
        "<p><span class=\"B\">selected</span></p>"])

    const originalSectionHandle = await page.evaluateHandle(() => {
        const elements = document.querySelectorAll('section');
        return [...elements];
    });
    const originalSection = await page.evaluate(els => {
        return els.map(e => e.innerHTML.trim())
    }, originalSectionHandle);

    const sectionHandle = await page.evaluateHandle(() => {
        const elements = querySelectorAll('section');
        return elements;
    });

    const section = await page.evaluate(els => {
        return els.map(e => e.innerHTML.trim())
    }, sectionHandle);

    expect(section).toEqual(originalSection)

    const emptyHandle = await page.evaluate(els => {
        const elements = querySelectorAll('');
        return elements;
    })
    const empty = await page.evaluate(els => {
        return els.map(e => e.innerHTML.trim())
    }, emptyHandle);
    expect(empty).toEqual([]);

    const originalOtherHandle = await page.evaluate(els => {
        const elements = querySelectorAll('div.anotherclass');
        return elements;
    })
    const originalOther = await page.evaluate(els => {
        return els.map(e => e.innerHTML)
    }, originalOtherHandle);
    const otherHandle = await page.evaluate(els => {
        const elements = querySelectorAll('div.anotherclass');
        return elements;
    })
    const other = await page.evaluate(els => {
        return els.map(e => e.innerHTML)
    }, otherHandle);
    expect(other).toEqual(originalOther);

    const originalFatherHandle = await page.evaluate(els => {
        const elements = document.querySelectorAll('#A');
        return [...elements];
    })
    const originalFather = await page.evaluate(els => {
        return els.map(e => e.innerHTML)
    }, originalFatherHandle);
    const fatherHandle = await page.evaluate(els => {
        const elements = querySelectorAll('#A < p .B');
        return elements;
    })
    const father = await page.evaluate(els => {
        return els.map(e => e.innerHTML)
    }, fatherHandle);
    expect(father).toEqual(originalFather);

    await browser.close();
})

test('Just direct parents', async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();

    await page.goto('http://localhost:5500/coreJavaScript/exercise11/exercise11.html');

    const parentsHandle = await page.evaluateHandle(() => {
        const elements = querySelectorAll('#A < .B');
        return elements;
    });
    const parents = await page.evaluate(els => {
        return els.map(e => e.innerHTML)
    }, parentsHandle);

    expect(parents).toEqual([]);
    await browser.close();
})

test('No checked', async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();

    await page.goto('http://localhost:5500/coreJavaScript/exercise11/exercise11.html');

    const divsHandle = await page.evaluateHandle(() => {
        const elements = querySelectorAll('div');
        return [...elements];
    });
    const divs = await page.evaluate(els => {
        return els.map(e => e.innerHTML)
    }, divsHandle);

    const parentsHandle = await page.evaluateHandle(() => {
        const elements = querySelectorAll('div.note < input.is-complete');
        return [...elements];
    });
    const parents = await page.evaluate(els => {
        return els.map(e => e.innerHTML)
    }, parentsHandle);

    expect(parents).toEqual([divs[0], divs[2], divs[4], divs[5]]);
    await browser.close();
})

test('No match', async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();

    await page.goto('http://localhost:5500/coreJavaScript/exercise11/exercise11.html');

    const parentsHandle = await page.evaluateHandle(() => {
        const elements = querySelectorAll('div.note < input.anotherclass');
        return elements;
    });
    const parents = await page.evaluate(els => {
        return els.map(e => e.innerHTML)
    }, parentsHandle);

    expect(parents).toEqual([]);
    await browser.close();
})
