import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormGenerator from './components/FormGenerator';

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<string>(`{
    "formTitle": "Project Requirements Survey",
    "formDescription": "Please fill out this survey about your project needs",
    "fields": [...]
  }`);

  const handleSchemaChange = (updatedSchema: string) => {
    setJsonSchema(updatedSchema);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-1/2">
        <JSONEditor value={jsonSchema} onChange={handleSchemaChange} />
      </div>
      <div className="w-full md:w-1/2">
        <FormGenerator schema={jsonSchema} />
      </div>
    </div>
  );
};

export default App;
