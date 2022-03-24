import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const EditorPart = ({ initialValue }) => {
  return (
    <Editor
      initialValue={initialValue}
      previewStyle='vertical'
      height='600px'
      initialEditType='markdown'
      useCommandShortcut={true}
    />
  );
};

export default EditorPart;
