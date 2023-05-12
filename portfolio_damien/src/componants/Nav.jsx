import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material'

function NavBar(){
    return(
        <>
            <AppBar sx={{background: ""}}>
                <Toolbar>
                    <Typography>Pellet Damien</Typography>

                    <Tabs>
                        <Tab label="home"/>
                        <Tab label="expertise"/>
                        <Tab label="work"/>
                        <Tab label="experience"/>
                        <Tab label="contact"/>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;