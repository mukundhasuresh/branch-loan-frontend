import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import API from "../../api/axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/login", form);
      setUser(res.data.user);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:to-black font-sans">
      
      {/* Left Branding */}
      <div className="hidden md:flex flex-col justify-center w-1/2 px-16">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Branch Loan
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
          Secure, intelligent, and modern loan management platform with fraud detection and real-time analytics.
        </p>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <form
          onSubmit={submit}
          className="bg-white/70 dark:bg-gray-900 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-[380px] border dark:border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Welcome back
          </h2>

          <input
            name="email"
            placeholder="Email address"
            className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-3 w-full mb-6 focus:ring-2 focus:ring-blue-500 outline-none transition"
            onChange={handleChange}
            required
          />

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white w-full p-3 rounded-lg font-medium shadow-md">
            Login
          </button>

          <p className="text-sm mt-5 text-center text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}