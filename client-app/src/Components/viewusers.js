import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import userService from '../routes/userServiceRoutes';
import { useAuthContext } from '../hooks/useAuthContext';



const AllUsersCard = () => {
  const { auth } = useAuthContext ();
  const [Users, setUsers] = useState();

  useEffect(() => {
    
    const token = auth.user.token;
      userService
        .getAllUsers (token)
        .then((res) => {
            setUsers(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        });

        
  }, []);

  return (
    <>
    {Users ? (
      Users.map((item, index) =>{
        return(                
 <tr key={index}>
 <td>{item.id}</td>
 <td>{item?.firstName}</td>
 <td>{item.lastName}</td>
 <td>{item.email}</td>
 <td>
 <Link to= "/admin/edituser" 
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
export default AllUsersCard;