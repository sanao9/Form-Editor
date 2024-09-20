import React from 'react';

const FormField = ({ field, removeField, updateField }) => {
  const handleLabelChange = (e) => {
    updateField(field.id, { ...field, label: e.target.value });
  };

  const handleTypeChange = (e) => {
    updateField(field.id, { ...field, type: e.target.value });
  };

  return (
    <div className="form-field">
      <input
        type="text"
        placeholder="Label"
        value={field.label}
        onChange={handleLabelChange}
      />
      <select value={field.type} onChange={handleTypeChange}>
        <option value="text">Text</option>
        <option value="email">Email</option>
        <option value="password">Password</option>
        <option value="number">Number</option>
      </select>
      <button onClick={() => removeField(field.id)}>Remove</button>
    </div>
  );
};

export default FormField;