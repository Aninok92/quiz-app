import React from 'react';
import { Link } from 'react-router-dom';
import quizData from '../../data/quizData';
import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';

const QuizzesPage: React.FC = () => {
  return (
    <Container>
       <PageTitle title={'Выберите квиз'} />
      <ul>
        {Object.values(quizData).map(quiz => (
          <li key={quiz.id} className="mb-4">
            <Link to={`/quizzes/${quiz.id}`} className="text-blue-500 hover:underline">{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default QuizzesPage;