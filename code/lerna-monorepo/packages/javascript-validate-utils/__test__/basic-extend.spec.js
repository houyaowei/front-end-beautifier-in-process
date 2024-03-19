import isArrayLike from "../src/utils/isArrayLike";
import {isTypedArray} from "../src/isTypeArray";
import isEmpty from "../src/isEmpty";
import isMap from "../src/isMap";
import isSet from "../src/isSet";
import isSymbol from "../src/isSymbol";
import isRegExp from "../src/isRegExp";
import isError from "../src/isError";
import isKeyExist from "../src/isKeyExist";
import isWeakMap from "../src/isWeakMap";
import isWeakSet from "../src/isWeakSet";
import isElement from "../src/isElement";


describe('javascript basic extend type validation', ()=> {
  test('isArrayLike test cases', ()=> {
    expect(isArrayLike([1,2,3])).toBeTruthy()
    expect(isArrayLike('ass')).toBeTruthy()
    expect(isArrayLike(Function)).toBeFalsy()
  })
  test('isTypedArray test cases', ()=> {
    expect(isTypedArray(new Int8Array(1))).toBeTruthy()
    expect(isTypedArray(new Uint8ClampedArray(1))).toBeTruthy()
    expect(isTypedArray([])).toBeFalsy()
  })

  test('isEmpty test cases', ()=> {
    expect(isEmpty(null)).toBeTruthy()
    expect(isEmpty({})).toBeTruthy()
    expect(isEmpty(true)).toBeTruthy()
    expect(isEmpty(11)).toBeTruthy()
    expect(isEmpty([1,2,2])).toBeFalsy()
    expect(isEmpty('abc')).toBeFalsy()
    expect(isEmpty({name: 'hyw'})).toBeFalsy()
  })
  test('isMap test cases',()=> {
    expect(isMap(new Map)).toBeTruthy()
    expect(isMap(new WeakMap)).toBeFalsy()
  })
  test('isError test cases',()=> {
    expect(isError(new Error)).toBeTruthy()
    expect(isError(true)).toBeFalsy()
    expect(isError(null)).toBeFalsy()
  })
  test('isSet test cases',()=> {
    expect(isSet(new Set)).toBeTruthy()
    expect(isSet(new WeakSet)).toBeFalsy()
  })
  test('isSymbol test cases',()=> {
    expect(isSymbol(Symbol.iterator)).toBeTruthy()
    expect(isSymbol('sss')).toBeFalsy()
  })
  test('isRegExp test cases', ()=> {
    expect(isRegExp(/\w{1,9}/)).toBeTruthy()
    expect(isRegExp('/\w{1,9}/')).toBeFalsy()
  })
  test('isKeyExist test cases', ()=> {
    expect(isKeyExist({},'name')).toBeFalsy()

    let obj = {
      name: 'hyw'
    }
    expect(isKeyExist(obj,'name')).toBeTruthy()
    expect(isKeyExist(obj,'age')).toBeFalsy()

    const map = new Map([
      ['name', '张三'],
      ['title', 'Author']
    ]);
    expect(isKeyExist(map,'name')).toBeTruthy()
    expect(isKeyExist(map,'age')).toBeFalsy()

    let set = new Set([1, 4, 9]);
    expect(isKeyExist(set,4)).toBeTruthy()
  })
  test('isWeakMap test cases',()=> {
    expect(isWeakMap(new WeakMap)).toBeTruthy()
    expect(isWeakMap(new Map)).toBeFalsy()
  })
  test('isWeakSet test cases',()=> {
    expect(isWeakSet(new WeakSet)).toBeTruthy()
    expect(isWeakSet(new Set)).toBeFalsy()
  })
  test('isElement test cases', ()=> {
    //TODO 增加测试条件
    // expect(isElement(document.body)).toBeTruthy()
  })
})
