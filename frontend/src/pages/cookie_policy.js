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

function Cookie_policy() {
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
                textAlign: "center",
                color: "white",
                marginTop: 2,
                fontFamily: "Maragsa",
                fontSize: 40,
              }}
            >
              Cookie Policy
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: "Left",
                color: "white",
                marginTop: 2,
                fontFamily: "Poppins",
                fontSize: 14,
                marginBottom: "100px",
              }}
            >
              Welcome to Ai-Bitrage! This Cookie Policy explains how we use
              cookies and similar tracking technologies on our website
              (www.ai-bitrage.com) and related services (collectively, the
              "Website"). By using our Website, you consent to the use of
              cookies as described in this policy.
              <br />
              <br />
              &bull; What are Cookies?
              <br />
              <br />
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              enhance the user experience, improve website performance, and
              provide certain features and functionalities.
              <br />
              <br />
              &bull; How We Use Cookies
              <br />
              <br />
              Ai-Bitrage uses cookies for the following purposes:
              <br />
              Authentication: We use cookies to identify you when you log in to
              our Website and provide you with access to your account.
              Preferences: Cookies help us remember your preferences, such as
              language or region selection, so you don't have to set them each
              time you visit. Analytics: We use cookies to collect information
              about how you interact with our Website, such as the pages you
              visit and the links you click. This helps us understand user
              behavior and improve the Website's performance and content.
              Security: Cookies assist in enhancing the security of our Website
              and your account by detecting potential threats or unauthorized
              access. Marketing and Advertising: We may use cookies to deliver
              personalized advertisements and promotional content based on your
              interests and browsing behavior.
              <br />
              <br />
              &bull; Types of Cookies We Use
              <br />
              <br />
              Session Cookies: These are temporary cookies that are stored on
              your device only during your browsing session. They are
              automatically deleted when you close your browser. Persistent
              Cookies: These cookies remain on your device for a set period or
              until you delete them. They are used for remembering your
              preferences and enhancing your experience upon return visits.
              Third-Party Cookies: We may allow third-party service providers to
              place cookies on our Website to perform various services, such as
              analytics or advertising.
              <br />
              <br />
              &bull; Cookie Management
              <br />
              <br />
              Most web browsers accept cookies automatically, but you can
              usually modify your browser settings to decline cookies or receive
              a notification when a cookie is being sent. Please note that
              blocking or deleting cookies may impact your experience on our
              Website, and some features may not function properly. To learn
              more about cookie management in your browser, please visit the
              help section or settings of your browser.
              <br />
              <br />
              &bull; Changes to this Cookie Policy
              <br />
              <br />
              We may update this Cookie Policy from time to time to reflect
              changes in technology or legal requirements. Any revisions will be
              posted on this page, and the "Effective Date" at the top will
              indicate the most recent update.
              <br />
              <br />
              &bull; Contact Us
              <br />
              <br />
              If you have any questions or concerns about this Cookie Policy or
              the use of cookies on our Website, please contact us at{" "}
              <a
                href="mailto:Bitrage.ai@gmail.com"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Bitrage.ai@gmail.com
              </a>
              .. By continuing to use Ai-Bitrage Website, you consent to the use
              of cookies and tracking technologies as described in this Cookie
              Policy.
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

export default Cookie_policy;
