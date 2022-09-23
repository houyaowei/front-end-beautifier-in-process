import {_objectProto} from "./setup";

function isPrototype(value) {
  const _constructor = value && value.constructor
  const proto = (typeof _constructor === 'function' && _constructor.prototype) || _objectProto

  return value === proto
}

export default isPrototype
