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
    this._url = url
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
    writable._url = url
  }

  decorate(editor) {
    console.log('decorate')
    return <span>Video</span>
  }
}

export function $createVideoNode(url) {
  console.log('createVideoNode')
  return new VideoNode(url)
}

export function $isVideoNode(node) {
  return node instanceof VideoNode
}

