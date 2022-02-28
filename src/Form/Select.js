import React from 'react';


const Select = ({onChangeCurrency, symbols, defaultSymbol, disabled}) => {
    return ( 
        <select className="form-control form-control-select" value={defaultSymbol} onChange={onChangeCurrency} disabled={disabled}>
          {
            symbols && symbols.map((symbol, indx) => <option value={symbol} key={indx}>{symbol}</option>)
          }
        </select>
     );
}
 
export default Select;