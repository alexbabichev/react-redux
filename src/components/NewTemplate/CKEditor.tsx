import React, { ReactElement, useState } from 'react';

//@ts-ignore
import CKEditor from '@ckeditor/ckeditor5-react';
//@ts-ignore
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

import './CKEditor.scss';

export interface Props {
}

// Inital data & configs

const initialData = `<p>Hello this is Template constructor</p>`; 
const stylesHTML = `table {border-collapse: collapse} td {border: 1px solid silver} .image-style-align-right {float: right} .image-style-align-left {float: left}`;
const customFonts = [
  "default",
  "Arial, Helvetica, sans-serif",
  "Courier New, Courier, monospace",
  "Georgia, serif",
  "Lucida Sans Unicode, Lucida Grande, sans-serif",
  "Tahoma, Geneva, sans-serif",
  "Times New Roman, Times, serif",
  "Trebuchet MS, Helvetica, sans-serif",
  "Verdana, Geneva, sans-serif"
];
const config = {
  fontFamily: { options: [...customFonts] },
  fontSize: { options: [9, 11, 13, 'default', 17, 19, 21] },
  plugins: [...DecoupledEditor.builtinPlugins],
//   plugins: [...DecoupledEditor.builtinPlugins, TableUtils, insertVariable, insertCustomTable, insertImage64, insertFont64],
  toolbar: ['heading', '|', 'fontFamily', 'fontSize', '|', 'bold', 'italic', '|', 'alignment', '|', 'bulletedList', 'numberedList', 'blockQuote', '|', 'insertVariable', 'insertCustomTable', 'insertImage64', 'insertFont64', '|', 'undo', 'redo']
}

// Functions

const onInit = (editor: any) => {
  editor.ui.view.editable.element.parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.view.editable.element);
  
  const toolbar = document.querySelector('.document-editor__toolbar div');
  
  if (toolbar && toolbar.parentElement)
    toolbar.parentElement.insertBefore(editor.ui.view.toolbar.element, toolbar);
}

const handleChange = (event: any, editor: any) => {
  const data = editor.getData();
  console.log(data);
}

function htmlData(styleData: string, bodyData: string) {
  return `
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <style type="text/css">${styleData}</style>
      </head>
      <body>${bodyData}</body>
    </html>
  `;
}

// Component

function CustomCKEditor(props: Props): ReactElement {
  return (
    <section className="CKEditor">
      <div className="document-editor">
        <div className="document-editor__toolbar">
          <div></div>
        </div>
        <div className="document-editor__editable-container">
          <CKEditor 
            editor={DecoupledEditor} data={initialData} 
            onInit={onInit} onChange={handleChange}
            config={config} />
        </div>
      </div>
    </section>
  )
}

export default CustomCKEditor;