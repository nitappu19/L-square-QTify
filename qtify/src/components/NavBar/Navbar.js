import './Navbar.css';
import Logo from '../Logo/Logo'
import SearchInput from '../SearchInput/SearchInput'
import Button from '../Button/Button'
export default function Nevbar() {
  return (
    <>
        <div className='navbar'>
          <Logo />
          <SearchInput />
          <Button classname='button' value='Give Feedback'/>
        </div>
     </>
  );
}


