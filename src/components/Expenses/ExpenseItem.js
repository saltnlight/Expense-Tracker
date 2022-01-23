import React, {useState} from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseItemDate from './ExpenseItemDate';

function ExpenseItem(props) {
    const [container, setValue] = useState(props.title);
    const mouseOverHandler = () =>{
        setValue("fish");
    }
    return (
        <Card className='expense-item'>
            <ExpenseItemDate date={props.date}/>
            <div className='expense-item__description'>
                <h3>{container}</h3>
                <div className='expense-item__price'>${props.amount}</div>
                <button onMouseOver={mouseOverHandler}>Click Me</button>
                {/* <button onMouseOver={()=>{setValue("fish");}}>Click Me</button> */}
            </div>
        </Card>
    )
}

export default ExpenseItem;