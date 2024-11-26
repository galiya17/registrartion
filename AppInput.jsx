import React from 'react';

const AppInput = ({ label, type, placeholder, onChange, name }) => {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default AppInput;
