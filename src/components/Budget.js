

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
//Here, you are using the Bootstrap Alert classes to give a nice gray background by adding some text and hard coding a value.
const Budget = () => {
    const { budget, dispatch, totalExpenses } = useContext(AppContext);
    const [setBudget] = useState('');

    
    const submitEvent = () => {

        if(budget < totalExpenses) {
            alert("The budget cannot be less than the total spent so far  £"+totalExpenses);
            setBudget("");
            return;
        }   

        const newBudget = {
            budget: budget,
        };

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    }


    return (
        <div className='alert alert-secondary'>
            <p>Budget: £           
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>
            
            <button className="btn btn-primary" onClick={submitEvent}>
                Save
            </button>
            
            </p>
        </div>
    );
};

export default Budget;
