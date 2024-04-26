import * as React from 'react';
import SearchIcon  from '../../assets/search-icon.svg';
import '../SearchInput/SearchInput.css'

export default function SearchInput(){
    return(
        <>
        <div className='searchbox'>
            <input type='text' className='search' placeholder='Search a album of your choice' />
            <button  className='searchbutton'>
                <img src={SearchIcon} alt='logo' className='searchLogo' />
            </button>
        </div>
    </>
    )
};