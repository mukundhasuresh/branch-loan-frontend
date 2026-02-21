import { useEffect, useState } from "react";
import API from "../../api/axios";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function FraudAnalytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await API.get("/api/analytics/fraud-stats");

      setData([
        { name: "Fraud", value: res.data.fraud },
        { name: "Safe", value: res.data.safe },
      ]);
    };

    load();
  }, []);

  const colors = ["#ef4444", "#22c55e"];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        Fraud Analytics
      </h1>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow border dark:border-gray-800">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" label>
              {data.map((_, i) => (
                <Cell key={i} fill={colors[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </DashboardLayout>
  );
}