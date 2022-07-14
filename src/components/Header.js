import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';

function Header(){
    return(
        <div>
     <AppBar position="fixed" sx={{  backgroundColor: "primary", display: 'flex', flexDirection: 'row', justifyContent: { md: "flex-end", xs: "center"} }}>
           
    <Toolbar variant="dense">
    <Button color="secondary">Home</Button>
    <Button color="secondary">Products</Button>
    <Button color="secondary" startIcon={<ShoppingCartOutlinedIcon />}>0</Button>

    </Toolbar>
    </AppBar>

        </div>
    )
}

export default Header