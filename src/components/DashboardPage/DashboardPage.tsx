import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import quizData, { Quiz } from '../../data/quizData';
import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';
import Card from '../Card/Card';

const DashboardPage: React.FC = () => {
  const results = useSelector((state: RootState) => state.quiz.results);
  console.log('Loaded results:', results)
  
  return (
    <Container>
      <PageTitle title={'Dashboard'} />
      <p>Добро пожаловать на панель управления!</p>
      {results.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Ваши результаты</h2>
          <ul>
            {results.map((result, index) => {
              const quiz: Quiz | undefined = quizData[result.quizId as keyof typeof quizData];
              if (!quiz) {
                return (
                  <Card
                    key={index}
                    title="Квиз не найден"
                />
                );
              }
              return (
                <Card
                  key={index}
                  title={result.quizTitle}
                  questionCount={result.totalQuestions}
                  answeredCount={result.userAnswers.filter((answer, i) => answer === quiz.questions[i].correctAnswer).length}
                  imageUrl={quiz.imageUrl}
                  className="mb-4"
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Вы ещё не прошли ни одного квиза.</p>
      )}
    </Container>
  );
};

export default DashboardPage;