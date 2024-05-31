import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { logout } from '../../redux/userSlice';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Logo from '../Logo/Logo';
import Button from '../Button/Button'

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.user.isLoggedIn);
  const username = useSelector((state: RootState) => state.user.username);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home Page</Link>
            </li>
            <li>
              <Link to="/quizzes" className="text-white hover:text-gray-300">Quizzes</Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
            </li>
            {isAuthenticated ? (
              <li className="relative">
                <div
                  className="text-white cursor-pointer"
                  onClick={toggleDropdown}
                >
                  Welcome, {username}
                </div>
                {showDropdown && (
                  <div onMouseLeave={() => setShowDropdown(false)}>
                    <DropdownMenu>
                    <Button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                        Logout
                      </Button>
                      {/* Add more items here */}
                    </DropdownMenu>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <Button onClick={handleLoginClick} className="bg-green-500 text-white">
                  Login
                </Button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
