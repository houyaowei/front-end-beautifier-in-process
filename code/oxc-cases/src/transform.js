import { transform } from 'oxc-transform'
import path from 'node:path'
import fs from 'node:fs'
let code = ''
try {
  const originCode = fs.readFileSync(path.resolve('src/es.js'))
  code = originCode.toString() //buffer to string
  // console.log(code);
} catch (e) {
  console.log(e)
}
const result = transform('test.ts', code, {
  target: ['es2018', 'chrome87'],
})
console.log(result.code)
