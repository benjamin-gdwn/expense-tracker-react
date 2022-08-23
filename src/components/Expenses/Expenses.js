import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [storeFilterYear, setStoreFilterYear] = useState("2022");

  const storeFilter = (year) => {
    setStoreFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === storeFilterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={storeFilterYear}
          onChangeFilter={storeFilter}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
