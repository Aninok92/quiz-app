import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <img
      src="/logo.png"
      alt="QuizBrain Logo"
      className="h-8 w-30 mr-2 cursor-pointer"
      onClick={handleLogoClick}
    />
  );
};

export default Logo;