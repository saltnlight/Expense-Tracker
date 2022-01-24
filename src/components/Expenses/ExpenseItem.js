import React from 'react';
import Card from '../UI/Card';
import ExpenseItemDate from './ExpenseItemDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    
    return (
        <Card className='expense-item'>
            <ExpenseItemDate date={props.date}/>
            <div className='expense-item__description'>
                <h3>{props.title}</h3>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;