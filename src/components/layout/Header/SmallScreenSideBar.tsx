import { Home, KeyboardReturn, Login } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  handleOpen?: () => void;
  handleClose?: () => void;
  open?: boolean;
};

export default function SmallScreenSideBar({}: // handleOpen,
// handleClose,
// open,
Props): JSX.Element {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const isHome = location?.pathname === "/";

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  const handleNavigate = () => {
    switch (role) {
      case "super_admin":
        navigate("/accounts/students");
        break;
      case "admin":
        navigate("/accounts/teachers");
        break;
      case "teacher":
        navigate("/teacher/courses/all");
        break;
      case "student":
        navigate("/student/courses/all");
        break;
      default:
        navigate("/");
    }
  };

  const handleProfileMenuOpen = () => {
    const userRole = localStorage.getItem("role");

    if (userRole === "student") {
      navigate(`/student/profile`);
    } else if (
      userRole === "admin" ||
      userRole === "super-admin" ||
      userRole === "super_admin"
    ) {
      navigate(`/profile`);
    } else {
      navigate(`/teacher/profile`);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {token ? (
          <>
            <ListItem onClick={handleProfileMenuOpen} disablePadding>
              {/* <ProfileDetailsHeader /> */}
            </ListItem>
            <Divider />

            {!isHome ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      background: "transparent",
                    }}
                    onClick={() => navigate("/")}
                  >
                    <IconButton
                      sx={{ backgroundColor: "transparent" }}
                      size="large"
                      color="inherit"
                    >
                      <Home />
                    </IconButton>
                    <ListItemText
                      primary="الصّفحة الرئيسيّة"
                      sx={{ textAlign: "start" }}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ) : (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      background: "transparent",
                    }}
                    onClick={handleNavigate}
                  >
                    <IconButton
                      sx={{
                        background: "transparent",
                      }}
                      size="large"
                      color="inherit"
                    >
                      <KeyboardReturn />
                    </IconButton>
                    <ListItemText
                      primary="العودة للموقع"
                      sx={{ textAlign: "start" }}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            )}
          </>
        ) : (
          <ListItem disablePadding>
            <ListItemButton
              disableTouchRipple
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                background: "transparent",
              }}
              onClick={() => navigate("/login")}
            >
              <ListItemIcon sx={{ minWidth: "auto" }}>
                <Login sx={{ color: "#000" }} />
              </ListItemIcon>
              <ListItemText
                primary="تسجيل الدّخول"
                sx={{ textAlign: "start" }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        color="inherit"
        onClick={toggleDrawer(true)}
        sx={{ marginLeft: "10px" }}
      >
        <MenuIcon fontSize="small" />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        sx={{
          "& .MuiDrawer-paper": {
            borderRadius: "16px",
          },
        }}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
