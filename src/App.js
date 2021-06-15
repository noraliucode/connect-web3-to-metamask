import React, {useEffect} from 'react'
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';


// Reference: https://medium.com/valist/how-to-connect-web3-js-to-metamask-in-2020-fee2b2edf58a

function App() {
  useEffect(()=>{
    const ethEnabled = async () => {
      // No more having to check window.web3 for its currentProvider, we can simply use window.ethereum as the provider itself
      if (window.ethereum) {
        // calls the pop-up UI dialogue that asks the user’s permission to connect the dApp to MetaMask.
        await window.ethereum.send('eth_requestAccounts');
        // create a window.web3 object with our own version of web3, using the window.ethereum object as the input provider
        window.web3 = new Web3(window.ethereum);
        return true;
      }
      return false;
    }
    ethEnabled()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
