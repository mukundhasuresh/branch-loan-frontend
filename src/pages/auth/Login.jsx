import { useState } from "react";
import API from "../../api/axios";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/api/auth/login", form);
      alert("Login success");
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={submit}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-2xl mb-4">Login</h2>

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />

        <button className="bg-blue-500 text-white p-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
