import React from "react";
import "./ATMDeposit.css";


const ATMDeposit = ({ onChange, isDeposit }) => {
    const choice = ["Deposit", "Cash Back"];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
   <>
      <h3 className="atm-deposit__title">{choice[Number(!isDeposit)]}</h3>
      <div className="atm-deposit__input-group">
        <input type="number" className="atm-deposit__input" onChange={onChange} />
        <input type="submit" className="atm-deposit__submit" value="Submit" />
      </div>
    
  </>
    );
  };

  export default ATMDeposit;