import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addResult } from '../../redux/quizSlice';
import Button from '../Button/Button';
import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';
import RadioInputField from '../RadioInputField/RadioInputField';
import Timer from '../Timer/Timer';
import { fetchQuizById, Quiz } from '../../api';

const QuizPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    const loadQuiz = async () => {
      if (quizId) {
        try {
          const quizData = await fetchQuizById(quizId);
          setQuiz(quizData);
          setUserAnswers(Array(quizData.questions.length).fill(''));
        } catch (err) {
          setError('Failed to load quiz');
        } finally {
          setLoading(false);
        }
      }
    };
    loadQuiz();
  }, [quizId]);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (!quiz) return;
    const result = {
      quizId: quizId as string,
      quizTitle: quiz.title,
      userAnswers,
      totalQuestions: quiz.questions.length,
    };

    if (isAuthenticated) {
      dispatch(addResult(result));
    } else {
      localStorage.setItem('quizResult', JSON.stringify(result));
    }
    navigate(`/quizzes/${quizId}/result`, { state: { userAnswers, quiz } });
  };

  const isQuizCompleted = userAnswers.every(answer => answer !== '');

  const expiryTimestamp = new Date();
  expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + 1);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  return (
    <Container>
      <div className="flex justify-between items-center mb-4">
        <PageTitle title={quiz.title} />
        <Timer expiryTimestamp={expiryTimestamp} onExpire={handleSubmit} />
      </div>
      {quiz.questions.map((question, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
          {question.options.map((option, i) => (
            <RadioInputField
              key={i}
              name={`question-${index}`}
              value={option}
              checked={userAnswers[index] === option}
              onChange={() => handleAnswerChange(index, option)}
              label={option}
            />
          ))}
        </div>
      ))}
      <Button onClick={handleSubmit} disabled={!isQuizCompleted}>
        Результат
      </Button>
    </Container>
  );
};

export default QuizPage;