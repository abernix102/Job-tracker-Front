import { Routes, Route } from "react-router-dom";
import AuthLayout from "./shared/components/layout/AuthLayout";
import AppLayout from "./shared/components/layout/AppLayout";


export default function Router() {
  return (
    <Routes>
      {/* Rutas públicas (login, register) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Rutas privadas (dashboard, tareas, etc.) */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskList />} />
      </Route>
    </Routes>
  );
}
