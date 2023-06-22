import { Card, createTheme, Divider, Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import {Typography} from '@mui/material';
import SideBar from '../Components/sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import AllCategoriesCard from '../Components/viewcategories';





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
const Category = () => {
  return (
        <>
       
       <SideBar/>
       <div className="l-app__body">
      <header className="l-header">
                <div className="l-header__wrapper">
                    <h4 className="heading-4">Student Category Settings</h4>
                </div>
                
      </header>
      <div className="l-page">
        <div className="l-page-header__heading">
          <div className="l-page__title-wrapper">
            <div className="body-base--medium">All Categories</div>
          </div>
          <div className="l-page__actions">
          
          </div>
      </div>
          <div className="container-fluid">
            <div className="l-table__container">
              <div className="l-table__wrapper">
                <table className="l-raw-table">
                    <thead>
                      <tr>
                        <th>Category_ID</th>
                        <th>Category_Name</th>
                        <th>Age_Limit</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <AllCategoriesCard/>
                </table>
              </div>
            </div>      
          </div>
      </div>
    </div>
          
        </>
          
          
  )
}

export default Category;