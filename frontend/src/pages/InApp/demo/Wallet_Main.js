import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  Box,
  Select,
  Input,
  Tooltip,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";

import SelectWalletModal from "./Wallet_modal";
import { useWeb3React } from "@web3-react/core";
import { networkParams } from "./Network";
import { connectors } from "./Connectors";
import { toHex, truncateAddress } from "./utils";

export default function Wallet_Main() {
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
  } = useWeb3React();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [network, setNetwork] = useState(undefined);
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  const handleInput = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };
  const handleOpen = () => {
    isOpen = true;
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]],
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  const signMessage = async () => {
    if (!library) return;
    try {
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [message, account],
      });
      setSignedMessage(message);
      setSignature(signature);
    } catch (error) {
      setError(error);
    }
  };

  const verifyMessage = async () => {
    if (!library) return;
    try {
      const verify = await library.provider.request({
        method: "personal_ecRecover",
        params: [signedMessage, signature],
      });
      setVerified(verify === account.toLowerCase());
    } catch (error) {
      setError(error);
    }
  };

  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) activate(connectors[provider]);
  }, []);

  return (
    <>
      <Typography
        variant="body2"
        sx={{ position: "absolute", top: 0, right: "15px" }}
      >
        If you're in the sandbox, first "Open in New Window" ⬆️
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              margin: 0,
              lineHeight: "1.15",
              fontWeight: 600,
            }}
          >
            Let's connect with
          </Typography>
          <Typography
            variant="h4"
            sx={{
              margin: 0,
              lineHeight: "1.15",
              fontWeight: 600,
              backgroundImage:
                "linear-gradient(90deg, #1652f0 0%, #b9cbfb 70.35%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Web3-React
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          {!active ? (
            <Button variant="contained" onClick={handleOpen}>
              Connect Wallet
            </Button>
          ) : (
            <Button variant="contained" onClick={disconnect}>
              Disconnect
            </Button>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 0",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography>{`Connection Status: `}</Typography>
            {active ? (
              <CheckCircleIcon sx={{ color: "green" }} />
            ) : (
              <WarningIcon sx={{ color: "#cd5700" }} />
            )}
          </Box>

          <Tooltip title={account} placement="right">
            <Typography>{`Account: ${truncateAddress(account)}`}</Typography>
          </Tooltip>
          <Typography>{`Network ID: ${chainId ? chainId : "No Network"}`}</Typography>
        </Box>
        {active && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                maxWidth: "sm",
                borderWidth: "1px",
                borderRadius: "lg",
                overflow: "hidden",
                padding: "10px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  variant="contained"
                  onClick={switchNetwork}
                  disabled={!network}
                >
                  Switch Network
                </Button>
                <FormControl>
                  <InputLabel>Select network</InputLabel>
                  <Select
                    value={network}
                    onChange={handleNetwork}
                    placeholder="Select network"
                  >
                    <MenuItem value="3">Ropsten</MenuItem>
                    <MenuItem value="4">Rinkeby</MenuItem>
                    <MenuItem value="42">Kovan</MenuItem>
                    <MenuItem value="1666600000">Harmony</MenuItem>
                    <MenuItem value="42220">Celo</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: "sm",
                borderWidth: "1px",
                borderRadius: "lg",
                overflow: "hidden",
                padding: "10px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  variant="contained"
                  onClick={signMessage}
                  disabled={!message}
                >
                  Sign Message
                </Button>
                <Input
                  placeholder="Set Message"
                  maxLength={20}
                  onChange={handleInput}
                  sx={{ width: "140px" }}
                />
                {signature ? (
                  <Tooltip title={signature} placement="bottom">
                    <Typography>{`Signature: ${truncateAddress(signature)}`}</Typography>
                  </Tooltip>
                ) : null}
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: "sm",
                borderWidth: "1px",
                borderRadius: "lg",
                overflow: "hidden",
                padding: "10px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  variant="contained"
                  onClick={verifyMessage}
                  disabled={!signature}
                >
                  Verify Message
                </Button>
                {verified !== undefined ? (
                  verified === true ? (
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CheckCircleIcon sx={{ color: "green" }} />
                      <Typography>Signature Verified!</Typography>
                    </Box>
                  ) : (
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <WarningIcon sx={{ color: "red" }} />
                      <Typography>Signature Denied!</Typography>
                    </Box>
                  )
                ) : null}
              </Box>
            </Box>
          </Box>
        )}
        <Typography>{error ? error.message : null}</Typography>
      </Box>
      <SelectWalletModal isOpen={isOpen} closeModal={handleClose} />
    </>
  );
}
