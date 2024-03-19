import isObjectEqual from "../src/isEqual"

describe('javascript basic type validation', ()=> {
  test('basic Object compare', () => {
      const arr1 = ['aa','bb']
      const obj1 = {
        name: "houyw"
      }
      const obj2 = {
        name: "houyw"
      }
      expect(isObjectEqual(obj1,obj2)).toBeTruthy()
      const obj3 = {
        name: "houyw",
        age: 22
      }
      const obj4 = {
        name: "houyw",
        sex: "male"
      }
      expect(isObjectEqual(obj3,obj4)).toBeFalsy()

      const obj5 = {
        name: "houyw",
        age: 22,
        citys: arr1
      }
      const obj6 = {
        name: "houyw",
        age: 22,
        citys: arr1
      };
      expect(isObjectEqual(obj5,obj6)).toBeTruthy()

  });
  test("complex Object compare",()=> {
    const arr1 = ['aa','bb'];
    const obj ={
      children: [
        {
          name: "aa",
          address: "China"
        }
      ]
    }

    const obj1 = {
      type: "Object",
      attribute: arr1,
      children: obj
    }
    const obj2 = {
      type: "Object",
      attribute: arr1,
      children: obj
    }
    expect(isObjectEqual(obj1,obj2)).toBeTruthy()
  })
})