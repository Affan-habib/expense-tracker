import { createSlice } from "@reduxjs/toolkit";

let nextCategoryId = 0;

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    addCategory(state, action) {
      state.push({
        id: nextCategoryId++,
        text: action.payload,
      });
    },
    toggleCategory(state, action) {
      const Category = state.find((Category) => Category.id === action.payload);
      if (Category) {
        Category.completed = !Category.completed;
      }
    },
  },
});

export const { addCategory, toggleCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
