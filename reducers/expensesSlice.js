import { createSlice } from "@reduxjs/toolkit";

let nextExpenseId = 40;

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [
    {id:1, title: "Laptop", category: "Shopping", date: "22/12/2022", cost: 70000 },
    {
      id:2,
      title: "Grocery items",
      category: "Shopping",
      date: "22/12/2022",
      cost: 1000,
    },
    { id:3,title: "T-shirt", category: "Shopping", date: "22/12/2022", cost: 650 },
  ],
  reducers: {
    addExpense(state, action) {
      state.push({
        id: nextExpenseId++,
        title: action.payload.title,
        cost: parseInt(action.payload.cost),
        category: action.payload.category,
      });
    },
  },
});

export const { addExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
