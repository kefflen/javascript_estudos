import styled from "styled-components";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import EmoticonNode from "./Node/EmoticonNode";
import { TextNode } from "lexical";
import EmoticonPlugin from "./Node/EmoticonPlugin";

// https://github.com/facebook/lexical/blob/main/examples/emoticons.md

const Container = styled.div`
  margin: 2rem;
  padding: 0.5rem;
  box-shadow: 1px 1px 0.5rem;
`
const initialConfig = {
  namespace: 'MyEditorEmoticon',
  theme: {},
  nodes: [EmoticonNode],
  onError(e) {
    console.log(e)
  }
};


export default function Emoticon() {
  return (
    <Container>
      Emoticon
      <hr />
      <LexicalComposer
        initialConfig={initialConfig}>
          <PlainTextPlugin  contentEditable={<ContentEditable />}/>
          <EmoticonPlugin />
      </LexicalComposer>
    </Container>
  )
}
