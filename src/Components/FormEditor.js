import React, { useState } from 'react';
import FormField from './FormField';
import FormPreview from './FormPreview';

const FormEditor = () => {
  const [fields, setFields] = useState([
    { id: 1, label: 'Name', type: 'text' },
    { id: 2, label: 'Email', type: 'email' }
  ]);

  const addField = () => {
    const newField = { id: Date.now(), label: '', type: 'text' };
    setFields([...fields, newField]);
  };

  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const updateField = (id, updatedField) => {
    const updatedFields = fields.map(field =>
      field.id === id ? updatedField : field
    );
    setFields(updatedFields);
  };

  return (
    <div>
      <h2>Form Editor</h2>
      <button onClick={addField}>Add Field</button>
      <div>
        {fields.map(field => (
          <FormField
            key={field.id}
            field={field}
            removeField={removeField}
            updateField={updateField}
          />
        ))}
      </div>
      <FormPreview fields={fields} />
    </div>
  );
};

export default FormEditor;