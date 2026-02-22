import { useEffect, useState } from "react";
import API from "../../api/axios";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useAuth } from "../../context/AuthContext";
import LoanTimeline from "../../components/LoanTimeline";

export default function Loans() {
  const [loans, setLoans] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const { user } = useAuth();

  const load = async () => {
    const res = await API.get("/api/loan");
    setLoans(res.data);
  };

  useEffect(() => {
    load();
  }, []);

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

      {/* Responsive filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          placeholder="Search customer..."
          className="border rounded-lg p-2 w-full md:w-64 dark:bg-gray-800 dark:border-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg p-2 w-full md:w-auto dark:bg-gray-800 dark:border-gray-700"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="manager_approved">Manager Approved</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Responsive table */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border dark:border-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="p-4 text-left">Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Risk</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {loans
                .filter((loan) =>
                  loan.customerName
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .filter((loan) =>
                  status ? loan.status === status : true
                )
                .map((loan) => (
                  <tr
                    key={loan._id}
                    className="border-t dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="p-4">{loan.customerName}</td>
                    <td>₹ {loan.amount}</td>

                    <td>
                      <LoanTimeline status={loan.status} />
                    </td>

                    <td>
                      {loan.fraudFlag ? (
                        <span className="text-red-500 font-semibold">
                          High Risk
                        </span>
                      ) : (
                        <span className="text-green-500">Safe</span>
                      )}
                    </td>

                    <td className="space-x-2 whitespace-nowrap">
                      {user?.role === "manager" &&
                        loan.status === "pending" && (
                          <button
                            onClick={() => reviewLoan(loan._id)}
                            className="bg-blue-600 text-white px-3 py-1 rounded"
                          >
                            Review
                          </button>
                        )}

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
      </div>
    </DashboardLayout>
  );
}