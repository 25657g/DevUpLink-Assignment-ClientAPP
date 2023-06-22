import Axios from "./axios";

const getAllCategories = (token) => {
    const headers = {
      'Authorization' : 'Bearer ' +token
    }
    return Axios.get("/Category/AllCategories",{headers:headers});
  };

  const categoryService = {
    getAllCategories

};



export default categoryService;