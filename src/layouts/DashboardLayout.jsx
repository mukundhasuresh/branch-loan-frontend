import { Home, FileText, ShieldAlert, Bell } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout({ children }) {
  const { user } = useAuth();

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white/70 backdrop-blur-xl border-r shadow-lg p-6">
        <h1 className="text-xl font-bold mb-8">Branch Loan</h1>

        <nav className="space-y-4">
          <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <Home size={18} /> Dashboard
          </div>

          <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FileText size={18} /> Loans
          </div>

          <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <ShieldAlert size={18} /> Fraud
          </div>

          <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <Bell size={18} /> Notifications
          </div>
        </nav>

        <div className="absolute bottom-6">
          <p className="text-sm text-gray-500">
            Logged in as
          </p>
          <p className="font-medium">{user?.name}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50 p-8">
        {children}
      </div>
    </div>
  );
}
