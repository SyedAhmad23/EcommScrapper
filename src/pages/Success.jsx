import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const successToast = () => {
      toast.success("🎉 Order Successful!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "success-toast",
      });
    };

    setTimeout(() => {
      setLoading(false);
      successToast();
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been successfully placed</p>
          <p className="text-center mt-8">
            Back to{" "}
            <Link className="text-1xl font-semibold mb-4" to="/">
              Shopping
            </Link>{" "}
          </p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Success;
