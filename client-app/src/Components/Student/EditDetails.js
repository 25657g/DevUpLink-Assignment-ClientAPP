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

const EditDetails = () => {
    const navigateTo = useNavigate();
    const { auth } = useAuthContext();
    const [studentData, setStudent] = useState();
    const {state} = useLocation();
    const {location} = useLocation();
    const [Data, setData] = useState();
    const [Index, setIndex] = useState();
    const [Name, setName] = useState();
    const [birthDate, setBirthDate] = useState();
    const [regDate, setRegDate] = useState();

    
    const navigateBack = () => {
        // 👇️ navigate back
        navigateTo('/home');
      };
      console.log(state.id);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        let Data = {
            studentIndex: Index,
            studentName: Name,
            studentBirthDate: birthDate,
            studenRegtDate: regDate
        };
            
       
        try {
            const token = auth.user.token;
            const studentID = state.id;
            studentService
                .editStudentById(studentID, token, Data)
                .then((res) => {
                console.log("Successfully added a student details");
                navigateTo("/home");
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
                    <h4 className="heading-4">Edit Student Details</h4>
                </div>
                
    </header>
    <div className="l-page">
        <div className="container">
                
                
                    <Box component="form" noValidate onSubmit={handleSubmit}  sx={{  width: 1000, }}>
                            <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                name="studentIndex"
                                fullWidth
                                id="studentIndex"
                                label="Student index"
                                
                                value={Index}
                                onChange={(e) => setIndex(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                fullWidth
                                id="studentName"
                                label="Student Name"
                                name="studentName"
                               
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="Bday"
                                label="Birth Date"
                                name="Bday"
                                
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="regdate"
                                label="Registration Date"
                                name="regdate"
                                
                                value={regDate}
                                onChange={(e) => setRegDate(e.target.value)}
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

export default EditDetails;