import types from "./types/types";
import {getTag} from "./utils/getTag";
import isObjectLike from "./utils/isObjectLike";

function isWeakMap(value) {
  return isObjectLike(value) && getTag(value) == types.WEAKMAP
}

export default isWeakMap
