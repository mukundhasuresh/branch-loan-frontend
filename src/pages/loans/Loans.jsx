import { useEffect, useState } from "react";
import API from "../../api/axios";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function Loans() {
  const [loans, setLoans] = useState([]);

  const load = async () => {
    const res = await API.get("/api/loan");
    setLoans(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        Loan Management
      </h1>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border dark:border-gray-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Risk</th>
            </tr>
          </thead>

          <tbody>
            {loans.map((loan) => (
              <tr
                key={loan._id}
                className="border-t dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="p-4">{loan.customerName}</td>
                <td>₹ {loan.amount}</td>
                <td>{loan.status}</td>

                <td>
                  {loan.fraudFlag ? (
                    <span className="text-red-500 font-semibold">
                      High Risk
                    </span>
                  ) : (
                    <span className="text-green-500">
                      Safe
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}