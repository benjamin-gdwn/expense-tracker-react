// Title, Date, Amount props - App>ExpenseItem
import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/Card";

const ExpenseItem =(props) => {
  // storing and calling useState Hook with props.title as the argument
  // use state always returns an array with two elements - 1. element current state value, 2.function for updating it
  const [title, setTitle] = useState(props.title);
// create a function that changes the state and uses the 2nd element from useState
  const clickHandler = () => {
    // setTitle tells react to assign a new value, the argument is the new value
    setTitle('Shut up Toby');
    
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">£{props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>;
    </Card>
  );
}

export default ExpenseItem;
