import { Link } from "react-router-dom";
import { ShieldCheck, BarChart3, Bell, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:to-black font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-xl font-bold dark:text-white">
          Branch Loan
        </h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="text-gray-700 dark:text-gray-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 py-20">
        <h2 className="text-5xl font-bold tracking-tight dark:text-white mb-6">
          Intelligent Loan Management for Modern Banks
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Automate loan workflows, detect fraud in real-time, and gain deep insights
          into financial risk with our next-generation fintech platform.
        </p>

        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg"
        >
          Start Free Trial
        </Link>
      </section>

      {/* Features */}
      <section className="px-10 pb-24 grid md:grid-cols-4 gap-8">
        <Feature
          icon={<ShieldCheck />}
          title="Fraud Detection"
          desc="Advanced risk scoring and monitoring for suspicious loans."
        />

        <Feature
          icon={<BarChart3 />}
          title="Analytics"
          desc="Real-time dashboards and deep financial insights."
        />

        <Feature
          icon={<Bell />}
          title="Notifications"
          desc="Instant alerts and live monitoring of activities."
        />

        <Feature
          icon={<Zap />}
          title="Automation"
          desc="Streamlined workflows for approvals and compliance."
        />
      </section>

      {/* Footer */}
      <footer className="text-center pb-10 text-gray-500">
        © {new Date().getFullYear()} Branch Loan. All rights reserved.
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow border dark:border-gray-800">
      <div className="mb-3 text-blue-600">{icon}</div>
      <h3 className="font-semibold dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {desc}
      </p>
    </div>
  );
}