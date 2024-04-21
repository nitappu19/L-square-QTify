import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import SearchIcon  from '../../assets/search-icon.svg';
import '../SearchInput/SearchInput.css'

export default function SearchInput(){
    return(
        <Box>
            <TextField
            size='small'
            className='searchInput'
            placeholder="Search a song of your choice"
            variant="outlined"
            />
            <button className='search-btn'> <img src={SearchIcon} alt="" />
            </button>
            </Box>
    )
};