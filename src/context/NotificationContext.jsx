import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    const socket = io("http://localhost:5000", {
      withCredentials: true,
    });

    socket.on("notification", (data) => {
      setNotifications((prev) => [data, ...prev]);
      setUnread((prev) => prev + 1);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, unread, setUnread }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);