import React from 'react';

import './CurrencyInput.scss';

export const CurrencyInput = (props) => {
  return (
    <div className='currency'>
      <input
        className='currency__input'
        type='number'
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
      />
      <select
        className='currency__select'
        value={props.currency}
        onChange={(e) => props.onCurrencyChange(e.target.value)}
      >
        {props.currencies.map((currency, i) => (
          <option key={i} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
