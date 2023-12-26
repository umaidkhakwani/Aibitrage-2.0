import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import "../../../fonts/fonts.css";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    // Function to connect to MetaMask
    const connectToMetaMask = async () => {
      // Check if MetaMask is installed
      if (window.ethereum) {
        try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);

          // Get the current account
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);

          // Get the balance
          const ethBalance = await web3.eth.getBalance(accounts[0]);
          // Convert balance from Wei to Ether
          const etherBalance = web3.utils.fromWei(ethBalance, 'ether');
          setBalance(etherBalance);
        } catch (error) {
          console.error('Error connecting to MetaMask:', error.message);
        }
      } else {
        console.error('MetaMask is not installed');
      }
    };

    connectToMetaMask();
  }, []);

  const backgroundColor =  account ? 'rgba(80, 168, 131, 0.7)' :'rgba(255, 61, 61, 0.6)';

  return (
    <Box sx={{
        background: backgroundColor, // Transparent background with 0.25 opacity
        padding:"10px",
        borderRadius:"10px",
    }}>
      {account ? (
        <Box>
          <Typography sx={{fontFamily:"Aclonica", fontSize:"11px", color:"#FFFAFA"}}>Connected to MetaMask! Your account: {account}</Typography>
          <Typography sx={{fontFamily:"Aclonica", fontSize:"14px", color:"#FFFAFA"}}>Balance: {balance} ETH</Typography>
        </Box>
      ) : (
        <Typography sx={{fontFamily:"Aclonica", fontSize:"12px", color:"#FFFAFA"}}>Connecting to MetaMask...</Typography>
      )}
    </Box>
  );
};

export default ConnectWallet;
