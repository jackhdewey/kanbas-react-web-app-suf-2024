import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modules: [],
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },
        addModule: (state, { payload: module }) => {
                    const newModule: any = {
                        _id: new Date().getTime().toString(),
                        name: module.name,
                        course: module.course,
                        lessons: []
                    };
                    state.modules = [...state.modules, newModule] as any;
        },
        deleteModule: (state, { payload: moduleId }) => {
                        state.modules = state.modules.filter(
                            (m: any) => m._id !== moduleId);
        },
        editModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.map((m: any) =>
                m._id === moduleId ? { ...m, editing: true } : m
            ) as any;
        },
        updateModule: (state, { payload: module }) => {
            state.modules = state.modules.map((m: any) =>
                m._id === module._id ? module : m
            ) as any;
        },
    },
});

export const { setModules, addModule, deleteModule, updateModule, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;