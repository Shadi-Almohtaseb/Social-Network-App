import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  alpha,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Mail from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  marginRight: theme.spacing(1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.3),
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  [theme.breakpoints.up("md")]: {
    width: "45%",
  },
  marginLeft: "15px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  cursor: "pointer",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Navbar = ({ openSide, setOpenSide }) => {
  const { HandelSignOut, userIn } = UserAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handelSignOut = async () => {
    try {
      await HandelSignOut();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userIn) navigate("/signin");
  }, [userIn]);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", md: "block" }, cursor: "pointer" }}
        >
          React.js & MUI
        </Typography>
        <MenuIcon
          sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
          onClick={(e) => {
            setOpenSide(!openSide);
          }}
        />

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="inherit" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsRoundedIcon color="inherit" />
          </Badge>
          <Tooltip title="Account settings">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                px: "12px",
                py: "4px",
                bgcolor: "#ffe5",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#ffe9",
                  color: "#fff",
                },
              }}
              onClick={(e) => setOpen(true)}
            >
              <Avatar alt="Girl" src={userIn?.photoURL} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  ml={1}
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  {userIn?.displayName}
                </Typography>
                <Typography
                  variant="subtitle2"
                  ml={1}
                  sx={{ display: { xs: "none", sm: "flex", fontSize: "12px" } }}
                >
                  {userIn?.email}
                </Typography>
              </Box>
            </Box>
          </Tooltip>
          <Menu
            id="account-menu"
            open={open}
            onClose={(e) => setOpen(false)}
            onClick={(e) => setOpen(false)}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: -66,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 30,
                  width: 12,
                  height: 12,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAddAltRoundedIcon fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsApplicationsRoundedIcon fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handelSignOut}>
              <ListItemIcon>
                <ExitToAppRoundedIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
