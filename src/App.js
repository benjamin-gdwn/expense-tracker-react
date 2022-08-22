import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {
  // initial state value using non dynamic values above
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // function to pass up the expenseData object from expenseform> newexpense> App.js
  const addExpenseHandler = (expense) => {
    // adding new expense to expenses array and add to the dynamic list
    // spread into existing expenses and add expense argument from function
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
