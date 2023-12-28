import React from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

import animation5 from "../images/animation5.gif";
import new_bg2_2 from "../images/blog_background.gif";
import new1 from "../images/new1.jpg";
import background1 from "../images/homepage.svg";
import about_bitrage from "../images/about_bitrage.svg";
import how_bitrage_works from "../images/how_bitrage_works.svg";

import "../fonts/fonts.css";
import FooterFunction from "../footer";
import { useTheme } from "@mui/system";

function Docs_page() {
  const theme = useTheme();
  const isMdLgScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Paper
        sx={{
          // backgroundImage: `url(${background1})`,
          background: "transparent",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "100px",
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
              How AI-BITRAGE will work?
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
              }}
            >
              The platform is made for users to stake an amount of Ethereum, on
              each pool of their choice. AI BITRAGE functions as a sophisticated
              cryptocurrency arbitrage platform, employing advanced artificial
              intelligence to exploit price variations across various
              centralised exchanges. Users select from diverse investor pools
              tailored to their preferences, ranging from novice to
              high-net-worth investors. The AI algorithm executes trades with
              precision, identifying and capitalising on arbitrage opportunities
              seamlessly. The platform's intelligent risk management, including
              real-time monitoring and predictive analytics, ensures the
              security of user assets. As users stake higher percentages, they
              participate in a proportionate share of monthly profits, creating
              a direct correlation between investment commitment and financial
              returns. AI BITRAGE represents a revolutionary convergence of AI
              efficiency and blockchain transparency, providing users with an
              innovative and secure environment to navigate and capitalise on
              the dynamic crypto market.
              <br />
              <br />
              We have created 4 unique pools for users to choose from, in all
              honesty this is due to the amount of funds we have and are
              spreading across to each of our wallets to facilitate for all
              users to gain from the one and only AIBITRAGE. We have our own
              personal funds that we will be depositing into different exchanges
              (Decentralized and Centralized) for the arbitrage to be taken
              place everywhere profits are attained. The number of pools will
              increase over time as more attraction and more investors see the
              capabilities.
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
                alignItems: "flex-end",
              }}
            >
              <img
                src={about_bitrage}
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

export default Docs_page;
