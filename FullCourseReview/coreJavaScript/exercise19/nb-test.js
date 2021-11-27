/*(function (global) {
    //const root = document.getElementById('results');
    const result = function (text, pass) {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    }

    const assert = function (pass, message) {
        const root = document.getElementById('results');
        return root.appendChild(result(message, pass))
    };
    global.assert = assert;

    function test(description, testBlock) {
        assert = function (pass, message) {
            const root = document.getElementById('results');
            return root.appendChild(result(message, pass))
        };
        const parent = assert(undefined, description)
            .appendChild(document.createElement('ul'));
        (function (parent) {
            assert = function (pass, message) {
                return parent.appendChild(result(message, pass))
            }
            global.assert = assert;
            testBlock();
        })(parent)
    }
    global.test = test;
})(window);
*/

(function (global) {
    //let root = document.getElementById('results');
    var count = 0, finalNode;
    const result = (text, pass) => {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    }
    let assert = (pass, message) => {
        let root = document.getElementById('results');
        return root.appendChild(result(message, pass))
    };
    global.assert = assert;

    function test(description, testBlock) {
        let saving = assert;
        let parent = assert(undefined, description)
            .appendChild(document.createElement('ul'));
        if (count === 0) {
            finalNode = parent;
        }
        count++;
        ((parent) => {
            global.assert = (pass, message) => {
                return parent.appendChild(result(message, pass))
            }
            testBlock();
        })(parent)
        if (count > 1) {
            global.assert = (pass, message) => {
                return finalNode.appendChild(result(message, pass))
            };
        } else {
            global.assert = saving;
        }

    }
    global.test = test;
})(window);
