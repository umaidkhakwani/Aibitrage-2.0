import React, { useState } from "react";
import {
  Box,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import Bridge from "../../images/Bridge.png";
import transfer from "../../images/transfer.png";
import coin1 from "../../images/coin1.png";

import "../../fonts/fonts.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Swap_function() {

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const matches = useMediaQuery("(min-width:600px)");

    const dummyMenuItems = [
        { id: 1, label: "Option 1", value: 0.234, wallet: 10 },
        { id: 2, label: "Option 2", value: 0.435, wallet: 11 },
        { id: 3, label: "Option 3", value: 0.74, wallet: 12 },
      ];
    
      const [profileAnchorEl, setProfileAnchorEl] = useState(null);
      const [userInput, setUserInput] = useState(0);
      const [coinSelected, setcoinSelected] = useState("");
      const [profileAnchorEl2, setProfileAnchorEl2] = useState(null);
      const [userInput2, setUserInput2] = useState(0);
      const [coinSelected2, setcoinSelected2] = useState("");
    
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
    <Box
      sx={{
        margin: "200px auto 20px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#5C2D7C",
        width: (isSmScreen ? "300px" : (isMdScreen ? "400px" : "500px")),
        height: "300px",
        borderRadius: "20px",
        padding: 0,
        position: "relative",
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
        {/* Upper Grid */}

        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            height: "50%",
            width: "100%",
            boxShadow: "0px 0px 10px 2px black",
            zIndex: "1",
          }}
        >
          <Grid
            container
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "50%",
              width: "100%",
              zIndex: "1",
              marginTop: "25px",
              padding: "16px", // Adjust padding as needed
            }}
          >
            {/* 1st field (coin selection) */}
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid
                container
                direction="row"
                sx={{
                  width: isSmScreen ? "70%":"70%",
                  height: isSmScreen ? "65%" : "80%",
                  borderRadius: "50px",
                  backgroundColor: "rgba(139, 91, 255, 0.3)", // Background color with opacity
                  zIndex: "1",
                  padding: "16px",
                  cursor: "pointer",
                  boxShadow: "7px 10px 6px 1px black",
                }}
                onClick={(event) => setProfileAnchorEl(event.currentTarget)}
              >
                {/* coin image */}
                {!isMdScreen ? (
                <Grid item>
                  <img
                    src={coin1}
                    alt="Coin1"
                    style={{ width: "70%", height: "75%" }}
                  />
                </Grid>
                ): null}

                {/* field text */}

                <Grid item>
                  <Grid container direction="column" sx={{ margin: "0px" }}>
                    <Grid item margin="0px">
                      <Typography
                        style={{
                          fontFamily: "Poly",
                          fontSize: isSmScreen ? "9px":"14px",
                          color: "white",
                          margin: "0px 0px 0px 0px",
                        }}
                      >
                        ${coinSelected.label || "Select Coin"}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize:isSmScreen ? "8px": "11px",
                          color: "#9E9D9D",
                          margin: "0px 0px 0px 3px",
                        }}
                      >
                        ${coinSelected.value || 0.0}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Menu
                anchorEl={profileAnchorEl}
                open={Boolean(profileAnchorEl)}
                onClose={handleProfileClose}
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(139, 91, 255, 0.9)", // Background color with opacity
                    borderRadius: "10px",
                    minWidth: "170px",
                    marginTop: "5px",
                  },
                }}
              >
                {dummyMenuItems.map((menuItem) => (
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
                          src={coin1}
                          alt={`Coin${menuItem.id}`}
                          style={{ width: "70%", height: "75%" }}
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
                              {menuItem.label}
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
                              ${menuItem.value.toFixed(2)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>

            {/* 2nd field (Wallet) */}
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                direction: "column",
              }}
            >
              <Grid
                container
                direction="row"
                sx={{
                  width: isSmScreen ? "60%" :"75%",
                  height: isSmScreen ? "75%" :"80%",
                  borderRadius: "10px",
                  backgroundColor: "rgba(139, 91, 255, 0.3)", // Background color with opacity
                  zIndex: "1",
                  padding: "16px",
                  cursor: "pointer",
                  justifyContent: "flex-end",
                  boxShadow: "7px 10px 6px 1px black",
                }}
              >
                <Grid item>
                  <Grid container direction="column" sx={{ margin: "0px" }}>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poly",
                          fontSize: "14px",
                          color: "white",
                          margin: "0px 0px 0px 0px",
                          textAlign: "end",
                        }}
                      >
                        <input
                          type="text"
                          value={userInput}
                          onChange={handleInputChange}
                          placeholder="Enter numeric value"
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                            color: "white",
                            textAlign: "right",
                            width: "50%",
                            outline: "none",
                          }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: isSmScreen ? "9px" :"11px",
                          margin: "0px 0px 0px 3px",
                          textAlign: "right",
                          color: "#9E9D9D",
                        }}
                      >
                        ${(coinSelected.value * userInput).toFixed(2) || 0.0}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: isSmScreen ? "8px" : "11px",
              margin: (isSmScreen ? "10px 70px 0px 3px" : (isMdScreen ?"10px 100px 0px 3px" :"10px 150px 0px 3px")),
              textAlign: "right",
              color: "#9E9D9D",
            }}
          >
            In wallet: ${coinSelected.wallet || 0.0}
          </Typography>
        </Grid>

        {/* Lower Grid */}

        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            height: "50%",
            width: "100%",
            boxShadow: "0px 0px 10px 2px black",
            zIndex: "1",
          }}
        >
          <Grid
            container
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "50%",
              width: "100%",
              zIndex: "1",
              marginTop: "25px",
              padding: "16px", // Adjust padding as needed
            }}
          >
            {/* 1st field (coin selection) */}
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid
                container
                direction="row"
                sx={{
                  width: isSmScreen ? "70%":"70%",
                  height: isSmScreen ? "65%" : "80%",
                  borderRadius: "50px",
                  backgroundColor: "rgba(139, 91, 255, 0.3)", // Background color with opacity
                  zIndex: "1",
                  padding: "16px",
                  cursor: "pointer",
                  boxShadow: "7px 10px 6px 1px black",
                }}
                onClick={(event) => setProfileAnchorEl2(event.currentTarget)}
              >
                {/* coin image */}
               
                {!isMdScreen ? (
                <Grid item>
                  <img
                    src={coin1}
                    alt="Coin1"
                    style={{ width: "70%", height: "75%" }}
                  />
                </Grid>
                ):null}

                {/* field text */}

                <Grid item>
                  <Grid container direction="column" sx={{ margin: "0px" }}>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poly",
                          fontSize: isSmScreen ? "9px":"14px",
                          color: "white",
                          margin: "0px 0px 0px 0px",
                        }}
                      >
                        ${coinSelected2.label || "Select Coin"}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: isSmScreen ? "8px":"11px",
                          margin: "0px 0px 0px 3px",
                          color: "#9E9D9D",
                        }}
                      >
                        ${coinSelected2.value || 0.0}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Menu
                anchorEl={profileAnchorEl2}
                open={Boolean(profileAnchorEl2)}
                onClose={handleProfileClose2}
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(139, 91, 255, 0.9)", // Background color with opacity
                    borderRadius: "10px",
                    minWidth: "170px",
                    marginTop: "5px",
                  },
                }}
              >
                {dummyMenuItems.map((menuItem) => (
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
                          src={coin1}
                          alt={`Coin${menuItem.id}`}
                          style={{ width: "70%", height: "75%" }}
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
                              {menuItem.label}
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
                              ${menuItem.value.toFixed(2)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>

            {/* 2nd field (Wallet) */}
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                direction: "column",
              }}
            >
              <Grid
                container
                direction="row"
                sx={{
                  width: isSmScreen ? "60%" :"75%",
                  height: isSmScreen ? "75%" :"80%",
                  borderRadius: "10px",
                  backgroundColor: "rgba(139, 91, 255, 0.3)", // Background color with opacity
                  zIndex: "1",
                  padding: "16px",
                  cursor: "pointer",
                  justifyContent: "flex-end",
                  boxShadow: "7px 10px 6px 1px black",
                }}
              >
                <Grid item>
                  <Grid container direction="column" sx={{ margin: "0px" }}>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poly",
                          fontSize: "14px",
                          color: "white",
                          margin: "0px 0px 0px 0px",
                          textAlign: "end",
                        }}
                      >
                        <input
                          type="text"
                          value={userInput2}
                          onChange={handleInputChange2}
                          placeholder="Enter numeric value"
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                            color: "white",
                            textAlign: "right",
                            width: "50%",
                            outline: "none",
                          }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: isSmScreen ? "9px" :"11px",
                          margin: "0px 0px 0px 3px",
                          textAlign: "right",
                          color: "#9E9D9D",
                        }}
                      >
                        ${(coinSelected2.value * userInput2).toFixed(2) || 0.0}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: isSmScreen ? "9px" :"11px",
              margin: (isSmScreen ? "10px 70px 0px 3px" : (isMdScreen ?"10px 100px 0px 3px" :"10px 150px 0px 3px")),
              textAlign: "right",
              color: "#9E9D9D",
            }}
          >
            In wallet: ${coinSelected2.wallet || 0.0}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Swap_function;














