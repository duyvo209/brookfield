import { Box, TextField, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo.jpeg";
import { useStyles } from "./style";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";


const Header = () => {
  const classes = useStyles();
  const pages = [
    "Trang chủ",
    "Sản phẩm chính",
    "Sản phẩm chuyên ngành",
    "Dịch vụ",
    "Giới thiệu",
    "Liên hệ",
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
    <div>
      <Box>
        <Box className={classes.headerTop}>
          <Box className={classes.headerContainer}>
            <Grid container spacing={1} my={1}>
              <Grid item md={6} xs={12}>
                <Stack
                  alignItems="flex-start"
                  justifyContent="center"
                  height="100%"
                >
                  <img src={Logo} alt="Logo" />
                </Stack>
              </Grid>
              <Grid item md={6} xs={12}>
                <Stack
                  alignItems="flex-end"
                  justifyContent="center"
                  height="100%"
                >
                  <Box style={{ marginTop: "8px" }}>
                    <span>Service & Repair: </span>
                    <span className={classes.contact}>0329545822</span>
                  </Box>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth={false}
                    sx={{ width: 260 }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <AppBar
        position="static"
        style={{ backgroundColor: "#455a64", marginTop: "10px" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              DuyVo
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              DuyVo
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
