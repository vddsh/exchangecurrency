import React, { useEffect, useState } from 'react';

import { CurrencyInput } from '../CurrencyInput/CurrencyInput';

import './Content.scss';

export const Content = ({ rates }) => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');

  const format = (number) => {
    return Number(number.toFixed(2));
  };

  const handleAmount1Change = (amount1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount2(format((amount1 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  };

  return (
    <div className='content'>
      <div className='content__inputs-box'>
        <div>
          <span className='content__helper'>From</span>
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
          />
        </div>
        <div>
          <span className='content__helper'>To</span>
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2}
          />
        </div>
      </div>
    </div>
  );
};
