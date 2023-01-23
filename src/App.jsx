import React from "react";
import Budget from "./Components/Budget";
import 'bootstrap/dist/css/bootstrap.min.css';
import Remaining from "./Components/Remaining";
import ExpenseTotal from "./Components/ExpenseTotal";
import ExpenseList from "./Components/ExpenseList";
import AddExpenseForm from "./Components/AddExpenseForm";
import { AppProvider } from "./Context/AppContext";

const App = () => {
  return (
  <AppProvider>
        <div className="container">
      <h1 className="mt-3">
        My Budget Planner
      </h1> 
      <div className="row mt-3">
        <div className="col-sm">
          <Budget/>
        </div>
        <div className="cal-sm">
          <Remaining/>
        </div>
        <div className="col-sm">
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className="mt-3">Expenses:</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expenses</h3>
      <div className="mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  </AppProvider>
  );
}

export default App;
