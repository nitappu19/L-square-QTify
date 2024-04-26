
import './App.css';
import { StyledEngineProvider } from '@mui/material';
import Hero from './components/Hero/Hero';
import FetchAPi from './components/FetchingAPI/FetchAPi';
import FAQs from './components/FAQS/FAQS';
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
