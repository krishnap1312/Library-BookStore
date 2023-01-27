import React ,{useState } from 'react'
import "./all.css"
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setvalue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:"#0A2647"}} position='sticky' className='Appbar'>
           
            <Toolbar>
            <h1><a href="/home"> Library </a></h1>
            <Typography><LibraryBooksIcon></LibraryBooksIcon></Typography>
            <Tabs sx={{ml:"auto"}} textColor='Secondary' value={value} onChange={(e,val)=>setvalue(val)}>
                <Tab sx={{fontSize:"140%"}} LinkComponent={NavLink} to="/add" label="Add Book"></Tab>
                <Tab sx={{fontSize:"140%"}} LinkComponent={NavLink} to="/books" label="All Books"></Tab>
                <Tab sx={{fontSize:"140%"}} LinkComponent={NavLink} to="/about" label="About Us"></Tab>
                <Tab sx={{fontSize:"140%"}} LinkComponent={NavLink} to="/login" label="Log Out"></Tab>
                
            </Tabs>
            </Toolbar>
            
        </AppBar>
    </div>
  )
}

export default Header