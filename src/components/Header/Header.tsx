import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-white text-xl font-bold">Ваше приложение</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Главная</Link>
            </li>
            <li>
              <Link to="/quizzes" className="text-white hover:text-gray-300">Квизы</Link>
            </li>
            <li>
              <Link to="/profile" className="text-white hover:text-gray-300">Профиль</Link>
            </li>
            <li>
              <Link to="/admin" className="text-white hover:text-gray-300">Админ</Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Войти</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;