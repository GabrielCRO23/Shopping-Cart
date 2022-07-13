import './App.css';
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#76b900',
      
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant="h4" color="primary">NVIDIA GRAPHICS CARDS</Typography>
        <Typography variant="subtitle1" color="secondary">NVIDIA RTX™ graphics cards are bringing the power of real-time ray tracing and AI to the applications you use every day.</Typography>
        <Button sx={{color: 'white', fontWeight: 'bold', borderRadius: '0px'}}variant="contained" color="primary" >View Store</Button>
        </Box>
    </div>
    </ThemeProvider>
  );
}

export default App;
