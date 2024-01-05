import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { XRPLClient } from '@nice-xrpl/react-xrpl';

import animation6 from "../../images/animation6.gif";
import bg3 from "../../images/app_bg.gif";
import sidebar from "../../images/sidebar.png";
import Bridge from "../../images/bridge_img.png";
import Swap from "../../images/swap_img.png";
import Pool from "../../images/pool_img.png";
import Bridge_select from "../../images/bridge_select.png";
import Swap_select from "../../images/swap_select.png";
import Pool_select from "../../images/pool_select.png";

import transfer from "../../images/transfer.png";
import coin1 from "../../images/coin1.png";
import connect_wallet from "../../images/connect_wallet.png";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import logo_top from "../../images/logo_top.png";
import app_sidebar from "../../images/app_sidebar.gif";
import footer_img from "../../images/footer.svg";

import inApp from "../../images/inApp.svg";
import swap_background from "../../images/pools_background.svg";
import pools_background from "../../images/pools_background.svg";
import swap_left from "../../images/swap_left.svg";
import swap_right from "../../images/swap_right.svg";

import binance_logo from "../../images/integration1.png";
import coinbase_logo from "../../images/integration2.png";
import metamask_logo from "../../images/integration5.png";
import trust_wallet_logo from "../../images/trust_wallet_logo.png";

import bridge_sidebar from "../../images/bridge_sidebar.png";
import pools_sidebar from "../../images/pools_sidebar.png";
import swap_sidebar from "../../images/swap_sidebar.png";

import "../../fonts/fonts.css";
import FooterFunction from "../../footer";
import Bridge_function from "./Bridge";
import Swap_function from "./Swap";
import Pool_function from "./Pool";
import ReplyIcon from "@mui/icons-material/Reply";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import ConnectWallet from "./wallets/Wallet";
import Trust_wallet from "./wallets/Trust_wallet";
import Connect_TrustWallet from "./wallets/Trust_wallet";

