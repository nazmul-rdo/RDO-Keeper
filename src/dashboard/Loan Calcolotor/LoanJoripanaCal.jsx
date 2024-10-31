import { useState } from 'react';
import './LoanJoripanaCal.css';  // Import the CSS file

const LoanJoripanaCal = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const fb = (n) => {
    if (n <= 1) {
      return `${n}`;
    } else {
      return `${n} + ${fb(n - 1)}`;
    }
  };

  const sum = (n) => {
    if (n <= 1) {
      return 1;
    } else {
      return n + sum(n - 1);
    }
  };

  const calculateSum = () => {
    const n = parseInt(inputValue);

    if (isNaN(n) || n <= 0) {
      setResult('Please enter a valid number.');
      return;
    }

    const expression = fb(n);
    const totalSum = sum(n);

    setResult(`${expression} = ${totalSum}`);
  };

  return (
    <div className="container">
      <h2>Loan Joripana Calculator</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
        className="input"
      />
      <button onClick={calculateSum} className="button">Calculate</button>
      <div className="result">{result}</div>
    </div>
  );
};

export default LoanJoripanaCal;
