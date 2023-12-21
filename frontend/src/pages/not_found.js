import React from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

import home2 from "../images/home2.gif";
import animation5 from "../images/animation5.gif";
import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import report_bug from "../images/report_bug.gif";
import "../fonts/fonts.css";
import { useTheme } from "@mui/system";
import FooterFunction from "../footer";

function Not_found() {
  const theme = useTheme();
  const isMdLgScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <div style={{ position: "relative" }}>
        {/* Background Image Paper */}
        <Paper
          sx={{
            backgroundImage: `url(${report_bug})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px 0px 100px 0px",
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
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
              zIndex: "1", // Place the overlay above the background image
            }}
          ></Paper>

          {/* Your content goes here */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: "150px" }}
          >
            {/* {isMdLgScreen && (
          <Grid item xs={0} md={3}>
            <img
              src={home2}
              alt="Documentation Image"
              style={{
                width: "750px",
                height: "430px",
                marginTop: "0%",
                marginLeft: "-330px",
              }}
            />
          </Grid>
        )} */}
            <Grid
              item
              xs={12}
              md={12}
              sx={{ position: "relative", zIndex: "2" }}
            >
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: "center",
                  color: "white",
                  marginTop: 2,
                  fontFamily: "Poppins",
                  fontSize: isSmScreen ? "150px" : "200px",
                }}
              >
                404
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: "center",
                  color: "white",
                  marginTop: 2,
                  fontFamily: "Poppins",
                  fontSize: isSmScreen ? "40px" : "60px",
                }}
              >
                Not Found
              </Typography>
            </Grid>
            {/* Image */}
            {/* {isMdLgScreen && (
          <Grid item xs={12} md={4}>
            <img
              src={animation5}
              alt="Documentation Image"
              style={{ width: "100%", height: "auto", marginTop: "100%" }}
            />
          </Grid>
        )} */}
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default Not_found;
