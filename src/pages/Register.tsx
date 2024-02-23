import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignUp";

export default function Register() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { signup, loading } = useSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup({
      fullName,
      email,
      password,
      confirmPassword,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto h-screen">
      <div className="w-full md:w-4/12 p-6 rounded-lg shadow-lg bg-gray-100 ">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Sign Up <span className="text-blue-500">GetPDF</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <label className="font-semibold">Full Name</label>
            <input
              required
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-1 focus:outline-blue-400 rounded-md outline-none"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className=" font-semibold">Email</label>
            <input
              required
              type="email"
              pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
              placeholder="Enter Your Email"
              className="w-full p-1 focus:outline-blue-400 rounded-md outline-non"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Password</label>
            <input
              required
              type="password"
              placeholder="Enter Password"
              className="w-full p-1 focus:outline-blue-400 rounded-md outline-non"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Confirm Password</label>
            <input
              required
              type="password"
              placeholder="Confirm Password"
              className="w-full p-1 focus:outline-blue-400 rounded-md outline-non"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="bg-blue-500 rounded-xl py-2 px-4 border-none outline-none text-white cursor-pointer"
              disabled={loading}
            >
              {loading ? "Processing" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
