import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizResult {
  quizId: string;
  quizTitle: string;
  userAnswers: string[];
  totalQuestions: number;
}

interface QuizState {
  results: QuizResult[];
}

const initialState: QuizState = {
  results: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<QuizResult>) => {
        state.results = state.results.concat(action.payload);
      },
  },
});

export const { addResult } = quizSlice.actions;

export default quizSlice.reducer;
export type { QuizResult };