import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { $getSelection, createCommand } from "lexical";
import { useEffect } from "react";
import styled from "styled-components";

import VideoNode, { $createVideoNode } from "./Nodes/VideoNode";

const Container = styled.div`
  margin: 2rem;
  padding: 0.5rem;
  box-shadow: 1px 1px 0.5em;
`

const initialConfig = {
  namespace: 'MyEditorVideoDecorated',
  theme: {},
  nodes: [VideoNode],
  onError(e) {
    console.log(e)
  }
};

const INSERT_VIDEO_COMMAND = createCommand()
function VideoPlugin() {
  const [editor] = useLexicalComposerContext()
  
  useEffect(() => {
    const removeListen = editor.registerCommand(
      INSERT_VIDEO_COMMAND,
      (payload) => {
        editor.update(() => {
          const selection = $getSelection()
          if (selection !== null) {
            const url = payload
            selection.insertNodes([$createVideoNode(url)])
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
      VideoDecorator
      <hr />
      <LexicalComposer initialConfig={initialConfig}>
        <ToolBarVideoButton />
        <PlainTextPlugin contentEditable={<ContentEditable/>} 
          placeholder={'Escreva algo'}/>
        <VideoPlugin />
      </LexicalComposer>
    </Container>
  )
}


function ToolBarVideoButton() {
  const [editor] = useLexicalComposerContext()
  const insertVideo = url => {
    editor.dispatchCommand(INSERT_VIDEO_COMMAND, url)
  }

  return <button onClick={() => insertVideo('random-link')}>Add video</button>
}