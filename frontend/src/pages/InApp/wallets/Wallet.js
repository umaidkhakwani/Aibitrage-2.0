import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import "../../../fonts/fonts.css";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const connectToMetaMask = async () => {
      try {
        if (typeof window.ethereum !== 'undefined' || (window.web3 && window.web3.currentProvider)) {
          const web3 = new Web3(window.ethereum || window.web3.currentProvider);

          // Prompt user to connect their MetaMask wallet
          await window.ethereum.enable();

          const accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);

            const ethBalance = await web3.eth.getBalance(accounts[0]);
            const etherBalance = web3.utils.fromWei(ethBalance, 'ether');
            setBalance(etherBalance);
          }
        } else {
          console.error('MetaMask is not installed');
        }
      } catch (error) {
        console.error('Error connecting to MetaMask:', error.message);
      }
    };

    connectToMetaMask();
  }, []);

  useEffect(() => {
    const handleAccountsChanged = async (accounts) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);

        const web3 = new Web3(window.ethereum);
        const ethBalance = await web3.eth.getBalance(accounts[0]);
        const etherBalance = web3.utils.fromWei(ethBalance, 'ether');
        setBalance(etherBalance);
      } else {
        setAccount(null);
        setBalance(null);
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        window.ethereum.off('accountsChanged', handleAccountsChanged);
      };
    }
  }, []);

  const backgroundColor = account ? 'rgba(80, 168, 131, 0.7)' : 'rgba(255, 61, 61, 0.6)';

  return (
    <Box sx={{
      background: backgroundColor, // Transparent background with 0.25 opacity
      padding: "10px",
      borderRadius: "10px",
    }}>
      {account ? (
        <Box>
          <Typography sx={{ fontFamily: "Aclonica", fontSize: "11px", color: "#FFFAFA" }}>
            Connected to Wallet! Your account: {account}
          </Typography>
          <Typography sx={{ fontFamily: "Aclonica", fontSize: "14px", color: "#FFFAFA" }}>
            Balance: {balance} ETH
          </Typography>
        </Box>
      ) : (
        <Typography sx={{ fontFamily: "Aclonica", fontSize: "12px", color: "#FFFAFA" }}>
          Connecting to Wallet...
        </Typography>
      )}
    </Box>
  );
};

export default ConnectWallet;
