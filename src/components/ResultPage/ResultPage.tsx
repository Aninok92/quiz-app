import { useLocation } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';

const ResultPage = () => {
  const location = useLocation();
  const { userAnswers, quiz } = location.state;

  const correctAnswersCount = quiz.questions.reduce((count: number, question: any, index: number) => {
    if (userAnswers[index] === question.correctAnswer) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <Container>
      <PageTitle title={`Результаты квиза: ${quiz.title}`} /> 
      <p className="mb-4">Вы правильно ответили на {correctAnswersCount} из {quiz.questions.length} вопросов.</p>
      <div>
        {quiz.questions.map((question: any, index: number) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
            <div className="flex items-center">
              <p className="mr-2">Ваш ответ: {userAnswers[index] || 'No Answer'}</p>
              {userAnswers[index] === question.correctAnswer ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
            </div>
            {userAnswers[index] !== question.correctAnswer && (
              <p>Правильный ответ: {question.correctAnswer}</p>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ResultPage;