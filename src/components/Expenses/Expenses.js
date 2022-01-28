import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from '../ExpenseFilter/ExpensesFilter';

import './Expenses.css'
import { useState } from 'react/cjs/react.development';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2020');

    const changeYearHandler = (year) => {
        console.log("expenses");
        setSelectedYear(year);

        // props.yearFilter(year);
    }

    const result = props.expenseList.filter(x => 
        x.date.getFullYear().toString() === selectedYear
    );

    return (
        <Card className='expenses'>
            <ExpenseFilter year={selectedYear} onChangeYear={changeYearHandler}/>
            {
                result.map(x => 
                    <ExpenseItem
                        key={x.id}
                        title={x.title}
                        amount={x.amount}
                        date={x.date}
                    />
                )
            }

        </Card>
    )
};

export default Expenses;