import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = ({ username }) => {
  const { setCartItems, token, setToken, backendUrl, navigate } = useContext(ShopContext);

  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    oldpassword: "",
    password: "",
  });

  const logout = () => {
    setToken("");
    setCartItems({});
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    console.log("Profile Updated");
    setModal((prev) => !prev);

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    try {
      const response = await axios.post(backendUrl + "/api/user/update", formData, { headers: { token } });
      if (response.data.success) {
        localStorage.setItem("username", response.data.data.name);
        navigate("/my-profile");
        toast.success("Profile updated successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="h-[45vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl mx-auto text-center">Welcome, {username}</h1>
      <div className="flex w-full items-center justify-center gap-4 mt-10">
        <button onClick={() => setModal((prev) => !prev)} className="px-4 py-2 border-black border rounded w-2/12 hover:bg-black hover:text-white">
          Update Profile
        </button>
        <button onClick={logout} className="px-4 py-2 border-black border rounded w-2/12 hover:bg-black hover:text-white">
          Logout
        </button>
      </div>

      {modal && (
        <div onClick={() => setModal((prev) => !prev)} className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-8 rounded-md w-96">
            <h1 className="text-2xl text-center">Update Profile</h1>
            <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4 mt-4">
              <input
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
                type="text"
                className="px-3 py-2 border border-gray-800"
                placeholder="Name"
              />
              <input
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
                type="email"
                className="px-3 py-2 border border-gray-800"
                placeholder="Email"
              />
              <input
                value={formData.oldpassword}
                onChange={(e) => setFormData((prev) => ({ ...prev, oldpassword: e.target.value }))}
                required
                type="password"
                className="px-3 py-2 border border-gray-800"
                placeholder="Old Password"
              />
              <input
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                required
                type="password"
                className="px-3 py-2 border border-gray-800"
                placeholder="New Password"
              />
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default MyProfile;
