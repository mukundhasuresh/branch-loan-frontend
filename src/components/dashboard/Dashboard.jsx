import { useEffect, useState } from "react";
import API from "../../api/axios";
import DashboardLayout from "../../layouts/DashboardLayout";
import StatsCards from "./StatsCards";
import LoanChart from "./LoanChart";

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [chart, setChart] = useState([]);

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
      <StatsCards stats={stats} />
      <LoanChart data={chart} />
    </DashboardLayout>
  );
}