import React, { useState } from "react";
import {
  Box,
  Container,
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

function Pool_function() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const matches = useMediaQuery("(min-width:900px)");
  const laptopSize = useMediaQuery("(min-width:1025px)");

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Container
        sx={{
          direction: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: isMdScreen ? "150px" : "100px",
        }}
      >
        <Typography
          style={{
            fontFamily: "Poppins",
            fontSize: isMdScreen ? "24px" : "30px",
            color: "white",
            margin: "10px",
            textAlign: "center",
          }}
        >
          Distinctive Staking Pools
        </Typography>
        <Typography
          style={{
            fontFamily: "Poppins",
            fontSize: isMdScreen ? "11px" : "16px",
            color: "white",
            margin: "10px",
            textAlign: "center",
          }}
        >
          AI BITRAGE takes pride in unveiling four exclusive staking pools,
          designed meticulously to cater to a diverse range of investors. Each
          pool is distinct in its operation, investment threshold, and expected
          returns, ensuring a tailored staking experience. Below is an in-depth
          examination of each pool:
        </Typography>
      </Container>

      <Container
        sx={{
          direction: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            margin: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={4}
            lg={4}
            sx={{ width: "100%", height: "100" }}
          >
            <div style={{ textAlign: "center" }}>
              {/* outer Circle */}
              <div
                style={{
                  width: "94%",
                  height: "300px",
                  borderRadius: "50%",
                  backgroundColor: "#5b144d",
                  position: "relative",
                }}
              >
                {/* inner Circle */}
                <div
                  style={{
                    width: "92%",
                    height: "280px",
                    borderRadius: "50%",
                    backgroundColor: "#862071",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* White Title */}
                  <Typography
                    variant="h6"
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontSize:laptopSize ? "20px" : (matches ? "28px" : "40px"),
                      textDecoration: "underline",
                      width: laptopSize ? "50%" :"70%",
                      textAlign: "center",
                    }}
                  >
                    Pool A
                  </Typography>
                  {/* White Paragraph */}
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: isMdScreen ? "12px" : "18px",
                      color: "white",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    The Novice Arbitrage Pool
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: isMdScreen ? "8px" : "10px",
                      color: "white",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    Tailored for newcomers, this pool offers a lower entry
                    threshold allowing newcomers to invest and learn the nuances
                    of arbitrage trading without significant capital. The AI
                    targets low-risk arbitrage opportunities ensuring steady,
                    albeit smaller, returns.
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>

          {!isMdScreen ? (
            <Grid
              item
              xs={8}
              sm={8}
              md={8}
              lg={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {/* Two paragraphs */}
              <Typography
                variant="body2"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  textAlign: "justify",
                }}
              >
                Investment Process:
                <br />
                Users can invest Ethereum directly into the pool via the AI
                BITRAGE platform. A user-friendly interface ensures ease of
                navigation and a seamless investment process.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "20px",
                }}
              >
                Returns:
                <br />
                Investors can expect a monthly ROI of up to 10%. The lower risk
                profile ensures consistent returns, making it an excellent
                option for those new to the arbitrage space.
              </Typography>
            </Grid>
          ) : null}
        </Grid>
        <Grid
          container
          sx={{
            margin: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!isMdScreen ? (
            <Grid
              item
              xs={8}
              sm={8}
              md={8}
              lg={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {/* Two paragraphs */}
              <Typography
                variant="body2"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  textAlign: "right",
                }}
              >
                Investment Process:
                <br />
                Investors with a substantial amount of Ethereum can directly
                stake their assets into Pool B via the secure AI BITRAGE
                dashboard, with advanced analytics and reporting tools available
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "20px",
                  textAlign: "right",
                }}
              >
                Returns:
                <br />
                Investors are projected to achieve up to 20% ROI monthly. The
                increased risk is counterbalanced by higher potential returns
                and more frequent profit distributions.
              </Typography>
            </Grid>
          ) : null}
          <Grid item xs={12} sm={8} md={4} lg={4}>
            <div style={{ textAlign: "center", marginLeft: "20px" }}>
              {/* outer Circle */}
              <div
                style={{
                  width: "94%",
                  height: "300px",
                  borderRadius: "50%",
                  backgroundColor: "#5b144d",
                  position: "relative",
                }}
              >
                {/* inner Circle */}
                <div
                  style={{
                    width: "92%",
                    height: "280px",
                    borderRadius: "50%",
                    backgroundColor: "#862071",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* White Title */}
                  <Typography
                    variant="h6"
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontSize: matches ? "28px" : "40px",
                      textDecoration: "underline",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    Pool B
                  </Typography>
                  {/* White Paragraph */}
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: isMdScreen ? "12px" : "18px",
                      color: "white",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    The Advanced Arbitrage Pool
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      color: "white",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    Designed for seasoned investors, Pool B targets more complex
                    and high-return arbitrage opportunities. The AI is
                    programmed to execute trades that, while carrying higher
                    risk, offer substantial returns.
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            margin: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={8} md={4} lg={4}>
            <div style={{ textAlign: "center" }}>
              {/* outer Circle */}
              <div
                style={{
                  width: "94%",
                  height: "300px",
                  borderRadius: "50%",
                  backgroundColor: "#5b144d",
                  position: "relative",
                }}
              >
                {/* inner Circle */}
                <div
                  style={{
                    width: "92%",
                    height: "280px",
                    borderRadius: "50%",
                    backgroundColor: "#862071",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* White Title */}
                  <Typography
                    variant="h6"
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontSize: matches ? "28px" : "40px",
                      textDecoration: "underline",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    Pool C
                  </Typography>
                  {/* White Paragraph */}
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: isMdScreen ? "12px" : "18px",
                      color: "white",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    The Diversified Assets Pool
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      color: "white",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    Pool C is for investors looking to diversify their
                    portfolio. The AI not only engages in arbitrage trading but
                    also invests in a diversified portfolio of cryptocurrencies
                    to spread the risk and enhance returns.
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>

          {!isMdScreen ? (
            <Grid
              item
              xs={8}
              sm={8}
              md={8}
              lg={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {/* Two paragraphs */}
              <Typography
                variant="body2"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                }}
              >
                Investment Process:
                <br />
                Users can stake Ethereum, and the AI will manage the portfolio,
                engaging in both arbitrage and strategic long-term holdings. A
                detailed report of asset distribution and performance is
                accessible via the platform.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "20px",
                }}
              >
                Returns:
                <br />
                Investors can anticipate a variable ROI, dependent on market
                conditions and asset performance, with an estimate of up to 15%
                monthly.
              </Typography>
            </Grid>
          ) : null}
        </Grid>
        <Grid
          container
          sx={{
            margin: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!isMdScreen ? (
            <Grid
              item
              xs={8}
              sm={8}
              md={8}
              lg={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {/* Two paragraphs */}
              <Typography
                variant="body2"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  textAlign: "right",
                }}
              >
                Investment Process: <br />A dedicated account manager is
                assigned to investors in this pool, ensuring personalized
                service. Investments and withdrawals are streamlined for
                efficiency and convenience.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "20px",
                  textAlign: "right",
                }}
              >
                Returns: <br />
                ROI is dynamic, with the potential for substantial gains due to
                aggressive strategies employed. Regular updates and reports are
                provided to keep investors informed of their asset performance.
              </Typography>
            </Grid>
          ) : null}
          <Grid item xs={12} sm={8} md={4} lg={4}>
            <div style={{ textAlign: "center", marginLeft: "20px" }}>
              {/* outer Circle */}
              <div
                style={{
                  width: "94%",
                  height: "300px",
                  borderRadius: "50%",
                  backgroundColor: "#5b144d",
                  position: "relative",
                }}
              >
                {/* inner Circle */}
                <div
                  style={{
                    width: "92%",
                    height: "280px",
                    borderRadius: "50%",
                    backgroundColor: "#862071",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* White Title */}
                  <Typography
                    variant="h6"
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontSize: matches ? "28px" : "40px",
                      textDecoration: "underline",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    Pool D
                  </Typography>
                  {/* White Paragraph */}
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: isMdScreen ? "12px" : "18px",
                      color: "white",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    The High Roller Pool
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      color: "white",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    This pool is crafted for high net worth investors seeking to
                    invest a significant amount of Ethereum. It combines
                    aggressive arbitrage strategies with a diversified portfolio
                    approach to maximize returns while mitigating risks.
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ marginBottom: "100px" }}>
        <Typography
          style={{
            fontFamily: "Poppins",
            fontSize: "30px",
            color: "white",
            margin: "10px",
            textAlign: "justify",
          }}
        >
          Risk Management and Security
        </Typography>
        <Typography
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            color: "white",
            margin: "10px",
            textAlign: "justify",
          }}
        >
          While each pool offers attractive return prospects, AI BITRAGE is
          profoundly aware of the intrinsic risks involved in the volatile
          crypto market. We have instituted stringent risk management protocols,
          including real-time monitoring, AI-powered predictive analytics, and
          diversified trading strategies to mitigate risks and protect investor
          assets. Our commitment to security and transparency is unwavering,
          ensuring that AI BITRAGE stands as a beacon of trust and reliability
          in the crypto landscape.
        </Typography>
        <Typography
          style={{
            fontFamily: "Poppins",
            fontSize: "30px",
            color: "white",
            margin: "10px",
            textAlign: "justify",
          }}
        >
          5. Conclusion
        </Typography>
        <Typography
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            color: "white",
            margin: "10px",
            textAlign: "justify",
          }}
        >
          With the introduction of these four unique pools, AI BITRAGE is set to
          redefine the arbitrage trading landscape. Combining AI’s precision and
          efficiency with the transparency and security of blockchain, we are
          confident in delivering a multi-faceted platform where investors, from
          novices to high net worth individuals, can maximize their returns in a
          secure environment. AI BITRAGE is not just a platform; it’s a
          revolutionized ecosystem where technology and human ingenuity converge
          for unparalleled financial empowerment.
        </Typography>
      </Container>
    </Box>
  );
}

export default Pool_function;
