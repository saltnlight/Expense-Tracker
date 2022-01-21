import './ExpenseItem.css'

function ExpenseItem(props) {
    // const eDate = new Date(2021, 2, 28);
    // const eTitle = 'Food';
    // const eAmount = 10.40;

    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h3>{props.title}</h3>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;