import React from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2C3971" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 64,
          px: 2,
        }}
      >
        {/* logo */}
        <Box
          component="img"
          src={Logo}
          alt="Site Logo"
          sx={{ height: 70, cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        {/* tabs */}
        <Button
          color="inherit"
          onClick={() => navigate("/")}
          sx={{ fontWeight: "bold", fontSize: "1rem" }}
        >
          Reports
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
