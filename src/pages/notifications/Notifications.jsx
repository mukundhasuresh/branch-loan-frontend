import DashboardLayout from "../../layouts/DashboardLayout";
import { useNotification } from "../../context/NotificationContext";

export default function Notifications() {
  const { notifications } = useNotification();

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        Notifications
      </h1>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border dark:border-gray-800 p-6">
        {notifications.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No notifications yet.
          </p>
        ) : (
          <div className="space-y-3">
            {notifications.map((n, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <p className="dark:text-gray-300">
                  {n.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}