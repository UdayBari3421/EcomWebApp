import { useState } from "react";
import loginBg from "../assets/login.jpg";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken, setUsername }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(backendUrl + "/api/admin/login", { email, password });

      if (response.data.success) {
        setToken(response.data.token);
        setUsername(response.data.username);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center  bg-gray-50">
      <div className="bg-white shadow-2xl rounded-2xl px-8 py-6 w-fit border-2 border-gray-200">
        <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
        <hr className="my-8 mt-2 border-2 p-[0.5px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
        <div className="flex justify-between items-center gap-3">
          <div className="w-1/2 md:block hidden">
            <img
              src={loginBg}
              className="w-[400px]"
              alt=""
            />
          </div>

          <form
            onSubmit={onSubmitHandler}
            className="w-1/2 flex-col flex justify-center ">
            <div className="mb-3 min-w-72">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="mb-3 min-w-72">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              className="mt-2 w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-violet-500 to-fuchsia-500"
              type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
