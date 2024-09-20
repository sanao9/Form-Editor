import React, { useState } from 'react';
import FormField from './FormField';
import FormPreview from './FormPreview';
import '../App.css';

const FormEditor = () => {
  // State to manage form fields
  const [fields, setFields] = useState([
    { id: 1, label: 'Name', type: 'text' },
    { id: 2, label: 'Email', type: 'email' }
  ]);
  
  // State to control which page to display: "welcome" or "form-editor"
  const [currentPage, setCurrentPage] = useState("welcome");

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
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li onClick={() => setCurrentPage("welcome")}>Dashboard</li>
          <li onClick={() => setCurrentPage("form-editor")}>Form Editor</li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {currentPage === "welcome" ? (
          <div className="welcome-screen">
            <h1>Welcome to Form Editor</h1>
            <p>Click "Form Editor" in the sidebar to start editing your form.</p>
          </div>
        ) : (
          <div className="form-editor">
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
        )}
      </div>
    </div>
  );
};

export default FormEditor;
