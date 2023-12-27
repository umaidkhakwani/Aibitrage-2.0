import React, { useEffect, useRef, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import animation1 from "../images/animation1.gif";
import animation2 from "../images/animation2.gif";
import animation3 from "../images/animation3.gif";
import home2 from "../images/home2.gif";
import animation4 from "../images/animation4.gif";
import animation5 from "../images/animation5.gif";
import cards_color from "../images/cards.png";
import table_color from "../images/table_color.png";
import Telegram from "../images/Telegram.png";
import Discord from "../images/Discord.png";
import Twitter from "../images/Twitter.png";
import new1 from "../images/new1.jpg";
import new_bg2 from "../images/new_bg2.png";
import new_bg2_2 from "../images/new_bg2_2.png";
import new_bg3 from "../images/new_bg3.png";
import new2 from "../images/new2.jpg";
import new3 from "../images/new3.png";
import new_bg1 from "../images/new_bg1.png";
import background1 from "../images/homepage.svg";
import vid1 from "../images/vid1.mp4";
import home1 from "../images/home1.svg";
import btc_trend from "../images/btc_trend.svg";
import usdt_trend from "../images/usdt_trend.svg";
import eth_trend from "../images/eth_trend.svg";
import bnb_trend from "../images/bnb_trend.svg";
import bnb_chart from "../images/bnb_chart.png";
import btc_chart from "../images/btc_chart.png";
import usdt_chart from "../images/usdt_chart.png";
import eth_chart from "../images/eth_chart.png";

import graph1 from "../images/graph1.png";
import graph2 from "../images/graph2.png";
import graph3 from "../images/graph3.png";
import graph4 from "../images/graph4.png";
import graph5 from "../images/graph5.png";

import integration1 from "../images/integration1.png";
import integration2 from "../images/integration2.png";
import integration3 from "../images/integration3.png";
import integration4 from "../images/integration4.png";
import integration5 from "../images/integration5.png";
import integration6 from "../images/integration6.png";

import newsletter from "../images/newsletter.svg";

import secure_swap from "../images/secure_swap.svg";
import secure_bridge from "../images/secure_bridge.svg";
import secure_investors from "../images/secure_investors.svg";
import about_bitrage from "../images/about_bitrage.svg";
import how_bitrage_works from "../images/how_bitrage_works.svg";

import c_logo from "../images/c_logo.png";
import tick_logo from "../images/tick_logo.png";
import b_logo from "../images/b_logo.png";
import play_logo from "../images/play_logo.png";

import SearchIcon from "@mui/icons-material/Search";
import FooterFunction from "../footer";

import "../fonts/fonts.css";
import Header_Function from "../header";
import FooterFunction_home from "./footer_home";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import Modal from "react-modal";
import ModalComponent from "./Modal";
import CustomModal from "./Modal";

const AcrylicContainer = styled(Container)`
  position: relative;
  border-radius: 20px; /* Adjust the border-radius as needed */
  overflow: hidden;
  padding-bottom: 30px;
  background: rgba(255, 255, 255, 0.1); /* Adjust the transparency as needed */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); /* Adjust the shadow as needed */
`;

const GlowingEffectContainer = styled(Grid)`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40vh; /* Adjust the height as needed */
    background: linear-gradient(
      to top,
      rgba(80, 168, 131, 0.5),
      rgba(80, 168, 131, 0)
    );
    z-index: 1;
  }
`;

const tableData = [
  {
    pool: "Pool 1",
    combinedAPR: "10%",
    totalLiquidity: "$1,000,000",
    volume24h: "$100,000",
  },
  {
    pool: "Pool 2",
    combinedAPR: "8%",
    totalLiquidity: "$800,000",
    volume24h: "$80,000",
  },
  {
    pool: "Pool 3",
    combinedAPR: "10%",
    totalLiquidity: "$1,000,000",
    volume24h: "$100,000",
  },
  {
    pool: "Pool 4",
    combinedAPR: "8%",
    totalLiquidity: "$800,000",
    volume24h: "$80,000",
  },
  {
    pool: "Pool 5",
    combinedAPR: "10%",
    totalLiquidity: "$1,000,000",
    volume24h: "$100,000",
  },
  {
    pool: "Pool 6",
    combinedAPR: "8%",
    totalLiquidity: "$800,000",
    volume24h: "$80,000",
  },
  {
    pool: "Pool 7",
    combinedAPR: "10%",
    totalLiquidity: "$1,000,000",
    volume24h: "$100,000",
  },
  {
    pool: "Pool 8",
    combinedAPR: "8%",
    totalLiquidity: "$800,000",
    volume24h: "$80,000",
  },
  {
    pool: "Pool 9",
    combinedAPR: "10%",
    totalLiquidity: "$1,000,000",
    volume24h: "$100,000",
  },
  {
    pool: "Pool 10",
    combinedAPR: "8%",
    totalLiquidity: "$800,000",
    volume24h: "$80,000",
  },
  // Add more dummy data as needed
];

function Homepage({ callback }) {
  const navigate = useNavigate();

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  // const matches = useMediaQuery("(min-width:1020px)");
  const matches = useMediaQuery("(min-width: 1200px) and (max-width: 1600px)");
  const matches_600 = useMediaQuery(
    "(min-width: 600px) and (max-width: 630px)"
  );

  const [coinsData, setCoinsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");

  const coinMarketCap_Api = "bea15024-c66e-465e-89db-1d411266e961";
  const coinMarketCap_link = "https://pro-api.coinmarketcap.com";
  const apiEndpoint =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

  const headers = {
    "X-CMC_PRO_API_KEY": coinMarketCap_Api,
    Allow: "*/*",
  };

  const handleSubscribe = () => {
    console.log("Subscribed with email:", email);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = coinsData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const table_color2 = `url(${table_color})`;

  const handle_callback = (val) => {
    callback(val);
  };

  const handleClick = () => {
    navigate("/app");
  };

  const handleApi = async () => {
    const nameAndPriceArray = [];

    axios
      .get("http://localhost:3001/api/cryptocurrency")
      .then((response) => {
        const data = response.data;
        data.data.forEach((coin) => {
          console.log("coin :", coin.quote.USD.price);
          let name = coin.name;
          let price = coin.quote.USD.price;
          let symbol = coin.symbol;
          let change = coin.quote.USD.percent_change_1h;
          // const { name, "price" : quote: { USD: { price } } , "24hVolume": volume, change } = coin;
          nameAndPriceArray.push({ name, price, symbol, change });
        });
        console.log("API Response:", response.data);
        console.log("nameAndPriceArray:", nameAndPriceArray);
        setCoinsData(nameAndPriceArray);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // name, quote.USD.price, symbol, quote.USD.percent_change_1h

    // const data = response.data;
    // console.log(data);
    // const nameAndPriceArray = [];

    // data.data.coins.forEach((coin) => {
    //   const { name, price, "24hVolume": volume, change } = coin;
    //   nameAndPriceArray.push({ name, price, volume, change });
    // });
    // console.log(nameAndPriceArray);
    // console.log(data);
    // setCoinsData(nameAndPriceArray);
    // return data;
    // } catch (error) {
    //   console.error("Error fetching data from the API:", error);
    //   throw error; // You can choose to handle or propagate the error as needed
    // }
    // try {
    //   const response = await axios.get(api_link);
    //   const data = response.data;
    //   const nameAndPriceArray = [];

    //   data.data.coins.forEach((coin) => {
    //     const { name, price, "24hVolume": volume, change } = coin;
    //     nameAndPriceArray.push({ name, price, volume, change });
    //   });
    //   console.log(nameAndPriceArray);
    //   console.log(data);
    //   setCoinsData(nameAndPriceArray);
    //   return data;
    // } catch (error) {
    //   console.error("Error fetching data from the API:", error);
    //   throw error; // You can choose to handle or propagate the error as needed
    // }
  };

  useEffect(() => {
    handleApi();
  }, []);

  useEffect(() => {
    console.log("filteredData", filteredData);
  }, [filteredData]);

  return (
    <>
      <CssBaseline />

      {/* --------------------------------------  Front Page  ------------------------------------------ */}
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
          position: "relative", // Add position property
          zIndex: "2", // Add z-index property
        }}
      >
        <ModalComponent />
        <Box sx={{ width: "100%", paddingTop: isMdScreen ? "250px" : "200px" }}>
          <Grid container sx={{ width: "100%", height: "100%" }}>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: isLgScreen ? "center" : "flex-end",
              }}
            >
              <Box
                sx={{
                  width: isMdScreen ? "80%" : "60%",
                  position: "relative",
                  right: isLgScreen ? "0px" : "100px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: isSmScreen ? "26px" : "30px",
                    color: "#50A883",
                    textAlign: isLgScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  AI-BITRAGE
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "16px" : "20px",
                    color: "#ffff",
                    textAlign: isLgScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  <br />
                  <br />
                  AI-BITRAGE is a new launchpad being built for the crypto
                  space. AI-BITRAGE has a vision of bringing guaranteed profits
                  to all users across the space.
                  <br />
                  <br />
                  The software is revolutionary, and the development team has
                  cultivated an algorithm capable of evaluating Ethereum tokens
                  across the blockchain.
                </Typography>

                <Box
                  sx={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: isLgScreen ? "center" : "",
                  }}
                >
                  <button
                    style={{
                      display: "inline-block",
                      // padding: "10px 20px",
                      width: isMdScreen ? "100px" : "150px",
                      height: "50px",
                      border: "none",
                      borderRadius: "10px",
                      background:
                      "linear-gradient(101deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)",
                      color: "#fff",
                      fontSize: "16px",
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "background 0.3s ease",
                      ":hover": {
                        // Pseudo-class styles for hover
                        background:
                          "linear-gradient(95deg, #A27BD3 0%, #9F9ADB 58.45%, #9ADBEC 90.51%)",
                      },
                    }}
                  >
                    Explore
                  </button>

                  <button
                    style={{
                      // padding: "10px 20px",
                      width: isMdScreen ? "100px" : "150px",
                      height: "50px",
                      borderRadius: "10px",
                      background: "transparent",
                      color: "#fff",
                      fontSize: "16px",
                      cursor: "pointer",
                      marginLeft: "20px",
                      textDecoration: "none",
                      border: "2px solid #B529DD",
                      transition: "background 0.3s ease",
                      ":hover": {
                        // Pseudo-class styles for hover
                        background:
                          "linear-gradient(95deg, #A27BD3 0%, #9F9ADB 58.45%, #9ADBEC 90.51%)",
                      },
                    }}
                  >
                    Create
                  </button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{ width: "100%", height: "100%" }}
            >
              <Box
                sx={{
                  width: "100%",
                  // height: "100%",
                  height: matches ? "100%" : "500px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={home1}
                  alt="logo"
                  style={{
                    width: "100%",
                    position: "relative",
                    bottom: matches ? "250px" : "100px",
                    right: "15px",
                    zIndex: "-1",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* --------------------------------------  Market Trends  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            bottom: "125px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Aclonica",
              fontSize: isSmScreen ? "26px" : "30px",
              color: "#50A883",
              textAlign: "center",
              lineHeight: "1.2",
              marginBottom: "10px",
            }}
          >
            Market Trend
          </Typography>
          <Container sx={{ width: "80%", height: "100%" }}>
            <Grid container sx={{ width: "100%", height: "100%" }}>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "115px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={btc_trend}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "150px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        ${(coinsData && coinsData[0] && coinsData[0].price) ? (coinsData[0]?.price).toFixed(4) : "43000"}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        {(coinsData && coinsData[0] && coinsData[0].price) ? (coinsData[0]?.change).toFixed(6) : "1.41"}%
                        {/* 1.41% */}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={btc_chart}
                        alt="logo"
                        style={{ width: "100px" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  margin: "15px 0px",
                  alignItems: "center",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "115px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={eth_trend}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "150px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        ${(coinsData && coinsData[0] && coinsData[0].price) ? (coinsData[1]?.price).toFixed(4) : "43000"}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        {(coinsData && coinsData[0] && coinsData[0].price) ? (coinsData[1]?.change).toFixed(6) : "1.41"}%
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={eth_chart}
                        alt="logo"
                        style={{ width: "100px" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  margin: "15px 0px",
                  alignItems: "center",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "115px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={bnb_trend}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "150px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        ${(coinsData && coinsData[0] && coinsData[0].price) ? (coinsData[4]?.price).toFixed(4) : "$43000"}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        {(coinsData && coinsData[0] && coinsData[0].change) ? (coinsData[0]?.change).toFixed(4) : "$43000"}%
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={bnb_chart}
                        alt="logo"
                        style={{ width: "100px" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  margin: "15px 0px",
                  alignItems: "center",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "115px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={usdt_trend}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "150px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        ${(coinsData && coinsData[0] && coinsData[0].price) ?(coinsData[2]?.price).toFixed(4) : "$43000"}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        {(coinsData && coinsData[0] && coinsData[0].change) ?(coinsData[2]?.change).toFixed(4) : "$43000"}%
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={usdt_chart}
                        alt="logo"
                        style={{ width: "100px" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* --------------------------------------  Video  ------------------------------------------ */}
        <Box
          sx={{
            backgroundColor: "transparent",
            // backgroundImage: `url(${new_bg2_2})`,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isSmScreen ? "center" : "center",
            textAlign: isSmScreen ? "center" : "center",
            // padding: isSmScreen ? "20px" : "0px", // Add padding for better readability on small screens
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: isSmScreen ? "0px" : "40px 0px 0px 0px",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={12} // For extra-small screens
                sm={12} // For small screens
                md={12} // For medium screens
                lg={12} // For large screens
                xl={12} // For extra-large screens
              >
                <video width="80%" height="80%" controls>
                  <source
                    src="/path/to/your/local/video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* --------------------------------------  Secure Bitcoin  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "transparent",
            margin: "50px 0px",
          }}
        >
          <Container
            sx={{ width: isSmScreen ? "80%" : isMdScreen ? "60%" : "49%" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Aclonica",
                fontSize: isSmScreen ? "26px" : "30px",
                color: "#50A883",
                textAlign: "center",
                lineHeight: "1.2",
              }}
            >
              Trusted and Secure Bitcoin
              <br />
              <br />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Lora",
                fontSize: isSmScreen ? "16px" : "20px",
                textAlign: "center",
                color: "#ffff",
                lineHeight: "1.2",
              }}
            >
              Built on Arbitrum and Avalanche, our decentralized leverage
              trading exchange focuses on being the best execution environment
              for trades.
              <br />
              <br />
            </Typography>
          </Container>
          <Container
            sx={{ width: isSmScreen ? "80%" : isMdScreen ? "60%" : "100%" }}
          >
            <Grid container sx={{ width: "100%", height: "100%" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={secure_swap}
                  alt="logo"
                  style={{ width: isSmScreen ? "80%" : "60%" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={secure_bridge}
                  alt="logo"
                  style={{ width: isSmScreen ? "80%" : "60%" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={secure_investors}
                  alt="logo"
                  style={{ width: isSmScreen ? "80%" : "60%" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* --------------------------------------  About AIbitrage ------------------------------------------ */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "transparent",
            margin: "100px 0px",
          }}
        >
          <Grid container sx={{ width: "100%", height: "100%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container sx={{ width: isSmScreen ? "90%" : "60%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: isSmScreen ? "26px" : "30px",
                    color: "#50A883",
                    textAlign: isMdScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  About AI-BITRAGE
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "14px" : "16px",
                    color: "#ffff",
                    textAlign: isMdScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  <br />
                  <br />
                  AI-BITRAGE is a new launchpad being built for the crypto
                  space. AI-BITRAGE has a vision of bringing guaranteed profits
                  to all users across the space. The launchpad is being
                  developed to exist and operate as an Initial Dex Offering
                  (IDO). The IDO is backed by investors that would for sure be
                  known as whales if their wallets were viewed by the general
                  public.
                  <br />
                  <br />
                  The software is revolutionary and the development team has
                  cultivated an algorithm, capable of evaluating Ethereum tokens
                  across the blockchain.
                </Typography>
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={about_bitrage}
                alt="logo"
                style={{ width: isSmScreen ? "80%" : "60%" }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* --------------------------------------  How AI-BITRAGE will work? ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "transparent",
            margin: "50px 0px",
          }}
        >
          <Grid container sx={{ width: "100%", height: "100%" }}>
            {isMdScreen ? null : (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={how_bitrage_works}
                  alt="logo"
                  style={{ width: isSmScreen ? "80%" : "60%" }}
                />
              </Grid>
            )}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container
                sx={{
                  width: isSmScreen ? "90%" : "60%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: isMdScreen ? "center" : "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: isSmScreen ? "26px" : "30px",
                    color: "#50A883",
                    textAlign: isMdScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  How AI-BITRAGE will work?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "14px" : "16px",
                    color: "#ffff",
                    textAlign: isMdScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  <br />
                  <br />
                  The IDO is made for users to stake an amount of Ethereum, on
                  each pool of their choice. Each pool will only allow a certain
                  amount of users per month to stake Ethereum. E.G. each pool
                  will allow a max of 250 users per month (31 days). When the
                  month is over, users funds and profits will be unlocked from
                  the pool’s and will be accessible for withdrawals back into
                  the users wallets. The pool’s have been created to operate on
                  a “first come ,first serve” basis.
                  <br />
                  <br />
                </Typography>
                <button
                  style={{
                    // position: "absolute",
                    // top: "30px",
                    // right: "40px",
                    width: "130px",
                    height: "35px", // Set the height to match the image height
                    border: "none",
                    borderRadius: "15px",
                    marginTop: "10px",
                    background: "#50A883",
                    color: "#fff",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "background 0.3s ease",
                    fontSize: "11px",
                    zIndex: 101,
                  }}
                >
                  Launch App
                </button>
              </Container>
            </Grid>
            {isMdScreen ? (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={how_bitrage_works}
                  alt="logo"
                  style={{ width: isSmScreen ? "80%" : "60%" }}
                />
              </Grid>
            ) : null}
          </Grid>
        </Box>

        {/* --------------------------------------  CryptoCap  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            marginTop: "100px",
          }}
        >
          <Container>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Aclonica",
                fontSize: isSmScreen ? "26px" : "30px",
                color: "#50A883",
                textAlign: "center",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              CryptoCap Amazing Features
              <br />
              <br />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Aclonica",
                fontSize: isSmScreen ? "16px" : "18px",
                color: "#B6B6B6",
                textAlign: "center",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              Explore sensational features to prepare your best investment in
              cryptocurrency
              <br />
              <br />
            </Typography>
          </Container>
          <Container sx={{ width: "80%", height: "100%" }}>
            <Grid container sx={{ width: "100%", height: "100%" }}>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "180px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={c_logo}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "40px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        Manage Portfolio
                        <br />
                        <br />
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        Buy and sell popular digital currencies, keep track of
                        them in the one place.
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Roboto",
                            fontSize: "12px",
                            color: "#0FAE96",
                            lineHeight: "1.2",
                            paddingTop: "5px",
                            cursor: "pointr",
                          }}
                        >
                          See Explained
                        </Typography>
                        <ArrowRightAltIcon
                          sx={{ marginLeft: "5px", color: "#0FAE96" }}
                        />
                      </Box>
                    </Grid> */}
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "180px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={tick_logo}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "40px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        Protected Securely
                        <br />
                        <br />
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        All cash balances are covered by FDIC insurance, up to a
                        maximum of $250,000.
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Roboto",
                            fontSize: "12px",
                            color: "#0FAE96",
                            lineHeight: "1.2",
                            paddingTop: "5px",
                            cursor: "pointr",
                          }}
                        >
                          See Explained
                        </Typography>
                        <ArrowRightAltIcon
                          sx={{ marginLeft: "5px", color: "#0FAE96" }}
                        />
                      </Box>
                    </Grid> */}
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "180px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={b_logo}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "40px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        Cryptocurrency Variety
                        <br />
                        <br />
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        Supports a variety of the most popular digital
                        currencies and always uptodate.
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Roboto",
                            fontSize: "12px",
                            color: "#0FAE96",
                            lineHeight: "1.2",
                            paddingTop: "5px",
                            cursor: "pointr",
                          }}
                        >
                          See Explained
                        </Typography>
                        <ArrowRightAltIcon
                          sx={{ marginLeft: "5px", color: "#0FAE96" }}
                        />
                      </Box>
                    </Grid> */}
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "180px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={play_logo}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "40px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        Learn Best Practice
                        <br />
                        <br />
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        Easy to know how to cryptocurrency works and friendly to
                        newbie.
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Roboto",
                            fontSize: "12px",
                            color: "#0FAE96",
                            lineHeight: "1.2",
                            paddingTop: "5px",
                            cursor: "pointr",
                          }}
                        >
                          See Explained
                        </Typography>
                        <ArrowRightAltIcon
                          sx={{ marginLeft: "5px", color: "#0FAE96" }}
                        />
                      </Box>
                    </Grid> */}
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* --------------------------------------  Buy and Sell  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            marginTop: "100px",
          }}
        >
          <Container sx={{ width: isMdScreen ? "80%" : "55%" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Aclonica",
                fontSize: isSmScreen ? "26px" : "30px",
                color: "#50A883",
                textAlign: "center",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              Buy and sell with the lowest fees in the industry
              <br />
              <br />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Aclonica",
                fontSize: isSmScreen ? "14px" : "16px",
                color: "#B6B6B6",
                textAlign: "center",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempos Lorem ipsum dolor sit amet
              <br />
              <br />
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  color: "#B982FF",
                  lineHeight: "1.2",
                  paddingTop: "5px",
                  cursor: "pointr",
                }}
              >
                Learn More
              </Typography>
              <ArrowRightAltIcon sx={{ marginLeft: "5px", color: "#B982FF" }} />
            </Box>
          </Container>

          {/* Pool table */}

          <Container
            sx={{
              background: "black",
              borderRadius: "10px",
              width: "70%",
              marginTop: "50px",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <TableContainer>
                <Table>
                  <TableBody>
                    {
                      // [
                      //   {
                      //     name: "Bitcoin",
                      //     symbol: "BTC",
                      //     price: "$49990",
                      //     percentageChange: "+1.68%",
                      //     image: graph1,
                      //   },
                      //   {
                      //     name: "Ethereum",
                      //     symbol: "ETH",
                      //     price: "$3890",
                      //     percentageChange: "+0.68%",
                      //     image: graph2,
                      //   },
                      // ].
                      coinsData.map((row, index) =>
                        row.symbol === "BTC" ||
                        row.symbol === "ETH" ||
                        row.symbol === "USDT" ||
                        row.symbol === "XRP" ? (
                          <TableRow
                            key={index}
                            sx={{
                              borderBottom: "2px solid #2B2C3B", // Set the color of the bottom border
                            }}
                          >
                            <TableCell>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "14px",
                                  color: "#fff",
                                }}
                              >
                                {row.name}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "14px",
                                  color: "#B982FF",
                                }}
                              >
                                {row.symbol}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "14px",
                                  color: "#fff",
                                }}
                              >
                                ${(row  && row.price) ? row.price.toFixed(5) : "$43000"}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "14px",
                                  color:
                                    parseFloat(row.change) > 0
                                      ? "green"
                                      : "red",
                                }}
                              >
                                {parseFloat(row.change) > 0
                                  ? `+${row.change}%`
                                  : `${row.change}%`}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <img
                                src={
                                  index === 0
                                    ? graph1
                                    : index === 1
                                    ? graph2
                                    : index === 2
                                    ? graph3
                                    : graph4
                                }
                                alt={`Image for ${row.name}`}
                                style={{ width: "125px" }}
                              />
                            </TableCell>
                            <TableCell>
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "10px",
                                  justifyContent: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: "Roboto",
                                    fontSize: "12px",
                                    color: "#B982FF",
                                    lineHeight: "1.2",
                                    paddingTop: "5px",
                                    cursor: "pointer",
                                  }}
                                >
                                  Trade Now
                                </Typography>
                                <ArrowRightAltIcon
                                  sx={{ marginLeft: "5px", color: "#B982FF" }}
                                />
                              </Box>
                            </TableCell>
                          </TableRow>
                        ) : null
                      )
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Container>
        </Box>

        {/* --------------------------------------  Integrations  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            marginTop: "100px",
          }}
        >
          <Container sx={{ width: isSmScreen ? "300px" : "400px" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Aclonica",
                fontSize: isSmScreen ? "26px" : "30px",
                color: "#50A883",
                textAlign: "center",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              Integrations
              <br />
              <br />
            </Typography>
            <Grid container>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration1}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration2}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration3}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration4}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration5}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration6}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* --------------------------------------  Newsletter  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            margin: "100px 0px",

            // background: `url(${newsletter})`, // Set the newsletter image as the background
            //   backgroundSize: "cover", // Optional: Adjust the background size
            //   backgroundPosition: "center", // Optional: Adjust the background position
          }}
        >
          <Container
            sx={{
              background: `url(${newsletter}) center`,
              width: "60%",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ margin: isMdScreen ? "20px 30px" : "20px 60px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Aclonica",
                  paddingTop: "40px",
                  fontSize: isSmScreen ? "26px" : "30px",
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                }}
              >
                Sign up for our Newsletter
                <br />
                <br />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Aclonica",
                  fontSize: isSmScreen ? "12px" : "14px",
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                }}
              >
                We have all been in this industry too long not to make the
                security of your funds our absolute top priority. We’ve received
                multiple audits from Open Zeppelin and Trail
                <br />
                <br />
              </Typography>

              {/* Input field and Subscribe button */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: isSmScreen ? "column" : "row",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <TextField
                  label="Your email here"
                  variant="standard"
                  sx={{
                    marginRight: isSmScreen ? "0" : "10px",
                    marginBottom: "10px",
                    width: "70%",
                    color: "rgba(150, 142, 142, 0.56)", // Set the text color to white
                    "& input": {
                      color: "white", // Set the input text color to white
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "rgba(150, 142, 142, 0.56)", // Set the label color to white
                    },
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  style={{
                    width: "130px",
                    height: "40px", // Set the height to match the image height
                    border: "none",
                    borderRadius: "15px",
                    background: "#50A883",
                    color: "black",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </Box>
            </Box>
          </Container>
        </Box>
        {/* -------------------------------------- footer  ------------------------------------------ */}

        <Grid
          container
          spacing={0}
          sx={{
            marginTop: "0px",
            direction: "column",
            // backgroundImage: `url(${new_bg1})`,
          }}
        >
          <Grid item xs={12} md={12} lg={12}>
            <FooterFunction_home callback2={handle_callback} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Homepage;
