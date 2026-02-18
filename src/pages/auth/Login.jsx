import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/auth/login", form);
      alert("Login success");
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-blue-50 to-indigo-100 font-sans">
      {/* Left side */}
      <div className="hidden md:flex flex-col justify-center w-1/2 p-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Branch Loan
        </h1>
        <p className="text-gray-600 text-lg">
          Secure. Intelligent. Modern banking.
        </p>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <form
          onSubmit={submit}
          className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-96 border"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Welcome Back
          </h2>

          <input
            name="email"
            placeholder="Email"
            className="border rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={handleChange}
          />

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white w-full p-3 rounded-lg">
            Login
          </button>

          <p className="text-sm mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
