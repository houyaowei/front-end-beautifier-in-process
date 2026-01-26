import { parseSync, Visitor } from 'oxc-parser'

const code = "const sayHi = ()=> console.log('hi');"
const ast = parseSync('main.js', code)

// console.log(ast.program)
// console.log(ast.module)

const visitations = []

const visitor = new Visitor({
  VariableDeclaration(decl) {
    console.log(`decl:`, decl)
  },
  'VariableDeclaration:exit'(decl) {
    console.log(`exit ${decl.kind}`)
  },
  Identifier(ident) {
    console.log(`ident:`, ident)
  },
  'Identifier:exit'(ident) {
    console.log(`exit ${ident.name}`)
  },
})
visitor.visit(ast.program)

// console.log(visitations)

/**
 * https://github.com/oxc-project/oxc-node
 */
