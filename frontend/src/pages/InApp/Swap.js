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
import transfer from "../../images/transfer_new.png";
import coin1 from "../../images/coin1.png";
import btc from "../../images/btc.png";
import usdt from "../../images/usdt.png";
import eth from "../../images/eth.png";
import xrp from "../../images/xrp.png";

import swap_left from "../../images/swap_left.svg";
import swap_right from "../../images/swap_right.svg";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "../../fonts/fonts.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";

function Swap_function() {
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
          let image = symbol === "BTC" ? btc : symbol === "ETH" ? eth: symbol === "USDT" ? usdt : xrp ;
          if(symbol === "BTC" || symbol === "ETH" || symbol === "USDT" || symbol === "XRP")
            nameAndPriceArray.push({ name, price, symbol, change , image});
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


  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(menuItem);
    setcoinSelected(menuItem);
    handleProfileClose();
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

  const handleTransfer = () => {
    const transfer1 = coinSelected;
    setcoinSelected(coinSelected2);
    setcoinSelected2(transfer1);
  };

  return (
    <Box sx={{width:"900px", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
      <Box sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
      <img
          src={swap_left}
          alt="Your Image"
          style={{
            width:"144px",
          }}
        />
      </Box>
      <Box
        sx={{
          // margin: "200px auto 20px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.20)", // Transparent background with 0.25 opacity
          width: isSmScreen ? "300px" : isMdScreen ? "400px" : "500px",
          height: isSmScreen ? "445px" : "500px",
          borderRadius: "20px",
          padding: 0,
          position: "relative",
          marginTop: "98px",
          // boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
        }}
      >
        {/* Middle Transfer image   */}
        <img
          src={transfer}
          alt="Your Image"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "2", // Ensure the image is above other elements
            cursor: "pointer",
          }}
          onClick={handleTransfer}
        />

        {/* Swap container  */}

        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px",
          }}
        >
          {/* Upper Grid */}
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "20%",
              width: "100%",
              zIndex: "1",
            }}
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Aclonica",
                  fontSize: "16px",
                  color: "white",
                }}
              >
                Swap
                <br />
                Swap Any Assets Simply And Securely
              </Typography>
            </Container>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "30%",
              width: "100%",
              zIndex: "1",
            }}
          >
            <Container
              sx={{
                background: "black",
                borderRadius: "20px",
                width: "90%",
                height: "75%",
                display: "flex",
                boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
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
                onClick={(event) => setProfileAnchorEl(event.currentTarget)}
              >
                <img
                  src={coinSelected.image || btc}
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
                  {coinSelected.symbol || "BTC"}
                </Typography>
                <KeyboardArrowDownIcon sx={{ color: "white" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  height: "25px",
                  justifyContent: "flex-end",
                  marginTop: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: isSmScreen ? "9px" : "11px",
                    color: "white",
                    margin: "5px",
                  }}
                >
                  Balance {coinSelected.wallet || 10} {coinSelected.symbol || "BTC"} 
                </Typography>
              </Box>  
              {/* <Typography
                sx={{
                  fontFamily: "Aclonica",
                  fontSize: isSmScreen ? "9px" : "20px",
                  position:"absolute",
                  bottom:"10px",
                  left:"20px",
                  color: "white",
                  // margin: "5px",
                }}
              >
                $40,000
              </Typography> */}
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Enter amount"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "white",
                  textAlign: "right",
                  position: "absolute",
                  bottom: "10px",
                  right: "23px",
                  width: "30%",
                  height: "38px",
                  outline: "none",
                }}
              />
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
                          style={{ width: "25px", height: "25px" ,marginRight:"10px" }}
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
                              ${(menuItem && menuItem.price) ? menuItem.price.toFixed(2): "49000"}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </MenuItem>
                ))}
              </Menu>
            </Container>
            {/* ----------------------------------------------------------------------------------------------------------------- */}
          </Grid>

          {/* Lower Grid */}

          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "35%",
              width: "100%",
              zIndex: "1",
              // display: "flex",
              // justifyContent: "flex-end",
              position: "relative",
            }}
          >
            <Container
              sx={{
                background: "black",
                borderRadius: "20px",
                width: "90%",
                height: "60%",
                display: "flex",
                boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                position: "relative",
                top: "30px",
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
                onClick={(event) => setProfileAnchorEl2(event.currentTarget)}
              >
                <img
                  src={coinSelected2.image || usdt}
                  alt="Coin2"
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
                  {coinSelected2.symbol || "USDT"}
                </Typography>
                <KeyboardArrowDownIcon sx={{ color: "white" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  height: "25px",
                  justifyContent: "flex-end",
                  marginTop: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: isSmScreen ? "9px" : "11px",
                    color: "white",
                    margin: "5px",
                  }}
                >
                  Balance {coinSelected2.wallet || 10} {coinSelected2.symbol}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Aclonica",
                  fontSize: isSmScreen ? "9px" : "20px",
                  position: "absolute",
                  bottom: "10px",
                  left: "20px",
                  color: "white",
                  // margin: "5px",
                }}
              >
                {(coinSelected.price && coinSelected2.price) ? ((coinSelected.price/coinSelected2.price).toFixed(8) * userInput) : "9000"}
                {/* {coinSelected.price > coinSelected2.price ? (coinSelected.price/coinSelected2.price).toFixed(4) * userInput: (coinSelected2.price/coinSelected.price).toFixed(4) * userInput} */}

              </Typography>
              {/* <input
              type="text"
              value={userInput2}
              onChange={handleInputChange2}
              placeholder="Enter amount"
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "white",
                textAlign: "right",
                position: "absolute",
                bottom: "10px",
                right: "23px",
                width: "30%",
                height: "38px",
                outline: "none",
              }}
            /> */}
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
                          style={{ width: "25px", height: "25px" ,marginRight:"10px" }}
                        />
                      </Grid>
                      <Grid item>
                        <Grid container direction="column">
                          <Grid item>
                            <Typography
                              style={{
                                fontFamily: "Poly",
                                fontSize: "14px",
                                color: "white",
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
                                margin: "0px 0px 0px 3px",
                                color: "black",
                                // color: "#9E9D9D",
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
            </Container>
            <Grid container sx={{ position: "absolute", bottom: "6px" }}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: isSmScreen ? "9px" : "11px",
                    color: "white",
                    margin: "5px",
                    // position: "relative",
                    // top: "40px",
                    // left: "24px",
                    width: "80%",
                    paddingLeft: "22px",
                  }}
                >
                  Conversion Rate
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: isSmScreen ? "9px" : "11px",
                    color: "white",
                    margin: "5px",
                    textAlign: "end",
                    paddingRight: "10px",
                    // position: "relative",
                    // top: "40px",
                    // right: "0px",
                    width: "80%",
                  }}
                >
                  1 {(coinSelected && coinSelected.symbol) ? coinSelected.symbol : "BTC"} = {(coinSelected2.price && coinSelected.price) ? ((coinSelected.price/coinSelected2.price).toFixed(8)) : "49000"}{" "}
                  {coinSelected2.symbol}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "15%",
              width: "100%",
              zIndex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "169px",
                height: "27px",
                borderRadius: "7px",
                background: "#50A883",
                color: "#ffff",
                fontFamily: "Aclonica",
                fontSize: "12px",
              }}
              onClick={handleTransfer}
            >
              Swap
            </button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
      <img
          src={swap_right}
          alt="Your Image"
          style={{
            width:"144px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Swap_function;
