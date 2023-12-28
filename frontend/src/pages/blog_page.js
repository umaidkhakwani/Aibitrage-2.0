import React from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

import animation5 from "../images/animation5.gif";
import new2 from "../images/new2.jpg";
import new_bg3 from "../images/new_bg3.png";
import new_bg2_2 from "../images/blog_background.gif";

import about_bitrage from "../images/about_bitrage.svg";
import how_bitrage_works from "../images/how_bitrage_works.svg";

import "../fonts/fonts.css";
import FooterFunction from "../footer";
import { useTheme } from "@mui/system";

function Blog_page() {
  const theme = useTheme();
  const isMdLgScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Paper
        sx={{
          // backgroundImage: `url(${new_bg2_2})`,
          background: "transparent",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: "250px" }}
        >
          {/* Image */}
          {isMdLgScreen && (
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <img
                src={about_bitrage}
                alt="Documentation Image"
                style={{
                  width: "80%",
                  height: "auto",
                  marginBottom: "100px",
                  position: "relative",
                  zIndex: "2",
                }}
              />
            </Grid>
          )}
          <Grid item xs={10} sm={10} md={4}>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: "center",
                color: "white",
                marginTop: 2,
                fontFamily: "Maragsa",
                fontSize: 40,
                position: "relative",
                zIndex: "2",
              }}
            >
              What is AI-BITRAGE?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: "center",
                color: "white",
                marginTop: 2,
                fontFamily: "Lora",
                fontSize: 18,
                position: "relative",
                zIndex: "2",
                marginBottom: "100px",
              }}
            >
              AIBITRAGE is a new platform being built for the crypto space.
              AIBITRAGE has a vision of bringing guaranteed profits to all users
              across the space. The platform is being developed to exist and
              operate as an arbitrage machine. The software is revolutionary,
              and the development team has cultivated an algorithm, capable of
              evaluating cryptocurrencies across the blockchain. When evaluating
              it looks for the tokens that can be taken advantaged of to gain
              guaranteed profits. When we say, “taken advantaged of”, we mean it
              looks for the swaps, CEX’S and DEX’S to see if there is a
              difference in price from one another for a pure arbitrage.
              <br />
              <br />
              The algorithm is developed to monitor every aspect of a new
              cryptocurrencies in detail. The details it monitors is the
              contract, lock, renounce, market cap, liquidity, telegram,
              CoinMarketCap listings, CoinGecko listings, website and
              cryptocurrency mentioning across all CEX’s. The algorithm was
              built upon analysis from over two years of research and networking
              (yes, we existed in the golden era of 2021). All users are
              probably wondering “why is the word AI implemented in this
              project”?
              <br />
              <br />
              This is because the algorithm was actually developed using AI
              technology to code this high-tech platform. The team thought why
              not use AI due to its constant learning and efforts to always
              provide accurate and modern knowledge to the stage. It made
              perfect sense and yes you guessed it, it worked. We have developed
              a new way of decentralized trading to the fortunate people within
              crypto.
              <br />
              <br />
            </Typography>
          </Grid>

          {/* Image */}
          {isMdLgScreen && (
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <img
                src={how_bitrage_works}
                alt="Documentation Image"
                style={{
                  width: "80%",
                  height: "auto",
                  position: "relative",
                  zIndex: "2",
                }}
              />
            </Grid>
          )}
        </Grid>
        {/* <FooterFunction /> */}
      </Paper>
    </div>
  );
}

export default Blog_page;
