import { Link } from "react-router-dom";

import { useState } from "react";
export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto h-screen">
      <div className="w-full md:w-4/12 p-6 rounded-lg shadow-lg bg-gray-100 ">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Log In <span className="text-blue-500">GetPDF</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <label className=" font-semibold">Email</label>
            <input
              required
              type="email"
              pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
              placeholder="Enter Your Email"
              className="w-full p-1 focus:outline-blue-400 rounded-md outline-non"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>

          <div>
            <label className="font-semibold">Password</label>
            <input
              required
              type="password"
              placeholder="Enter Password"
              className="w-full p-1 focus:outline-blue-400 rounded-md outline-non"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <Link
            to={"/"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an Account!!
          </Link>

          <div>
            <button
              className="bg-blue-500 rounded-xl py-2 px-4 border-none outline-none text-white cursor-pointer"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "LogIn"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
