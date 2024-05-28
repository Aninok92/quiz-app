import { Link } from 'react-router-dom';

const quizzesData = [
  { id: 1, title: 'Гарри Поттер', description: 'Описание квиза "Гарри Поттер"' },
  { id: 2, title: 'Властелин колец', description: 'Описание квиза "Властелин колец"' },
  { id: 3, title: 'Злодеи в кино и литературе', description: 'Описание квиза "Злодеи в кино и литературе"' },
];

const QuizzesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Квизы</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quizzesData.map(quiz => (
          <Link key={quiz.id} to={`/quizzes/${quiz.id}`} className="bg-white rounded-lg shadow-md p-4 block hover:bg-gray-100">
            <h2 className="text-xl font-bold mb-2">{`Квиз "${quiz.title}"`}</h2>
            <p>{quiz.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuizzesPage;