import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

const PrivateRoute = () => {
  // if has token => no auth, go to feed
  return useAuth() ? <Outlet /> : <Navigate to="signin" />
}

export default PrivateRoute
