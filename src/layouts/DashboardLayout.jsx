import { Home, FileText, ShieldAlert, Bell, Moon, Sun } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function DashboardLayout({ children }) {
  const { user } = useAuth();
  const { dark, setDark } = useTheme();

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white/70 dark:bg-gray-900 backdrop-blur-xl border-r shadow-lg p-6 relative">
        <h1 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
          Branch Loan
        </h1>

        {/* 🌙 Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="mb-6 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
          {dark ? "Light" : "Dark"} Mode
        </button>

        <nav className="space-y-4">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 cursor-pointer">
            <Home size={18} /> Dashboard
          </div>

          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 cursor-pointer">
            <FileText size={18} /> Loans
          </div>

          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 cursor-pointer">
            <ShieldAlert size={18} /> Fraud
          </div>

          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 cursor-pointer">
            <Bell size={18} /> Notifications
          </div>
        </nav>

        <div className="absolute bottom-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Logged in as
          </p>
          <p className="font-medium text-gray-900 dark:text-white">
            {user?.name}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-black p-8">
        {children}
      </div>
    </div>
  );
}