function Main() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isXSmScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const matches = useMediaQuery("(min-width:600px)");

  const navigate = useNavigate();
  const [pageOption, setpageOption] = useState("swap");
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [value, setValue] = useState(-1);
  const [connect_metaMask, setconnect_metaMask] = useState(false);
  const [connect_trustWallet, setconnect_trustWallet] = useState(false);
  const [connect_coinbase, setconnect_coinbase] = useState(false);

  const TabsContainer = styled.div`
    display: flex;
    overflow-x: auto;
    justify-content: ${({ isSmScreen }) => (isSmScreen ? "center" : "center")};
    background-color: transparent;
    margin: ${({ isSmScreen }) => (isSmScreen ? "20px 0px 0px 0px" : "0px")};
    width: ${({ isSmScreen }) =>
      isSmScreen ? "100%" : "60%"}; /* Ensure the tabs take the full width */
  `;
  const TabItem = styled.div`
    padding: 10px 20px;
    font-family: "Aclonica", sans-serif;
    color: ${({ selected }) => (selected ? "#50A883" : "white")};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #50a883;
    }
  `;

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
  };

  const handleClickOpen = () => {
    console.log("clicked");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick_Home = () => {
    navigate("/");
  };

  const handle_metamask_connect = () => {
    console.log("metamask");
    setconnect_metaMask(true);
    setconnect_coinbase(false);
    setconnect_trustWallet(false);
  };

  const handle_trustWallet_connect = () => {
    console.log("trustWallet");
    setconnect_metaMask(false);
    setconnect_coinbase(false);
    setconnect_trustWallet(true);
  };

  const handle_coinbase_connect = () => {
    console.log("coinbase");
    setconnect_metaMask(false);
    setconnect_coinbase(true);
    setconnect_trustWallet(false);
  };


  return (
    <div>
      <Paper
        sx={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          margin: 0,
          padding: 0,
          backgroundColor: "black",
        }}
      >
        {/* ----------------------------------------------  Side Option ------------------------------------------------------- */}
        {!isMdScreen ? (
          <Box
            sx={{
              width: "175px",
              height: "275px",
              left: "10px",
              zIndex: 100,
              position: "fixed",
              top: "23px",
              background: "rgba(0, 0, 0, 0.40)", // Transparent background with 0.25 opacity
              borderRadius: "20px",
            }}
          >
            <Grid
              container
              direction="column"
              style={{
                width: "100%",
                // height: "90%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                flexWrap: "nowrap",
                background: "transparent",
                // background: `url(${app_sidebar})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                borderRadius: "7px",
              }}
            >
              <Grid item md={2}>
                <Box
                  sx={{
                    padding: 0,
                    marginTop: "5px",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <img
                    src={footer_img}
                    alt="logo"
                    width="50px"
                    style={{ margin: "0px", cursor: "pointer" }}
                    onClick={handleClick_Home}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "26",
                      color: "white",
                      margin: "10px",
                    }}
                  >
                    AI BITRAGE
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={10}>
                <Box sx={{ width: "100%", height: "100%" }}>
                  <Container
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        padding: "10px 10px",
                        margin: "10px 0px",
                        borderRadius: "10px",
                        cursor:"pointer",
                        background:
                          pageOption === "pool"
                            ? "linear-gradient(101deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)"
                            : "transparent",
                      }}
                      onClick={() => setpageOption("pool")}
                    >
                      <img
                        src={pools_sidebar}
                        alt="logo"
                        style={{
                          width: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      <Typography sx={{ fontSize: "14px", color: "white" }}>
                        Pools
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        padding: "10px 10px",
                        margin: "10px 0px",
                        borderRadius: "10px",
                        cursor:"pointer",
                        background:
                          pageOption === "bridge"
                            ? "linear-gradient(101deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)"
                            : "transparent",
                      }}
                      onClick={() => setpageOption("bridge")}
                    >
                      <img
                        src={bridge_sidebar}
                        alt="logo"
                        style={{
                          width: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      <Typography sx={{ fontSize: "14px", color: "white" }}>
                        Bridge
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        margin: "10px 0px",
                        padding: "10px 10px",
                        cursor:"pointer",
                        borderRadius: "10px",
                        background:
                          pageOption === "swap"
                            ? "linear-gradient(101deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)"
                            : "transparent",
                      }}
                      onClick={() => setpageOption("swap")}
                    >
                      <img
                        src={swap_sidebar}
                        alt="logo"
                        style={{
                          width: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      <Typography sx={{ fontSize: "14px", color: "white" }}>
                        Swap
                      </Typography>
                    </Box>
                  </Container>
                </Box>
                {/* <Box
                sx={{
                  // background: "white",
                  color: "white",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Tooltip title="Bridge" placement="bottom-end">
                  {pageOption === "bridge" ? (
                    <img
                      src={Bridge_select}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                    />
                  ) : (
                    <img
                      src={Bridge}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                      onClick={() => setpageOption("bridge")}
                    />
                  )}
                </Tooltip>
                <Tooltip title="Pool" placement="bottom-end">
                  {pageOption === "pool" ? (
                    <img
                      src={Pool_select}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                    />
                  ) : (
                    <img
                      src={Pool}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                      onClick={() => setpageOption("pool")}
                    />
                  )}
                </Tooltip>

                <Tooltip title="Swap" placement="bottom-end">
                  {pageOption === "swap" ? (
                    <img
                      src={Swap_select}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                    />
                  ) : (
                    <img
                      src={Swap}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                      onClick={() => setpageOption("swap")}
                    />
                  )}
                </Tooltip>
              </Box> */}
              </Grid>
            </Grid>
          </Box>
        ) : null}

        {/* Header for medium and small screens */}

        {isMdScreen ? (
          <Box
            sx={{
              width: "100%",
              height: isSmScreen ? "130px " : "85px", // Adjusted height
              zIndex: "5",
              position: "absolute",
              // left: "5%",
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              flexDirection: isSmScreen ? "column" : "row",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(8px)",
              borderRadius: "10px", // Added border radius for rounded corners
            }}
          >
            <img
              src={footer_img}
              alt="logo"
              style={{ margin: "0px", cursor: "pointer", width: "55px" }}
              onClick={handleClick_Home}
            />
            <TabsContainer isSmScreen={isSmScreen}>
              <TabItem
                selected={activeTab === "Swap"}
                onClick={() => {
                  setpageOption("swap");
                  setActiveTab("Swap");
                }}
              >
                Swap
              </TabItem>
              <TabItem
                selected={activeTab === "Pool"}
                onClick={() => {
                  setpageOption("pool");
                  setActiveTab("Pool");
                }}
              >
                Pool
              </TabItem>
              <TabItem
                selected={activeTab === "Bridge"}
                onClick={() => {
                  setpageOption("bridge");
                  setActiveTab("Bridge");
                }}
              >
                Bridge
              </TabItem>
            </TabsContainer>
            {/* <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{
                backgroundColor: "transparent", // Set tabs background to transparent
                width: isXSmScreen ? "80%" : "45%", // Adjust the width here
                "& .MuiTabs-scrollButtons": {
                  // Customize the color of the scroll buttons here
                  color: "white", // Replace with your desired color
                },
              }}
            >
              <Tab
                label="Swap"
                sx={{ color: "white" }}
                onClick={() => setpageOption("swap")}
              />
              <Tab
                label="Pool"
                sx={{ color: "white" }}
                onClick={() => setpageOption("pool")}
              />
              <Tab
                label="Bridge"
                sx={{ color: "white" }}
                onClick={() => setpageOption("bridge")}
              />
            </Tabs> */}
          </Box>
        ) : null}

        {/* ------------------------------------------------------------------------------------------------------------------- */}
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${swap_background})`,
            backgroundSize: "cover",
            overflowY: "auto",
            margin: 0,
            padding: 0,
            willChange: "transform", // Add will-change property
            // position: "relative",
          }}
        >
          <Grid container sx={{ width: "100%", height: "100%" }}>
            <Grid item xs={1} md={1.75} lg={1.75}></Grid> {/* Empty Grid */}
            {/* ----------------------------------------------  Connect Wallet Dialog ------------------------------------------------------- */}
            {/* <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <Paper sx={{ background: "rgba(31, 142, 190, 0.7)" }}>
                <Box
                  sx={{
                    padding: "16px",
                    position: "relative",
                    width: "400px",
                    // background: "rgba(255, 255, 255, 0.20)", // Transparent background with 0.25 opacity
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: "white",
                      marginBottom: "16px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                    }}
                  >
                    Connect to a Wallet
                  </Typography>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      color: "white",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "40px",
                    }}
                  >
                    {[
                      { id: 1, name: "Metamask", logo: metamask_logo },
                      { id: 2, name: "Coinbase", logo: coinbase_logo },
                      { id: 3, name: "Trust Wallet", logo: trust_wallet_logo },
                      { id: 4, name: "Binance", logo: binance_logo },
                    ].map((wallet) => (
                      <Box
                        key={wallet.id}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          width: "100%",
                          height: "50px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          marginBottom: "8px",
                          backgroundColor: "#2C2C2C", // White background with opacity
                        }}
                      >
                        <img
                          src={wallet.logo}
                          alt={`${wallet.name} Logo`}
                          style={{
                            width: "40px",
                            height: "80%",
                            margin: "0px 10px",
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "Maragsa",
                            fontSize: "14px",
                            color: "#9E9D9D",
                          }}
                        >
                          {wallet.name}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            marginLeft: "auto",
                            backgroundColor: "#50A883",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "#40876E",
                            },
                          }}
                        >
                          Connect
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Dialog> */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "400px",
                  background: `linear-gradient(to bottom, #391932, rgba(0, 0, 0, 0.6))`, // Gradient background
                  // bgcolor: "rgba(128, 0, 128, 0.6)", //purplish
                  // background: "rgba(0, 0, 0, 0.40)", // Transparent background with 0.25 opacity

                  borderRadius: "20px",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "white",
                    marginBottom: "16px",
                    fontFamily: "Aclonica",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  Connect to a Wallet
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    color: "white",
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "40px",
                  }}
                >
                  {[
                    { id: 1, name: "Metamask", logo: metamask_logo },
                    { id: 2, name: "Coinbase", logo: coinbase_logo },
                    { id: 3, name: "Trust Wallet", logo: trust_wallet_logo },
                    // { id: 4, name: "Binance", logo: binance_logo },
                  ].map((wallet) => (
                    <Box
                      key={wallet.id}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: "100%",
                        height: "50px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        marginBottom: "8px",
                        backgroundColor: "#2C2C2C", // White background with opacity
                      }}
                    >
                      <Box
                        sx={{
                          width: "50%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={wallet.logo}
                          alt={`${wallet.name} Logo`}
                          style={{
                            width: "35px",
                            height: "70%",
                            margin: "0px 10px",
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "Maragsa",
                            fontSize: "14px",
                            color: "#9E9D9D",
                          }}
                        >
                          {wallet.name}
                        </Typography>
                      </Box>
                      {/* <Button
                        variant="contained"
                        sx={{
                          marginLeft: "auto",
                          width:"100px",
                          backgroundColor: "#50A883",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#40876E",
                          },
                        }}
                      >
                        Connect
                      </Button> */}
                      <Box
                        sx={{
                          width: "50%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                        onClick={
                          wallet.name === "Metamask" ? handle_metamask_connect : (wallet.name === "Coinbase" ? handle_coinbase_connect : handle_trustWallet_connect)
                          // wallet.name === "Metamask" ? handle_metamask_connect : (wallet.name === "Coinbase" ? handle_coinbase_connect : handle_trustWallet_connect)
                        }
                      >
                        <button
                          style={{
                            background: "#50A883",
                            borderRadius: "20px",
                            border: "none",
                            fontFamily: "Aclonica",
                            width: "100px",
                            height: "30px",
                            cursor: "pointer",
                            color: "white",
                            fontSize: isSmScreen ? "11px" : "12px",
                          }}
                        >
                          Connect
                        </button>
                      </Box>
                    </Box>
                  ))}
                </Box>
                {connect_metaMask ? <ConnectWallet /> : ""}
                <XRPLClient>
                {connect_trustWallet ? <Trust_wallet /> : ""}
                </XRPLClient>
                {connect_coinbase ? <ConnectWallet /> : ""}
              </Box>
            </Modal>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            {/* swap container */}
            <Grid
              item
              xs={12}
              md={10.25}
              lg={10.25}
              zIndex={4}
              sx={{
                background: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
              }}
            >
              {!isSmScreen && pageOption !== "pool"  ? (
                <Box
                  sx={{
                    display: "flex",
                    // justifyContent: "center",
                    width: "200px",
                    height: "35px",
                    zIndex: "3",
                    background: "5C2D7C",
                    flexDirection: "row",
                    position: "absolute",
                    right: "10px",
                    top: isMdScreen ? "50px":"0px",
                    marginTop: "40px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // background: "white",
                      width: "60%",
                      borderRadius: "7px",
                      cursor: "pointer",
                      margin: "2px",
                      background: "#50A883",
                    }}
                    onClick={handleClickOpen}
                  >
                    <Typography
                      style={{
                        fontFamily: "Aclonica",
                        fontSize: "12px",
                        color: "#ffff",
                      }}
                    >
                      Connect Wallet
                    </Typography>
                  </Box>
                  <img
                    src={logo_top}
                    alt="Documentation Image"
                    style={{ width: "18%", height: "100%" }}
                  />
                </Box>
              ) : null}

              {pageOption === "swap" ? (
                <Swap_function />
              ) : pageOption === "bridge" ? (
                <Bridge_function />
              ) : pageOption === "pool" ? (
                <Pool_function />
              ) : (
                ""
              )}

              {/* Connect Wallet */}
              {pageOption === "pool" ? "" : null}
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </div>
  );
}

export default Main;
