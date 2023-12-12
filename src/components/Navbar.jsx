import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useModal, Modal } from "../utils/useModal";
import useUser from "../utils/useUser";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const { user, handleLogout } = useUser();
  const [nav, setNav] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleLogoutConfirmation = (confirmed) => {
    if (confirmed) {
      handleLogout();
    }
    closeModal();
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full bg-gray-800">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-[70px]">
        <Link to="/">
          <div>
            <h2 className="text-white">EcommScrapper</h2>
          </div>
        </Link>
        <div className="hidden sm:flex items-center">
          <Link to="/checkout">
            <span className="relative text-white">
              <FaShoppingCart size={30} />
              {cartItems && cartItems.length > 0 && (
                <span className="absolute bottom-4 right-0 bg-green-500 text-white p-1 rounded-full text-xs">
                  {cartItems.length}
                </span>
              )}
            </span>
          </Link>
          <ul className="flex text-white ml-4">
            {user ? (
              <li
                className="cursor-pointer flex items-center gap-3"
                onClick={openModal}
              >
                <CgProfile size={30} />
                <h3 className="text-white">{user.username}</h3>
              </li>
            ) : (
              <li className="cursor-pointer flex items-center gap-3">
                <CgProfile size={30} />
                <Link to="/login" className="text-white">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        {/* mobile */}
        <div onClick={handleNav} className="block sm:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <div className="flex gap-5 text-white">
              <Link to="/checkout" className="ml-4">
                <FaShoppingCart size={30} />
                {cartItems && cartItems.length > 0 && (
                  <span className="absolute top-2 right-16 bg-green-500 text-white p-1 rounded-full text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <AiOutlineMenu size={30} className="text-white" />
            </div>
          )}
        </div>
      </div>
      <div
        className={`${
          nav ? "block" : "hidden"
        } sm:hidden w-full bg-black text-white text-center`}
      >
        <ul className="py-4">
          {user ? (
            <li
              className="cursor-pointer flex items-center gap-4"
              onClick={openModal}
            >
              <CgProfile size={30} />
              {user.username}
            </li>
          ) : (
            <li className="cursor-pointer flex items-center gap-4">
              <CgProfile size={30} />
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
      {isModalOpen && (
        <Modal onConfirmation={handleLogoutConfirmation} onClose={closeModal} />
      )}
    </div>
  );
};

export default Navbar;
