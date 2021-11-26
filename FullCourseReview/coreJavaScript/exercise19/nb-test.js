(function (global) {
    //let root = document.getElementById('results');
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
        ((parent) => {
            global.assert = (pass, message) => {
                return parent.appendChild(result(message, pass))
            }
            testBlock();
        })(parent)
        global.assert = saving;
    }
    global.test = test;
})(window);
