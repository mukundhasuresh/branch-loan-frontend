import { useEffect, useState } from "react";
import API from "../../api/axios";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function Fraud() {
  const [fraudLoans, setFraudLoans] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await API.get("/api/loan/fraud");
        setFraudLoans(res.data);
      } catch (err) {
        console.error("Fraud load error:", err);
      }
    };

    load();
  }, []);

  return (
    <DashboardLayout>
      {/* 🔥 Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Fraud Monitoring
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Monitor suspicious activities and high-risk loans
        </p>
      </div>

      {/* 🔥 Fraud table */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border dark:border-gray-800 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr className="text-gray-600 dark:text-gray-300">
              <th className="p-4">Customer</th>
              <th>Amount</th>
              <th>Risk Score</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {fraudLoans.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="p-6 text-center text-gray-500 dark:text-gray-400"
                >
                  No suspicious loans found
                </td>
              </tr>
            ) : (
              fraudLoans.map((loan) => (
                <tr
                  key={loan._id}
                  className="border-t dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <td className="p-4 font-medium">{loan.customerName}</td>

                  <td>₹ {loan.amount}</td>

                  <td className="text-red-500 font-semibold">
                    {loan.fraudScore}
                  </td>

                  <td>
                    <span className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 px-3 py-1 rounded-full text-sm">
                      Suspicious
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}