import { useEffect, useState } from "react";
import API from "../../api/axios";
import DashboardLayout from "../../layouts/DashboardLayout";
import StatsCards from "./StatsCards";
import LoanChart from "./LoanChart";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [chart, setChart] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const load = async () => {
      try {
        const s = await API.get("/api/analytics/stats");
        console.log("Stats:", s.data);

        const c = await API.get("/api/analytics/distribution");
        console.log("Chart:", c.data);

        setStats(s.data);
        setChart(c.data);
      } catch (err) {
        console.error("Dashboard load error:", err);
      }
    };

    load();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        Financial Overview
      </h1>

      {user?.role === "admin" ? (
        <>
          <StatsCards stats={stats} />
          <div className="mt-6">
            <LoanChart data={chart} />
          </div>
        </>
      ) : (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow border dark:border-gray-800">
          <h2 className="font-semibold mb-2 dark:text-white">
            Analytics Dashboard
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Analytics is available only for administrators.
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}