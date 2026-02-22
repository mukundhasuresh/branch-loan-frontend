import { useState } from "react";
import {
  Home,
  FileText,
  ShieldAlert,
  Bell,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useNotification } from "../context/NotificationContext";
import NotificationPanel from "../components/NotificationPanel";

export default function DashboardLayout({ children }) {
  const { user } = useAuth();
  const { dark, setDark } = useTheme();
  const { notifications } = useNotification();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div className="flex min-h-screen font-sans">
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white dark:bg-gray-900 p-2 rounded shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-40 w-64 bg-white/70 dark:bg-gray-900 backdrop-blur-xl border-r dark:border-gray-800 shadow-lg p-6 min-h-screen transition-transform
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        <h1 className="text-xl font-bold mb-6 dark:text-white">
          Branch Loan
        </h1>

        {/* Notification Bell */}
        <div
          onClick={() => setNotifOpen(!notifOpen)}
          className="relative mb-4 cursor-pointer"
        >
          <Bell className="text-gray-700 dark:text-gray-300" />
          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {notifications.length}
            </span>
          )}

          <NotificationPanel open={notifOpen} />
        </div>

        {/* Dark Mode */}
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
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            <Home size={18} /> Dashboard
          </Link>

          <Link
            to="/loans"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            <FileText size={18} /> Loans
          </Link>

          <Link
            to="/fraud"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            <ShieldAlert size={18} /> Fraud
          </Link>

          <Link
            to="/fraud-analytics"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            <ShieldAlert size={18} /> Fraud Analytics
          </Link>

          <Link
            to="/notifications"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            <Bell size={18} /> Notifications
          </Link>
        </nav>

        {/* User */}
        <div className="absolute bottom-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Logged in as
          </p>
          <p className="font-medium dark:text-white">{user?.name}</p>
        </div>
      </aside>

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/30 lg:hidden"
        />
      )}

      {/* Content */}
      <main className="flex-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:to-black p-4 md:p-6 lg:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}