
import React, { useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const [setName] = useState(AppContext);


    return (
        <div className="input-group mb-3" style={{ marginRight: '2rem' }}>
                <div className="input-group-prepend">
                </div>
                  <select style={{backgroundColor:'lightgreen', color:'white', border:'none', borderRadius:10, padding:10,}} id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Currency (£ Pound)</option>
                        <option value="Dollar" name="dollar">Currency $ Dollar</option>
                        <option value="Pound" name="pound">Currency £ Pound</option>
                        <option value="Euro" name="euro">Currency € Euro</option>
                        <option value="Ruppee" name="ruppee">Currency ₹ Ruppee</option>
                </select>
            </div>
    );
};

export default Currency;