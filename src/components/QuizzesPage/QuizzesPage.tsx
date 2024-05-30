import React from 'react';
import { Link } from 'react-router-dom';
import quizData from '../../data/quizData';

const QuizzesPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Выберите квиз</h1>
      <ul>
        {Object.values(quizData).map(quiz => (
          <li key={quiz.id} className="mb-4">
            <Link to={`/quizzes/${quiz.id}`} className="text-blue-500 hover:underline">{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizzesPage;