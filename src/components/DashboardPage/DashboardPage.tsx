import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import quizData, { Quiz } from '../../data/quizData';
import PageTitle from '../PageTitle/PageTitle';

const DashboardPage: React.FC = () => {
  const results = useSelector((state: RootState) => state.quiz.results);
  console.log('Loaded results:', results)
  
  return (
    <div className="container mx-auto p-4">
      <PageTitle title={'Dashboard!'} />
      <p>Добро пожаловать на панель управления!</p>
      {results.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Ваши результаты</h2>
          <ul>
            {results.map((result, index) => {
              const quiz: Quiz | undefined = quizData[result.quizId as keyof typeof quizData];
              if (!quiz) {
                return (
                  <li key={index} className="mb-4">
                    <h3 className="text-xl font-semibold">Квиз не найден</h3>
                  </li>
                );
              }
              return (
                <li key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{result.quizTitle}</h3>
                  <p>Вы правильно ответили на {result.userAnswers.filter((answer, i) => answer === quiz.questions[i].correctAnswer).length} из {result.totalQuestions} вопросов.</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Вы ещё не прошли ни одного квиза.</p>
      )}
    </div>
  );
};

export default DashboardPage;