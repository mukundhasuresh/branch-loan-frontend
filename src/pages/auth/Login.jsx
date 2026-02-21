import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import API from "../../api/axios";
import {
  ShieldCheck,
  BarChart3,
  Bell,
  Zap,
  Lock,
  Globe,
} from "lucide-react";

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

      {/* LEFT SIDE – PRODUCT */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 px-20">

        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Branch Loan
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg">
          A modern fintech platform designed to automate loan workflows,
          detect fraud in real time, and deliver actionable financial insights.
        </p>

        <div className="space-y-7">

          <Benefit
            icon={<ShieldCheck />}
            title="AI Fraud Detection"
            desc="Advanced risk scoring with real-time monitoring of suspicious activities."
          />

          <Benefit
            icon={<BarChart3 />}
            title="Powerful Analytics"
            desc="Smart dashboards that help banks make faster and safer decisions."
          />

          <Benefit
            icon={<Bell />}
            title="Instant Alerts"
            desc="Live notifications for approvals, fraud detection, and risk events."
          />

          <Benefit
            icon={<Zap />}
            title="Automation"
            desc="Streamlined loan workflows with multi-level approval systems."
          />
        </div>

        {/* TRUST SECTION */}
        <div className="mt-14 flex gap-8 text-sm text-gray-500 dark:text-gray-400">
          <Trust icon={<Lock />} text="Secure Authentication" />
          <Trust icon={<ShieldCheck />} text="Bank-grade Security" />
          <Trust icon={<Globe />} text="Enterprise Ready" />
        </div>
      </div>

      {/* RIGHT SIDE – LOGIN */}
      <div className="flex items-center justify-center w-full lg:w-1/2 px-6">

        <form
          onSubmit={submit}
          className="bg-white/70 dark:bg-gray-900 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-md border dark:border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
            Welcome back
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Sign in to continue to your secure dashboard.
          </p>

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

          {/* Divider */}
          <div className="my-6 border-t dark:border-gray-700" />

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function Benefit({ icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="font-semibold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function Trust({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-blue-600">{icon}</div>
      <span>{text}</span>
    </div>
  );
}