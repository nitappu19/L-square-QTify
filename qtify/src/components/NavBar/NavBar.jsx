import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchInput  from '../SearchInput/SearchInput';
import '../NavBar/NavBar.css';
import Logo from '../Logo/Logo'
import Feedback from '../FeedBack/Feedback';

function NavBar(){
return(
    <>
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar className='display'>
          <Logo/>
          <SearchInput/>
          <Feedback/>
        </Toolbar>
      </AppBar>
    </Box>
    </>
)
}
export default NavBar;