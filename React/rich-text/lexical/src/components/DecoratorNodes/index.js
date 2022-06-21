import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { $getSelection, createCommand } from "lexical";
import { useEffect } from "react";
import styled from "styled-components";

import ImgDecorator, { $createImageNode } from "./Nodes/VideoNode";

const Container = styled.div`
  margin: 2rem;
  padding: 0.5rem;
  box-shadow: 1px 1px 0.5em;
`

const initialConfig = {
  namespace: 'MyEditorImageDecorated',
  theme: {},
  nodes: [ImgDecorator],
  onError(e) {
    console.log(e)
  }
};

const INSERT_IMAGE_COMMAND = createCommand()
function ImagePlugin() {
  const [editor] = useLexicalComposerContext()
  
  useEffect(() => {
    const removeListen = editor.registerCommand(
      INSERT_IMAGE_COMMAND,
      (payload) => {
        editor.update(() => {
          const selection = $getSelection()
          if (selection !== null) {
            const url = payload
            selection.insertNodes([$createImageNode(url)])
          }
        })
        return true
      },
      0 // Priority
    )
    return () => {
      removeListen()
    }
  }, [])

  return null
}

export default function DecoratorNodes() {
  return (
    <Container>
      Image
      <hr />
      <LexicalComposer initialConfig={initialConfig}>
        <ToolBarVideoButton />
        <PlainTextPlugin contentEditable={<ContentEditable/>} 
          placeholder={'Escreva algo'}/>
        <ImagePlugin />
      </LexicalComposer>
    </Container>
  )
}


function ToolBarVideoButton() {
  const [editor] = useLexicalComposerContext()
  const insertVideo = url => {
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, url)
  }

  return <button onClick={() => insertVideo('https://www.youtube.com/watch?v=2alg7MQ6_sI')}>Add video</button>
}