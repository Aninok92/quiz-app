import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/userSlice';
import PageTitle from '../PageTitle/PageTitle';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); // Имитация поля пароля
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogin = () => {
      dispatch(login(username));
      navigate('/dashboard');
    };
  
    return (
      <div className="container mx-auto p-4">
        <PageTitle title={'Login'} />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mb-4 p-2 border"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-4 p-2 border"
        />
        <button onClick={handleLogin} className="py-2 px-4 bg-blue-500 text-white">
          Login
        </button>
      </div>
    );
  };
  
  export default LoginPage;