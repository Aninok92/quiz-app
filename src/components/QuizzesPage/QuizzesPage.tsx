import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import quizData from '../../data/quizData';
import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';
import Card from '../Card/Card';
import { fetchQuizzes, Quiz } from '../../api';

const QuizzesPage: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const loadQuizzes = async () => {
      const quizzesData = await fetchQuizzes();
      setQuizzes(quizzesData);
    };
    loadQuizzes();
  }, []);

  console.log("quizzes", quizzes)

  return (
    <Container>
      <PageTitle title="Quizzes" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.values(quizzes).map((quiz) => (
          <Link to={`/quizzes/${quiz._id}`} key={quiz._id}>
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