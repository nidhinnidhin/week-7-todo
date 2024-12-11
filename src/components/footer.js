import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, bgcolor: 'lightgray', color: 'black' }}>
      <Toolbar>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          © 2024 Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

