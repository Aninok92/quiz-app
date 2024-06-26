type Question = {
    question: string;
    options: string[];
    correctAnswer: string;
  };
  
  type Quiz = {
    id: number;
    title: string;
    description: string;
    questions: Question[];
    imageUrl?: string;
  };

  const quizData: { [key: string]: Quiz } = {
    1: {
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
      ],
      imageUrl: "/images/harry_potter_quiz.jpg",
    },
    2: {
        id: 2,
        title: 'Властелин колец',
        description: 'Проверьте свои знания о мире Властелина колец!',
        questions: [
          { question: 'Кто такой Фродо Бэггинс?', options: ['Хоббит', 'Эльф', 'Человек'], correctAnswer: 'Хоббит' },
          { question: 'Как называется гора, в которую нужно бросить Кольцо Всевластья?', options: ['Ородруин', 'Кара-дум', 'Гора Судьбы'], correctAnswer: 'Ородруин' },
          // Другие вопросы...
        ],
        imageUrl: "/images/lord_of_the_rings_quiz.jpg"
      },
      3: {
        id: 3,
        title: 'Злодеи в кино и литературе',
        description: 'Проверьте свои знания о злодеях в кино и литературе!',
        questions: [
          { question: 'Кто является главным злодеем в "Звездных войнах"?', options: ['Дарт Вейдер', 'Император Палпатин', 'Кайло Рен'], correctAnswer: 'Дарт Вейдер' },
          { question: 'Как зовут злодея в "Гарри Поттере"?', options: ['Волдеморт', 'Снегг', 'Люциус Малфой'], correctAnswer: 'Волдеморт' },
          // Другие вопросы...
        ],
        imageUrl: "/images/villains_quiz.jpg"
      }
};

  export default quizData
  export type { Quiz, Question };