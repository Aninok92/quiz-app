import React from 'react';

interface RadioInputFieldProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}

const RadioInputField: React.FC<RadioInputFieldProps> = ({ name, value, checked, onChange, label }) => {
  return (
    <label className="block">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  );
};

export default RadioInputField;