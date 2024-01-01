import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import Image from "@mui/material/Image";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./Connectors";
import coin1 from "../../../images/coin1.png";


export default function SelectWalletModal({ isOpen, closeModal }) {
  const { activate } = useWeb3React();

  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography variant="h6">Select Wallet</Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={closeModal}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Button
          variant="outlined"
          onClick={() => {
            activate(connectors.coinbaseWallet);
            setProvider("coinbaseWallet");
            closeModal();
          }}
          fullWidth
        >
          <img
            src={coin1}
            alt="Coinbase Wallet Logo"
            width={25}
            height={25}
            borderRadius="3px"
          />
          <Typography>Coinbase Wallet</Typography>
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            activate(connectors.walletConnect);
            setProvider("walletConnect");
            closeModal();
          }}
          fullWidth
        >
          <img
            src= {coin1}
            alt="Wallet Connect Logo"
            width={26}
            height={26}
            borderRadius="3px"
          />
          <Typography>Wallet Connect</Typography>
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            activate(connectors.injected);
            setProvider("injected");
            closeModal();
          }}
          fullWidth
        >
          <img
            src={coin1}
            alt="Metamask Logo"
            width={25}
            height={25}
            borderRadius="3px"
          />
          <Typography>Metamask</Typography>
        </Button>
      </DialogContent>
      <DialogActions>
        {/* Additional actions can be added here if needed */}
      </DialogActions>
    </Dialog>
  );
}
