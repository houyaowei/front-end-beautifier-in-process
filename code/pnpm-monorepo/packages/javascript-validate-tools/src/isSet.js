import isObjectLike from "./utils/isObjectLike";
import {getTag} from "./utils/getTag";
import types from "./types/types";

const isSet = function (value) {
  return isObjectLike(value) && getTag(value) == types.SET
}

export default isSet
