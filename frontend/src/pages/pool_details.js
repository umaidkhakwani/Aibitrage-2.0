import React from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

import animation5 from "../images/animation5.gif";
import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import new_bg2_2 from "../images/blog_background.gif";
import new1 from "../images/new1.jpg";
import new2 from "../images/new2.jpg";
import cookie_left from "../images/cookie_left.svg";
import cookie_right from "../images/cookie_right.svg";

import ring1 from "../images/ring_1.svg";
import ring2 from "../images/ring_2.svg";
import ring3 from "../images/ring_3.svg";
import ring4 from "../images/ring_4.svg";

import "../fonts/fonts.css";
import FooterFunction from "../footer";
import { useTheme } from "@mui/system";

function Pool_Details() {
  const theme = useTheme();
  const isMdLgScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Paper
        sx={{
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
          {/* {pools.map((pool, index) => ( */}
          <React.Fragment>
            {/* Image (Left of Heading) */}
            {isMdLgScreen && (
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={ring1}
                  alt="ring1"
                  style={{
                    width: "200px",
                    height: "auto",
                    position: "relative",
                    zIndex: "2",
                  }}
                />
              </Grid>
            )}

            {/* Pool Content */}
            <Grid
              item
              xs={10}
              sm={10}
              md={8}
              sx={{ position: "relative", zIndex: "2" }}
            >
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: isMdLgScreen ? "start" : "center",
                  fontFamily: "Poppins",
                  fontSize: 32,
                }}
              >
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #924C9E 1.04%, #F8A68C 58.22%, #6C97CD 91.77%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    textDecoration: "underline",
                    display: "inline-block",
                  }}
                >
                  Pool A
                </span>
                <br />
                <span style={{ fontSize:28 ,color: "white" }}>
                  The Novice Arbitrage Pool
                </span>
              </Typography>

              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: isMdLgScreen ? "Left" : "center",
                  color: "white",
                  marginTop: 2,
                  fontFamily: "Poppins",
                  fontSize: 14,
                  marginBottom: "100px",
                  marginLeft: isMdLgScreen ? "20px" : "0px",
                }}
              >
                Tailored for newcomers, this pool offers a lower entry threshold
                allowing newcomers to invest and learn the nuances of arbitrage
                trading without significant capital. The AI targets low-risk
                arbitrage opportunities ensuring steady, albeit smaller,
                returns.
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>Investment Process:</span>
                <br />
                Users can invest Ethereum directly into the pool via the AI
                BITRAGE platform. A user-friendly interface ensures ease of
                navigation and a seamless investment process.
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>Returns:</span>
                <br />
                Investors can expect a monthly ROI of up to 10%. The lower risk
                profile ensures consistent returns, making it an excellent
                option for those new to the arbitrage space.
                <br />
                <br />
              </Typography>
            </Grid>

            {/* Image (Right of Heading) */}
            {isMdLgScreen && (
              <Grid
                item
                xs={12}
                md={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  position: "relative",
                }}
              >
                {/* <img
                    src={cookie_right}
                    alt="Documentation Image"
                    style={{ width: "100%", height: "auto", zIndex: "2" }}
                  /> */}
              </Grid>
            )}
          </React.Fragment>
          <React.Fragment>
            {/* Image (Left of Heading) */}
            {isMdLgScreen && (
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={ring2}
                  alt="ring2"
                  style={{
                    width: "200px",
                    height: "auto",
                    position: "relative",
                    zIndex: "2",
                  }}
                />
              </Grid>
            )}

            {/* Pool Content */}
            <Grid
              item
              xs={10}
              sm={10}
              md={8}
              sx={{ position: "relative", zIndex: "2" }}
            >
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: isMdLgScreen ? "start" : "center",
                  fontFamily: "Poppins",
                  fontSize: 32,
                }}
              >
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #2FBCC4 0.07%, #8A9ED1 40.8%, #FFE0A1 72.84%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    textDecoration: "underline",
                    display: "inline-block",
                  }}
                >
                  Pool B
                </span>
                <br />
                <span style={{ fontSize:28 ,color: "white" }}>
                  The Advanced Arbitrage Pool
                </span>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: isMdLgScreen ? "Left" : "center",
                  color: "white",
                  marginTop: 2,
                  fontFamily: "Poppins",
                  fontSize: 14,
                  marginBottom: "100px",
                  marginLeft: isMdLgScreen ? "20px" : "0px",
                }}
              >
                Designed for seasoned investors, Pool B targets more complex and
                high-return arbitrage opportunities. The AI is programmed to
                execute trades that, while carrying higher risk, offer
                substantial returns.
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>Investment Process:</span>
                <br />
                Users can invest Ethereum directly into the pool via the AI
                BITRAGE platform. A user-friendly interface ensures ease of
                navigation and a seamless investment process.
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>Returns:</span>
                <br />
                Investors can expect a monthly ROI of up to 10%. The lower risk
                profile ensures consistent returns, making it an excellent
                option for those new to the arbitrage space.
                <br />
                <br />
              </Typography>
            </Grid>

            {/* Image (Right of Heading) */}
            {isMdLgScreen && (
              <Grid
                item
                xs={12}
                md={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  position: "relative",
                }}
              >
                {/* <img
                    src={cookie_right}
                    alt="Documentation Image"
                    style={{ width: "100%", height: "auto", zIndex: "2" }}
                  /> */}
              </Grid>
            )}
          </React.Fragment>
          <React.Fragment>
            {/* Image (Left of Heading) */}
            {isMdLgScreen && (
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={ring3}
                  alt="ring3"
                  style={{
                    width: "200px",
                    height: "auto",
                    position: "relative",
                    zIndex: "2",
                  }}
                />
              </Grid>
            )}

            {/* Pool Content */}
            <Grid
              item
              xs={10}
              sm={10}
              md={8}
              sx={{ position: "relative", zIndex: "2" }}
            >
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: isMdLgScreen ? "start" : "center",
                  fontFamily: "Poppins",
                  fontSize: 32,
                }}
              >
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #C17D90 36.78%, #A59FB8 79.2%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    textDecoration: "underline",
                    display: "inline-block",
                  }}
                >
                  Pool C
                </span>
                <br />
                <span style={{ fontSize:28 ,color: "white" }}>
                  The Diversified Assets Pool
                </span>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: isMdLgScreen ? "Left" : "center",
                  color: "white",
                  marginTop: 2,
                  fontFamily: "Poppins",
                  fontSize: 14,
                  marginBottom: "100px",
                  marginLeft: isMdLgScreen ? "20px" : "0px",
                }}
              >
                Pool C is for investors looking to diversify their portfolio.
                The AI not only engages in arbitrage trading but also invests in
                a diversified portfolio of cryptocurrencies to spread the risk
                and enhance returns.
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>Investment Process:</span>
                <br />
                Users can invest Ethereum directly into the pool via the AI
                BITRAGE platform. A user-friendly interface ensures ease of
                navigation and a seamless investment process.
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>Returns:</span>
                <br />
                Investors can expect a monthly ROI of up to 10%. The lower risk
                profile ensures consistent returns, making it an excellent
                option for those new to the arbitrage space.
                <br />
                <br />
              </Typography>
            </Grid>

            {/* Image (Right of Heading) */}
            {isMdLgScreen && (
              <Grid
                item
                xs={12}
                md={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  position: "relative",
                }}
              >
                {/* <img
                    src={cookie_right}
                    alt="Documentation Image"
                    style={{ width: "100%", height: "auto", zIndex: "2" }}
                  /> */}
              </Grid>
            )}
          </React.Fragment>
          <React.Fragment>
            {/* Image (Left of Heading) */}
            {isMdLgScreen && (
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={ring4}
                  alt="ring4"
                  style={{
                    width: "200px",
                    height: "auto",
                    position: "relative",
                    zIndex: "2",
                  }}
                />
              </Grid>
            )}

            {/* Pool Content */}
            <Grid
              item
              xs={10}
              sm={10}
              md={8}
              sx={{ position: "relative", zIndex: "2" }}
            >
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: isMdLgScreen ? "start" : "center",
                  fontFamily: "Poppins",
                  fontSize: 32,
                }}
              >
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(91deg, #113DFF -1.79%, #FC95BC 36.27%, #0CF8F8 76.79%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    textDecoration: "underline",
                    display: "inline-block",
                  }}
                >
                  Pool D
                </span>
                <br />
                <span style={{ fontSize:28 ,color: "white" }}>The High Roller Pool</span>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: isMdLgScreen ? "Left" : "center",
                  color: "white",
                  marginTop: 2,
                  fontFamily: "Poppins",
                  fontSize: 14,
                  marginBottom: "100px",
                  marginLeft: isMdLgScreen ? "20px" : "0px",
                }}
              >
                This pool is crafted for high net worth investors seeking to
                invest a significant amount of Ethereum. It combines aggressive
                arbitrage strategies with a diversified portfolio approach to
                maximize returns while mitigating risks.
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>Investment Process:</span>
                <br />
                Users can invest Ethereum directly into the pool via the AI
                BITRAGE platform. A user-friendly interface ensures ease of
                navigation and a seamless investment process.
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>Returns:</span>
                <br />
                Investors can expect a monthly ROI of up to 10%. The lower risk
                profile ensures consistent returns, making it an excellent
                option for those new to the arbitrage space.
                <br />
                <br />
              </Typography>
            </Grid>

            {/* Image (Right of Heading) */}
            {isMdLgScreen && (
              <Grid
                item
                xs={12}
                md={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  position: "relative",
                }}
              >
                {/* <img
                    src={cookie_right}
                    alt="Documentation Image"
                    style={{ width: "100%", height: "auto", zIndex: "2" }}
                  /> */}
              </Grid>
            )}
          </React.Fragment>
          {/* ))} */}
        </Grid>
      </Paper>
    </div>
  );
}

export default Pool_Details;
