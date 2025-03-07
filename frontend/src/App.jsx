import { Routes, Route } from "react-router-dom";
import { About, Cart, Collection, Contact, Home, Login, MyProfile, Orders, PlaceOrder, Product, Verify } from "./pages";
import { Footer, Navbar, SearchBar } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login setUsername={setUsername} username={username} />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/my-profile" element={<MyProfile username={username} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default App;
