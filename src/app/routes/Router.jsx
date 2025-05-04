import { Routes, Route } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import AppLayout from "../components/layout/AppLayout";
import ProtectedRoute from "../hooks/ProtectedRoute";
import PublicRoute from "../hooks/PublicRoute";

import Login from "../../features/auth/pages/Login";
import Register from "../../features/auth/pages/Register";
import Dashboard from "../../features/dashboard/pages/Dashboard";
import TaskList from "../../features/tasks/pages/TaskList";

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
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<TaskList />} />
        </Route>
      </Route>
    </Routes>
  );
}
