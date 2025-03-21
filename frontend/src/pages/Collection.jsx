import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ProductItem, Title } from "../Components";

const Collection = () => {
  const { productData, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = productData.slice(0, productData.length);

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    setFilterProducts(productsCopy);
  };

  const sortProductData = () => {
    let filterProd = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProd.sort((a, b) => a.price["40ml"] - b.price["40ml"]));
        break;
      case "high-low":
        setFilterProducts(filterProd.sort((a, b) => b.price["40ml"] - a.price["40ml"]));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, showSearch, search]);

  useEffect(() => {
    sortProductData();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [productData]);

  const handleselect = (e) => {
    // do not allow to select text
    e.preventDefault();
    e.target.blur();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <RiArrowDropDownLine onClick={() => setShowFilter(!showFilter)} className={`sm:hidden ${showFilter ? "" : "-rotate-90"}`} />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 rounded-2xl mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-5">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" id="fruit" className="w-3" value={"fruit"} onChange={toggleCategory} />
              <label htmlFor="fruit" onSelect={handleselect}>
                Fruit Icecream
              </label>
            </p>
            <p className="flex gap-2">
              <input type="checkbox" id="dfruit" className="w-3" value={"dry-fruit"} onChange={toggleCategory} />
              <label htmlFor="dfruit" onSelect={handleselect}>
                Dry Fruit Icecream
              </label>
            </p>
            <p className="flex gap-2">
              <input type="checkbox" id="classic" className="w-3" value={"classic"} onChange={toggleCategory} />
              <label htmlFor="classic" onSelect={handleselect}>
                Classic Icecream
              </label>
            </p>
            <p className="flex gap-2">
              <input type="checkbox" id="chocolate" className="w-3" value={"chocolate"} onChange={toggleCategory} />
              <label htmlFor="chocolate" onSelect={handleselect}>
                Chocolate Icecream
              </label>
            </p>
            <p className="flex gap-2">
              <input type="checkbox" id="shake" className="w-3" value={"shake"} onChange={toggleCategory} />
              <label htmlFor="shake" onSelect={handleselect}>
                Shake
              </label>
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"faluda"} onChange={toggleCategory} />
              <label htmlFor="" onSelect={handleselect}>
                Faluda
              </label>
            </p>
            <p className="flex gap-2">
              <input type="checkbox" id="kulfi" className="w-3" value={"kulfi"} onChange={toggleCategory} />
              <label htmlFor="kulfi" onSelect={handleselect}>
                Kulfi
              </label>
            </p>
            <p className="flex gap-2">
              <input type="checkbox" id="coffee" className="w-3" value={"coffee"} onChange={toggleCategory} />
              <label htmlFor="coffee" onSelect={handleselect}>
                Coffee
              </label>
            </p>
            <p className="flex gap-2">
              <input type="checkbox" id="mocktail" className="w-3" value={"mocktail"} onChange={toggleCategory} />
              <label htmlFor="mocktail" onSelect={handleselect}>
                Mocktails
              </label>
            </p>
            <p className="flex gap-2">
              <input type="checkbox" id="lassi" className="w-3" value={"lassi"} onChange={toggleCategory} />
              <label htmlFor="lassi" onSelect={handleselect}>
                Lassi
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <span className="flex items-center justify-center border border-gray-300 text-sm px-2">
            <select onClick={(e) => setSortType(e.target.value)} className="m-auto outline-none">
              <option value="relevent">Sort by: Relevent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </span>
        </div>
        <div className="grid grid-col-2 md:grid-cols-3  gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price["40ml"]} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Collection;
