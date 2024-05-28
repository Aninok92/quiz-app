import { useParams } from 'react-router-dom';

const QuizPage = () => {
  const { quizId } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Квиз {quizId}</h1>
    </div>
  );
};

export default QuizPage;
