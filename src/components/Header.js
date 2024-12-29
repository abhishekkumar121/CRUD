import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "../styles/header.css";

const Header = () => {
  const handleBackClick = () => {
    alert("Back button clicked");
  };
  return (
    <AppBar position="static" className="header">
      <Toolbar className="header-content">
        <Typography variant="h4" className="company-name">
          Futech
        </Typography>
        <Button
          color="inherit"
          className="back-button"
          onClick={handleBackClick}
        >
          Back
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
