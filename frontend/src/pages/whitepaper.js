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

import "../fonts/fonts.css";
import FooterFunction from "../footer";
import { useTheme } from "@mui/system";

function Whitepaper() {
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
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <img
                src={cookie_left}
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
          <Grid
            item
            xs={10}
            sm={10}
            md={6}
            sx={{ position: "relative", zIndex: "2" }}
          >
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: isMdLgScreen ? "start" : "center",
                color: "white",
                marginTop: 2,
                fontFamily: "Poppins",
                fontSize: 32,
              }}
            >
              <span style={{ textDecoration: "underline" }}>Pool A</span>
              <br />
              The Novice Arbitrage Pool
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: isMdLgScreen ?"Left":"center",
                color: "white",
                marginTop: 2,
                fontFamily: "Poppins",
                fontSize: 14,
                marginBottom: "100px",
                marginLeft: isMdLgScreen ? "20px":"0px",
              }}
            >
              Tailored for newcomers, this pool offers a lower entry threshold
              allowing newcomers to invest and learn the nuances of arbitrage
              trading without significant capital. The AI targets low-risk
              arbitrage opportunities ensuring steady, albeit smaller, returns.
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
              profile ensures consistent returns, making it an excellent option
              for those new to the arbitrage space.
              <br />
              <br />
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: isMdLgScreen ? "start" : "center",
                color: "white",
                marginTop: 2,
                fontFamily: "Poppins",
                fontSize: 32,
              }}
            >
              <span style={{ textDecoration: "underline" }}>Pool B</span>
              <br />
              The Advanced Arbitrage Pool
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: isMdLgScreen ?"Left":"center",
                color: "white",
                marginTop: 2,
                fontFamily: "Poppins",
                fontSize: 14,
                marginBottom: "100px",
                marginLeft: isMdLgScreen ? "20px":"0px",
              }}
            >
              Designed for seasoned investors, Pool B targets more complex and
              high-return arbitrage opportunities. The AI is programmed to
              execute trades that, while carrying higher risk, offer substantial
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
              profile ensures consistent returns, making it an excellent option
              for those new to the arbitrage space.
              <br />
              <br />
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: isMdLgScreen ? "start" : "center",
                color: "white",
                marginTop: 2,
                fontFamily: "Poppins",
                fontSize: 32,
              }}
            >
              <span style={{ textDecoration: "underline" }}>Pool C</span>
              <br />
              The Diversified Assets Pool
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: isMdLgScreen ?"Left":"center",
                color: "white",
                marginTop: 2,
                fontFamily: "Poppins",
                fontSize: 14,
                marginBottom: "100px",
                marginLeft: isMdLgScreen ? "20px":"0px",
              }}
            >
              Pool C is for investors looking to diversify their portfolio. The
              AI not only engages in arbitrage trading but also invests in a
              diversified portfolio of cryptocurrencies to spread the risk and
              enhance returns.
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
              profile ensures consistent returns, making it an excellent option
              for those new to the arbitrage space.
              <br />
              <br />
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: isMdLgScreen ? "start" : "center",
                color: "white",
                marginTop: 2,
                fontFamily: "Poppins",
                fontSize: 32,
              }}
            >
              <span style={{ textDecoration: "underline" }}>Pool D</span>
              <br />
              The High Roller Pool
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: isMdLgScreen ?"Left":"center",
                color: "white",
                marginTop: 2,
                fontFamily: "Poppins",
                fontSize: 14,
                marginBottom: "100px",
                marginLeft: isMdLgScreen ? "20px":"0px",
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
              profile ensures consistent returns, making it an excellent option
              for those new to the arbitrage space.
              <br />
              <br />
            </Typography>
          </Grid>

          {/* Image */}
          {isMdLgScreen && (
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
              }}
            >
              <img
                src={cookie_right}
                alt="Documentation Image"
                style={{ width: "100%", height: "auto", zIndex: "2" }}
              />
            </Grid>
          )}
        </Grid>
        {/* <FooterFunction /> */}
      </Paper>
    </div>
  );
}

export default Whitepaper;
