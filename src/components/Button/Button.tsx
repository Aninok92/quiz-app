import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children, className = '' }) => {
  const baseClass = 'py-2 px-4 rounded';
  const disabledClass = 'bg-gray-300 text-gray-500 cursor-not-allowed';
  const enabledClass = className || 'bg-blue-500 text-white hover:bg-blue-600';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${className} ${disabled ? disabledClass : enabledClass}`}
    >
      {children}
    </button>
  );
};

export default Button;