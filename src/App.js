import './App.css';
import '@fontsource/roboto/400.css';
import { ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';
import Home from './components/Home'
import Shop from './components/Shop'
import Header from './components/Header'
import {useState} from 'react'


let theme = createTheme({
  palette: {
    primary: {
      main: '#76b900',
      
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const [cart, setCart] = useState(0)

  return (
    <ThemeProvider theme={theme}>
    <div className="App">


      <Header ></Header>



      <Shop></Shop>

      








    </div>
    </ThemeProvider>
  );
}

export default App;
