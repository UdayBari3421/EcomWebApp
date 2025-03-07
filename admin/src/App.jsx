import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import LoadedPage from "./pages/LoadedPage";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₹";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-[90vh]">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} setUsername={setUsername} />
      ) : (
        <>
          <Navbar setToken={setToken} username={username} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] min-h-[90vh] mx-auto ml-[max-(5vw,25px)] my-6 text-gray-600 text-base">
              <Routes>
                <Route path="/" element={<LoadedPage token={token} username={username} />} />
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default App;
