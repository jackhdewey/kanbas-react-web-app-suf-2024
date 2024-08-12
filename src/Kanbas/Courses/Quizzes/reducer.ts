import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: quiz }) => {
            state.quizzes = [...state.quizzes, quiz] as any;     
        },
        deleteQuiz: (state, { payload: quizId }) => {
            console.log(quizId);
            state.quizzes = state.quizzes.filter((m: any) => m._id !== quizId);
        },
        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((a: any) =>
                a._id === quiz._id ? quiz : a
            ) as any;
        },
    }
});

export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;