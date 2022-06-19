import { Editor, EditorState } from "draft-js";
import React from "react";

function App() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  return (
    <div className="app"
      style={{ border: "1px solid black", minHeight: "6em", cursor: "text", margin: "2rem" }}
      onClick={focusEditor}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Write something!"
      />
    </div>
  )
}

export default App;
