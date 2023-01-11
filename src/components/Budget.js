

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//Here, you are using the Bootstrap Alert classes to give a nice gray background by adding some text and hard coding a value.
const Budget = () => {
    const { budget } = useContext(AppContext);

    const increaseBudget = (name) => {
        const newBudget = {
            name: name,
            cost: 10,
        };

        budget({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{           
                <input
                    required='required'
                    type='number'S
                    id='cost'
                    value={budget}
                    onChange={(event) => increaseBudget(event.target.value)}>
                </input>
            }</span>
        </div>
    );
};

export default Budget;
