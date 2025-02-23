const NewsLetter = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-gray-800">Subscribe now and get 30% off</p>
      <p className="text-gray-400 mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum aperiam non magnam.</p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input type="email" name="email" required className="w-full sm:flex-1 outline-none " placeholder="Enter your email" />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};
export default NewsLetter;
