import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  setCategory,
  setCategories,
} from "../context/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(setCategories(categories));
  }, [dispatch, categories]);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the desired product</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-black hover:text-white ${
            selectedCategory === "All" ? "bg-gray-900 text-white" : ""
          }`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-3 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-black hover:text-white ${
              selectedCategory === category ? "bg-gray-900 text-white" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
