import React, { useState } from "react";
import { useAuthStore } from "../model/useAuthStore";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login  = useAuthStore(state => state.login);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const dummyUser = {id: 1, name: "nahuel", email};
    login(dummyUser);
    navigate("/")
  }
  return (
    <div className="max-w-sm mx-auto">
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-5 flex flex-col gap-4"
    >
      <h2 className="text-white text-2xl">Welcome Back!</h2>

      <div>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required
          className="w-full border rounded px-3 py-2 bg-white/5 backdrop-blur-sm placeholder-white/50 text-white outline-none"
        />
      </div>

      <div>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full border rounded px-3 py-2 bg-white/5 backdrop-blur-sm placeholder-white/50 text-white outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-50 text-black rounded py-2 hover:bg-teal-700 transition"
      >
        Sign in
      </button>

      <p className="text-center text-white">
        Don't have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Sign up
        </span>
      </p>
    </form>
  </div>
  );
}
