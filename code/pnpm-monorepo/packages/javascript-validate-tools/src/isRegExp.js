import types from "./types/types";
import {getTag} from "./utils/getTag";
import isObjectLike from "./utils/isObjectLike";

function isRegExp(value) {
  return isObjectLike(value) && getTag(value) == types.REG
}

export default isRegExp
