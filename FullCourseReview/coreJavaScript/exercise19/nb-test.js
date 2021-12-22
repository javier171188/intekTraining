// Works with the second setTimeout
/*(function (global) {
    let parent = document.getElementById('results');
    const result = function (text, pass) {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    }
    let assert = function (pass, message) {
        return parent.appendChild(result(message, pass))
    };
    global.assert = assert;

    function test(description, testBlock) {
        let saving = assert;
        let parent = assert(undefined, description)
            .appendChild(document.createElement('ul'));

        global.assert = function (pass, message) {
            return parent.appendChild(result(message, pass))
        }
        testBlock();

        global.assert = saving;
    }
    global.test = test;
})(window);*/


(function (global) {
    let parent = document.getElementById('results');
    const result = function (text, pass) {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    }
    let assert = function (pass, message) {
        return parent.appendChild(result(message, pass))
    };
    global.assert = assert;

    function test(description, testBlock) {
        let saving = assert;
        let parent = assert(undefined, description)
            .appendChild(document.createElement('ul'));

        global.assert = function (pass, message) {
            return parent.appendChild(result(message, pass))
        }
        let originalSetTimeout = global.setTimeout;

        function setTimeout(...params) {
            console.log(params);
            console.log(parent);
            setTimeout(assert, 500, true, "test delayed B");
        }
        global.setTimeout = setTimeout;
        testBlock();

        global.assert = saving;
        global.setTimeout = originalSetTimeout

    }
    global.test = test;
})(window);

/*
function setFunctions(global) {
    let root = document.getElementById('results');
    function result(text, pass) {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    }
    function assert(pass, message) {
        return root.appendChild(result(message, pass))
    };
    global.assert = assert;

    let originalSetTimeout = global.setTimeout;
    function setTimeout(fn, delay, ...params) {

        originalSetTimeout(fn, delay, ...params)
    }
    global.setTimeout = setTimeout;

    function test(description, testBlock) {
        let node = root.appendChild(document.createElement('ul'));
        node.textContent = description;

        testBlock();
    }
    global.test = test;
}
setFunctions(window);
*/
/*
(function (global) {
    let root = document.getElementById('results');

    const result = function (text, pass) {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    }

    let originalSetTimeout = global.setTimeout;

    let assert = function (pass, message) {
        //let root = document.getElementById('results');
        return root.appendChild(result(message, pass))
    };

    let setTimeout = function (fn, delay, ...params) {
        global.assert = function (pass, message) { //root.appendChild(result(message, pass)) 
            let node = global.node;
            console.log(node);
            node.appendChild(result(message, pass));

        };
        originalSetTimeout(fn, delay, ...params)
    }

    global.setTimeout = setTimeout;

    //global.assert = assert;

    function test(description, testBlock) {
        let saving = assert;
        let root = assert(undefined, description)
            .appendChild(document.createElement('ul'));


        (function (root) {
            global.assert = function (pass, message) {
                const node = root.appendChild(result(message, pass));
                global.node = root;
                return node;
            }

            testBlock();
        })(root)

        //global.assert = saving;
    }
    global.test = test;
})(window);*/


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

/*
(function (global) {
    let parent = document.getElementById('results');
    const result = function (text, pass, parent) {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return parent.appendChild(el);
    }

    //global.assert = assert;

    let assert = function (pass, message) {
        console.log(parent);
        return result(message, pass, parent);
    };

    function test(description, testBlock) {
        //let saving = assert;
        let assert = function (pass, message) {
            console.log(parent);
            return result(message, pass, parent);
        };
        let inner = assert(undefined, description, parent)
            .appendChild(document.createElement('ul'));

        (function (parent) {
            let assert = function (pass, message) {
                console.log('inside', parent)
                return parent.appendChild(result(message, pass, parent))
            }
            global.assert = assert;
            testBlock();
        })(inner)



        //parent = document.getElementById('results');
        //global.assert = saving;
    }
    global.test = test;
})(window);*/