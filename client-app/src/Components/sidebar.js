import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const SideBar = () => {
    const navigateTo = useNavigate();
const { logout } = useLogout();

const handleClick = () => {
    
    try {
        const response = logout();
        navigateTo("/");
    } catch (err) {
    }
}
  return (
    <div className="l-side-nav">
    <div className="l-side-nav__header">
    <header className="l-header">
              <div className="l-header__wrapper">
                  <h4 className="heading-4">Dashboard</h4>
              </div>
              
            </header>
    </div>
    <div className="l-side-nav__content">
        <div className="l-side-nav__nav-items">
        <List>
        
        <ListItem divider>
        <a className="c-menu-item" >
            <NavLink to="/home">Home</NavLink>
            
            </a>
        </ListItem>
        <ListItem divider>
        <a className="c-menu-item">
        <NavLink to="/categories">Categories</NavLink>
            </a>
        </ListItem>
        <ListItem divider>
        <a className="c-menu-item" >
        <NavLink to="/admin">Admin User Settings</NavLink>
            </a>    
        </ListItem>  
           
        
        </List>
        </div>
        
        <List>
                <div className="c-menu-item" onClick={handleClick}>
                <ListItem divider> 
                
                    Logout
                </ListItem>
                </div>
        </List>
    </div>
</div>
  )
}

export default SideBar;