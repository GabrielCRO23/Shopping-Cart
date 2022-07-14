import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import RTX3090 from '../images/RTX3090.png'
import RTX3080 from '../images/RTX3080.png'
import RTX3070 from '../images/RTX3070.png'
import RTX3060 from '../images/RTX3060.png'
import RTX3060TI from '../images/RTX3060TI.png'
import RTXA6000 from '../images/RTXA6000.png'
import A40 from '../images/A40.png'

function Shop(){
    return(
        <div>
            
            <Grid container mt={10}>

                <Grid item xs={12} sm={6}>
                <img src={RTX3090} style={{width: '594px', height: '308px',border: '2px solid green'}}/>
                </Grid>

                <Grid item xs={12} sm={6}>
                <img src={RTX3080} style={{width: '594px', height: '308px',border: '2px solid green'}}/>
                </Grid>

                

                <Grid item xs={12} sm={6}>
                <img src={RTXA6000} style={{width: '594px', height: '308px',border: '2px solid green'}}/>
                </Grid>

                <Grid item xs={12} sm={6}>
                <img src={A40} style={{width: '594px', height: '308px',border: '2px solid green'}}/>
                </Grid>



        </Grid>
        
        </div>
    )
}

export default Shop