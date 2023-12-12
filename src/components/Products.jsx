import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getAllProducts } from "../context/productSlice";
import Categories from "./Categories";
import { RiStarHalfLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  const { allProducts, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    handleToast(product);
  };

  const handleToast = (product) => {
    toast.success(`Added ${product.title} 👍 `, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const selectedProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="max-w-screen-lg mx-auto my-8">
      <Categories />
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {selectedProducts && selectedProducts.length > 0 ? (
          selectedProducts.map((product) => (
            <div key={product.id} className="w-full p-4 rounded-lg mb-6">
              <div className="w-full h-40 overflow-hidden mb-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">{product.title}</p>
                  <div className="flex gap-1">
                    <RiStarHalfLine size={20} className="mt-1" />
                    <p className="text-lg ">{product.rating}</p>
                  </div>
                </div>
                <p className="text-gray-500 mb-2">{product.brand}</p>
                <p className="text-lg text-red-500">${product.price}</p>
                <button
                  className=" bg-gray-500 font-bold rounded-lg hover:bg-black text-white px-4 py-2 mt-4 "
                  onClick={() =>
                    handleAddToCart({
                      id: product.id,
                      thumbnail: product.thumbnail,
                      title: product.title,
                      brand: product.brand,
                      price: product.price,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
