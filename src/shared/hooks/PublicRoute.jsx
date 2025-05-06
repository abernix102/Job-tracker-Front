import { Outlet, Navigate } from "react-router-dom";
// import { useAuthStore } from "../../features/auth/model/useAuthStore";

export default function PublicRoute() {
  // const isAuthenticated = useAuthStore(state => state.isLoggedIn);
  // console.log(isAuthenticated)
  const isAuthenticated = true;
  if (isAuthenticated) return <Navigate to="/" />;
  return <Outlet />; 
}
