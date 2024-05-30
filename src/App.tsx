import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Header from './components/Header/Header';
import DashboardPage from './components/DashboardPage/DashboardPage';
import HomePage from './components/HomePage/HomePage';
import QuizPage from './components/QuizPage/QuizPage';
import QuizzesPage from './components/QuizzesPage/QuizzesPage';
import ResultPage from './components/ResultPage/ResultPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/quizzes/:quizId" element={<QuizPage />} />
          <Route path="/quizzes/:quizId/result" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;