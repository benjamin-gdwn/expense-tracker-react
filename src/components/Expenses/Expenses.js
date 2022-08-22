import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

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
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
