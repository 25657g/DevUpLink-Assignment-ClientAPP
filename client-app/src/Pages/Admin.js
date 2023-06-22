import { Card, createTheme, Divider, Grid, ThemeProvider } from '@mui/material';
import React from 'react'
import {Typography} from '@mui/material';
import SideBar from '../Components/sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import AllUsersCard from '../Components/viewusers';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
const Admin = () => {
  return (
        <>
       
       <SideBar/>
       <div className="l-app__body">
      <header className="l-header">
                <div className="l-header__wrapper">
                    <h4 className="heading-4">All System Users</h4>
                </div>
                
      </header>
      <div className="l-page">      
      
      <div className='align-left'>
      <Box sx={{ width: '100%' }}>
      <Button variant="contained" color="primary" href="/admin/signup" >Add New User</Button>
      </Box>
        
        </div>
      
          <div className="container-fluid">
            <div className="l-table__container">
              <div className="l-table__wrapper">
                <table className="l-raw-table">
                    <thead>
                      <tr>
                        <th>User_ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <AllUsersCard/>
                </table>
              </div>
            </div>      
          </div>
      </div>
    </div>
          
        </>
          
          
  )
}

export default Admin;