import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate, useLocation } from 'react-router-dom'


export const useLogin = () => {

    const navigateTo = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    const { setAuth } = useAuthContext();

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
  
    const login = async (email, password) => {
      setIsLoading(true)
      setError(null)
  
      const response = await fetch('https://localhost:7246/Users/authenticate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
      })
      const user = await response.json()
  
      if (!response.ok) {
        setIsLoading(false)
        setError(user.error)
      }
      if (response.ok) {
        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(user))
  
        // update the auth context
        setAuth({user});
        
  
        // update loading state
        setIsLoading(false);
        navigateTo(from, { replace: true });
      }

    
    }
  
    return { login, isLoading, error }
  }