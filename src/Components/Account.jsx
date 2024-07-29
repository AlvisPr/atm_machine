import React from'react';
import ATMDeposit from './ATMDeposit';
import "./#style.css";
  
  const Account = () => {
    let deposit = 0; // state of this transaction
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [modeSelected, setModeSelected] = React.useState(false);
  
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = event => {
      console.log(`handleChange ${event.target.value}`);
      deposit = Number(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!isDeposit && deposit > totalState) {
        alert("Insufficient funds for this cash back amount.");
        return;
      }
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
    };
    
  
    return (
      <form onSubmit={handleSubmit} className="account-container">
      <h2 id="total" className="account-balance">{status}</h2>
      <div className="button-group">
        <button onClick={() => { setIsDeposit(true); setModeSelected(true); }} className="button button-deposit">Deposit</button>
        <button onClick={() => { setIsDeposit(false); setModeSelected(true); }} className="button button-cashback">Cash Back</button>
      </div>
      {modeSelected && (
        <div className="atm-deposit">
          <ATMDeposit onChange={handleChange} isDeposit={isDeposit} />
        </div>
      )}
    </form>
    );
  };

  export default Account;

  