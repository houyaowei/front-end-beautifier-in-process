-------enter-------
path: <ref *1> NodePath {
  key: 'program',
  node: Node {
    type: 'Program',
    sourceType: 'module',
  },
  type: 'Program',
}
-------enter-------
path: <ref *2> NodePath {
  node: Node {
    type: 'FunctionDeclaration',
    id: Node {
      type: 'Identifier',
      name: 'square'
    },
    body: Node {
      type: 'BlockStatement',
      body: [Array],
      directives: []
    }
  },
  type: 'FunctionDeclaration',
}
-------enter-------
path: <ref *2> NodePath {

  listKey: undefined,
  key: 'id',
  node: Node {
    type: 'Identifier',
    name: 'square'
  },
  type: 'Identifier',
  
}
-------exit-------
path: <ref *2> NodePath {

  listKey: undefined,
  key: 'id',
  node: Node {
    type: 'Identifier',
    name: 'multiple'
  },
  type: 'Identifier',
}
-------enter-------
path: <ref *2> NodePath {
  listKey: 'params',
  key: 0,
  node: Node {
    type: 'Identifier',
    name: 'n'
  },
  type: 'Identifier',
}
-------exit-------
path: <ref *2> NodePath {
  listKey: 'params',
  key: 0,
  node: Node {
    type: 'Identifier',
    name: 'n'
  },
  type: 'Identifier',
}
-------enter-------
path: <ref *2> NodePath {
  listKey: undefined,
  key: 'body',
  node: Node {
    type: 'BlockStatement',
    body: [ [Node] ],
    directives: []
  },
  type: 'BlockStatement',
}
-------enter-------
path: <ref *1> NodePath {
  listKey: 'body',
  key: 0,
  node: Node {
    type: 'ReturnStatement',
    argument: Node {
      type: 'BinaryExpression',
      left: [Node],
      operator: '*',
      right: [Node]
    }
  },
  type: 'ReturnStatement',
}
-------enter-------
path: <ref *1> NodePath {
  listKey: undefined,
  key: 'argument',
  node: Node {
    type: 'BinaryExpression',
    left: Node {
      type: 'Identifier',
      start: 30,
      end: 31,
      loc: [SourceLocation],
      name: 'n'
    },
    operator: '*',
    right: Node {
      type: 'Identifier',
      start: 34,
      end: 35,
      loc: [SourceLocation],
      name: 'n'
    }
  },
  type: 'BinaryExpression',
}
-------enter-------
path: <ref *1> NodePath {
  listKey: undefined,
  key: 'left',
  node: Node {
    type: 'Identifier',
    name: 'n'
  },
  type: 'Identifier',
}
-------exit-------
path: <ref *1> NodePath {
  listKey: undefined,
  key: 'left',
  node: Node {
    type: 'Identifier',
    name: 'n'
  },
  type: 'Identifier',
  
}
-------enter-------
path: <ref *1> NodePath {

  listKey: undefined,
  key: 'right',
  node: Node {
    type: 'Identifier',
    name: 'n'
  },
  type: 'Identifier',
}
-------exit-------
path: <ref *1> NodePath {
  listKey: undefined,
  key: 'right',
  node: Node {
    type: 'Identifier',
    name: 'n'
  },
  type: 'Identifier',
}
-------exit-------
path: <ref *1> NodePath {
  listKey: undefined,
  key: 'argument',
  node: Node {
    type: 'BinaryExpression',
    left: Node {
      type: 'Identifier',
      start: 30,
      end: 31,
      loc: [SourceLocation],
      name: 'n'
    },
    operator: '*',
    right: Node {
      type: 'Identifier',
      start: 34,
      end: 35,
      loc: [SourceLocation],
      name: 'n'
    }
  },
  type: 'BinaryExpression',
}
-------exit-------
path: <ref *1> NodePath {
  listKey: 'body',
  key: 0,
  node: Node {
    type: 'ReturnStatement',
    argument: Node {
      type: 'BinaryExpression',
      left: [Node],
      operator: '*',
      right: [Node]
    }
  },
  type: 'ReturnStatement',
}
-------exit-------
path: <ref *2> NodePath {
 
  listKey: undefined,
  key: 'body',
  node: Node {
    type: 'BlockStatement',
    body: [ [Node] ],
    directives: []
  }
}
-------exit-------
path: <ref *2> NodePath {
  node: Node {
    type: 'FunctionDeclaration',
    id: Node {
      type: 'Identifier',
      name: 'multiple'
    }
  }
}
-------exit-------
path: <ref *1> NodePath {
  node: Node {
    type: 'Program',
    sourceType: 'module',
  },
  type: 'Program',
  
}