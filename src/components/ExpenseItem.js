import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>March 10th, 2021</div>
            <div className='expense-item__description'>
                <h3>Food</h3>
                <div className='expense-item__price'>$10.00</div>
            </div>
        </div>
    )
}

export default ExpenseItem;