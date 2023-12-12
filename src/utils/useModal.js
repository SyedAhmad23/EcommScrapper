import React, { useState } from "react";

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
};

const Modal = ({ onConfirmation, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <p className="text-lg mb-4">Are you sure you want to logout?</p>
        <div className="flex justify-end">
          <button
            onClick={() => {
              onConfirmation(true);
              onClose();
            }}
            className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
          >
            Yes
          </button>
          <button
            onClick={() => {
              onConfirmation(false);
              onClose();
            }}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export { useModal, Modal };
