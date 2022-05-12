import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.scss';
import { Spinner } from 'react-bootstrap';

import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';

function App() {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(rates);
  const filterCurrency = (data) => {
    let filtered = Object.entries(data).filter(([key]) => {
      if (key === 'UAH' || key === 'USD' || key === 'EUR') {
        return key;
      }
    });
    return Object.fromEntries(filtered);
  };

  const getCurrencies = async () => {
    try {
      let res = await axios({
        method: 'get',
        url: 'https://api.apilayer.com/exchangerates_data/latest?',

        headers: {
          apikey: 'mTfocxP2tAHfGy3vYMVH2LqFKRbOXJ51',
        },
      });
      setRates(filterCurrency(res.data.rates));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='container'>
          <div className='spinner__container'>
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : (
        <div className='wrapper'>
          <img src='main.png' className='image'></img>
          <div className='container'>
            <Header rates={rates} />
            <Content rates={rates} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
