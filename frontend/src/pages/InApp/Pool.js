import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import Bridge from "../../images/Bridge.png";
import transfer from "../../images/transfer.png";
import coin1 from "../../images/coin1.png";

import pool_left_ring from "../../images/pool_left_ring.svg";
import pool_right_ring from "../../images/pool_right_ring.svg";

import ring_1 from "../../images/ring_1.svg";
import ring_2 from "../../images/ring_2.svg";
import ring_3 from "../../images/ring_3.svg";
import ring_4 from "../../images/ring_4.svg";

import pool_vid from "../../images/pool_vid.mp4";
import pool_vid_gif from "../../images/pool_vid.gif";
import pool_details from "../../images/vid_details.svg";

import pool1_graph from "../../images/pool1_graph.png";
import pool2_graph from "../../images/pool2_graph.png";
import pool3_graph from "../../images/pool3_graph.png";
import pool4_graph from "../../images/pool4_graph.png";

import pool_chart from "../../images/pool_chart.svg";
import LockIcon from "@mui/icons-material/Lock";

import "../../fonts/fonts.css";

// import "./Pools.css";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Pool_function() {
  const theme = useTheme();
  const isXSmScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const matches = useMediaQuery("(min-width:900px)");
  const laptopSize = useMediaQuery("(min-width:1025px)");
  const isTabletScreen = useMediaQuery("(max-width: 1024px)");

  const isLaptopScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const circleSize = isLaptopScreen ? 300 : isMdScreen ? 300 : 300;
  const innerCircleSize = circleSize * 0.92;

  return (
    <Box
      sx={{
        width: "90%",
        height: "100%",
        marginTop: isSmScreen ? "250px" : "0px",
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        // alignItems:"center",
        overflowY: "visible",
      }}
    >
      {!isMdScreen ? (
        <div>
          <img
            src={pool_left_ring}
            alt="Your Image"
            style={{
              position: "absolute",
              top: "70%",
              left: "20px",
              zIndex: "1", // Ensure the image is above other elements
              width: "125px",
            }}
          />
          <img
            src={pool_right_ring}
            alt="Your Image"
            style={{
              position: "absolute",
              top: "15%",
              right: "20px",
              zIndex: "1", // Ensure the image is above other elements
              width: "125px",
            }}
          />
        </div>
      ) : null}
      {/* <Box sx={{ width: "90%", height: "100%" }}>
        <Typography
          sx={{
            fontFamily: "Aclonica",
            fontSize: "16px",
            color: "white",
            margin: "10px",
          }}
        >
          Total Arbitrage
        </Typography>
      </Box>
      <Box sx={{ width: "90%", height:"100%"}}>
        <Grid container sx={{ width: "100%" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Card
              sx={{
                backgroundColor: "#50A883",
                borderRadius: "12px",
                margin: "0 10px 20px",
                width: "80%",
                height: "100%",
                position: "relative",
                zIndex: "2",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "25px",
                    fontFamily: "Buenard",
                    textAlign: "center",
                  }}
                >
                  $999,876
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "9px",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  Total Liquidity
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Card
              sx={{
                backgroundColor: "#50A883",
                borderRadius: "12px",
                margin: "0 10px 20px",
                width: "80%",
                height: "100%",
                position: "relative",
                zIndex: "2",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "25px",
                    fontFamily: "Buenard",
                    textAlign: "center",
                  }}
                >
                  $245,190
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "9px",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  24h Volume
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Card
              sx={{
                backgroundColor: "#50A883",
                borderRadius: "12px",
                margin: "0 10px 20px",
                width: "80%",
                height: "100%",
                position: "relative",
                zIndex: "2",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "25px",
                    fontFamily: "Buenard",
                    textAlign: "center",
                  }}
                >
                  $0.99
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "9px",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  AI-B Price
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ width: "95%", height: "100%", position: "relative", zIndex: "2" }}
      >
        <Typography
          sx={{
            fontFamily: "Aclonica",
            fontSize: "24px",
            color: "white",
            textAlign: "center",
          }}
        >
          Distinctive Staking Pools
        </Typography>
        <Typography
          sx={{
            fontFamily: "Aclonica",
            fontSize: "14px",
            color: "white",
            textAlign: "center",
            margin: "5px 10px",
          }}
        >
          AI BITRAGE takes pride in unveiling four exclusive staking pools,
          designed meticulously to cater to a diverse range of investors. Each
          pool is distinct in its operation, investment threshold, and expected
          returns, ensuring a tailored staking experience. Below is an in-depth
          examination of each pool:
        </Typography>
      </Box> */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          // marginTop: "20px",
          display: "flex",
          justifyContent: isMdScreen ? "center" :"flex-start",
          alignItems: isMdScreen ? "center" :"center",
        }}
      >
        {/* Pool table */}

        <Box
          sx={{
            background: "black",
            borderRadius: "10px",
            width: "90%",
            marginTop: "50px",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          color: "#50A883",
                        }}
                      >
                        Pool
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          textAlign: "center",
                          color: "#50A883",
                        }}
                      >
                        Pool Name
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          textAlign: "center",
                          color: "#50A883",
                        }}
                      >
                        Fixed Investment
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          color: "#50A883",
                          textAlign: "center",
                        }}
                      >
                        ROI
                      </Typography>
                    </TableCell>
                    {/* <TableCell>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          color: "#50A883",
                        }}
                      >
                        Graph
                      </Typography>
                    </TableCell> */}
                    <TableCell>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          color: "#50A883",
                          textAlign: "center",
                        }}
                      >
                        Invest Now
                      </Typography>
                    </TableCell>
                  </TableRow>
                  {[
                    {
                      name: "The Novice Arbitrage Pool",
                      investment: "0.5%",
                      ROI: "0.65",
                      percentageChange: "+1.68%",
                      graph: ring_1,
                    },
                    {
                      name: "The Advanced Arbitrage Pool",
                      investment: "0.75%",
                      ROI: "1",
                      percentageChange: "+1.68%",
                      graph: ring_2,
                    },
                    {
                      name: "The Diversified Assets Pool",
                      investment: "1%",
                      ROI: "1.5",
                      percentageChange: "+1.68%",
                      graph: ring_3,
                    },
                    {
                      name: "The High Roller Pool",
                      investment: "1.5%",
                      ROI: "2",
                      percentageChange: "+1.68%",
                      graph: ring_4,
                    },
                  ].map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        borderBottom: "2px solid #2B2C3B", // Set the color of the bottom border
                      }}
                    >
                      <TableCell>
                        <img
                          src={row.graph}
                          alt={`Image for ${row.name}`}
                          style={{ width: "60px" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "12px",
                          textAlign: "center",
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
                          textAlign: "center",
                          color: "#B982FF",
                          }}
                        >
                          {row.investment}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "14px",
                          textAlign: "center",
                          color: "#50A883",
                          }}
                        >
                          {row.ROI}%
                        </Typography>
                      </TableCell>
                      {/* <TableCell>
                        <img
                          src={row.graph}
                          alt={`Image for ${row.name}`}
                          style={{ width: "125px" }}
                        />
                      </TableCell> */}
                      <TableCell>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <button
                            style={{
                              width: "117px",
                              height: "34px", // Set the height to match the image height
                              border: "none",
                              borderRadius: "15px",
                              background:
                                "linear-gradient(101deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)",
                              color: "#fff",
                              cursor: "pointer",
                              textDecoration: "none",
                              fontSize: "11px",
                            }}
                          >
                            Add Liquidity
                          </button>
                          <LockIcon style={{ color: "#B102CD" }} />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Box>

      {/* <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={pool_vid_gif}
          alt="pool chart"
          style={{ width: "300px", margin: "20px 0px" }}
        />
        <img
          src={pool_details}
          alt="pool chart"
          style={{ width: "300px", margin: "20px 0px" }}
        />
      </Box> */}
      {/* <video width="350px" height="auto" controls>
        <source src={pool_vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </Box>
  );
}

export default Pool_function;
