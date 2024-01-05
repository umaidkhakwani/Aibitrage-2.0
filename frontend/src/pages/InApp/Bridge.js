import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";

import Bridge from "../../images/Bridge.png";
import bridge_transfer from "../../images/bridge_transfer.png";
import coin1 from "../../images/coin1.png";
import coin2 from "../../images/coin2.png";
import arrow from "../../images/arrow.png";
import btc from "../../images/btc.png";
import usdt from "../../images/usdt.png";
import eth from "../../images/eth.png";
import xrp from "../../images/xrp.png";

import polygon_left from "../../images/Polygon_left.png";
import polygon_right from "../../images/Polygon_right.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import swap_left from "../../images/swap_left.svg";
import swap_right from "../../images/swap_right.svg";

import "../../fonts/fonts.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";

function Bridge_function() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const matches = useMediaQuery("(min-width:600px)");

  const dummyMenuItems = [
    { id: 1, label: "BTC", value: 0.234, wallet: 10, rate: 40000, image: btc },
    {
      id: 2,
      label: "USDT",
      value: 0.435,
      wallet: 11,
      rate: 23004,
      image: usdt,
    },
    { id: 3, label: "BNB", value: 0.74, wallet: 12, rate: 650, image: btc },
    {
      id: 4,
      label: "Solana",
      value: 0.634,
      wallet: 14,
      rate: 1578,
      image: usdt,
    },
  ];

  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [userInput, setUserInput] = useState(0);
  const [coinSelected, setcoinSelected] = useState("");

  const [profileAnchorEl2, setProfileAnchorEl2] = useState(null);
  const [userInput2, setUserInput2] = useState(0);
  const [coinSelected2, setcoinSelected2] = useState("");

  const [profileAnchorEl3, setProfileAnchorEl3] = useState(null);
  const [userInput3, setUserInput3] = useState(0);
  const [coinSelected3, setcoinSelected3] = useState("");

  const [receiverAddress, setReceiverAddress] = useState("");
  const [connected, setconnected] = useState(false);
  const [amount, setamount] = useState("");
  const [coinsData, setCoinsData] = useState([]);

  const handleApi = async () => {
    const nameAndPriceArray = [];

    axios
    // .get("http://194.163.45.79:3001/api/cryptocurrency")
    .get("http://localhost:3001/api/cryptocurrency")
      .then((response) => {
        const data = response.data;
        data.data.forEach((coin) => {
          console.log("coin :", coin.quote.USD.price);
          let name = coin.name;
          let price = coin.quote.USD.price;
          let symbol = coin.symbol;
          let change = coin.quote.USD.percent_change_1h;
          let image =
            symbol === "BTC"
              ? btc
              : symbol === "ETH"
              ? eth
              : symbol === "USDT"
              ? usdt
              : xrp;
          if (
            symbol === "BTC" ||
            symbol === "ETH" ||
            symbol === "USDT" ||
            symbol === "XRP"
          )
            nameAndPriceArray.push({ name, price, symbol, change, image });
        });
        console.log("API Response:", response.data);
        console.log("nameAndPriceArray:", nameAndPriceArray);
        setCoinsData(nameAndPriceArray);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    handleApi();
  }, []);

  const handleReceiver_address = (event) => {
    const value = event.target.value;
    setReceiverAddress(value);
    console.log("Typed input:", value);
  };

  const handle_amount = (event) => {
    const value = event.target.value;
    setamount(value);
    console.log("Typed amount:", value);
  };

  const handleProfileClose = () => {
    console.log("wdef");
    setProfileAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(menuItem);
    setcoinSelected(menuItem);
    handleProfileClose(); // Close the menu when an item is selected
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    // Check if the input is a number
    if (!isNaN(value)) {
      setUserInput(value);
    } else {
      setUserInput(0);
    }
  };

  const handleProfileClose2 = () => {
    setProfileAnchorEl2(null);
  };

  const handleMenuItemClick2 = (menuItem) => {
    console.log(menuItem);
    setcoinSelected2(menuItem);
    handleProfileClose2();
  };

  const handleInputChange2 = (event) => {
    const value = event.target.value;
    // Check if the input is a number
    if (!isNaN(value)) {
      setUserInput2(value);
    } else {
      setUserInput2(0);
    }
  };

  const handleProfileClose3 = () => {
    setProfileAnchorEl3(null);
  };

  const handleMenuItemClick3 = (menuItem) => {
    console.log(menuItem);
    setcoinSelected3(menuItem);
    handleProfileClose3();
  };

  const handleInputChange3 = (event) => {
    const value = event.target.value;
    // Check if the input is a number
    if (!isNaN(value)) {
      setUserInput3(value);
    } else {
      setUserInput3(0);
    }
  };

  const handle_connect = () => {
    setconnected(true);
  };

  useEffect(() => {
    handleProfileClose();
  }, [coinSelected]);

  useEffect(() => {
    handleProfileClose2();
  }, [coinSelected2]);

  useEffect(() => {
    handleProfileClose3();
  }, [coinSelected3]);

  useEffect(() => {
    setconnected(false);
  }, [coinSelected3, coinSelected, coinSelected2]);

  return (
    <div>
      {/* 1st Box */}
    {/* -----------------------------------------  Overlay -------------------------------------- */}

      <Paper
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.25)", // Semi-transparent black overlay
              zIndex: "4", // Place the overlay above the background image
            }}
          ></Paper>
    {/* ------------------------------------------------------------------------------------------ */}

      <Box
        sx={{
          width: "900px",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={swap_left}
            alt="Your Image"
            style={{
              width: "144px",
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.20)", // Transparent background with 0.25 opacity
              width: isSmScreen ? "300px" : isMdScreen ? "500px" : "500px",
              height: isSmScreen ? "380px" : "350px",
              borderRadius: "20px",
              padding: 0,
              position: "relative",
              marginTop: isSmScreen ? "217px" : isMdScreen ? "65px" : "27px",
            }}
          >
            {/* Bridge container  */}

            <Grid
              container
              sx={{
                width: "100%",
                height: "100%",
                margin: "0px",
                padding: "0px",
              }}
            >
              {/* First Grid which contains icons */}

              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                sx={{
                  height: "25%",
                  width: "100%",
                  zIndex: "1",
                  position: "relative",
                }}
              >
                <Container
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <img
                    src={coinSelected.image || btc}
                    alt="Coin1"
                    style={{
                      width: "40px",
                      height: "42px",
                      position: "relative",
                    }}
                  />
                  <img
                    src={polygon_left}
                    alt="polygon_left"
                    style={{
                      width: "90px",
                      height: "40px",
                      marginLeft: "-15px",
                    }}
                  />
                  <img
                    src={bridge_transfer}
                    alt="bridge_transfer"
                    style={{ width: "33px", height: "33px" }}
                  />
                  <img
                    src={polygon_right}
                    alt="polygon_right"
                    style={{
                      width: "90px",
                      height: "40px",
                      marginRight: "-15px",
                    }}
                  />
                  <img
                    src={coinSelected2.image || usdt}
                    alt="coin2"
                    style={{
                      width: "40px",
                      height: "42px",
                      position: "relative",
                    }}
                  />
                </Container>
              </Grid>

              {/* second Grid which contains fields */}

              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                sx={{
                  height: "50%",
                  width: "100%",
                  zIndex: "1",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "33%",
                    background: "transparent",
                    display: "flex",
                    direction: "row",
                  }}
                >
                  <Container
                    sx={{
                      height: "80%",
                      width: "45%",
                      background: "black",
                      borderRadius: "20px",
                      // boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: isSmScreen ? "84%" : isMdScreen ? "80%" : "93%",
                        height: "25px",
                        position: "absolute",
                        left: "15px",
                        top: "10px",
                      }}
                      onClick={(event) =>
                        setProfileAnchorEl(event.currentTarget)
                      }
                    >
                      <Typography
                        sx={{
                          fontFamily: "Aclonica",
                          fontSize: isSmScreen ? "11px" : "14px",
                          width: "80%",
                          color: "white",
                          margin: "5px",
                        }}
                      >
                        {coinSelected.symbol || "Network"}
                      </Typography>
                      <KeyboardArrowDownIcon sx={{ color: "white" }} />
                      <Menu
                        anchorEl={profileAnchorEl}
                        open={Boolean(profileAnchorEl)}
                        onClose={handleProfileClose}
                        PaperProps={{
                          sx: {
                            backgroundColor: "rgba(0, 0, 0, 0.8)", // Background color with opacity
                            borderRadius: "10px",
                            minWidth: "170px",
                            marginTop: "5px",
                          },
                        }}
                      >
                        {coinsData.map((menuItem) => (
                          <MenuItem
                            key={menuItem.id}
                            sx={{
                              color: "#FFFFFF",
                              justifyContent: "center",
                              width: "100%",
                              padding: "0px",
                              margin: "15px 0px",
                            }}
                            onClick={() => handleMenuItemClick(menuItem)}
                          >
                            <Grid
                              container
                              direction="row"
                              sx={{
                                width: "80%",
                                height: "50%",
                                borderRadius: "15px",
                                cursor: "pointer",
                              }}
                            >
                              <Grid item>
                                <img
                                  src={menuItem.image}
                                  alt={`Coin${menuItem.id}`}
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                    marginRight: "10px",
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <Grid container direction="column">
                                  <Grid item>
                                    <Typography
                                      style={{
                                        fontFamily: "Poly",
                                        fontSize: "14px",
                                        // color: "#9E9D9D",
                                        margin: "0px 0px 0px 0px",
                                      }}
                                    >
                                      {menuItem.symbol}
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      style={{
                                        fontFamily: "Poppins",
                                        fontSize: "11px",
                                        color: "black",
                                        // color: "#9E9D9D",
                                        margin: "0px 0px 0px 3px",
                                      }}
                                    >
                                      ${(menuItem && menuItem.price) ? menuItem.price.toFixed(8) : "49000"}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </Container>
                  <Container
                    sx={{
                      height: "80%",
                      width: "45%",
                      background: "black",
                      borderRadius: "20px",
                      // boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: isSmScreen ? "84%" : isMdScreen ? "80%" : "93%",
                        height: "25px",
                        position: "absolute",
                        left: "15px",
                        top: "10px",
                      }}
                      onClick={(event) =>
                        setProfileAnchorEl2(event.currentTarget)
                      }
                    >
                      <Typography
                        sx={{
                          fontFamily: "Aclonica",
                          fontSize: isSmScreen ? "11px" : "14px",
                          width: "80%",
                          color: "white",
                          margin: "5px",
                        }}
                      >
                        {coinSelected2.symbol || "Network"}
                      </Typography>
                      <KeyboardArrowDownIcon sx={{ color: "white" }} />
                      <Menu
                        anchorEl={profileAnchorEl2}
                        open={Boolean(profileAnchorEl2)}
                        onClose={handleProfileClose2}
                        PaperProps={{
                          sx: {
                            backgroundColor: "rgba(0, 0, 0, 0.8)", // Background color with opacity
                            borderRadius: "10px",
                            minWidth: "170px",
                            marginTop: "5px",
                          },
                        }}
                      >
                        {coinsData.map((menuItem) => (
                          <MenuItem
                            key={menuItem.id}
                            sx={{
                              color: "#FFFFFF",
                              justifyContent: "center",
                              width: "100%",
                              padding: "0px",
                              margin: "15px 0px",
                            }}
                            onClick={() => handleMenuItemClick2(menuItem)}
                          >
                            <Grid
                              container
                              direction="row"
                              sx={{
                                width: "80%",
                                height: "50%",
                                borderRadius: "15px",
                                cursor: "pointer",
                              }}
                            >
                              <Grid item>
                                <img
                                  src={menuItem.image}
                                  alt={`Coin${menuItem.id}`}
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                    marginRight: "10px",
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <Grid container direction="column">
                                  <Grid item>
                                    <Typography
                                      style={{
                                        fontFamily: "Poly",
                                        fontSize: "14px",
                                        // color: "#9E9D9D",
                                        margin: "0px 0px 0px 0px",
                                      }}
                                    >
                                      {menuItem.symbol}
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      style={{
                                        fontFamily: "Poppins",
                                        fontSize: "11px",
                                        color: "black",
                                        // color: "#9E9D9D",
                                        margin: "0px 0px 0px 3px",
                                      }}
                                    >
                                      ${(menuItem && menuItem.price) ? menuItem.price.toFixed(2) : "49000"}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </Container>
                </Box>

                {/* Not Connected */}

                <Box
                  sx={{
                    width: "100%",
                    height: "33%",
                    background: "transparent",
                  }}
                >
                  <Container
                    sx={{
                      height: "80%",
                      width: "95%",
                      background: "black",
                      borderRadius: "20px",
                      // boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: isSmScreen ? "84%" : isMdScreen ? "93%" : "93%",
                        height: "25px",
                        position: "absolute",
                        left: "15px",
                        top: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Aclonica",
                          fontSize: isSmScreen ? "11px" : "14px",
                          width: "80%",
                          color: "white",
                          margin: "5px",
                        }}
                      >
                        {connected ? "Connected" : "Not Connected"}
                      </Typography>
                      <button
                        style={{
                          background: "#50A883",
                          borderRadius: "20px",
                          border: "none",
                          fontFamily: "Aclonica",
                          width: "115px",
                          height: "30px",

                          color: "white",
                          fontSize: isSmScreen ? "11px" : "12px",
                        }}
                        onClick={() => handle_connect()}
                      >
                        Connect
                      </button>
                    </Box>
                  </Container>
                </Box>

                {/* Receiver Address */}
                <Box
                  sx={{
                    width: "100%",
                    height: "34%",
                    background: "transparent",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "80%",
                      width: "95%",
                      background: "black",
                      borderRadius: "20px",
                      // boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                      position: "relative",
                    }}
                  >
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        height: "100%",
                        // marginLeft: "5px",
                        fontFamily: "Aclonica", // Same font family
                        fontSize: isSmScreen ? "11px" : "14px", // Same font size
                        color: "white", // Set the text color to white
                        backgroundColor: "transparent", // Set the background color to transparent
                        border: "none", // Set the border color to white
                        borderRadius: "20px", // Add border-radius if desired
                        padding: "15px", //   Add padding if desired
                        boxSizing: "border-box", // Ensure the box-sizing is border-box
                      }}
                      placeholder="Receiver Address"
                      value={receiverAddress}
                      onChange={handleReceiver_address}
                    />
                  </Box>
                </Box>

                {/* ----------------------------------------------------------------------- */}
              </Grid>

              {/* Third Grid which contains "in wallet" fields */}

              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                sx={{
                  height: "25%",
                  width: "100%",
                  zIndex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: "97%",
                    background: "transparent",
                    borderRadius: "20px",
                    // boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                    position: "relative",
                    padding: "10px 20px 0px 0px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Container
                    sx={{
                      height: "55%",
                      width: "45%",
                      background: "black",
                      borderRadius: "20px",
                      margin: "0px 50px 0px 17px",
                      // boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100px",
                        height: "25px",
                        position: "absolute",
                        left: "15px",
                        top: "10px",
                      }}
                      onClick={(event) =>
                        setProfileAnchorEl3(event.currentTarget)
                      }
                    >
                      <img
                        src={coinSelected3.image || btc}
                        alt="Coin1"
                        style={{ width: "25px", height: "25px" }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Aclonica",
                          fontSize: isSmScreen ? "9px" : "11px",
                          color: "white",
                          margin: "5px",
                        }}
                      >
                        {coinSelected3.symbol || "BTC"}
                      </Typography>
                      <KeyboardArrowDownIcon sx={{ color: "white" }} />
                      <Menu
                        anchorEl={profileAnchorEl3}
                        open={Boolean(profileAnchorEl3)}
                        onClose={handleProfileClose3}
                        PaperProps={{
                          sx: {
                            backgroundColor: "rgba(0, 0, 0, 0.8)", // Background color with opacity
                            borderRadius: "10px",
                            minWidth: "170px",
                            marginTop: "5px",
                          },
                        }}
                      >
                        {coinsData.map((menuItem) => (
                          <MenuItem
                            key={menuItem.id}
                            sx={{
                              color: "#FFFFFF",
                              justifyContent: "center",
                              width: "100%",
                              padding: "0px",
                              margin: "15px 0px",
                            }}
                            onClick={() => handleMenuItemClick3(menuItem)}
                          >
                            <Grid
                              container
                              direction="row"
                              sx={{
                                width: "80%",
                                height: "50%",
                                borderRadius: "15px",
                                cursor: "pointer",
                              }}
                            >
                              <Grid item>
                                <img
                                  src={menuItem.image}
                                  alt={`Coin${menuItem.id}`}
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                    marginRight: "10px",
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <Grid container direction="column">
                                  <Grid item>
                                    <Typography
                                      style={{
                                        fontFamily: "Poly",
                                        fontSize: "14px",
                                        // color: "#9E9D9D",
                                        margin: "0px 0px 0px 0px",
                                      }}
                                    >
                                      {menuItem.symbol}
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      style={{
                                        fontFamily: "Poppins",
                                        fontSize: "11px",
                                        color: "black",
                                        // color: "#9E9D9D",
                                        margin: "0px 0px 0px 3px",
                                      }}
                                    >
                                      ${(menuItem && menuItem.price) ? menuItem.price.toFixed(8) : "49000"}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </Container>

                  <Box
                    sx={{
                      height: "70%",
                      width: "45%",
                      background: "transparent",
                      borderRadius: "20px",
                      // boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                      position: "relative",
                      // marginRight: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "75%",
                        width: "100%",
                        background: "black",
                        borderRadius: "20px",
                        // boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                        position: "relative",
                      }}
                    >
                      <input
                        type="number"
                        style={{
                          width: "100%",
                          height: "100%",
                          // marginLeft: "5px",
                          fontFamily: "Aclonica", // Same font family
                          fontSize: isSmScreen ? "11px" : "14px", // Same font size
                          color: "white", // Set the text color to white
                          backgroundColor: "transparent", // Set the background color to transparent
                          border: "none", // Set the border color to white
                          borderRadius: "20px", // Add border-radius if desired
                          padding: "15px", //   Add padding if desired
                          boxSizing: "border-box", // Ensure the box-sizing is border-box
                        }}
                        placeholder="Enter Amount"
                        value={amount}
                        onChange={handle_amount}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Aclonica",
                        fontSize: "11px",
                        color: "white",
                        margin: "5px 0px 0px 5px",
                      }}
                    >
                      In Wallet: {coinSelected3.wallet || 0}{" "}
                      {coinSelected3.symbol || "BTC"}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* 2nd Box */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              background: "rgba(255, 255, 255, 0.20)", // Transparent background with 0.25 opacity
              width: isSmScreen ? "300px" : isMdScreen ? "500px" : "500px",
              height: isSmScreen ? "150px" : "150px",
              borderRadius: "20px",
              padding: 0,
              position: "relative",
              marginTop: "27px",
              marginBottom: isSmScreen ? "45px" : "0px",
            }}
          >
            <Container
              sx={{
                height: "60%",
                width: "90%",
                background: "black",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: "9px",
                    color: "white",
                    margin: "5px 0px 0px 5px",
                  }}
                >
                  Bridge Fees:
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: "9px",
                    color: "white",
                    margin: "5px 0px 0px 5px",
                  }}
                >
                  0
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: "9px",
                    color: "white",
                    margin: "5px 0px 0px 5px",
                  }}
                >
                  Estimated Wait Time
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: "9px",
                    color: "white",
                    margin: "5px 0px 0px 5px",
                  }}
                >
                  1 minute
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: "9px",
                    color: "white",
                    margin: "5px 0px 0px 5px",
                  }}
                >
                  Receiver Address
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: "9px",
                    color: "white",
                    maxWidth: "50%",
                    overflowX: "hidden",
                    margin: "5px 0px 0px 5px",
                  }}
                >
                  {receiverAddress || "-"}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: "9px",
                    color: "white",
                    margin: "5px 0px 0px 5px",
                  }}
                >
                  {coinSelected3.symbol || "BTC"}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: "11px",
                    color: "white",
                    maxWidth: "50%",
                    overflowX: "hidden",
                    margin: "5px 0px 0px 5px",
                  }}
                >
                  ${(coinSelected3 && coinSelected3.price) ? coinSelected3.price?.toFixed(8) : "-"}
                </Typography>
              </Box>
            </Container>
            <button
              style={{
                background: "#50A883",
                borderRadius: "20px",
                border: "none",
                fontFamily: "Aclonica",
                width: "115px",
                height: "30px",
                marginTop: "10px",

                color: "white",
                fontSize: isSmScreen ? "11px" : "12px",
              }}
            >
              Connect
            </button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={swap_right}
            alt="Your Image"
            style={{
              width: "144px",
            }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Bridge_function;
