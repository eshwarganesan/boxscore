// CounterDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector((state) => state.boxScore);

  return <div>Count: {count[0][0].pts}</div>;
};

export default CounterDisplay;
