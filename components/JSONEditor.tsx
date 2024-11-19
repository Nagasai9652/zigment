import React from 'react';
import Editor from 'jsoneditor-ajrm';
import locale from 'jsoneditor-ajrm/locale/en';

interface JSONEditorProps {
  value: string;
  onChange: (json: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ value, onChange }) => {
  return (
    <div className="border rounded p-4">
      <h2 className="text-lg font-bold mb-2">JSON Editor</h2>
      <Editor
        value={value}
        placeholder="Edit JSON schema here"
        theme="light_mitsuketa_tribute"
        locale={locale}
        onChange={({ json }) => onChange(json)}
      />
    </div>
  );
};

export default JSONEditor;
