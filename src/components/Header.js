import { AppBar, Container, IconButton, Toolbar, Button, Typography, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

function Header({ views, currentView, setCurrentView }) {
  const [anchorElNav, setAnchorElNav] = useState('');

  function handleOpenNavMenu(event) {
    setAnchorElNav(event.currentTarget);
  }

  function handleCloseNavMenu(event) {
    console.log(event.target.innerText);
    window.location.assign(`/${event.target.innerText}`)
    setAnchorElNav(null);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile and small view */}
          <Typography variant="h4" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            TJ James
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {views.map(view => (
                <MenuItem key={view} onClick={setCurrentView(view)}>
                  <Typography textAlign="center">{view}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Medium and larger view */}
          <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            TJ James
          </Typography>
          <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}>
            {views.map(view => (
              <Button key={view} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {view}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
