import './App.css';
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
  return (
    <ThemeProvider theme={theme}>
    <div className="App">


    <AppBar position="fixed" sx={{  backgroundColor: "primary", display: 'flex', flexDirection: 'row', justifyContent: { md: "flex-end", xs: "center"} }}>
  
        
        <Toolbar variant="dense">
        <Button color="secondary">Home</Button>
        <Button color="secondary">Products</Button>
        <Button color="secondary" startIcon={<ShoppingCartOutlinedIcon />}>0</Button>
        
        
        </Toolbar>
      </AppBar>





        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography align="center"variant="h4" color="primary">NVIDIA GRAPHICS CARDS</Typography>
        <Typography align="center"variant="subtitle1" color="secondary">NVIDIA RTX™ graphics cards are bringing the power of real-time ray tracing and AI to the applications you use every day.</Typography>
        <Button sx={{color: 'white', fontWeight: 'bold', borderRadius: '0px', fontSize: '16px'}}variant="contained" color="primary" >View Store</Button>
        </Box>








    </div>
    </ThemeProvider>
  );
}

export default App;
