import { useEffect, useState } from "react";
import API from "../../api/axios";
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
    <div className="flex-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:to-black p-8 min-h-screen">
      
      {/* 🔥 Heading */}
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        Financial Overview
      </h1>

      {/* 🔥 Stats Cards */}
      <StatsCards stats={stats || {}} />

      {/* 🔥 Chart section */}
      <div className="mt-6">
        <LoanChart data={chart || []} />
      </div>

    </div>
  );
}