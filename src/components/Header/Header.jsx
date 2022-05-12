import './Header.scss';

import React from 'react';

export const Header = ({ rates }) => {
  const format = (number) => {
    return number.toFixed(2);
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__body'>
          <div className='header__currency'>
            <div className='header__currency-text'>
              EUR: {format(rates['UAH'] / rates['EUR'])}
            </div>
            <div className='header__currency-text'>
              USD: {format(rates['UAH'] / rates['USD'])}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
