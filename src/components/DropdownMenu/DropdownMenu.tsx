import React from 'react';

interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return (
    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
      {children}
    </div>
  );
};

export default DropdownMenu;