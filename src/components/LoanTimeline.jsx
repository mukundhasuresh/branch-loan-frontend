export default function LoanTimeline({ status }) {
  const steps = [
    "pending",
    "manager_approved",
    "approved",
  ];

  return (
    <div className="flex gap-2">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`px-3 py-1 rounded-full text-xs ${
            steps.indexOf(status) >= i
              ? "bg-green-500 text-white"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}