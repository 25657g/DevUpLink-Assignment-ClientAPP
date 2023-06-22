import { FormControl, Grid, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

//calling and mapping filtered student list
const FilteredStudents = ({students}) => {
    const [search, setSearch] = useState('');
return(
    <>
      <Grid item xs={12}>
                            <FormControl fullWidth>
                            <InputLabel id="Search"></InputLabel>
                            <TextField
                                
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder='Search students'
                                />
                                  
                                </FormControl>
                            </Grid>
         
          <div className="container-fluid">
            <div className="l-table__container">
              <div className="l-table__wrapper">
                <table className="l-raw-table">
                    <thead>
                      <tr>
                        <th>Student_Index</th>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Reg_Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    {students ? (
        students.filter((item) => {
            return search.toLowerCase() === ''
              ? item
              : item.first_name.toLowerCase().includes(search);
          }).map((item, index) =>{
          return(  
                          
   <tr key={index}>
   <td>{item.studentIndex}</td>
   <td>{item?.studentName}</td>
   <td>{item.studentBirthDate}</td>
   <td>{item.studenRegtDate}</td>
   <td>
   <Link to= "/home/editdetails" 
          state= {{id:item.studentId}} style={{ textDecoration: "none" }}>
     <button className="pf-btn pf-btn-link "  >
       Edit
     </button>
     </Link>
     
   </td>
  </tr>
  
  )
  })
  ):  
  <tbody></tbody> 
   }
                </table>
              </div>
            </div>      
          </div>
    
   </>
)
};

export default FilteredStudents;