import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/register", form);
      console.log("Success:", res.data);
      alert("Registered successfully");
    } catch (err) {
      console.log("Error:", err.response?.data);
      alert(JSON.stringify(err.response?.data));
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
          Intelligent loan management with fraud detection, analytics, and real-time monitoring.
        </p>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <form
          className="bg-white/70 dark:bg-gray-900 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-[380px] border dark:border-gray-800"
          onSubmit={submit}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Create your account
          </h2>

          <input
            name="name"
            placeholder="Full name"
            className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
            onChange={handleChange}
            required
          />

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
            Register
          </button>

          <p className="text-sm mt-5 text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}