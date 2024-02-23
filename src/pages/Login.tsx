import { Link } from "react-router-dom";
import { useState } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { loginUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { loading } = useSelector((state: RootState) => state.rootReducer.user);

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
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

          <Link
            to={"/register"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an Account!!
          </Link>

          <div>
            <button
              className="bg-blue-500 rounded-xl py-2 px-4 border-none outline-none text-white cursor-pointer"
              disabled={loading}
            >
              {loading ? "Processing" : "LogIn"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
