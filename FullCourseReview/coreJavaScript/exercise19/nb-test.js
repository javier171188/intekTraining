(function (global) {
    //let root = document.getElementById('results');
    const result = function (text, pass) {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    }
    let assert = function (pass, message) {
        let root = document.getElementById('results');
        return root.appendChild(result(message, pass))
    };
    global.assert = assert;

    function test(description, testBlock) {
        let saving = assert;
        let parent = assert(undefined, description)
            .appendChild(document.createElement('ul'));
        (function (parent) {
            global.assert = function (pass, message) {
                return parent.appendChild(result(message, pass))
            }
            testBlock();
        })(parent)
        global.assert = saving;
    }
    global.test = test;
})(window);


/*(function (global) {
    const result = (text, pass) => {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    }
    let count = 0, node;
    let assert = (pass, message) => {
        let root = document.getElementById('results');
        count++;
        if (count < 9) {
            return root.appendChild(result(message, pass));
        } else {
            return node.appendChild(result(message, pass));
        }

    };
    global.assert = assert;

    function test(description, testBlock) {
        let saving = assert;

        let parent = assert(undefined, description)
            .appendChild(document.createElement('ul'));



        ((parent) => {
            global.assert = (pass, message) => {
                count++;
                if (count === 3) {
                    node = parent;
                }
                return parent.appendChild(result(message, pass))
            }
            testBlock();
        })(parent)
        global.assert = saving;
    }
    global.test = test;
})(window);*/