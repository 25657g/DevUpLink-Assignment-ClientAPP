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
import userService from '../../routes/userServiceRoutes';
import { useAuthContext } from '../../hooks/useAuthContext';



const theme = createTheme();

const REGISTER_URL = "https://localhost:7246/Users/register";

export default function SignUp() {

    const navigateTo = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    const { auth } = useAuthContext();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [userData, setUser] = useState();
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);


    const handleSubmit = async (e) => {
      e.preventDefault();
     
      let userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
        
   
    try {
        const token = auth.user.token;
        userService
            .createUser(token, userData)
            .then((res) => {
            console.log("Successfully added a user ");
            navigateTo("/");
            })
            .catch((error) => {
            console.log(error);
            });
        
    } catch (err) {
        console.log(err) ;
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
            Sign up a Administrator User
        </Typography>
        <Typography component="h1" variant="h5">
          <Link href="/" variant="body2" underline="hover" color="inherit">
                  Already have an account? Sign in
          </Link>
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
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  ref={userRef}
                  autoComplete="off"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  ref={userRef}
                  autoComplete="off"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  ref={userRef}
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  ref={userRef}
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="conpassword"
                  label="Confirm Password"
                  type="password"
                  id="conpassword"
                  ref={userRef}
                  autoComplete="off"
                  value={conpassword}
                  onChange={(e) => setConPassword(e.target.value)}
                />
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