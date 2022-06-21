import { createCommand, DecoratorNode } from "lexical";


export default class VideoNode extends DecoratorNode {
 
  static getType() {
    return 'video'
  }

  static clone(node) {
    return new VideoNode(node._url, node.key)
  }
  
  constructor(url, key) {
    super(key)
    this.__link = url
  }

  createDOM(config) {
    console.log('createDom')
    const span = document.createElement('span')
    // span.style.display = 'content'
    span.style.color = 'indigo'
    return span
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
    return <span>Video</span>
  }
}

export function $createVideoNode(url) {
  console.log('createVideoNode')
  return new VideoNode(url)
}

export function $isVideoNode(node) {
  console.log('isVideo')
  return node instanceof VideoNode
}

