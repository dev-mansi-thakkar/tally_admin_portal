"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation'
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email.trim() || !password.trim()) return alert('Please fill all fields, Hint: Try Admin@tally.com/1234');
    Cookies.set("loggedin", "true");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-slate-50">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-900">
          Welcome to Tally HR!
        </h1>
        <p className="text-center mb-8 text-indigo-950">
          Please log in to continue:
        </p>
        <form
          onSubmit={handleSubmit}
          className={`max-w-sm mx-auto ${styles.formContainer}`}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input mt-1 block w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
