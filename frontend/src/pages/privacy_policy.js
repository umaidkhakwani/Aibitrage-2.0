import React from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

import animation5 from "../images/animation5.gif";
import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import new_bg2_2 from "../images/blog_background.gif";
import new1 from "../images/new1.jpg";

import privacy_right from "../images/privacy_right.svg";
import terms_left from "../images/terms_left.svg";

import new2 from "../images/new2.jpg";

import "../fonts/fonts.css";
import FooterFunction from "../footer";
import { useTheme } from "@mui/system";

function Privacy_policy() {
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
          paddingBottom: "100px",
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
                src={terms_left}
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
              Privacy Policy
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
              }}
            >
              Welcome to Ai-Bitrage! This Privacy Policy outlines how we
              collect, use, and safeguard your personal information when you
              visit our website (www.ai-bitrage.com) and use our services
              (collectively, the "Website"). Protecting your privacy is of
              utmost importance to us, and we are committed to maintaining the
              confidentiality and security of your personal data.
              <br />
              <br />
              &bull;Information We Collect
              <br />
              <br />
              2.1 Personal Information
              <br />
              <br />
              We may collect personal information from you when you voluntarily
              provide it to us, such as when you create an account, subscribe to
              our newsletter, contact us through the Website, or participate in
              surveys or promotions. The types of personal information we may
              collect include your name, email address, and any other
              information you choose to provide.
              <br />
              <br />
              2.2 Log Data
              <br />
              <br />
              Like many websites, we automatically collect certain information
              when you visit our Website. This log data may include your IP
              address, browser type, operating system, referring pages, and the
              date and time of your visit. This information is used to analyze
              trends, administer the Website, and gather demographic information
              for aggregated use.
              <br />
              <br />
              2.3 Cookies and Similar Technologies
              <br />
              <br />
              We use cookies and similar tracking technologies to enhance your
              experience on our Website and to collect information about how you
              interact with it. For more details on the use of cookies, please
              refer to our Cookie Policy [Insert link to Cookie Policy].
              <br />
              <br />
              &bull;How We Use Your Information
              <br />
              <br />
              We use the information we collect for the following purposes:
              <br />
              <br />
              To provide and improve our services, including customizing content
              and features based on your preferences.
              <br />
              To communicate with you, respond to your inquiries, and send you
              important updates and notifications.
              <br />
              To analyze and understand how users interact with our Website and
              to enhance its functionality and user experience.
              <br />
              To send you promotional materials and offers related to our
              services if you have opted in to receive such communications.
              <br />
              &bull;Data Sharing and Disclosure
              <br />
              <br />
              We may share your personal information with third-party service
              providers who assist us in operating the Website and providing our
              services. These service providers are bound by confidentiality
              obligations and are not permitted to use your personal data for
              any other purpose.
              <br />
              We may also disclose your personal information if required by law
              or to protect our rights, safety, or property, or the rights,
              safety, or property of others. &bull;Data Security
              <br />
              <br />
              We take appropriate security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction. However, no data transmission over the internet or
              electronic storage system is entirely secure. Therefore, while we
              strive to use commercially acceptable means to protect your data,
              we cannot guarantee its absolute security.
              <br />
              <br />
              &bull;Links to Third-Party Websites
              <br />
              <br />
              Our Website may contain links to third-party websites or services.
              Please note that we are not responsible for the privacy practices
              of such third parties, and this Privacy Policy applies solely to
              information collected by Ai-Bitrage. We encourage you to review
              the privacy policies of any third-party websites you visit.
              <br />
              <br />
              &bull;Children's Privacy
              <br />
              <br />
              Our Website is not intended for children under the age of 18. We
              do not knowingly collect personal information from children. If
              you believe that a child has provided us with their personal data,
              please contact us, and we will take appropriate steps to remove
              the information from our records.
              <br />
              <br />
              &bull;Changes to this Privacy Policy
              <br />
              <br />
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. Any revisions will be posted on this page, and
              the "Effective Date" at the top will indicate the most recent
              update.
              <br />
              <br />
              &bull;Contact Us
              <br />
              <br />
              If you have any questions or concerns about this Privacy Policy or
              the use of your personal information, please contact us at [Insert
              Contact Email Address]. By using Ai-Bitrage Website, you agree to
              the terms of this Privacy Policy and the collection and use of
              your personal information as described herein.
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
                src={privacy_right}
                alt="Documentation Image"
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "100%",
                  zIndex: "1",
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

export default Privacy_policy;
