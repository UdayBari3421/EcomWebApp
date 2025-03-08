import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const Login = ({ setUsername, username }) => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password });
        if (response.data.success) {
          setCurrentState("Login");
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.data.name);
          setUsername(response.data.data.name.split(" ")[0].charAt(0).toUpperCase() + response.data.data.name.split(" ")[0].slice(1));
          toast.success("Account created successfully");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", { email, password });
        if (response.data.success) {
          setUsername(response.data.data.name.split(" ")[0].charAt(0).toUpperCase() + response.data.data.name.split(" ")[0].slice(1));
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.data.name);
          toast.success("Logged in successfully");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const forgetPassword = async () => {};

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 mx-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState !== "Login" && <input required type="text" onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border border-gray-800" placeholder="Name" />}

      <input required type="email" onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-800" placeholder="Email" />
      <input required type="password" onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-800" placeholder="Password" />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p onClick={forgetPassword} className="cursor-pointer">
          Forgot password?
        </p>
        {currentState === "Sign Up" ? (
          <p onClick={() => setCurrentState("Login")} className="cursor-pointer">
            Already have an account?
          </p>
        ) : (
          <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">
            Create an account
          </p>
        )}
      </div>
      <button className="w-full py-2 px-8 mt-4 font-light text-white bg-black">{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  );
};
export default Login;
