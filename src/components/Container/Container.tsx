import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={`container mx-auto p-4 ${className}`}>{children}</div>;
};

export default Container;