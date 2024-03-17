import types from '../types/types'
import {_toString} from "../setup";

const getTag =(value)=> {
    if (value == null) {
        return value === undefined ? types.UNDEFINED : types.NULL
    }
    return _toString.call(value)
}
export {
    getTag
}


