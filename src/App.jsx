import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Fraud from "./pages/fraud/Fraud"; // 👉 NEW
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* 🔓 Public routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🔒 Protected dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* 🔒 Protected fraud page */}
      <Route
        path="/fraud"
        element={
          <ProtectedRoute>
            <Fraud />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}