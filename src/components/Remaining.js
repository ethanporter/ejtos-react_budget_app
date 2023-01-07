
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//Here, you are importing expenses and budget from Context, getting the total cost of the expenses using the reduce function, 
//creating a variable to store the CSS classname you want to display, using a template string to create your classes, and rendering 
//the remaining budget using a subtraction.
const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;