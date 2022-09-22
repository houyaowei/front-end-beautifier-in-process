import isObjectLike from "./utils/isObjectLike";
import {getTag} from "./utils/getTag";
import types from "./types/types";

/**
 * 用来判断函数参数
 * @param value
 * @returns {boolean}
 */
function isArguments(value) {
  return isObjectLike(value) && getTag(value) == types.ARGUMENTS
}

export default isArguments
