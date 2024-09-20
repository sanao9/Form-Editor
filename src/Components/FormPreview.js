import React from 'react';

const FormPreview = ({ fields }) => {
  return (
    <div className="form-preview">
      <h3>Form Preview</h3>
      <form>
        {fields.map(field => (
          <div key={field.id}>
            <label>{field.label}</label>
            <input type={field.type} placeholder={field.label} />
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormPreview;