// version 2 (latest)




import React, { useState } from "react";
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
import usdt from "../../images/btc.png";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "../../fonts/fonts.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Swap_function() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const matches = useMediaQuery("(min-width:600px)");

  const dummyMenuItems = [
    { id: 1, label: "BTC", value: 0.234, wallet: 10, rate: 40000 },
    { id: 2, label: "USDT", value: 0.435, wallet: 11, rate: 23004 },
    { id: 3, label: "BNB", value: 0.74, wallet: 12, rate: 650 },
    { id: 4, label: "Solana", value: 0.634, wallet: 14, rate: 1578 },
  ];

  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [userInput, setUserInput] = useState(0);
  const [coinSelected, setcoinSelected] = useState("");
  const [profileAnchorEl2, setProfileAnchorEl2] = useState(null);
  const [userInput2, setUserInput2] = useState(0);
  const [coinSelected2, setcoinSelected2] = useState("");

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
    <Box
      sx={{
        // margin: "200px auto 20px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.20)", // Transparent background with 0.25 opacity
        width: isSmScreen ? "300px" : isMdScreen ? "400px" : "500px",
        height: "400px",
        borderRadius: "20px",
        padding: 0,
        position: "relative",
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
              sx={{ fontFamily: "Aclonica", fontSize: "16px", color: "white" }}
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
                src={btc}
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
                {coinSelected.label || "BTC"}
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
                Balance {coinSelected.wallet} {coinSelected.label}
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
            {/* </Box> */}
          </Container>

          {/* ----------------------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------------------------------------------------------------------------------- */}

          <Grid
            container
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "50%",
              width: "100%",
              zIndex: "1",
              marginTop: "25px",
              padding: "16px", // Adjust padding as needed
              background: "white",
            }}
          >
            {/* 1st field (coin selection) */}
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid
                container
                direction="row"
                sx={{
                  width: isSmScreen ? "70%" : "70%",
                  height: isSmScreen ? "65%" : "80%",
                  borderRadius: "50px",
                  backgroundColor: "rgba(139, 91, 255, 0.3)", // Background color with opacity
                  zIndex: "1",
                  padding: "16px",
                  cursor: "pointer",
                  boxShadow: "7px 10px 6px 1px black",
                }}
                onClick={(event) => setProfileAnchorEl(event.currentTarget)}
              >
                {/* coin image */}
                {!isMdScreen ? (
                  <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={btc}
                      alt="Coin1"
                      style={{ width: "70%", height: "75%" }}
                    />
                  </Grid>
                ) : null}

                {/* field text */}
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: isMdScreen ? "16px" : "0",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Aclonica",
                      fontSize: isSmScreen ? "9px" : "11px",
                      color: "white",
                      margin: "0px",
                    }}
                  >
                    ${coinSelected.label || "Select Coin"}
                  </Typography>
                  {/* <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: isSmScreen ? "8px" : "11px",
                      color: "#9E9D9D",
                      margin: "3px 0px 0px 0px",
                    }}
                  >
                    ${coinSelected.value || 0.0}
                  </Typography> */}
                </Grid>

                {/* down arrow */}
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70%",
                  }}
                >
                  <KeyboardArrowDownIcon
                    sx={{ height: "20px", color: "white" }}
                  />
                </Grid>
              </Grid>

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
                {dummyMenuItems.map((menuItem) => (
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
                          src={coin1}
                          alt={`Coin${menuItem.id}`}
                          style={{ width: "70%", height: "75%" }}
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
                              {menuItem.label}
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
                              ${menuItem.value.toFixed(2)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>

            {/* 2nd field (Wallet) */}
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                direction: "column",
              }}
            >
              <Grid
                container
                direction="row"
                sx={{
                  width: isSmScreen ? "60%" : "75%",
                  height: isSmScreen ? "75%" : "80%",
                  borderRadius: "10px",
                  backgroundColor: "rgba(139, 91, 255, 0.3)", // Background color with opacity
                  zIndex: "1",
                  padding: "16px",
                  cursor: "pointer",
                  justifyContent: "flex-end",
                  boxShadow: "7px 10px 6px 1px black",
                }}
              >
                <Grid item>
                  <Grid container direction="column" sx={{ margin: "0px" }}>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poly",
                          fontSize: "14px",
                          color: "white",
                          margin: "0px 0px 0px 0px",
                          textAlign: "end",
                        }}
                      >
                        <input
                          type="text"
                          value={userInput}
                          onChange={handleInputChange}
                          placeholder="Enter numeric value"
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                            color: "white",
                            textAlign: "right",
                            width: "50%",
                            outline: "none",
                          }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: isSmScreen ? "9px" : "11px",
                          margin: "0px 0px 0px 3px",
                          textAlign: "right",
                          color: "#9E9D9D",
                        }}
                      >
                        ${(coinSelected.value * userInput).toFixed(2) || 0.0}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: isSmScreen ? "8px" : "11px",
              margin: isSmScreen
                ? "10px 70px 0px 3px"
                : isMdScreen
                ? "10px 100px 0px 3px"
                : "10px 150px 0px 3px",
              textAlign: "right",
              color: "#9E9D9D",
            }}
          >
            In wallet: ${coinSelected.wallet || 0.0}
          </Typography>
        </Grid>

        {/* Lower Grid */}

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
                src={btc}
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
                {coinSelected.label || "BTC"}
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
                Balance {coinSelected.wallet} {coinSelected.label}
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
            {/* </Box> */}
          </Container>
        </Grid>

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
          <Grid
            container
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "50%",
              width: "100%",
              zIndex: "1",
              marginTop: "25px",
              padding: "16px", // Adjust padding as needed
            }}
          >
            {/* 1st field (coin selection) */}
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid
                container
                direction="row"
                sx={{
                  width: isSmScreen ? "70%" : "70%",
                  height: isSmScreen ? "65%" : "80%",
                  borderRadius: "50px",
                  backgroundColor: "rgba(139, 91, 255, 0.3)", // Background color with opacity
                  zIndex: "1",
                  padding: "16px",
                  cursor: "pointer",
                  boxShadow: "7px 10px 6px 1px black",
                }}
                onClick={(event) => setProfileAnchorEl2(event.currentTarget)}
              >
                {/* coin image */}

                {!isMdScreen ? (
                  <Grid item>
                    <img
                      src={coin1}
                      alt="Coin1"
                      style={{ width: "70%", height: "75%" }}
                    />
                  </Grid>
                ) : null}

                {/* field text */}

                <Grid item>
                  <Grid container direction="column" sx={{ margin: "0px" }}>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poly",
                          fontSize: isSmScreen ? "9px" : "14px",
                          color: "white",
                          margin: "0px 0px 0px 0px",
                        }}
                      >
                        ${coinSelected2.label || "Select Coin"}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: isSmScreen ? "8px" : "11px",
                          margin: "0px 0px 0px 3px",
                          color: "#9E9D9D",
                        }}
                      >
                        ${coinSelected2.value || 0.0}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Menu
                anchorEl={profileAnchorEl2}
                open={Boolean(profileAnchorEl2)}
                onClose={handleProfileClose2}
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(139, 91, 255, 0.9)", // Background color with opacity
                    borderRadius: "10px",
                    minWidth: "170px",
                    marginTop: "5px",
                  },
                }}
              >
                {dummyMenuItems.map((menuItem) => (
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
                          src={coin1}
                          alt={`Coin${menuItem.id}`}
                          style={{ width: "70%", height: "75%" }}
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
                              {menuItem.label}
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
                              ${menuItem.value.toFixed(2)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>

            {/* 2nd field (Wallet) */}
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                direction: "column",
              }}
            >
              <Grid
                container
                direction="row"
                sx={{
                  width: isSmScreen ? "60%" : "75%",
                  height: isSmScreen ? "75%" : "80%",
                  borderRadius: "10px",
                  backgroundColor: "rgba(139, 91, 255, 0.3)", // Background color with opacity
                  zIndex: "1",
                  padding: "16px",
                  cursor: "pointer",
                  justifyContent: "flex-end",
                  boxShadow: "7px 10px 6px 1px black",
                }}
              >
                <Grid item>
                  <Grid container direction="column" sx={{ margin: "0px" }}>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poly",
                          fontSize: "14px",
                          color: "white",
                          margin: "0px 0px 0px 0px",
                          textAlign: "end",
                        }}
                      >
                        <input
                          type="text"
                          value={userInput2}
                          onChange={handleInputChange2}
                          placeholder="Enter numeric value"
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                            color: "white",
                            textAlign: "right",
                            width: "50%",
                            outline: "none",
                          }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: isSmScreen ? "9px" : "11px",
                          margin: "0px 0px 0px 3px",
                          textAlign: "right",
                          color: "#9E9D9D",
                        }}
                      >
                        ${(coinSelected2.value * userInput2).toFixed(2) || 0.0}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: isSmScreen ? "9px" : "11px",
              margin: isSmScreen
                ? "10px 70px 0px 3px"
                : isMdScreen
                ? "10px 100px 0px 3px"
                : "10px 150px 0px 3px",
              textAlign: "right",
              color: "#9E9D9D",
            }}
          >
            In wallet: ${coinSelected2.wallet || 0.0}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Swap_function;
