import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import MenuIcon from "@mui/icons-material/Menu";
import logo_top from "./images/logo_top1.svg";

import bg1 from "./images/background1.png";
import bg_new from "./images/background_new.png";
import bg2 from "./images/background2.png";
import bg3 from "./images/background3.png";

import background1 from "./images/homepage.svg";

import { Link, useNavigate } from "react-router-dom";
import Homepage from "./pages/homepage";
import Docs_page from "./pages/docs_page";
import Blog_page from "./pages/blog_page";
import footer_img from "./images/footer.svg";
import Telegram from "./images/Telegram.png";
import Discord from "./images/Discord.png";
import Twitter from "./images/Twitter.png";
import launch_App from "./images/launch_App.png";
import Terms from "./pages/Terms";
import FooterFunction from "./footer";
import Privacy_policy from "./pages/privacy_policy";
import Cookie_policy from "./pages/cookie_policy";
import Report_bug from "./pages/report_bug";
import Not_found from "./pages/not_found";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import Launch_App_ModalComponent from "./pages/Launch_App_modal";
import Pool_Details from "./pages/pool_details";

const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

function Header_Function() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isXlScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const matches = useMediaQuery("(min-width:600px)");

  const [value, setValue] = useState(-1);
  const [page, setPage] = useState(-1);
  const [activeTab, setActiveTab] = useState("");
  const [app_active, set_App_active] = useState(true);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const TabsContainer = styled.div`
    display: flex;
    overflow-x: auto;
    justify-content: ${({ isSmScreen }) =>
      isMdScreen ? "flex-start" : "center"};
    background-color: transparent;
    margin: ${({ isSmScreen }) => (isSmScreen ? "20px 0px 0px 0px" : "0px")};
    width: ${({ isSmScreen }) =>
      isSmScreen ? "90%" : "100%"}; /* Ensure the tabs take the full width */
  `;

  const TabItem = styled.div`
    position: relative; /* Ensure relative positioning for lock icon */
    padding: 10px 20px;
    font-family: "Aclonica", sans-serif;
    color: ${({ selected }) => (selected ? "#50A883" : "white")};
    cursor: ${({ disabled }) =>
      disabled ? "not-allowed" : "pointer"}; // Disable cursor for disabled tabs
    opacity: ${({ disabled }) =>
      disabled ? 0.5 : 1}; // Reduce opacity for disabled tabs
    transition: color 0.3s ease;

    &:hover {
      color: ${({ disabled }) =>
        disabled ? null : "#50a883"}; // Disable hover effect for disabled tabs
    }
  `;

  const LockIconContainer = styled.div`
    position: absolute;
    top: 8px;
    right: -2px;
  `;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  console.log("value", value);

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    if (newValue > 0 && newValue < 4) {
      setActiveTab("");
    } else {
      console.log("newValue2", newValue);
      setValue(newValue);
      if (newValue > -1 && newValue < 6) {
        setActiveTab(getTabName(newValue));
      }
    }
  };

  const handleChange_footer = (newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
  };

  const handleClick = () => {
    if (isSmScreen) {
      set_App_active(false);
    } else {
      navigate("/app");
    }
  };

  const getTabName = (index) => {
    // Map index to tab names based on your logic
    const tabNames = ["About", "Swap", "Pool", "Bridge", "Docs", "Whitepaper"];
    return tabNames[index];
  };

  return (
    <header>
      <CssBaseline />

      <Paper
        sx={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          margin: 0,
          padding: 0,
          backgroundColor: "black",
          "&::-webkit-scrollbar": {
            width: "12px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "linear-gradient(transparent, #50A883)",
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "linear-gradient(transparent, #50A883)",
          },
        }}
      >
        <Paper
          sx={{
            width: "100%",
            // height: "100vh",
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
            // overflowY: "auto",
            margin: 0,
            backgroundPosition: "center",
            padding: 0,
            willChange: "transform", // Add will-change property
            position: "relative",
            zIndex: "0",
          }}
        >
          {/* Overlay Paper */}
          <Paper
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black overlay
              zIndex: "1", // Place the overlay above the background image
            }}
          ></Paper>
          <Grid
            container
            sx={{
              position: "absolute",
              zIndex: "100",
              background: "transparent",
              width: "99%",
              borderBottomLeftRadius: "10px", // Adjust the value based on your design
              borderBottomRightRadius: "10px", // Adjust the value based on your design
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              padding: "10px 0px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={1}
              lg={1}
              xl={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo_top}
                alt="logo"
                style={{
                  width: "80px",
                  margin: isXlScreen
                    ? "0px 0px 0px 0px"
                    : isLgScreen
                    ? " 0px 0px 0px 0px"
                    : "0px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setValue(-1);
                  setActiveTab("");
                }}
              />
            </Grid>

            {/* ----------------------------------------  TABS ----------------------------------------------------------             */}

            <Grid
              item
              xs={6}
              sm={6}
              md={9}
              lg={9}
              xl={9}
              sx={{
                display: "flex",
                justifyContent: isMdScreen ? "flex-start" : "center",
                alignItems: "center",
              }}
            >
              {isMdScreen ? (
                <>
                  <IconButton onClick={handleMenuClick} size="large">
                    {/* Replace 'YourIconComponent' with your desired icon component */}
                    <MenuIcon
                      style={{
                        borderRadius: "20px",
                        fontSize: "35px",
                        padding: "5px",
                        background:
                          "linear-gradient(101deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)",
                        color: "#ECF1F0",
                      }}
                    />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                      style: {
                        width: "98%",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        color: "#50A883",
                        position: "relative",
                        left: "0px",
                      },
                    }}
                  >
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <MenuItem
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "center", // Adjusted to place lock icon to the right
                          alignItems: "center",
                          flexDirection: "row", // Set flexDirection to row
                          fontFamily: "Aclonica", // Set the fontFamily to Poppins
                          padding: "10px", // Added padding for better spacing
                        }}
                        onClick={() => handleChange(null, index)}
                      >
                        <div>{getTabName(index)}</div>
                        {(index === 1 || index === 3 || index === 2) && (
                          <LockIcon style={{ color: "#50A883" }} />
                        )}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <TabsContainer isSmScreen={isSmScreen}>
                  <TabItem
                    selected={activeTab === "About"}
                    onClick={() => handleChange(null, 0)}
                  >
                    About
                  </TabItem>
                  <TabItem
                    selected={activeTab === "Swap"}
                    disabled={true}
                    onClick={() => handleChange(null, 1)}
                  >
                    Swap
                    {/** Lock icon for the disabled "Swap" tab */}
                    {/* {activeTab === "Swap" && ( */}
                    <LockIconContainer>
                      <LockIcon sx={{ color: "#50A883" }} />
                    </LockIconContainer>
                    {/* )} */}
                  </TabItem>
                  <TabItem
                    selected={activeTab === "Pool"}
                    disabled={true}
                    onClick={() => handleChange(null, 2)}
                  >
                    Pool
                    <LockIconContainer>
                      <LockIcon sx={{ color: "#50A883" }} />
                    </LockIconContainer>
                  </TabItem>
                  <TabItem
                    selected={activeTab === "Bridge"}
                    disabled={true}
                    onClick={() => handleChange(null, 3)}
                  >
                    Bridge
                    {/** Lock icon for the disabled "Bridge" tab */}
                    {/* {activeTab === "Bridge" && ( */}
                    <LockIconContainer>
                      <LockIcon sx={{ color: "#50A883" }} />
                    </LockIconContainer>
                    {/* )} */}
                  </TabItem>
                  <TabItem
                    selected={activeTab === "Docs"}
                    onClick={() => handleChange(null, 4)}
                  >
                    Docs
                  </TabItem>
                  <TabItem
                    selected={activeTab === "Whitepaper"}
                    onClick={() => {
                      window.open(
                        "https://docs.google.com/document/u/2/d/1HnYTFt-G6A_wqFfYaVwhHRJ35lAdhLcwO8ybLyveT7s/edit?usp=sharing",
                        "_blank" // Opens the link in a new tab
                      );
                    }}
                  >
                    Whitepaper
                  </TabItem>
                </TabsContainer>
              )}
            </Grid>

            {/* ----------------------------------------------------------------------------------------------------------------             */}

            <Grid
              item
              xs={6}
              sm={6}
              md={2}
              lg={2}
              xl={2}
              sx={{
                display: "flex",
                justifyContent: isMdScreen ? "flex-end" : "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  // position: "absolute",
                  // top: "30px",
                  // right: "40px",
                  width: isMdScreen ? "100px" : "130px",
                  height: isMdScreen ? "30px" : "40px", // Set the height to match the image height
                  border: "none",
                  borderRadius: "15px",
                  marginTop: "10px",
                  marginRight: isMdScreen ? "10px" : "0px",
                  background:
                    "linear-gradient(101deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)",
                  color: "#fff",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "background 0.3s ease",
                  fontSize: isMdScreen ? "11px" : "14px",
                  zIndex: 101,
                }}
                onClick={handleClick}
              >
                Launch App
              </button>
            </Grid>
          </Grid>
          {app_active ? "" : <Launch_App_ModalComponent />}
          {/* <Paper
          sx={{
            position: "absolute",
            zIndex: "100",
            background: "transparent",
            width: "100%",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "30px",
              right: "40px",
              width: "130px",
              height: "40px", // Set the height to match the image height
              border: "none",
              borderRadius: "15px",
              background:
                "linear-gradient(101deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              textDecoration: "none",
              transition: "background 0.3s ease",
              fontSize: "14px",
              zIndex: 101,
            }}
            onClick={handleClick}
          >
            Launch App
          </button>

          <Box
            sx={{
              backgroundColor: "transparent",
              width: isSmScreen ? "100%" : matches ? "80%" : "97%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: isSmScreen ? "column" : "row",
                justifyContent: "space-between", // Centered horizontally for larger screens
                borderBottom: 1,
                borderColor: "divider",
                width: "100%",
                // margin: "auto",
                // marginBottom: 2, // Adjust the margin as needed
                padding: "10px", // Add padding for better visibility
                backdropFilter: "blur(5px)",
              }}
            >
              <img
                src={logo_top}
                alt="logo"
                style={{
                  width: "80px",
                  margin: isXlScreen
                    ? "0px 0px 0px 0px"
                    : isLgScreen
                    ? " 0px 0px 0px 0px"
                    : "0px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setValue(-1);
                  setActiveTab("");
                }}
              />

              <TabsContainer isSmScreen={isSmScreen}>
                <TabItem
                  selected={activeTab === "Blogs"}
                  onClick={() => handleChange(null, 0)}
                >
                  Blogs
                </TabItem>
                <TabItem
                  selected={activeTab === "Swap"}
                  onClick={() => handleChange(null, 1)}
                >
                  Swap
                </TabItem>
                <TabItem
                  selected={activeTab === "Pool"}
                  onClick={() => handleChange(null, 2)}
                >
                  Pool
                </TabItem>
                <TabItem
                  selected={activeTab === "Bridge"}
                  onClick={() => handleChange(null, 3)}
                >
                  Bridge
                </TabItem>
                <TabItem
                  selected={activeTab === "Docs"}
                  onClick={() => handleChange(null, 4)}
                >
                  Docs
                </TabItem>
                <TabItem
                  selected={activeTab === "Forum"}
                  onClick={() => handleChange(null, 5)}
                >
                  Forum
                </TabItem>
              </TabsContainer>
            </Box>
          </Box>
        </Paper> */}
          {/* <Docs_page /> */}
          {value === -1 ? (
            <Homepage callback={handleChange_footer} />
          ) : value === 0 ? (
            <Blog_page />
          ) : value === 4 ? (
            <Docs_page />
          ) : value === 5 ? (
            <Not_found />
          ) : value === 10 ? (
            <Terms />
          ) : value === 11 ? (
            <Cookie_policy />
          ) : value === 12 ? (
            <Privacy_policy />
          ) : value === 13 ? (
            <Pool_Details />
          ) : value === 14 ? (
            <Report_bug />
          ) : (
            <Terms />
          )}
          {value === -1 ? (
            ""
          ) : (
            <FooterFunction callback={handleChange_footer} />
          )}
        </Paper>
      </Paper>
    </header>
  );
}

export default Header_Function;
