/**
 * 对象比较
 * @param obj，比较对象1
 * @param other,比较对象2
 * @returns {boolean}
 */
function objEqual(obj = {}, other={}){
  const len = Object.keys(obj)
  const len2 = Object.keys(other)
  if (len !== len2) {
    return false
  }
  let isSame = false
  for(let i=0; i < len; i++) {
     if (obj[len[i]] != other[len2[i]]) {
       isSame = true
     }
     if (isSame) {
       break
     }
  }
  return isSame
}

export default objEqual
