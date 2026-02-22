import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function LoanChart({ data }) {
  const colors = ["#3b82f6", "#22c55e", "#ef4444", "#f59e0b"];

  return (
    <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-md border dark:border-gray-800 hover:shadow-xl transition">
      <h2 className="font-semibold mb-4 dark:text-white">
        Loan Distribution
      </h2>

      {/* Responsive chart container */}
      <div className="h-72 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="_id"
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
            >
              {data?.map((_, i) => (
                <Cell key={i} fill={colors[i % colors.length]} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [`${value} loans`, "Count"]}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}