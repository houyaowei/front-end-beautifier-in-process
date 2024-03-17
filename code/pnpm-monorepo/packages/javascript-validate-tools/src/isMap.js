import isObjectLike from "./utils/isObjectLike";
import {getTag} from "./utils/getTag";
import types from "./types/types";

const isMap = function (value) {
  return isObjectLike(value) && getTag(value) == types.MAP
}

export default isMap
