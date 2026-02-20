import { Home, FileText, ShieldAlert, Bell, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function DashboardLayout({ children }) {
  const { user } = useAuth();
  const { dark, setDark } = useTheme();

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white/70 dark:bg-gray-900 backdrop-blur-xl border-r dark:border-gray-800 shadow-lg p-6 relative">
        <h1 className="text-xl font-bold mb-6 dark:text-white">
          Branch Loan
        </h1>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="mb-6 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Navigation */}
        <nav className="space-y-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <Home size={18} /> Dashboard
          </Link>

          <Link
            to="/loans"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <FileText size={18} /> Loans
          </Link>

          {/* ✅ Updated Fraud button */}
          <Link
            to="/fraud"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 cursor-pointer"
          >
            <ShieldAlert size={18} /> Fraud
          </Link>

          <Link
            to="/notifications"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <Bell size={18} /> Notifications
          </Link>
        </nav>

        {/* User Info */}
        <div className="absolute bottom-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Logged in as
          </p>
          <p className="font-medium dark:text-white">{user?.name}</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:to-black p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}