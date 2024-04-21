
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import { StyledEngineProvider } from '@mui/material';
function App() {
  return (
   <div className="App">
    <StyledEngineProvider injectFirst>
    <NavBar/>
    </StyledEngineProvider>
     
     
    </div>
  );
}

export default App;
