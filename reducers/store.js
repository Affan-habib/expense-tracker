import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todos/categoriesSlice";
import expenseSlice from "./features/todos/expenseSlice";
export const store = configureStore({
  reducer: {
    todos: todoSlice,
    expenseSlice:expenseSlice
  },
});
