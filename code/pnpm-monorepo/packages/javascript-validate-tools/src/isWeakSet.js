import types from "./types/types";
import {getTag} from "./utils/getTag";
import isObjectLike from "./utils/isObjectLike";

function isWeakSet(value) {
  return isObjectLike(value) && getTag(value) == types.WEAKSET
}

export default isWeakSet
