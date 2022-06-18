import React, { useCallback, useState } from 'react'
import { createEditor, Transforms, Editor as _Editor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor} from 'slate-react'

import { Container } from "./styled";

type CustomElement = { type: 'paragraph'|'code'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

type plateElement = {
  attributes: any,
  children: any
}

const CodeElement: React.FC<plateElement> = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement: React.FC<plateElement> = props => {
  return <p {...props.attributes}>{props.children}</p>
}

const Editor: React.FC = () => {
  const [editor] = useState(() => withReact(createEditor()))

  const renderElement = useCallback((props: any) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  return (
    <Container>
      <Slate editor={editor} value={initialValue}>
        <Editable 
          renderElement={renderElement}
          onKeyDown={event => {
            if (event.key === ';' && event.ctrlKey) {
              console.log('Entrou')
              // Prevent the "`" from being inserted by default.
              event.preventDefault()
              // Otherwise, set the currently selected blocks type to "code".
              Transforms.setNodes(
                editor,
                { type: 'code' },
                { match: n => _Editor.isBlock(editor, n) }
              )
            }
          }}
        />
      </Slate>
    </Container>
  )
}

export default Editor;