
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const switchCurrency = (adjustCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: adjustCurrency,
        });
    }

    return (
        <div className="input-group mb-3" style={{ marginRight: '2rem' }}>
            <div className="input-group-prepend">
            </div>
            <select style={{ backgroundColor: 'darkgreen', color: 'white', border: 'none', borderRadius: 10, padding: 10, }} id="inputGroupSelect01" onChange={(event) => switchCurrency(event.target.value)} >
                <option defaultValue value="£" name="pound">Currency £ Pound</option>
                <option value="$" name="dollar">Currency $ Dollar</option>
                <option value="€" name="euro">Currency € Euro</option>
                <option value="₹" name="ruppee">Currency ₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;