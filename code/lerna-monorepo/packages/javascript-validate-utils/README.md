# javascript-validate-utils
原生javascript实现的校验方法

### 安装

```javascript
npm i javascript-validate-utils
or
yarn add javascript-validate-utils
```



### 使用
```JavaScript
import { isString, isNumber, isArray ,isNull, isFunction, isObject, isDate} from 'javascript-validate-utils'

console.log(isObject({}))
```

#### 2022年1月31日计划实现

已经实现的：

- isString 
- isNumber
- isArray 
- isNull
- isFunction
- isObject
- isDate
- isBoolean
- isArrayLike
- isEmpty
- isMap
- isSet
- isSymbol
- isError
- isRegExp
- isKeyExist
- isUndefined
- isWeakMap
- isWeakSet
- isElement
- isEqual



### API说明

该npm包提供了常用的验证工具，这些函数名称符合开发习惯，见名知意，大部分的api参数都有一个参数,所以不再提供更详细的说明。调用形式如：

```JavaScript
isObject({})
```

但是像isKeyExist这样的api,有两个参数,所以需要单独说明

```javascript
isKeyExist(value, key): 判断key是否在value中是否存在,支持对象,map,set
```







### 友情提醒
`isDate` 支持日期实例或者合法的字符，如：`2021-1-21 12:20:21`

`isEqual`是判断对象字面量是否相等



### 协议
MIT
