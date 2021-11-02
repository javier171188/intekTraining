'use strict'
const { flattenImp, flattenFun } = require('./exercise8')

test('Basic test', () => {
    const oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        address: {
            location: {
                city: 'SF',
                state: 'CA'
            },
            preferredLocation: {
                city: 'SF',
                state: ['CA', 'MN']
            },
            other: undefined
        }
    };
    const result = {
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state: 'CA',
        oldObj_address_preferredLocation_city: 'SF',
        oldObj_address_preferredLocation_state: ['CA', 'MN'],
        oldObj_address_other: undefined
    }

    let impFlat = flattenImp(oldObj, "oldObj");
    let funFlat = flattenFun(oldObj, "oldObj");

    expect(impFlat).toEqual(result);
    expect(funFlat).toEqual(result);
})

test('Empty Objet', () => {
    let oldObj = {};
    let result = {};

    let impFlat = flattenImp(oldObj, "oldObj");
    let funFlat = flattenFun(oldObj, "oldObj");

    expect(impFlat).toEqual(result);
    expect(funFlat).toEqual(result);
})

test('Already flat', () => {
    let oldObj = { 'a': 1, 'b': 2, 'c': 3 };
    let result = { 'flat_a': 1, 'flat_b': 2, 'flat_c': 3 };

    let impFlat = flattenImp(oldObj, "flat");
    let funFlat = flattenFun(oldObj, "flat");

    expect(impFlat).toEqual(result);
    expect(funFlat).toEqual(result);
})
