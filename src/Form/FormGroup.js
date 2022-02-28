import React from 'react';
import NumberInput from "./NumberInput";
import Select from "./Select";

const FormGroup = ({value, onChangeVal, onChangeCurrency, symbols, defaultSymbol, disabled=false}) => {
    return ( 
        <div className="form-group">
            <NumberInput value={value} onChangeVal={onChangeVal}/>
            <Select onChangeCurrency={onChangeCurrency} symbols={symbols} defaultSymbol={defaultSymbol} disabled={disabled}/>
      </div>  
     );
}
 
export default FormGroup;