import './App.css';
import './styles.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Missing from './Pages/Missing';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Category from './Pages/Category';
import SignUp from './Components/User/SignUp';
import RegisterStudent from './Components/Student/RegisterStudent';
import EditDetails from './Components/Student/EditDetails';
import EditUser from './Components/User/EditUser';
import RequireAuth from './Components/RequireAuth';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout/>}>
            
            {/* public routes */}
            
            <Route path="/" element={<Login />}></Route>
            <Route element={<RequireAuth/>}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/admin/signup" element={<SignUp />}></Route>
            
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/categories" element={<Category />}></Route>
            <Route path="/home/register" element={<RegisterStudent />}></Route>
            <Route path="/home/editdetails" element={<EditDetails />}></Route>
            <Route path="/admin/edituser" element={<EditUser />}></Route>
            </Route>
            


            
            <Route path="/*" element={<Missing />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
