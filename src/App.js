import React, {useEffect, useState} from 'react'
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';


// Reference: https://medium.com/valist/how-to-connect-web3-js-to-metamask-in-2020-fee2b2edf58a

function App() {
  useEffect(()=>{
    loadWeb3()
    loadBlockchainData()
  },[])

  const [account, setAccount] = useState('')

  const loadWeb3 = async() => {
    if (window.ethereum) {
      // calls the pop-up UI dialogue that asks the user’s permission to connect the dApp to MetaMask.
      await window.ethereum.send('eth_requestAccounts');
      // create a window.web3 object with our own version of web3, using the window.ethereum object as the input provider
      window.web3 = new Web3(window.ethereum);
      return true;
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      // DO NOTHING...
    }
  }

  const loadBlockchainData = async () => {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    console.log('loadBlockchainData accounts', accounts)
    setAccount(accounts[0])
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
        account: {account}
        </p>
        <button onClick={loadBlockchainData}>getAccounts</button>
        
      </header>
    </div>
  );
}

export default App;
