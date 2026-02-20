import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function LoanChart({ data }) {
  const colors = ["#3b82f6", "#22c55e", "#ef4444"];

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border dark:border-gray-800 hover:shadow-xl transition-all duration-300">
      <h2 className="font-semibold text-lg text-gray-900 dark:text-white mb-6">
        Loan Distribution
      </h2>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie data={data} dataKey="count" nameKey="_id" innerRadius={50}>
            {data?.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}