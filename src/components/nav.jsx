import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const  Nav = ()=> {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar sx={{backgroundColor:'black'}}  position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            My Bookiee🎈
          </Typography>
          
          <Button color="inherit" sx={{fontSize:15}}>About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Nav
