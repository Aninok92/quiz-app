import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';

const HomePage: React.FC = () => {
  return (
    <Container>
      <PageTitle title="Welcome to QuizBrain" />
      <p className="text-lg mb-4">
        Здесь вы можете <Link to="/quizzes" className="text-blue-500 hover:underline">сыграть в наши квизы</Link> или 
        <Link to="/create-quiz" className="text-blue-500 hover:underline ml-1">создать свой квиз</Link>.
      </p>
      <p className="text-lg">
        Вы также можете <Link to="/dashboard" className="text-blue-500 hover:underline">посмотреть свою историю игр и результаты</Link>.
      </p>
    </Container>
  );
};

export default HomePage;