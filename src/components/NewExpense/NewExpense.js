import "./NewExpense.css";
import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [expenseFormFlag, setExpenseFormFlag] = useState(false);

  const addExpenseHandler = () =>{
    setExpenseFormFlag(true);
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData    
    };
    //Calling onAddExpense method in app.js to send the new expense data got from expenseform.js
    props.onAddExpense(expenseData);
  };
  const cancelExpenseHandler = () =>{
    setExpenseFormFlag(false);
  }
  return (
    <div className="new-expense">
      {!expenseFormFlag && <button onClick={addExpenseHandler}>Add New Expense</button>}
      {expenseFormFlag && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelExpense={cancelExpenseHandler}/>}
    </div>
  );
};

export default NewExpense;
