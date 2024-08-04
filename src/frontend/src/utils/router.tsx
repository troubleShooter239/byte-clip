import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = true;
  // if has token => no auth, go to feed
  return auth ? <Outlet /> : <Navigate to="signin" />;
};

export default PrivateRoute;
