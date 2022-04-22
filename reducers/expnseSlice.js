import { createSlice } from "@reduxjs/toolkit";

let nextCategoryId = 0;

const expenseSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addCategory(state, action) {
      state.push({
        id: nextCategoryId++,
        amonut: action.payload,
        category:action.payload
      });
    },
    
  },
});

export const { addCategory, toggleCategory } = expenseSlice.actions;

export default expenseSlice.reducer;
