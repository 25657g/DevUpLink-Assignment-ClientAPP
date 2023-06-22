import Axios from "./axios";

const getAllUsers = (token) => {
    const headers = {
      'Authorization' : 'Bearer ' +token
    }
    return Axios.get("/Users",{headers:headers});
  };

  const userService = {
    getAllUsers

};



export default userService;