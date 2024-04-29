import './searchInput.css';
import searchLogo from '../../assets/search-icon.svg';

export default function SearchInput() {
  return (
    <>
        <div className='searchboxcsd'>
            <input type='text' className='search' placeholder='Search a album of your choice' />
            <button  className='searchbutton'>
                <img src={searchLogo} alt='logo' className='searchLogo' />
            </button>
        </div>
    </>
  );
}


