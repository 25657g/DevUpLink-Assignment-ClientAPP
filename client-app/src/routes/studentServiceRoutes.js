import Axios from "./axios";

const getAllStudents = (token) => {
    const headers = {
      'Authorization' : 'Bearer ' +token
    }
    return Axios.get("/Student/AllStudents",{headers:headers});
  };

  const getStudentById = (studentID, token) => {
    const headers = {
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +token 
    }
    return Axios.get("/Student/" +studentID, {headers: headers});
  };

  const editStudentById = (studentID, token, studentData) =>{
    const headers = {
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +token 
    }
    return Axios.put("/Student/" +studentID, studentData, {headers: headers});
  };
  const studentService = {
    getAllStudents,
    getStudentById,
    editStudentById

};



export default studentService;