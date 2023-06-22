import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, createTheme, Divider, Grid, ThemeProvider } from '@mui/material';
import FilteredStudents from './FilteredStudents';

const StudentFilter = ({studentList, ageLimit, minAge}) =>{
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() =>{
      const filtered = studentList?.filter((student)=>{
      const today= new Date();
      const birthDate = new Date(student.studentBirthDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
      age--;
    }
    return age <= ageLimit && age >= minAge;
      });
      setFilteredStudents(filtered);
    },[studentList, ageLimit]);

    return(
        <FilteredStudents students={filteredStudents}/>
    );
  };

  export default StudentFilter;