
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import { StyledEngineProvider } from '@mui/material';
import Hero from './components/Hero/Hero';
function App() {
  return (
   <div className="App">
    <StyledEngineProvider injectFirst>
    <NavBar/>
    <Hero/>
    </StyledEngineProvider>
     
     
    </div>
  );
}

export default App;
