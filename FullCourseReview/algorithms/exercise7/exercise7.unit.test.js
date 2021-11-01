'use strict'

const longestRunOfTwoNumbers = require('./exercise7');

test('Basic tests', () => {
    let result1 = longestRunOfTwoNumbers('1212223311212223');
    expect(result1).toEqual('1121222');

    let result2 = longestRunOfTwoNumbers('111');
    expect(result2).toEqual('111');

    let result3 = longestRunOfTwoNumbers('111343434343434343999');
    expect(result3).toEqual('343434343434343');
})

test('Small input', () => {
    let result0 = longestRunOfTwoNumbers('');
    expect(result0).toEqual('');

    let result1 = longestRunOfTwoNumbers('1');
    expect(result1).toEqual('1');

    let result2 = longestRunOfTwoNumbers('23');
    expect(result2).toEqual('23');

    let result3 = longestRunOfTwoNumbers('234');
    expect(result3).toEqual('23');
})