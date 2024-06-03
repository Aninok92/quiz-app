import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/userSlice';
import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogin = () => {
      dispatch(login(username));
      navigate('/dashboard');
    };
  
    return (
      <Container>
        <PageTitle title={'Login'} />
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 w-full"
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full"
        />
        <Button onClick={handleLogin} className="py-2 px-4 bg-blue-500 text-white">
          Login
        </Button>
      </Container>
    );
  };
  
  export default LoginPage;