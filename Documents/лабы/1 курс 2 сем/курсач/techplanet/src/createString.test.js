import {expect, jest, test, describe}  from '@jest/globals';
// require('../src/ProductPage.js');
// import { createStrings } from './ProductPage';
const createStrings=require('../src/ProductPage');

describe('create strings', ()=>{
    const testCase = [
        {input: [920, [{name: "effewg", desc: "dfv"}]], expected: 'effewg-------------------------------------------------------------------------------------------dfv'},
    ];

    testCase.forEach(test=>{
        it(`create string from: ${test.input}, expected ${test.expected}`, ()=>{
            const result = createStrings(test.input[0], test.input[1]);
            expect(result).toBe(test.expected);
        })
    })
})