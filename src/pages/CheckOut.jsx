import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  decreaseQuantity,
} from "../context/productSlice";
import { IoClose } from "react-icons/io5";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.products.cart);

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
    toast.success(`🗑️ Removed ${item.title} from the cart `, {
      autoClose: 1000,
    });
  };

  const handleRemoveAll = () => {
    dispatch(removeAllFromCart());
    toast.success("🗑️ Removed all items from the cart", {
      autoClose: 1000,
    });
  };

  const handleCheckout = () => {
    handleRemoveAll();
    navigate("/success");
  };

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto my-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold">Checkout</h2>
          <button
            onClick={handleRemoveAll}
            className="text-red-500 hover:text-white  hover:bg-red-700 border border-red-500 px-4 py-2 rounded"
          >
            Remove All
          </button>
        </div>

        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center border-2 border-gray-300 py-4 relative"
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover"
                  />
                </div>

                <div className="ml-4 flex-grow">
                  <p>{item.title}</p>
                  <p>{item.brand}</p>
                  <p>${item.price}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecrease(item)}
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemove(item)}
                      className="text-red-500 ml-auto"
                    >
                      <IoClose
                        size={20}
                        className="absolute top-3 right-4 mt-1"
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p>Your cart is empty.</p>
            <p className="text-center mt-8">
              Back to{" "}
              <Link className="text-1xl font-semibold mb-4" to="/">
                Shopping
              </Link>{" "}
            </p>
          </>
        )}

        {cartItems.length > 0 && (
          <div className="mt-8 flex justify-between items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            <p className="text-lg font-semibold">
              Total Amount: ${totalAmount}
            </p>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default CheckOut;
