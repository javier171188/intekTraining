'use strict';
const { set } = require('./exercise18');

test('Basic test', () => {
    let obj = {
        path: {
            to: {},
            otherKey: ''
        },
        moreKeys: {}
    }
    let objResult = {
        path: {
            to: {
                deeply: {
                    nested: {
                        property: 42
                    }
                }
            },
            otherKey: ''
        },
        moreKeys: {}
    }
    set(obj, 'path.to.deeply.nested.property', 42);
    expect(obj).toEqual(objResult);
})

test('Key already exists', () => {
    let obj = {
        path: {
            to: {},
            otherKey: ''
        },
        moreKeys: {}
    }
    expect(() => {
        set(obj, 'path.otherKey.deeply.nested.property', 42)
    }).toThrow('One of the keys already exists');

    obj = {
        path: {
            to: { deeply: { nested: { property: 41 } } },
            otherKey: ''
        },
        moreKeys: {}
    }

    expect(() => {
        set(obj, 'path.to.deeply.nested.property', 42)
    }).toThrow('One of the keys already exists');
})

test('Limit cases', () => {
    let obj = {};
    let objResult = { path: { to: { deeply: { nested: { property: 42 } } } } };
    set(obj, 'path.to.deeply.nested.property', 42);
    expect(obj).toEqual(objResult);

    obj = {};
    set(obj, 'key', 42);
    expect(obj).toEqual({ key: 42 });

    obj = {};
    set(obj, '', 42);
    expect(obj).toEqual({ '': 42 });

    obj = { path: { to: { deeply: { nested: {} } } } };
    objResult = { path: { to: { deeply: { nested: { property: 42 } } } } };
    set(obj, 'path.to.deeply.nested.property', 42);
    expect(obj).toEqual(objResult);

    obj = { path: { to: { deeply: { nested: { property: {} } } } } };
    objResult = { path: { to: { deeply: { nested: { property: 42 } } } } };

    expect(() => {
        set(obj, 'path.to.deeply.nested.property', 42);
    }).toThrow('One of the keys already exists');
})