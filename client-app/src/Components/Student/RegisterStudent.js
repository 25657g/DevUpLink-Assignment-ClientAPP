import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../routes/axios';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const theme = createTheme();

const REGISTER_URL = "https://localhost:7246/Student/register";

export default function RegisterStudent() {

    const navigateTo = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    
    const [studentIndex, setStudentIndex] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentBirthDate, setStudentBirthDate] = useState("");
    const [studenRegtDate, setStudenRegtDate] = useState("");
    
    

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);


    const handleSubmit = async (e) => {
      e.preventDefault();
     
      try {
          const response = await Axios.post(REGISTER_URL,
              JSON.stringify({ studentIndex, studentName, studentBirthDate,  studenRegtDate}),
              {
                  headers: { 'Content-Type': 'application/json' },
              }
          );
          navigateTo("/home");
          // TODO: remove console.logs before deployment
          console.log(JSON.stringify(response?.data));
          //console.log(JSON.stringify(response))
          setSuccess(true);
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 409) {
              setErrMsg('Name/Index Taken');
          } else {
              setErrMsg('Registration Failed')
          }
          
      }
  }

  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main"  sx={{paddingTop: 4, paddingBottom: 4,}}>
        <CssBaseline />
        <Box
          sx={{
            width: 1300,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin:'auto',
          }}
        >
        <Box sx={{
                width: 1200,
                marginTop: 0,
                
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin:'auto',
                }}
                >
          <Button color="error" variant="contained" href="/admin">Go Back</Button>
        <Typography component="h1" variant="h5" sx={{fontWeight:'bold',}}>
            Register up a Student
        </Typography>
        </Box>
        <Box
          sx={{
            width: 600,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin:'auto',
          }}
        >
          <Card sx={{marginTop: 4, borderRadius:3,}}>
          <CardContent>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="studentIndex"
                  required
                  fullWidth
                  id="studentIndex"
                  label="Student Index"
                  ref={userRef}
                  autoComplete="off"
                  value={studentIndex}
                  onChange={(e) => setStudentIndex(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="studentName"
                  label="Student Name"
                  name="studentName"
                  ref={userRef}
                  autoComplete="off"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        fullWidth
                                        id="studentBirthDate"
                                        name="studentBirthDate"
                                        label="BirthDate"
                                        value={studentBirthDate}
                                        onChange={(e) => {
                                            setStudentBirthDate(e);
                                        }}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </LocalizationProvider>
                                </Grid>
                            <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                        fullWidth
                                        id="studenRegtDate"
                                        name="studenRegtDate"
                                        label="RegtDate"
                                        value={studenRegtDate}
                                        onChange={(e) => {
                                            setStudenRegtDate(e);
                                        }}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                />
                            </LocalizationProvider>
                            </Grid>
                
            </Grid>
            <Button
              type="submit"
              variant="outlined"
              sx={{ mt: 3, mb: 2, width:200, borderRadius:15,  color: 'black', borderColor: 'black',
              '&:hover': {
                backgroundColor: '#DCDCDC',
                color: 'balck',
                borderColor:'black'
            },   
            }}
            >
              Sign Up
            </Button>
          </Box>
          </CardContent>
          </Card>
        </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}