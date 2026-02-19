import { useEffect, useState } from "react";
import API from "../../api/axios";
import DashboardLayout from "../../layouts/DashboardLayout";
import StatsCards from "../../components/dashboard/StatsCards";
import LoanChart from "../../components/dashboard/LoanChart";

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const load = async () => {
      const s = await API.get("/api/analytics/stats");
      const c = await API.get("/api/analytics/distribution");

      setStats(s.data);
      setChart(c.data);
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
