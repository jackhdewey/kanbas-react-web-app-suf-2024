import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
                    const newAssignment: any = {
                        _id: assignment._id,
                        title: assignment.title,
                        course: assignment.course,
                        date_available: assignment.date_available,
                        due_date: assignment.due_date,
                        points: assignment.points,
                        description: assignment.description
                    };
                    if (state.assignments.find((a) => a._id === assignment._id)) {
                        state.assignments = state.assignments.map((a: any) =>
                            a._id === assignment._id ? assignment : a
                        ) as any;
                    }
                    else {
                        state.assignments = [...state.assignments, newAssignment] as any;
                    }
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
                        state.assignments = state.assignments.filter(
                            (m: any) => m._id !== assignmentId);
        }
    }
});

export const { addAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;