import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  // expense data handler to extract the object created in the expense form
  // argument should have a different name from the object
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // spread operator to bring in that object
      ...enteredExpenseData,
      // adding a new key value pair
      id: Math.random().toString(),
    };
    console.log(enteredExpenseData);
    // adding the expenseData as an argument to a prop passed down to us from App.js
    props.onAddExpenseHandler(expenseData);
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {/* only named onSave to remind that this should be a function - convention */}
      {/* displaying component based on state */}
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
