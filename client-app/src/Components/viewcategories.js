import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
import categoryService from '../routes/categoryServiceRoutes';



const AllCategoriesCard = () => {
  const { auth } = useAuthContext ();
  const [Categories, setCategories] = useState();

  useEffect(() => {
    
    const token = auth.user.token;
      categoryService
        .getAllCategories (token)
        .then((res) => {
            setCategories(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        });

        
  }, []);

  return (
    <>
    {Categories ? (
      Categories.map((item, index) =>{
        return(                
 <tr key={index}>
 <td>{item.categoryId}</td>
 <td>{item?.categoryName}</td>
 <td>{item.ageLimit}</td>
 <td>
 <Link to= "/category/editcategory" 
        state= {{id:item.id}} style={{ textDecoration: "none" }}>
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
 } </>
  )
}
export default AllCategoriesCard;