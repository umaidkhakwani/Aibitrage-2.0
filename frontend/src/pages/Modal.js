import React, { useState } from "react";
import Modal from "react-modal";
import "../fonts/fonts.css";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const matches = useMediaQuery("(min-width:600px)");


  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1000, // Adjust the zIndex for the overlay
        },
        content: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "10px",
          padding: "20px",
          width: isSmScreen ? "80%" : "500px", // Adjust the width as needed
          height: isSmScreen ? "500px" : "300px", // Adjust the height as needed
          overflow: "hidden", // Prevent scrolling
          zIndex: 1001, // Adjust the zIndex for the modal content
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          border: "5px solid #50A883",
          transform: "translate(-50%, -50%)", // Center align the modal
          position: "relative", // Ensure the pseudo-element is positioned relative to the content
          boxShadow: "0 0 40px 20px #50A883", // Add white box shadow
        },
      }}
    >
      <Container sx={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>

      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Lora",
          fontSize: "38px",
          fontStyle: "normal",
          textAlign: "center",
        }}
      >
        Cookies Settings
      </Typography>

      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Lora",
          fontSize: "14px",
          fontStyle: "normal",
          textAlign: "justify",
          
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            background: "#50A883",
            color: "white",
            padding: "5px 20px",
            borderRadius: "20px",
            margin:"5px 20px",
            fontFamily:"Rakkas",
          }}
          onClick={closeModal}
        >
          Accept
        </button>
        <button
          style={{
            background: "transparent",
            border: "0px solid black",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            fontFamily:"Rakkas",
          }}
          onClick={closeModal}
        >
          Reject
        </button>
      </div>
      </Container>

    </Modal>
  );
};

export default ModalComponent;
