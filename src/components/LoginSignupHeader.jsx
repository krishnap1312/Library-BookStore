import React ,{useState } from 'react'
import "../Signuo.css"
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

const LoginSignuoHeader = () => {
    const [value, setvalue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:"#0A2647"}} position='sticky' className='Appbar'>
           
            <Toolbar>
            <h1><a href="/"> Library </a></h1>
            <Typography><LibraryBooksIcon></LibraryBooksIcon></Typography>
           
            </Toolbar>
            
        </AppBar>
    </div>
  )
}

export default LoginSignuoHeader