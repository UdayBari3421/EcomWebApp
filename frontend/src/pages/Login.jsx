import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 mx-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState !== "Login" && <input required type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Name" />}

      <input required type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email" />
      <input requiredtype="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Password" />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot password?</p>
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
