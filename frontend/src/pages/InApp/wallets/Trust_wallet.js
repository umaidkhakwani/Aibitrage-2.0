// import { Box, Typography } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import { Web3Provider } from '@ethersproject/providers';
// import { formatEther } from '@ethersproject/units';
// import { XrpProvider } from 'xrp-library'; // Example import for XRP
// import { BtcProvider } from 'btc-library'; // Example import for BTC
// import { UsdtProvider } from 'usdt-library'; // Example import for USDT
// import "../../../fonts/fonts.css";

// const Connect_TrustWallet = () => {
//   const [account, setAccount] = useState(null);
//   const [ethBalance, setEthBalance] = useState(null);
//   const [xrpBalance, setXrpBalance] = useState(null);
//   const [usdtBalance, setUsdtBalance] = useState(null);
//   const [btcBalance, setBtcBalance] = useState(null);

//   useEffect(() => {
//     // Connect to the available Ethereum provider
//     connectToEthereumProvider();
//     // Connect to the XRP, USDT, and BTC providers
//     connectToXrpProvider();
//     connectToUsdtProvider();
//     connectToBtcProvider();
//   }, []);

//   const connectToEthereumProvider = async () => {
//     // ... (your existing Ethereum connection code)
//   };

//   const connectToXrpProvider = async () => {
//     try {
//       // Assuming XrpProvider has a similar interface to Web3Provider
//       const xrpProvider = new XrpProvider();
//       const xrpAccount = await xrpProvider.getAccount();
//       const xrpBalance = await xrpProvider.getBalance(xrpAccount);
//       setXrpBalance(xrpBalance);
//     } catch (error) {
//       console.error('Error connecting to XRP provider:', error.message);
//     }
//   };

//   const connectToUsdtProvider = async () => {
//     try {
//       // Assuming UsdtProvider has a similar interface to Web3Provider
//       const usdtProvider = new UsdtProvider();
//       const usdtAccount = await usdtProvider.getAccount();
//       const usdtBalance = await usdtProvider.getBalance(usdtAccount);
//       setUsdtBalance(usdtBalance);
//     } catch (error) {
//       console.error('Error connecting to USDT provider:', error.message);
//     }
//   };

//   const connectToBtcProvider = async () => {
//     try {
//       // Assuming BtcProvider has a similar interface to Web3Provider
//       const btcProvider = new BtcProvider();
//       const btcAccount = await btcProvider.getAccount();
//       const btcBalance = await btcProvider.getBalance(btcAccount);
//       setBtcBalance(btcBalance);
//     } catch (error) {
//       console.error('Error connecting to BTC provider:', error.message);
//     }
//   };

//   const backgroundColor = account ? 'rgba(80, 168, 131, 0.7)' : 'rgba(255, 61, 61, 0.6)';

//   return (
//     <Box sx={{
//       background: backgroundColor,
//       padding: "10px",
//       borderRadius: "10px",
//     }}>
//       {account ? (
//         <Box>
//           <Typography sx={{ fontFamily: "Aclonica", fontSize: "11px", color: "#FFFAFA" }}>Connected! Your account: {account}</Typography>
//           <Typography sx={{ fontFamily: "Aclonica", fontSize: "14px", color: "#FFFAFA" }}>ETH Balance: {ethBalance} ETH</Typography>
//           <Typography sx={{ fontFamily: "Aclonica", fontSize: "14px", color: "#FFFAFA" }}>XRP Balance: {xrpBalance} XRP</Typography>
//           <Typography sx={{ fontFamily: "Aclonica", fontSize: "14px", color: "#FFFAFA" }}>USDT Balance: {usdtBalance} USDT</Typography>
//           <Typography sx={{ fontFamily: "Aclonica", fontSize: "14px", color: "#FFFAFA" }}>BTC Balance: {btcBalance} BTC</Typography>
//         </Box>
//       ) : (
//         <Typography sx={{ fontFamily: "Aclonica", fontSize: "12px", color: "#FFFAFA" }}>Connecting...</Typography>
//       )}
//     </Box>
//   );
// };

// export default Connect_TrustWallet;


// -----------------------------------------------    try 2   ---------------------------------------------------


// Import necessary modules and components

