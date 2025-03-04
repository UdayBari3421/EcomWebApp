import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const respose = await axios.post(backendUrl + "/api/product/remove", { id }, { headers: { token } });
      if (respose.data.success) {
        toast.success(respose.data.message);
        await fetchList();
      } else {
        toast.error(respose.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Product List</p>
      <div className="flex flex-col gap-2">
        {/* Table */}
        <div className="hidden md:grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b className="text-center">Image</b>
          <b className="text-center">Name</b>
          <b className="text-center">Category</b>
          <b className="text-center">Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <div key={index} className="grid grid-cols-[1fr_3fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm">
            <img src={item.image[0]} className="w-32 mx-auto aspect-square" alt="" />
            <p className="text-center">{item.name}</p>
            <p className="text-center">{item.category}</p>
            <div>
              {Object.keys(item.price).map((key) => (
                <div className="gap-6 grid grid-cols-[50px_1px_1px] w-full" key={key}>
                  <p className="text-start">{key}</p>
                  <p className="text-center">:</p>
                  <p>
                    {currency}
                    {item.price[key]}
                  </p>
                </div>
              ))}
            </div>
            <p onClick={() => removeProduct(item._id)} className="text-right md:text-center cursor-pointer text-lg">
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default List;
