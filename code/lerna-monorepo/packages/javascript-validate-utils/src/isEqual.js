
/**
 * 
 * 判断两个变量的值是否相同
 *
 */

function isEqual(origin, target){
  return Object.is(origin, target)
}

export default isEqual
