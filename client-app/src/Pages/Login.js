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
import {useEffect, useState } from 'react';
import Axios from '../routes/axios';
import { useLogin } from '../hooks/useLogin';



const theme = createTheme();
const LOGIN_URL = "/Users/authenticate";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const {login, error, isLoading} = useLogin();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await login(email, password);
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
          setErrMsg('Username Taken');
      } else {
          setErrMsg('Registration Failed')
      }  
  }
};

  return (
    
      <Container component="main" alignItems="center" >
        <CssBaseline />
        <Box
          sx={{
            width: 1250,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin:'auto',
          }}
        >
          <Card sx={{marginTop: 4, borderRadius:3,}}>
          <CardContent>
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Box sx={{display: 'flex'}}>
            <Typography component="h1" variant="h5">
              Welcome to
            </Typography>
            <Typography component="h1" variant="h5" style={{color: 'green'}} sx={{paddingLeft:1}}>
              Student System
            </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2, width:130, borderRadius:10, color: 'black', borderColor: 'black',
                    '&:hover': {
                      backgroundColor: '#DCDCDC',
                      color: 'balck',
                      borderColor:'black'
                    },
                  }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item sx={{margin:'auto'}}>
                  <Link href="/signup" variant="body2">
                    {"Not a member? Register Now"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
        </Card>
        </Box>
      </Container>
   
  );
}