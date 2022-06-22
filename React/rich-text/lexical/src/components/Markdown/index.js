import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import StyledCard from "../StyledCard";


const initialConfig = {
  namespace: 'MyEditorMarkdown',
  theme: {},
  nodes: [],
  onError(e) {
    console.log(e)
  }
}


export default function Markdown() {


  return (
    <StyledCard>
      Markdown editor
      <hr />
      <LexicalComposer
        initialConfig={initialConfig}>
          <PlainTextPlugin contentEditable={<ContentEditable />}/>
      </LexicalComposer>
    </StyledCard>

  )
}