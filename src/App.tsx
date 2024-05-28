import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/HomePage/HomePage';
import QuizPage from './components/QuizPage/QuizPage';
import QuizzesPage from './components/QuizzesPage/QuizzesPage'
// import ProfilePage from './components/ProfilePage/ProfilePage';
// import AdminPage from './components/AdminPage/AdminPage';
// import LoginPage from './components/LoginPage/LoginPage';
// import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/quizzes/:quizId" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;