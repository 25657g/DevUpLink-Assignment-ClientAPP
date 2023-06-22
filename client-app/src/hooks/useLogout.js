import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const { setAuth } = useAuthContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    setAuth({});
  }

  return { logout }
}