import React, { useEffect } from "react";
import Image from "next/image";

const Modal = ({ modalData, handleCloseModal }) => {
  useEffect(() => {
    const closeOnEsc = (evt) => {
      if (evt.code === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", closeOnEsc);
  }, [handleCloseModal]);

  const closeModal = (evt) => {
    if (evt.target === evt.currentTarget) {
      handleCloseModal();
    }
    console.log("Close");
  };

  return (
    <div
      className="w-full h-full fixed top-0 left-0 z-20 "
      onClick={closeModal}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl w-full max-h-96
     h-full lg:max-w-5xl lg:max-h-[650px]"
      >
        <Image src={modalData.photo} alt={modalData.name} fill />
      </div>
    </div>
  );
};

export default Modal;
