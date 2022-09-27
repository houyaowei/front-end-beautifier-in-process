import { isString, isNumber, isArray,isNull,isFunction,isObject,isDate,isBoolean ,isUndefined}  from "../src/basic";

describe('javascript basic type validation', ()=> {
    test('basic string', () => {
        let str = 'this is a basic string test'
        expect(isString(str)).toBeTruthy()
        str = 'asd@dd'
        expect(isString(str)).toBeTruthy()
        str = 'ww/23@\b'
        expect(isString(str)).toBeTruthy()
        expect(str.indexOf('\b')).toBe(6)
        str = 1
        expect(isString(str)).toBeFalsy()
    });
    test('number test case', ()=> {
        expect(isNumber('2224fd')).toBeFalsy()
        expect(isNumber(9507)).toBeTruthy()
        expect(isNumber(false)).toBeFalsy()
    })
    test('array test cases', ()=> {
        let arr = []
        expect(isArray(arr)).toBeTruthy()
        arr = [
            {name:'ss'},
            {name: 'dd'}
        ]
        expect(isArray(arr)).toBeTruthy()
        expect(isArray({name: 'hyw'})).toBeFalsy()
        expect(isArray(true)).toBeFalsy()
        expect(isArray(false)).toBeFalsy()
        expect(isArray(new Date)).toBeFalsy()
        expect(isArray(new Error)).toBeFalsy()
    })
    test('null test cases',()=> {
        expect(isNull(null)).toBeTruthy()
        expect(isNull({name: 'hyw'})).toBeFalsy()
        expect(isNull(false)).toBeFalsy()
        expect(isNull(new Date)).toBeFalsy()
        expect(isNull(new Error)).toBeFalsy()
    })
    test('functon test cases', ()=> {
        expect(isFunction(null)).toBeFalsy()
        let fun = ()=> {}
        expect(isFunction(fun)).toBeTruthy()
        fun = {
            say: ()=> {}
        }
        expect(isFunction(fun.say)).toBeTruthy()
        expect(isFunction(Object.prototype.toString)).toBeTruthy()
        expect(isFunction({})).toBeFalsy()
        expect(isFunction(new Error)).toBeFalsy()
    })
    test('object test cases', ()=> {
        expect(isObject(new Error)).toBeTruthy()
        expect(isObject({})).toBeTruthy()
        expect(isObject([1,'aa','123dd'])).toBeTruthy()
        expect(isObject(Function)).toBeTruthy()
        expect(isObject(null)).toBeFalsy()
        expect(isObject('')).toBeFalsy()
    })
    test('date test cases',()=> {
        expect(isDate('2022-1-21 12:43')).toBeTruthy() //合法时间
        expect(isDate('2022-13-21 12:43')).toBeFalsy() //不是合法的时间
        expect(isDate(new Date())).toBeTruthy()
        expect(isDate({})).toBeFalsy()
        expect(isDate(function(){})).toBeFalsy()
    })
    test('boolean test cases',()=> {
        expect(isBoolean(false)).toBeTruthy()
        expect(isBoolean({})).toBeFalsy()
        expect(isBoolean(new Error)).toBeFalsy()
    })
    test('isUndefined test cases', ()=> {
        expect(isUndefined(undefined)).toBeTruthy()
        expect(isUndefined(3)).toBeFalsy()
    })
})

