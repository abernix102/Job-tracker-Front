import { Navigate, Outlet } from "react-router-dom";
// import { useAuthStore } from "../../features/auth/model/useAuthStore";

export default function ProtectedRoute() {
  // const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const isLoggedIn = true;
  return isLoggedIn
    ? <Outlet />
    : <Navigate to="/login" replace />;
}