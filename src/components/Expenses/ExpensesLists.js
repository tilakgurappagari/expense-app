import ExpenseItem from "./ExpenseItem";
import "./ExpensesLists.css";



const ExpensesLists = (props) =>{

    if (props.items.length === 0)
        return <h2 className="expenses-list__fallback">Found no Expenses!</h2>
    

    return <ul className="expenses-lists">

{
      /* gets item data from app.js and passes to expenseitem.js via props */
      props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }

    </ul>
}


export default ExpensesLists