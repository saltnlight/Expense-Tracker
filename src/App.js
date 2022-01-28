import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Inputs/NewExpense";

const DUMMY_EXPENSES = [
  {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),}
  ,
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) }
  ,
  {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28),}
  ,
  {id: 'e4',title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),}
  ,
];

function App() {
  const [ACTUAL_EXPENSE, setActualExpenses] = useState(DUMMY_EXPENSES);

  const addedxpenseHandler = (expense) => {
    console.log(".............In App.js...............");
    // setActualExpenses([expense, ...ACTUAL_EXPENSE]);
    setActualExpenses(prev => {
      return [expense, ...prev]
    })
  }

  return (
    <main>
      <NewExpense onAddedExpense={addedxpenseHandler}/>
      <Expenses expenseList={ACTUAL_EXPENSE}/>
    </main>
  );
}

export default App;
