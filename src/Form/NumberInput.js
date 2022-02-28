import React from 'react';

const NumberInput = ({ value, onChangeVal}) => {
    return ( 
        <input className="form-control" type="number" value={value} min="1" onChange={onChangeVal}/>
     );
}
 
export default NumberInput;