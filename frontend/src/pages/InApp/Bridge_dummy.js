import React, { useState } from "react";
import { Box, Grid, Menu, MenuItem, Typography } from "@mui/material";

import Bridge from "../../images/Bridge.png";
import transfer from "../../images/transfer.png";
import coin1 from "../../images/coin1.png";
import coin2 from "../../images/coin2.png";
import arrow from "../../images/arrow.png";

import "../../fonts/fonts.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Bridge_function() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const matches = useMediaQuery("(min-width:600px)");
    const dummyMenuItems = [
    { id: 1, label: "Option 1", value: 0.234, wallet: 10 },
    { id: 2, label: "Option 2", value: 0.435, wallet: 11 },
    { id: 3, label: "Option 3", value: 0.74, wallet: 12 },
  ];

  const [profileAnchorEl2, setProfileAnchorEl2] = useState(null);
  const [userInput2, setUserInput2] = useState(0);
  const [coinSelected2, setcoinSelected2] = useState("");


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
            height: "60%",
            width: "100%",
            boxShadow: "0px 0px 5px 1px black",
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
              marginTop: "45px",
              padding: "16px", // Adjust padding as needed
            }}
          >
            {/* 1st field (coin selection) */}

            <Grid
              item
              xs={3.5}
              sm ={3.5}
              md={4}
              sx={{
                width: isSmScreen ? "70%":"70%",
                  height: isSmScreen ? "65%" : "80%",
                // background: "white",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                src={coin1}
                alt="Bridge"
                style={{ width: "35%", height: "90%" }}
              />

            </Grid>
            <Grid
              item
              xs={5}
              sm ={5}
              md={4}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Poly",
                  fontSize: "14px",
                  color: "white",
                  margin: "10px",
                }}
              >
                From
              </Typography>
              <img
                src={arrow}
                alt="Bridge"
                style={{ width: isMdScreen ? "20%" : "25%", height: isMdScreen ? "50%" : "60%" }}
              />
              <Typography
                style={{
                  fontFamily: "Poly",
                  fontSize: "12px",

                  color: "white",
                  margin: "10px",
                }}
              >
                To
              </Typography>
            </Grid>
            <Grid
              item
              xs={3.5}
              sm={3.5}
              md={4}
              sx={{
                width: isSmScreen ? "60%" :"75%",
                  height: isSmScreen ? "75%" :"80%",
                // background: "white",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <img
                src={coin2}
                alt="Bridge"
                style={{ width: "35%", height: "90%" }}
              />
            </Grid>

            {/* 2nd field (Wallet) */}
          </Grid>
        </Grid>

        {/* Lower Grid */}

        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            height: "40%",
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
              marginTop: "15px",
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
              margin: (isSmScreen ? "18px 70px 0px 3px" : (isMdScreen ?"20px 100px 0px 3px" :"23px 150px 0px 3px")),   
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

export default Bridge_function;
