// src/components/TextInput.js
import React from 'react';

const TextInput = ({ label, type, value, onChange, placeholder, required }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="text-input"
      />
    </div>
  );
};

export default TextInput;
