import { createSlice } from "@reduxjs/toolkit";

let nextExpenseId = 0;

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [
    { title: "Shopping", category: "shopping", date: "22/12/2022", cost: 250 },
    { title: "Shopping", category: "shopping", date: "22/12/2022", cost: 250 },
    { title: "Shopping", category: "shopping", date: "22/12/2022", cost: 250 },
    { title: "Shopping", category: "shopping", date: "22/12/2022", cost: 250 },
    { title: "Shopping", category: "shopping", date: "22/12/2022", cost: 250 },
    { title: "Shopping", category: "shopping", date: "22/12/2022", cost: 250 },
    { title: "Shopping", category: "shopping", date: "22/12/2022", cost: 250 },
    { title: "Shopping", category: "shopping", date: "22/12/2022", cost: 250 },
    { title: "Shopping", category: "shopping", date: "22/12/2022", cost: 250 },
    { title: "Shopping", category: "shopping", date: "22/12/2022", cost: 250 },
  ],
  reducers: {
    addExpense(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
