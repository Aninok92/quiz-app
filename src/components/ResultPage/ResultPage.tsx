import { useLocation } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Результаты квиза: {quiz.title}</h1>
      <p className="mb-4">Вы правильно ответили на {correctAnswersCount} из {quiz.questions.length} вопросов.</p>
      <div>
        {quiz.questions.map((question: any, index: number) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
            <div className="flex items-center">
              <p className="mr-2">Ваш ответ: {userAnswers[index]}</p>
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
    </div>
  );
};

export default ResultPage;