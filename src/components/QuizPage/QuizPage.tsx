import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const quizzesData = [
  {
    id: 1,
    title: 'Гарри Поттер',
    description: 'Проверьте свои знания о мире Гарри Поттера!',
    questions: [
      {
        question: 'Как зовут родителей Гарри Поттера?',
        options: ['Лили и Джеймс', 'Молли и Артур', 'Алиса и Фрэнк', 'Петуния и Вернон'],
        correctAnswer: 'Лили и Джеймс'
      },
      {
        question: 'Как зовут лучшего друга Гарри?',
        options: ['Рон Уизли', 'Драко Малфой', 'Седрик Диггори', 'Невилл Долгопупс'],
        correctAnswer: 'Рон Уизли'
      },
      {
        question: 'Какое заклинание используется для левитации объектов?',
        options: ['Люмос', 'Экспекто Патронум', 'Алохомора', 'Вингардиум Левиоса'],
        correctAnswer: 'Вингардиум Левиоса'
      },
      {
        question: 'Какой факультет не существует в Хогвартсе?',
        options: ['Гриффиндор', 'Пуффендуй', 'Когтевран', 'Дурмстранг'],
        correctAnswer: 'Дурмстранг'
      },
      {
        question: 'Какой предмет преподает профессор Снегг?',
        options: ['Зельеварение', 'Защита от Темных Искусств', 'Трансфигурация', 'Уход за Магическими Существами'],
        correctAnswer: 'Зельеварение'
      },
      {
        question: 'Какой волшебный зверь является покровителем Гарри?',
        options: ['Олень', 'Феникс', 'Волк', 'Заяц'],
        correctAnswer: 'Олень'
      },
      {
        question: 'Как зовут домашнего эльфа Гарри Поттера?',
        options: ['Доби', 'Кикимер', 'Винки', 'Хокки'],
        correctAnswer: 'Доби'
      },
      {
        question: 'Кто является создателем философского камня?',
        options: ['Николас Фламель', 'Албус Дамблдор', 'Геллерт Грин-де-Вальд', 'Корнелиус Фадж'],
        correctAnswer: 'Николас Фламель'
      },
      {
        question: 'Какое существо охраняет Тайную комнату?',
        options: ['Басилиск', 'Дементор', 'Тролль', 'Араког'],
        correctAnswer: 'Басилиск'
      },
      {
        question: 'Кто стал учителем Защиты от Темных Искусств в шестой книге?',
        options: ['Северус Снегг', 'Ремус Люпин', 'Долорес Амбридж', 'Квиринус Квиррелл'],
        correctAnswer: 'Северус Снегг'
      }
    ]
  }
];


const QuizPage = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const quiz = quizzesData.find(q => q.id === parseInt(quizId || '', 10));
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(quiz?.questions.length).fill(''));
  const navigate = useNavigate();

  if (!quiz) {
    return <div>Квиз не найден</div>;
  }

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    navigate(`/quizzes/${quizId}/result`, { state: { userAnswers, quiz } });
  };

  const allQuestionsAnswered = userAnswers.every(answer => answer !== '');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
      <p className="mb-8">{quiz.description}</p>
      {quiz.questions.map((question, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
          <ul>
            {question.options.map((option, idx) => (
              <li key={idx} className="mb-1">
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`question-${index}-option-${idx}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                <label htmlFor={`question-${index}-option-${idx}`} className="ml-2">{option}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className={`py-2 px-4 rounded mt-4 ${allQuestionsAnswered ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        disabled={!allQuestionsAnswered}
      >
        Результат
      </button>
    </div>
  );
};

export default QuizPage;