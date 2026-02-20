export default function StatsCards({ stats }) {
  console.log("StatsCards:", stats); // temporary debug

  const cards = [
    { label: "Total Loans", value: stats?.totalLoans || 0 },
    { label: "Approved", value: stats?.approved || 0 },
    { label: "Rejected", value: stats?.rejected || 0 },
    { label: "Fraud Alerts", value: stats?.fraud || 0 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border dark:border-gray-700 transition"
        >
          <p className="text-gray-500 dark:text-gray-400">
            {card.label}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}