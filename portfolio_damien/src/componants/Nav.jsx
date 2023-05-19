// import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material'
import scrollDown from '../utile/scrollFunc';
import { Link } from 'react-scroll';
import React from 'react';

function NavBar(){


    return(
        <>
            <Link activeClass ="active" smooth spy to="mainBoxContact">Test contact</Link>
            {/* <AppBar sx={{background: ""}}>
                <Toolbar>
                    <Typography>Pellet Damien</Typography>

                    <Tabs>
                        <Tab label="home" />
                        <Tab label="expertise"/>
                        <Tab label="work"/>
                        <Tab label="experience"/>
                        <Tab label="contact"/>
                    </Tabs>
                </Toolbar>
            </AppBar> */}
        </>
    )
}

export default NavBar;