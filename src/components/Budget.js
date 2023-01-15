

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//Here, you are using the Bootstrap Alert classes to give a nice gray background by adding some text and hard coding a value.
const Budget = () => {
    const { budget, dispatch, currency, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0); 

    const updateBudget = (newBudget) => {
        if(budget > 20000) {
            alert("The budget cannot be more than 20,000");
            return;
        }
        if (budget < totalExpenses) {
            alert("The budget cannot be less than the total spent already");
           return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}        
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    onChange={(event) => updateBudget(event.target.value)}>
                </input> 
            </span>
        </div>
    );
};

export default Budget;
