import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Primera tarea",
    description: " Prueba de la primera tarea",
    completed: false,
  },
  {
    id: "2",
    title: "Segundas tarea",
    description: " Prueba de la Segundas tarea",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
