
import './App.css';
import { StyledEngineProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
