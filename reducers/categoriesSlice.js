import { createSlice } from "@reduxjs/toolkit";

let nextCategoryId = 0;

const categoriesSlice = createSlice({
  name: "categories",
  initialState: ["personal", "official"],
  reducers: {
    addCategory(state, action) {
      state.push({
        id: nextCategoryId++,
        text: action.payload,
      });
    },
    
  },
});

export const { addCategory, toggleCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
