import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import SearchIcon  from '../../assets/search-icon.svg';
import './searchInput.css'
export default function Searchbox() {
  return (
    <>
        <Box className='searchbox'>
            
            <input type="text"  className='searchInput'
            placeholder="Search a song of your choice" />
            <button className='searchbutton'> 
            <img src={SearchIcon} alt=""  className='searchlogo'/>
            </button>
            </Box>
    </>
  );
}


