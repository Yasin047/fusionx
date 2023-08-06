import React, { useState } from 'react';
import NavBar from './NavBar';
import './Button.css'; // Import the Button.css file
import './Container.css'; // Import the Container.css file
import './Heading.css'; // Import the Heading.css file
import './Smallcon.css'; // Import the Smallcon.css file

const Dapp = () => {
  // ...
  const [selectedPercentage, setSelectedPercentage] = useState(0);

  const handlePercentageChange = (percentage) => {
    setSelectedPercentage(percentage);
  };
  return (
    <div style={{ backgroundColor: '#111c2d', position: 'relative', minHeight: '100vh' }}>
      <div className="heading-container">
        <h1 className="heading">FusionX Staking</h1>
      </div>
      <div className="container">
        {/* Move the text to the left within the container with more paddingRight */}
        <h2 style={{ textAlign: 'left', paddingRight: '10px', marginBottom: '10px' }}>APR</h2>
        <p style={{ textAlign: 'left', paddingRight: '10px', marginBottom: '5px' }}>Lock Duration: </p>
        <p style={{ textAlign: 'left', paddingRight: '10px' }}>Withdraw Fees</p>
        <button className="button">Connect</button>

        {/* Add additional text in the center of the container */}
        <div className="centered-text">
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>FusionX Staking!</p>
          <p style={{ fontSize: '16px' }}>Coming Soon</p>
        </div>

        {/* Small container */}
        <div className="small-container">
          <input type="text" placeholder="Enter Amount" />
          <div className="percentage-bar">
            <button
              className={selectedPercentage === 25 ? 'selected' : ''}
              onClick={() => handlePercentageChange(25)}
            >
              25%
            </button>
            <button
              className={selectedPercentage === 50 ? 'selected' : ''}
              onClick={() => handlePercentageChange(50)}
            >
              50%
            </button>
            <button
              className={selectedPercentage === 75 ? 'selected' : ''}
              onClick={() => handlePercentageChange(75)}
            >
              75%
            </button>
            <button
              className={selectedPercentage === 100 ? 'selected' : ''}
              onClick={() => handlePercentageChange(100)}
            >
              100%
            </button>
          </div>
          <div className="button-container">
            <button className="small-button">Stake</button>
            <button className="small-button unstake">Unstake</button>
          </div>
          <div className="inner-container">
            <button className="inner-button">Claim Reward</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dapp;
