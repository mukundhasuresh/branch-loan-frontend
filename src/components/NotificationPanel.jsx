import { motion } from "framer-motion";
import { useNotification } from "../context/NotificationContext";

export default function NotificationPanel({ open }) {
  const { notifications } = useNotification();

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border dark:border-gray-800 p-4"
    >
      <h3 className="font-semibold mb-3 dark:text-white">
        Notifications
      </h3>

      {notifications.length === 0 && (
        <p className="text-gray-500">No alerts</p>
      )}

      <div className="space-y-2 max-h-80 overflow-y-auto">
        {notifications.map((n, i) => (
          <div
            key={i}
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            <p className="text-sm dark:text-gray-300">
              {n.message}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}