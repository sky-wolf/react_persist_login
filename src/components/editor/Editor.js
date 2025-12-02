import '../Css/editor.css'
import React, { useEffect, useState } from "react";
import Toolbar from '../editor/Toolbar';

const Editor = () => {
  const [content, setContent] = useState("Type here...");
 
  const handleInputChange = (e) => {
    setContent(e.target.innerHTML);
  };

  useEffect(() => {
    const div = document.querySelector('.editor')
    div.focus()
    document.execCommand("selectAll", false, null);
    document.getSelection().collapseToEnd();
  }, [content])

  return (
    <div >
    <Toolbar />
      <blockquote className="editor" dangerouslySetInnerHTML={{ __html: content }} onInput={handleInputChange} contenteditable="true"></blockquote>
     {content}
    </div> 
  )
}

export default Editor