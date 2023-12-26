import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers'; // Updated import for provider
import { formatEther } from '@ethersproject/units'; // Updated import for formatEther
import "../../../fonts/fonts.css";


const Connect_TrustWallet = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    // Connect to the available Ethereum provider
    connectToEthereumProvider();
  }, []);

  const connectToEthereumProvider = async () => {
    try {
      // Check for the MetaMask provider
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3Provider(window.ethereum); // Updated provider creation
        await connectToWallet(web3);
      } else if (window.web3) {
        const web3 = new Web3Provider(window.web3.currentProvider); // Updated provider creation
        await connectToWallet(web3);
      } else {
        console.error('No Ethereum provider detected');
      }
    } catch (error) {
      console.error('Error connecting to Ethereum provider:', error.message);
    }
  };

  const connectToWallet = async (web3) => {
    const accounts = await web3.listAccounts();
    setAccount(accounts[0]);
    const ethBalance = await web3.getBalance(accounts[0]);
    const etherBalance = formatEther(ethBalance); // Updated formatEther usage
    setBalance(etherBalance);
  };

  const backgroundColor = account ? 'rgba(80, 168, 131, 0.7)' : 'rgba(255, 61, 61, 0.6)';

  return (
    <Box sx={{
      background: backgroundColor,
      padding: "10px",
      borderRadius: "10px",
    }}>
      {account ? (
        <Box>
          <Typography sx={{ fontFamily: "Aclonica", fontSize: "11px", color: "#FFFAFA" }}>Connected! Your account: {account}</Typography>
          <Typography sx={{ fontFamily: "Aclonica", fontSize: "14px", color: "#FFFAFA" }}>Balance: {balance} ETH</Typography>
        </Box>
      ) : (
        <Typography sx={{ fontFamily: "Aclonica", fontSize: "12px", color: "#FFFAFA" }}>Connecting...</Typography>
      )}
    </Box>
  );
};

export default Connect_TrustWallet;
