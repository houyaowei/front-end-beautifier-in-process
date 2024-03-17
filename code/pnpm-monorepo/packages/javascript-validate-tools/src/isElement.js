import isObjectLike from "./utils/isObjectLike";
import isPlainObject from "./utils/isPlainObject";
import nodeType from "./types/nodeType";

//判断节点
const isElement = function (value) {
  return isObjectLike(value) && isPlainObject(value) && value.nodeType == nodeType.ELEMENT_NODE
}

export default isElement
