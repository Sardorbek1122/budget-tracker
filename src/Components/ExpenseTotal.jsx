import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ExpenseTotal = () => {

  const {expenses} = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Spent so fat: ${totalExpenses}</span>
    </div>
  )
}

export default ExpenseTotal;