import { TextNode } from "lexical"

export default class EmoticonNode extends TextNode {
  __className
  constructor(className, text, key) {
    super(text, key)
    this.__className = className
  }

  
  createDOM(config) {
    const dom = super.createDOM(config)
    console.log(dom)
    dom.className = this.__className
    return dom
  }
  
  static getType() {
    return 'emoticonNode'
  }

  static clone(node) {
    return new EmoticonNode(node.__className, node.__text, node.__key)

  }
}

export function $isEmoticonNode(node) {
  return node instanceof EmoticonNode
}

/*
  - Colocar como modo token, garante que ao usar
    o backspace apague todo o elemento e não parte dele
*/
export function $createEmoticonNode(className, emoticonText) {
  return new EmoticonNode(className, emoticonText).setMode('token')
}