import { Routes, Route } from "react-router-dom";
import AuthLayout from "../../widgets/layout/AuthLayout";
import AppLayout from "../../widgets/layout/AppLayout";
import ProtectedRoute from "../../shared/hooks/ProtectedRoute";
import PublicRoute from "../../shared/hooks/PublicRoute";

import Login from "../../features/auth/pages/Login";
import Register from "../../features/auth/pages/Register";
import DashboardPage from "../../pages/DashboardPage/DashboadPage";
// import TaskList from "../../features/tasks/pages/TaskList";

export default function Router() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>

      {/* Rutas privadas */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          {/* <Route path="/tasks" element={<TaskList />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}
