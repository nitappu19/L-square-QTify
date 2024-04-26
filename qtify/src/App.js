
import './App.css';
import NavBar from './components/NavBar/navBar';
import { StyledEngineProvider } from '@mui/material';
import Hero from './components/Hero/Hero';
import FetchAPi from './components/FetchingAPI/FetchAPi';
import FAQs from './components/FAQS/FAQS';
import MusicCard from './components/MusicCard/MusicCard';
import Home from '../src/Page/Home'
function App() {
  return (
   <div className="App">
    <StyledEngineProvider injectFirst>
        <Home />
    </StyledEngineProvider>
   
     
    </div>
  );
}

export default App;
