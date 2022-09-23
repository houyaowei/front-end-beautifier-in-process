import _ from 'lodash'
import { isArray } from 'javascript-validate-utils';

function uniqArray(arr) {
    if(isArray(arr)) {
        return _.uniq(arr)
    } else {
        return []
    }
}
export {
    uniqArray  
}
