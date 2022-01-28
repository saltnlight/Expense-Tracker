import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from '../ExpenseFilter/ExpensesFilter';

import './Expenses.css'
import { useState } from 'react/cjs/react.development';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2020');
    const changeYearHandler = (year) => {
        console.log(year);
        setSelectedYear(year);
    }
    
    return (
        <Card className='expenses'>
            <ExpenseFilter year={selectedYear} onChangeYear={changeYearHandler}/>
            {
                props.expenseList.map(x => 
                    <ExpenseItem
                        title={x.title}
                        amount={x.amount}
                        date={x.date}
                    />
                )
            }
            {/* <ExpenseItem 
                title={props.expenseList[0].title}
                amount={props.expenseList[0].amount}
                date={props.expenseList[0].date}
            />
            <ExpenseItem 
                title={props.expenseList[1].title}
                amount={props.expenseList[1].amount}
                date={props.expenseList[1].date}
            />
            <ExpenseItem 
                title={props.expenseList[2].title}
                amount={props.expenseList[2].amount}
                date={props.expenseList[2].date}
            />
            <ExpenseItem 
                title={props.expenseList[3].title}
                amount={props.expenseList[3].amount}
                date={props.expenseList[3].date}
            /> */}
        </Card>
    )
};

export default Expenses;