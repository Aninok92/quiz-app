import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addResult } from '../../redux/quizSlice';
import quizData, { Quiz } from '../../data/quizData';

const QuizPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const quiz: Quiz | undefined = quizData[quizId || "1"];
  // if (!quizId || !quiz) {
  //   return <div>Квиз не найден</div>;
  // }

  const [userAnswers, setUserAnswers] = useState<string[]>(Array(quiz.questions.length).fill(''));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.user.isLoggedIn);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const result = { quizId: quizId as string, quizTitle: quiz.title, userAnswers, totalQuestions: quiz.questions.length };

    console.log('Saving result:', result);
    console.log('User logged in:', isAuthenticated);

    if (isAuthenticated) {
      console.log('User is logged in, saving to Redux');
      dispatch(addResult(result));
    } else {
      console.log('User is not logged in, saving to localStorage');
      localStorage.setItem('quizResult', JSON.stringify(result));
    }
    navigate(`/quizzes/${quizId}/result`, { state: { userAnswers, quiz } });
  };

  const isQuizCompleted = userAnswers.every(answer => answer !== '');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
      {quiz.questions.map((question, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
          {question.options.map((option, i) => (
            <label key={i} className="block">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={userAnswers[index] === option}
                onChange={() => handleAnswerChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={!isQuizCompleted}
        className={`mt-4 py-2 px-4 ${isQuizCompleted ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
      >
        Результат
      </button>
    </div>
  );
};

export default QuizPage;