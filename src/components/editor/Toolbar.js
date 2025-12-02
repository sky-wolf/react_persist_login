import React from 'react'

const Toolbar = () => {
    function execCommand (command, value) {
        document.execCommand(command, false, value);
    }

  return (
    <div className='toolbar'>
        
        {/* <span className="fa-solid fa-arrow-rotate-left fa-fw" aria-hidden="true" onClick={() => {
            execCommand('redo');
        }}></span>
        <span className="fa fa-arrow-rotate-right fa-fw" aria-hidden="true" onClick={() => {
            execCommand('undo');
        }}></span> */}
        <span onClick={ () => {
            execCommand('bold');
        }} className='fa fa-bold fa-fw' aria-hidden="true"></span>
        <span onClick={ () => {
            execCommand('italic');
        }} className='fa fa-italic fa-fw' aria-hidden="true"></span>
        <span onClick={ () => {
            execCommand('underline');
        }}className="fas fa-underline" aria-hidden="true"></span>
        <span className="fa fa-strikethrough fa-fw" aria-hidden="true" onClick={() => {
            execCommand('strikethrough');
        }}></span>
        <span onClick={ () => {
            execCommand('justifyFull');
        }}className="fa fa-align-justify fa-fw" aria-hidden="true"></span>
        <span onClick={ () => {
            var S=window.getSelection();
            execCommand('justifyRight', S);
        }}className="fas fa-align-right fa-fw" aria-hidden="true"></span>
        <span onClick={ () => {
            var S=window.getSelection();
            execCommand('justifyCenter', S);
        }} className="fas fa-align-center fa-fw" aria-hidden="true"></span>
        <span onClick={ () => {
            var S=window.getSelection();
            execCommand('justifyLeft', S);
        }} className="fas fa-align-left fa-fw"></span>
        <select id='heading' onChange={() => {
            //var S=window.getSelection();
            var x = document.getElementById("heading").value;
            execCommand('formatBlock', x);
        }}>
            <option value="p">Heading</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
            <option value="h5">Heading 5</option>
            <option value="h6">Heading 6</option>
        </select>
        
        {/* <span onClick={ () => {
            var S=window.getSelection();
            execCommand('cut', S);
        }} className="fa fa-cut fa-fw" aria-hidden="true"></span>
        <span onClick={ () => {
            var S=window.getSelection();
            execCommand('copy', S);
        }} className="fa fa-copy fa-fw" aria-hidden="true"></span>
        <span onClick={ () => {
            var S=window.getSelection();
            execCommand('paste', S);
        }} className="fa fa-paste fa-fw" aria-hidden="true"></span>
         */}
        <span className='fa fa-list fa-fw' aria-hidden="true" onChange={() => {
            execCommand('insertOrderedList');
            }}></span>
        <i className="fa fa-list-ol" onChange={() => {
            execCommand('insertUnorderedList');
            }}></i>
        {/* <select onChange={() => {
            }}> */}
        <select id='FontName' onChange={() => {
            if(document.getSelection.toString)
            {
                var x = document.getElementById("FontName").value;
                execCommand("fontName", x);
            }
        }}>
            <option value="Arial">Arial</option>
            <option value="Calibri">Calibri</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
        </select>
        <select id='FontSize' onChange={() => {
            if(document.getSelection.toString)
            {
                var x = document.getElementById("FontSize").value;
                execCommand("fontSize", x);
            }
        }}>
            <option value="12px">12</option>
            <option value="14px">14</option>
            <option value="16px">16</option>
            <option value="18px">18</option>
            <option value="20px">20</option>
            <option value="24px">24</option>
            <option value="30px">30</option>
            <option value="36px">36</option>
            <option value="48px">48</option>
            <option value="60px">60</option>
            <option value="72px">72</option>
            <option value="96px">96</option>
            <option value="128px">128</option>
        </select>
        {/* <span onClick={ Link() } className='fa fa-link fa-fw' aria-hidden="true"></span> */}
        <span  onClick={ () => {
            var linkURL = prompt('Enter a URL:', 'http://');
            execCommand('createlink', linkURL);

        }} className='fa fa-link fa-fw' aria-hidden="true"></span>
        <span onClick={() => {
            var S=window.getSelection();
            execCommand('unlink', S);
        }} className="fas fa-link-slash fa-fw"></span>
        <span   onClick={ () => {
            var S=window.getSelection();
            execCommand('superscript', S);
        }} className="fas fa-superscript fa-fw"></span>
        <span  onClick={ () => {
            var S=window.getSelection();
            execCommand('subscript', S);
        }} className="fa fa-subscript fa-fw"></span>
        <i className="fa-solid fa-code" onClick={() => {
            execCommand('insertHTML', "<code>" + document.getSelection().toString() + "</code>")
        }}></i>

        <span className='fa fa-image'></span>
        <span className='fa fa-upload'></span>

    </div>
  )
}

export default Toolbar