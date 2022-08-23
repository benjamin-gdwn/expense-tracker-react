import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");
  // onChange event handler
  const titleChangeHandler = (e) => {
    //   store the input as the setTitle
    setNewTitle(e.target.value);
    console.log(newTitle);
  };
  // amount change handler
  const amountChangeHandler = (e) => {
    //   store the input as the setAmount
    setNewAmount(e.target.value);
    console.log(newAmount);
  };
  // date change handler
  const dateChangeHandler = (e) => {
    //   store the input as the setDate

    setNewDate(e.target.value);
    console.log(newDate);
  };
  // submit handler set on the whole form to prevent awkward browser differences
  const submitHandler = (e) => {
    //   prevent the form doing anything funny
    e.preventDefault();
    // variable to store all the data as an object
    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };
    // step two of passing the object above up into the new expense as props argument passed down from newExpense
    props.onSaveExpenseData(expenseData);
    // set the state as clear again - two way binding
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };
  // form for the new expense

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={newAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={newDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
