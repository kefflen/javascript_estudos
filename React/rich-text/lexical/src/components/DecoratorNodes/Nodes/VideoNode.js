import { createCommand, DecoratorNode } from "lexical";


export default class ImgDecorator extends DecoratorNode {
 
  static getType() {
    return 'video'
  }

  static clone(node) {
    return new ImgDecorator(node._url, node.key)
  }
  
  constructor(url, key) {
    super(key)
    this.__link = url
  }

  createDOM(config) {
    console.log('createDom')
    const img = document.createElement('img')
    // img.style.display = 'content'
    img.style.height = '30px'
    img.style.color = 'indigo'
    img.src = 'https://github.com/kefflen.png'
    return img
  }

  updateDOM() {
    return false
  }

  setURL(url) {
    const writable = this.getWritable()
    writable.__link = url
  }

  decorate(editor) {
    console.log('decorate')
    console.log(this)
    return <img  src="https://github.com/kefflen.png" />
  }
}

export function $createImageNode(url) {
  console.log('createVideoNode')
  return new ImgDecorator(url)
}

export function $isImageNode(node) {
  console.log('isVideo')
  return node instanceof ImgDecorator
}

