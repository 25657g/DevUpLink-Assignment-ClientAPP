import Axios from "./axios";

const getAllUsers = (token) => {
    const headers = {
      'Authorization' : 'Bearer ' +token
    }
    return Axios.get("/Users",{headers:headers});
  };
  const editUserById = (id, token, userData) =>{
    const headers = {
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +token 
    }
    return Axios.put("/Users/" +id, userData, {headers: headers});
  };

  const createUser = ( token, userData) =>{
    const headers = {
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +token 
    }
    return Axios.post("/Users/register" , userData, {headers: headers});
  };
  const userService = {
    getAllUsers,
    editUserById,
    createUser

};



export default userService;