import { Card, createTheme, Divider, Grid, ThemeProvider } from '@mui/material';
import React from 'react'
import {Typography} from '@mui/material';
import SideBar from '../Components/sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import studentService from '../routes/studentServiceRoutes';
import StudentFilter from '../Components/Student/StudentFilter';





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
const Home = () => {
  const { auth } = useAuthContext ();
  const [Students, setStudents] = useState();
  const [category, setCategory] = useState();
  const [value, setValue] = useState();
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (value === 10){
      setMaxAge(10);
      setMinAge(6);
    }else if(value == 15){
      setMaxAge(15);
      setMinAge(11);
    }else if(value == 19){
      setMaxAge(19);
      setMinAge(16);
    }
  };

  useEffect(() => {
    
    const token = auth.user.token;
      studentService
        .getAllStudents (token)
        .then((res) => {
            setStudents(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        });  
  }, []);

  return (
        <>
       
       <SideBar/>
       <div className="l-app__body">
      <header className="l-header">
                <div className="l-header__wrapper">
                    <h4 className="heading-4">Student Management System</h4>
                </div>
                
      </header>
      <div className="l-page">
      <Box sx={{ width: '100%' }}>

      <Tabs
        
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="10" label="Primary School" />
        <Tab value="15" label="Middle School" />
        <Tab value="19" label="High School" />
        <div className='align-right'>
        <Button variant="contained" color="primary" href="/home/register">Add New Student</Button>
        </div>
      </Tabs>
      
    </Box>
          
                    <StudentFilter studentList={Students} ageLimit={maxAge} minAge={minAge}/>
                
      </div>
    </div>
          
        </>
          
          
  )
}

export default Home;

