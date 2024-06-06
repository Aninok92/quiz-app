const API_BASE_URL = 'http://localhost:3000/api';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Quiz {
  _id: string;
  title: string;
  description: string;
  questions: Question[];
  imageUrl?: string;
}

export const fetchQuizzes = async (): Promise<Quiz[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/quizzes`);
    console.log("response", response)
    if (!response.ok) {
      throw new Error('Failed to fetch quizzes');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchQuizById = async (id: string): Promise<Quiz | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/quizzes/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch quiz');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};