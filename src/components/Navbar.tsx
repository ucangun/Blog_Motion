import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import MyButton from "./Button";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import useAuthCall from "../hooks/useAuthCall";
import { useNavigate } from "react-router-dom";

interface PagesType {
  title: string;
  onClick: () => void;
}

interface SettingsType {
  title: string;
  onClick: () => void;
}

function Navbar() {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { logout } = useAuthCall();
  const navigate = useNavigate();

  const pages: PagesType[] = [
    {
      title: "Products",
      onClick: () => {},
    },
    {
      title: "New blog",
      onClick: () => navigate("/newblog"),
    },
    {
      title: "Blogs",
      onClick: () => navigate("/blogs"),
    },
  ];

  const settings: SettingsType[] = [
    {
      title: "Account",
      onClick: () => {},
    },
    {
      title: "My Blogs",
      onClick: () => navigate("/myblogs"),
    },
    {
      title: "Logout",
      onClick: logout,
    },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ borderRadius: ".5rem", backgroundColor: "#111" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo />
          </Box>
          {/* Logo */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* MenuIcon */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "primary.text",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Logo */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Logo />
          </Box>
          {/* Logo */}
          {/* Pages */}
          <Box
            sx={{
              flexGrow: 1,
              margin: "auto",
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  handleCloseNavMenu();
                  page.onClick();
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          {/* Pages */}
          {/* Avatar  */}
          <Box sx={{ flexGrow: 0 }}>
            {currentUser ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                      <Typography
                        sx={{ textAlign: "center" }}
                        onClick={setting.onClick}
                      >
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box>
                <MyButton to="/login" type="primary">
                  Get Started
                </MyButton>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
