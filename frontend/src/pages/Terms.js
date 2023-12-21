import React from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

import animation5 from "../images/animation5.gif";
import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import new_bg2_2 from "../images/blog_background.gif";
import new1 from "../images/new1.jpg";
import new2 from "../images/new2.jpg";
import new3 from "../images/new3.png";

import terms_left from "../images/terms_left.svg";
import terms_right from "../images/terms_right.svg";


import "../fonts/fonts.css";
import FooterFunction from "../footer";
import { useTheme } from "@mui/system";

function Terms() {
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
          paddingBottom:"100px",
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
              Terms of Use
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
              Welcome to Ai-Bitrage! These Terms of Use ("Terms") govern your
              access and use of our website (www.ai-bitrage.com) and all related
              services (collectively, the "Website"). By accessing or using the
              Website, you agree to be bound by these Terms. If you do not agree
              with any part of these Terms, please refrain from using the
              Website.
              <br />
              <br />
              Use of the Website
              <br />
              <br />
              2.1 Eligibility
              <br />
              <br />
              You must be at least 18 years old to use the Website. By accessing
              and using the Website, you represent and warrant that you are of
              legal age and have the capacity to enter into a binding contract.
              <br />
              <br />
              2.2 Account Registration
              <br />
              <br />
              To access certain features and services on the Website, you may
              need to create an account. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account. You agree to notify us immediately
              of any unauthorized use of your account.
              <br />
              <br />
              2.3 Prohibited Activities
              <br />
              <br />
              When using the Website, you agree not to:
              <br />
              <br />
              a. Violate any applicable laws or regulations; b. Infringe upon
              the rights of others, including intellectual property rights; c.
              Transmit any unlawful, harmful, or offensive content; d. Interfere
              with the proper functioning of the Website; e. Engage in any form
              of hacking, data mining, or unauthorized access; f. Engage in any
              activity that may disrupt or burden our infrastructure; g.
              Misrepresent your identity or impersonate any person or entity; h.
              Attempt to gain unauthorized access to other users' accounts; i.
              Use the Website for any illegal or unauthorized purpose.
              <br />
              <br />
              &bull; Intellectual Property
              <br />
              <br />
              All content and materials available on the Website, including but
              not limited to text, graphics, logos, images, videos, software,
              and trademarks, are the property of Ai-Bitrage or its licensors
              and are protected by intellectual property laws. You may not use,
              reproduce, modify, distribute, or display any content from the
              Website without our prior written consent.
              <br />
              <br />
              &bull; Risk Disclaimer
              <br />
              <br />
              Trading and investing in cryptocurrencies carry inherent risks,
              including the risk of losing your invested capital. Ai-Bitrage
              does not provide financial advice, and any information or content
              on the Website should not be considered as financial advice. You
              are solely responsible for conducting your research and making
              informed decisions regarding your investments.
              <br />
              <br />
              &bull; Disclaimer of Warranties
              <br />
              <br />
              The Website and its content are provided "as is" and without
              warranties of any kind, whether express or implied. Ai-Bitrage
              does not guarantee the accuracy, completeness, or reliability of
              the content on the Website. Your use of the Website is at your own
              risk.
              <br />
              <br />
              &bull; Limitation of Liability
              <br />
              <br />
              Ai-Bitrage and its affiliates will not be liable for any direct,
              indirect, incidental, consequential, or special damages arising
              out of or in connection with your use of the Website or the
              content therein. This limitation of liability applies even if
              Ai-Bitrage has been advised of the possibility of such damages.
              <br />
              <br />
              &bull; Indemnification
              <br />
              <br />
              You agree to indemnify and hold Ai-Bitrage and its officers,
              directors, employees, and agents harmless from any claims, losses,
              damages, liabilities, and expenses, including attorneys' fees,
              arising out of or related to your use of the Website, violation of
              these Terms, or any breach of applicable laws.
              <br />
              <br />
              &bull; Changes to the Terms
              <br />
              <br />
              Ai-Bitrage may modify these Terms at any time without prior
              notice. Any changes will be effective upon posting on the Website.
              Your continued use of the Website after the changes have been made
              will signify your acceptance of the updated Terms.
              <br />
              <br />
              &bull; Governing Law and Jurisdiction
              <br />
              <br />
              These Terms shall be governed by and construed in accordance with
              the laws of [Insert Jurisdiction]. Any dispute arising under or in
              connection with these Terms shall be subject to the exclusive
              jurisdiction of the courts of [Insert Jurisdiction].
              <br />
              <br />
              &bull; Contact Us
              <br />
              <br />
              If you have any questions or concerns about these Terms or the use
              of the Website, please contact us at [Insert Contact Email
              Address]. By using Ai-Bitrage Website, you agree to be bound by
              these Terms of Use.
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
                src={terms_right}
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

export default Terms;
