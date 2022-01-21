import './ExpenseItem.css'
import ExpenseItemDate from './ExpenseItemDate';

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseItemDate date={props.date}/>
            <div className='expense-item__description'>
                <h3>{props.title}</h3>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;