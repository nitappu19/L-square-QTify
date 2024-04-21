import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchInput  from '../SearchInput/SearchInput';
import '../NavBar/NavBar.css';
import logo from '../../assets/logo.png'
import Feedback from '../FeedBack/Feedback';

function NavBar(){
return(
    <>
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      
        <Toolbar className='display'>
        <a href="#"><img src={logo} alt="Qtigy" width="67px" /></a>
          <SearchInput/>
          <Feedback/>
        </Toolbar>
      </AppBar>
    </Box>
    </>
)
}
export default NavBar;