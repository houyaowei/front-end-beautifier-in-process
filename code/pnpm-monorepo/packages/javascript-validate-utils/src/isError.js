import isObjectLike from "./utils/isObjectLike";

const isError = function (value) {
  return isObjectLike(value) && value instanceof Error
}

export default isError
