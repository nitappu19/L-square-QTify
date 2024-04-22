import * as React from 'react';
import SearchIcon  from '../../assets/search-icon.svg';
import '../SearchInput/SearchInput.css'

export default function SearchInput(){
    return(
        
        <div>
         <input className='searchInput' placeholder='Search a song of your choice' />
            <button className='search-btn'>
                <img src={SearchIcon} alt="" />
            </button>
        </div>
    )
};