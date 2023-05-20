import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-scroll';
import React from 'react';

function NavBar(){


    return(
        <>
            <AppBar sx={{background: ""}}>
                <Toolbar>
                    <Typography>Pellet Damien</Typography>

                    <Tabs>
                        <Link activeClass='active' smooth spy to="boxTitlePresentation">
                            <Tab label="home" />
                        </Link>
                        <Link  activeClass='active' smooth spy to="mainboxExpertise">
                            <Tab label="expertise"/>
                        </Link>
                        <Link activeClass='active' smooth spy to="mainBoxCard">
                            <Tab label="work"/>
                        </Link>
                        <Tab label="experience"/>
                        <Link activeClass='active' smooth spy to="mainBoxContact">
                            <Tab label="contact"/>
                        </Link>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;

