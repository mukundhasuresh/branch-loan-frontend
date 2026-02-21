import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Fraud from "./pages/fraud/Fraud";
import FraudAnalytics from "./pages/fraud/FraudAnalytics";
import Loans from "./pages/loans/Loans";
import Notifications from "./pages/notifications/Notifications";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Protected fraud page */}
      <Route
        path="/fraud"
        element={
          <ProtectedRoute>
            <Fraud />
          </ProtectedRoute>
        }
      />

      {/* Protected fraud analytics page */}
      <Route
        path="/fraud-analytics"
        element={
          <ProtectedRoute>
            <FraudAnalytics />
          </ProtectedRoute>
        }
      />

      {/* Protected loans page */}
      <Route
        path="/loans"
        element={
          <ProtectedRoute>
            <Loans />
          </ProtectedRoute>
        }
      />

      {/* Protected notifications page */}
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}