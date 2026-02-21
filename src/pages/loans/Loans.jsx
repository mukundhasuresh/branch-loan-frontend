import { useEffect, useState } from "react";
import API from "../../api/axios";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

export default function Loans() {
  const [loans, setLoans] = useState([]);
  const { user } = useAuth();

  const load = async () => {
    const res = await API.get("/api/loan");
    setLoans(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  /* 🚀 STEP 13.3 – Functions */

  const reviewLoan = async (id) => {
    await API.put(`/api/loan/review/${id}`);
    load();
  };

  const approveLoan = async (id) => {
    await API.put(`/api/loan/approve/${id}`);
    load();
  };

  const rejectLoan = async (id) => {
    await API.put(`/api/loan/reject/${id}`);
    load();
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        Loan Management
      </h1>

      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Logged in as: <span className="font-semibold">{user?.role}</span>
      </p>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border dark:border-gray-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Risk</th>
              <th>Actions</th> {/* 🚀 NEW */}
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

                {/* 🚀 Styled Status */}
                <td>
                  <span className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm">
                    {loan.status}
                  </span>
                </td>

                {/* Risk */}
                <td>
                  {loan.fraudFlag ? (
                    <span className="text-red-500 font-semibold">
                      High Risk
                    </span>
                  ) : (
                    <span className="text-green-500">Safe</span>
                  )}
                </td>

                {/* 🚀 STEP 13.2 – Actions */}
                <td className="space-x-2">
                  {/* Manager review */}
                  {user?.role === "manager" &&
                    loan.status === "pending" && (
                      <button
                        onClick={() => reviewLoan(loan._id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Review
                      </button>
                    )}

                  {/* Admin approval */}
                  {user?.role === "admin" &&
                    loan.status === "manager_approved" && (
                      <>
                        <button
                          onClick={() => approveLoan(loan._id)}
                          className="bg-green-600 text-white px-3 py-1 rounded"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => rejectLoan(loan._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Reject
                        </button>
                      </>
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