import axios from "axios";
import { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { toast } from "react-toastify";

import { backendUrl } from "../App";

const Add = ({ token }) => {
  const [images, setImages] = useState([null, null, null, null]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("fruit");
  const [prices, setPrices] = useState({});
  const [size, setSize] = useState(["40ml"]);
  const [bestseller, setBestseller] = useState(false);

  const handleSizeSelection = (selectedSize) => {
    if (size.length === 1 && size.includes(selectedSize)) {
      toast.error("At least one size must be selected.");
      return;
    }
    setSize((prevSize) => (prevSize.includes(selectedSize) ? prevSize.filter((s) => s !== selectedSize) : [...prevSize, selectedSize]));
  };

  const handlePriceChange = (s, value) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [s]: Number(value),
    }));
  };

  const handleImageUpload = (index, file) => {
    if (!file) return;
    const updatedImages = [...images];
    updatedImages[index] = file;
    setImages(updatedImages);
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("bestseller", bestseller);
      formData.append("price", JSON.stringify(prices));

      images[0] && formData.append("image1", images[0]);
      images[1] && formData.append("image2", images[1]);
      images[2] && formData.append("image3", images[2]);
      images[3] && formData.append("image4", images[3]);

      const respose = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } });

      if (respose.data.success) {
        toast.success(respose.data.message);
        setName("");
        setDescription("");
        setImages([null, null, null, null]);
      } else {
        toast.error(respose.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <form onSubmit={onSubmitHandle} className="w-full items-start gap-3 flex-col flex">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {images.map((image, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              {!image ? (
                <span className="flex opacity-50 flex-col gap-2 items-center justify-center h-24 px-1 w-24 border-dashed border-gray-500 border-2">
                  <IoMdCloudUpload />
                  <p className="text-xs w-full text-center">Upload Image</p>
                </span>
              ) : (
                <img src={URL.createObjectURL(image)} alt="" className="h-24 w-24 object-cover" />
              )}
              <input type="file" onChange={(e) => handleImageUpload(index, e.target.files[0])} hidden id={`image${index + 1}`} />
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" required />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="w-full max-w-[500px] px-3 py-2" placeholder="Write content here" required />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className="w-full px-3 py-2" required>
            <option value="fruit">Fruit</option>
            <option value="dry-fruit">Dry Fruit</option>
            <option value="chocolate">Chocolate</option>
            <option value="classic">Classic</option>
            <option value="shake">Shakes</option>
            <option value="kulfi">Kulfi</option>
            <option value="faluda">Faluda</option>
            <option value="mocktail">Mocktail</option>
            <option value="coffee">Coffee</option>
          </select>
        </div>
      </div>

      <div className="mt-2 w-8/12">
        <p className="mb-2">Product Size & Price</p>
        <div className="grid grid-cols-2 gap-3 flex-wrap ">
          {["40ml", "80ml", "350gm", "400gm", "500gm", "1000gm"].map((s) => (
            <div key={s} className="flex items-center gap-1">
              <p className={`px-3 py-1 cursor-pointer ${size.includes(s) ? "bg-green-200 w-full" : "bg-slate-200 w-6/12"}`} onClick={() => handleSizeSelection(s)}>
                {s}
              </p>
              {size.includes(s) && <input type="number" placeholder="Price" value={prices[s] || ""} onChange={(e) => handlePriceChange(s, e.target.value)} className="w-full px-2 py-1" required />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <input onChange={() => setBestseller((prev) => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <button type="submit" className="w-28 py-3 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
