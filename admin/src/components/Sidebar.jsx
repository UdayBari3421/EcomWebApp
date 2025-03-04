import { NavLink } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-[90vh] bg-gray-100 border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#2c4952] bg-[#ff8ff4ae] flex items-center gap-3 border-2 border-gray-400 border-r-0 px-3 py-2 rounded-l"
              : "flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          }
          to="/add"
        >
          <IoMdAddCircleOutline className="w-5 h-5" />
          <p className="hidden md:block ">Add Items</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#2c4952] bg-[#ff8ff4ae] flex items-center gap-3 border-2 border-gray-400 border-r-0 px-3 py-2 rounded-l"
              : "flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          }
          to="/list"
        >
          <FiShoppingBag className="w-5 h-5" />
          <p className="hidden md:block ">List Items</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#2c4952] bg-[#ff8ff4ae] flex items-center gap-3 border-2 border-gray-400 border-r-0 px-3 py-2 rounded-l"
              : "flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          }
          to="/orders"
        >
          <FiShoppingBag className="w-5 h-5" />
          <p className="hidden md:block ">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};
export default Sidebar;
