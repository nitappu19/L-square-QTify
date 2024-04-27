
import './App.css';
import { StyledEngineProvider } from '@mui/material';

import Home from '../src/Page/Home'
import AlbumCard from './Components/AlbumCard/AlbumCard';
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
