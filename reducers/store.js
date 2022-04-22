import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
// import expenseSlice from "./expenseSlice";
export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
});
