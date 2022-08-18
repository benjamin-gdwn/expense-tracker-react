import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const newExpense = (props) => {
  // expense data handler to extract the object created in the expense form
  // argument should have a different name from the object
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // spread operator to bring in that object
      ...enteredExpenseData,
      // adding a new key value pair
      id: Math.random().toString(),
    };
    // adding the expenseData as an argument to a prop passed down to us from App.js
    props.onAddExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      {/* only named onSave to remind that this should be a function - convention */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default newExpense;
