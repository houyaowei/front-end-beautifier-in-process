import types from "./types/types";
import {getTag} from "./utils/getTag";
import isObjectLike from "./utils/isObjectLike";

function isSymbol(value) {
  const type = typeof value
  return type == 'symbol' || (isObjectLike(value) && getTag(value) == types.SYMBOL)
}

export default isSymbol
