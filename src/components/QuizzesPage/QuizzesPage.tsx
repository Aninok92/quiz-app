import React from 'react';
import { Link } from 'react-router-dom';
import quizData from '../../data/quizData';
import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';
import Card from '../Card/Card';

const QuizzesPage: React.FC = () => {
  return (
    <Container>
      <PageTitle title="Quizzes" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.values(quizData).map((quiz) => (
          <Link to={`/quizzes/${quiz.id}`} key={quiz.id}>
            <Card
              title={quiz.title}
              description={quiz.description}
              questionCount={quiz.questions.length}
              className="transition-transform transform hover:scale-105"
              imageUrl={quiz.imageUrl}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default QuizzesPage;