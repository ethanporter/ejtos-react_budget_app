
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
//Here, you are dispatching an action. Your action contains the type (so the reducer knows how to update the state) and the payload. 
//In this case you are passing the ID of this expense (which you get from props when you rendered the ExpenseList).
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}
            style={{ 
                color:'white',
                fontWeight:'bold',
                fontSize:20,
                backgroundColor:'green',
                height:30, 
                width:30, 
                borderRadius:100,
                border:'none', 
                padding:'0%',
                }}>+</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} 
            style={{ 
                color:'white',
                fontWeight:'bold',
                fontSize:20,
                backgroundColor:'red',
                height:30, 
                width:30, 
                borderRadius:100,
                border:'none', 
                padding:'0%',
                }}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;