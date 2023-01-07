
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//Here, you are using the reduce function to get a total of all the costs, assigning this to a variable and displaying the variable in your JSX. 
//Now whenever the user adds an expense, this causes the state to update, which will cause all components connected to the context to re-render 
//and update themselves with new values.
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;