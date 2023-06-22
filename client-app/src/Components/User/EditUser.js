import { ArrowBackIosNewRounded } from '@mui/icons-material';
import { Divider, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import studentService from '../../routes/studentServiceRoutes';
import { useAuthContext } from '../../hooks/useAuthContext';
import userService from '../../routes/userServiceRoutes';

const EditUser = () => {
    const navigateTo = useNavigate();
    const { auth } = useAuthContext();
    const [userData, setUser] = useState();
    const {state} = useLocation();
    const {location} = useLocation();
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [conpassword, setConPassword] = useState("");
    
    const navigateBack = () => {
        // 👇️ navigate back
        navigateTo('/admin');
      };
      console.log(state.id);
    
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
            const id = state.id;
            userService
                .editUserById(id, token, userData)
                .then((res) => {
                console.log("Successfully added a user details");
                navigateTo("/admin");
                })
                .catch((error) => {
                console.log(error);
                });
            
        } catch (err) {
            console.log(err) ;
        }
    }
      

  return (
    <>
        
    <div className="l-app__body">
    <header className="l-header">
               
                <div className="l-header__wrapper">
                    <h4 className="heading-4">Edit User Details</h4>
                </div>
                
    </header>
    <div className="l-page">
        <div className="container">
                
                
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
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
                  autoComplete="off"
                  value={conpassword}
                  onChange={(e) => setConPassword(e.target.value)}
                />
              </Grid>
                
            </Grid>
            <Button
                            
                            onClick={handleSubmit}
                            type="submit"
                            variant="contained"
                            sx={{ mt: 4, mb: 4, mr: 0, width:'auto', borderRadius:10, marginRight:'2px', color: 'white', backgroundColor:'green', borderColor: 'black',
                            '&:hover': {
                            backgroundColor: '#393939',
                            color: 'white',
                            borderColor:'black'
                            },   
                            }}
                            >
                           Save Changes
                            </Button>
                            <Button
                        
                             onClick={navigateBack}
                            type="submit"
                            variant="contained"
                            sx={{ mt: 4, mb: 4, mr: 0, width:'auto', borderRadius:10, marginLeft:'2px', color: 'white', backgroundColor:'red', borderColor: 'black',
                            '&:hover': {
                            backgroundColor: '#393939',
                            color: 'white',
                            borderColor:'black'
                            },   
                            }}
                            >
                            Discard
                            </Button>
          </Box>
               
            
    </div>
    </div>
    

 </div>

    
</>
  )
}

export default EditUser;