// import { Box, Typography } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import { Networks, useIsConnected, XRPLClient, useBalance, useWalletAddress, useWallet } from "@nice-xrpl/react-xrpl";

// import "../../../fonts/fonts.css";

// function Connect_TrustWallet () {
//     const [account, setAccount] = useState(null);
//     const [xrpBalance, setXrpBalance] = useState(null);

//     // Make sure useBalance is properly defined or imported
//     // const getXrpBalance = async (xrpAccount) => {
//     //     const xrpBalance =  useBalance(); // Correct the function call  
//     // };
//     const isConnected = useIsConnected();
//     const address = useWalletAddress();
//     const wallet = useWallet();
//     // const balance = useBalance();


//     useEffect(() => {
//         const connectToTrustWallet = async () => {
//             if (window.ethereum) {
//                 try {
//                     await window.ethereum.request({ method: 'eth_requestAccounts' });
//                     const web3 = new Web3(window.ethereum);
//                     const accounts = await web3.eth.getAccounts();
//                     setAccount(accounts[0]);

//                     // Retrieve XRP balance using @nice-xrpl/react-xrpl
//                     const xrpAccount = "rwEDihU9dQ15voWEAHse2hvRPR9xJw9tvN";
//                     console.log("Connected", isConnected);
//                     console.log("address", address);
//                     console.log("wallet", wallet.seed);
//                     // console.log("balance", balance);
//                     // setXrpBalance(await getXrpBalance(xrpAccount));
//                 } catch (error) {
//                     console.error('Error connecting to TrustWallet:', error.message);
//                 }
//             } else {
//                 console.error('TrustWallet is not installed');
                
//             }
//         };

//         connectToTrustWallet();
//     }, []);

//     const backgroundColor = account ? 'rgba(80, 168, 131, 0.7)' : 'rgba(255, 61, 61, 0.6)';

//     return (
//         <Box sx={{
//             background: backgroundColor,
//             padding: "10px",
//             borderRadius: "10px",
//         }}>
//             {account ? (
//                 <Box>
//                     <Typography sx={{ fontFamily: "Aclonica", fontSize: "11px", color: "#FFFAFA" }}>
//                         Connected to TrustWallet! Your account: {account}
//                     </Typography>
//                     <Typography sx={{ fontFamily: "Aclonica", fontSize: "14px", color: "#FFFAFA" }}>
//                         Balance (XRP): {xrpBalance} XRP
//                     </Typography>
//                 </Box>
//             ) : (
//                 <Typography sx={{ fontFamily: "Aclonica", fontSize: "12px", color: "#FFFAFA" }}>
//                     Connecting to TrustWallet...
//                 </Typography>
//             )}
//         </Box>
//     );
// };

// export default Connect_TrustWallet;


// -----------------------------------------------    try 2   ---------------------------------------------------

import React, { useState } from 'react';

function Connect_TrustWallet() {
  const [connected, setConnected] = useState(false);
  const [balances, setBalances] = useState({
    btc: 0,
    eth: 0,
    bnb: 0,
  });

  const connectToTrustWallet = async () => {
    try {
      // Check if Trust Wallet extension is installed
      if (window.trustWallet) {
        // Connect to Trust Wallet extension
        await window.trustWallet.enable();

        // Fetch balances for BTC, ETH, and BNB
        const btcBalance = await window.trustWallet.getBalance('bitcoin');
        const ethBalance = await window.trustWallet.getBalance('ethereum');
        const bnbBalance = await window.trustWallet.getBalance('binance');
        

        setBalances({
          btc: btcBalance,
          eth: ethBalance,
          bnb: bnbBalance,
        });

        setConnected(true);
      } else {
        alert('Trust Wallet extension not found. Please install and activate it.');
      }
    } catch (error) {
      console.error('Error connecting to Trust Wallet:', error);
      alert('Error connecting to Trust Wallet. Please try again.');
    }
  };

  return (
    <div>
      {!connected ? (
        <button onClick={connectToTrustWallet}>Connect to Trust Wallet</button>
      ) : (
        <div>
          <h1>Connected to Trust Wallet</h1>
          <p>BTC Balance: {balances.btc}</p>
          <p>ETH Balance: {balances.eth}</p>
          <p>BNB Balance: {balances.bnb}</p>
        </div>
      )}
    </div>
  );
}

export default Connect_TrustWallet;
