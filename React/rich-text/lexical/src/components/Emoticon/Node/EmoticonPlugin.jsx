import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { TextNode } from "lexical"
import { useEffect } from "react"
import { $createEmoticonNode } from "./EmoticonNode"



// - Tranform reage a eventos associados a um tipo de node em especifico
function useEmoticon(editor) {
  useEffect(() => {
    const removeTranform = editor.registerNodeTransform(
      TextNode,
      emoticonTransform
    )

    return () => {
      return removeTranform()
    }
  }, [editor])
}

function emoticonTransform(node) {
  const textContent = node.getTextContent()
  console.log(textContent)
  if (textContent == ":)") {
    node.replace($createEmoticonNode('', '🙂'))
  }
}


export default function EmoticonPlugin() {
  const [editor] = useLexicalComposerContext()
  useEmoticon(editor)
  return null
}