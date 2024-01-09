import React from "react";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";

import animation5 from "../images/animation5.gif";
import new_bg2_2 from "../images/blog_background.gif";
import new1 from "../images/new1.jpg";
import background1 from "../images/homepage.svg";
import about_bitrage from "../images/about_bitrage.svg";
import how_bitrage_works from "../images/how_bitrage_works.svg";
import pool_vid_gif from "../images/pool_vid.gif";
import pool_vid_gif2 from "../images/pool_vid_gif2.mp4";
import pool_vid_gif3 from "../images/pool_vid_gif3.mp4";
import pool_details from "../images/vid_details.svg";
import pool_details2 from "../images/vid_details2.svg";
import pool_details3 from "../images/vid_details3.png";

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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "100px",
        }}
      >
        {/* <Box> */}
        <Grid container sx={{ marginTop: "250px" }}>
          {isMdLgScreen && (
            <Grid item xs={0} sm={0} md={6} lg={6}>
              <img
                src={how_bitrage_works}
                alt="Documentation Image"
                style={{
                  width: "60%",
                  height: "auto",
                  position: "relative",
                  zIndex: "2",
                }}
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: isMdLgScreen ? "0px 30px" : "0px 15px",
            }}
          >
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
              WHY CREATE AN LBP?
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
              The introduction of a Liquidity Bootstrapping Pool (LBP) further
              enhances this alignment, providing a structured and efficient
              mechanism for distributing tokens. Through these measures, we aim
              to create a token that not only represents ownership but also
              encourages long-term commitment and participation in the success
              of our platform.
              <br />
              <br />
            </Typography>
          </Grid>
        </Grid>
        {/* </Box> */}
        {/* <Box> */}
        <Grid container sx={{ marginTop: "50px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: isMdLgScreen ? "0px 30px" : "0px 15px",
            }}
          >
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
              WHY CREATE A TOKEN?
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
              The creation of our token reflects our commitment to transparency
              and equitable value distribution in AIBITRAGE. Each token directly
              corresponds to ownership shares in the Arbitrage platform.
              Notably, individuals holding 1% of the token supply are entitled
              to 1% of the profits generated by the company. To align incentives
              and ensure sustained engagement, token holders must vest their 1%
              ownership to unlock profit-sharing rights. This strategic approach
              not only fosters a fair and inclusive ecosystem but also actively
              engages our community in the shared success of AIBITRAGE.
              <br />
              <br />
            </Typography>
          </Grid>
          {isMdLgScreen && (
            <Grid
              item
              xs={0}
              sm={0}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <video
                width="60%"
                height="auto"
                autoPlay
                loop
                // muted
                style={{
                  position: "relative",
                  zIndex: "2",
                }}
              >
                <source src={pool_vid_gif2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                src={pool_details3}
                alt="pool chart"
                style={{ width: "500px", margin: "20px 0px" }}
              />
              {/* <img
          src={pool_vid_gif}
          alt="pool chart"
          style={{ width: "300px", margin: "20px 0px" }}
        /> */}
            </Grid>
          )}
        </Grid>
        {/* </Box> */}

        {/* <Grid
          container
          justifyContent="center"
          sx={{ marginTop: "250px" }}
        >
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
              WHY CREATE AN LBP?
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
              The introduction of a Liquidity Bootstrapping Pool (LBP) further
              enhances this alignment, providing a structured and efficient
              mechanism for distributing tokens. Through these measures, we aim
              to create a token that not only represents ownership but also
              encourages long-term commitment and participation in the success
              of our platform.
              <br />
              <br />
            </Typography>
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
              WHY CREATE A TOKEN?
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
              The creation of our token reflects our commitment to transparency
              and equitable value distribution in AIBITRAGE. Each token directly
              corresponds to ownership shares in the Arbitrage platform.
              Notably, individuals holding 1% of the token supply are entitled
              to 1% of the profits generated by the company. To align incentives
              and ensure sustained engagement, token holders must vest their 1%
              ownership to unlock profit-sharing rights. This strategic approach
              not only fosters a fair and inclusive ecosystem but also actively
              engages our community in the shared success of AIBITRAGE.
              <br />
              <br />
            </Typography>
          </Grid>

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
        </Grid> */}
        {/* <FooterFunction /> */}
      </Paper>
    </div>
  );
}

export default Docs_page;
