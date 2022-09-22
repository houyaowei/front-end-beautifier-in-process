
import { uniqArray } from "../lib/basic-utils";

describe('javascript basic type validation', ()=> {
  test('array uniq', () => { 
    const arr = [11,0,65,22,34,99,0,22]

    expect(uniqArray(arr).length == 6).toBeTruthy();
  })
})