"use client";

import { useState } from "react";
import CreateProductModal from "./create-product-modal";

export default function CreateProductFab() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* Modal para crear productos */}
      <CreateProductModal
        open={modalVisible}
        handleClose={() => setModalVisible(false)}
      />

      {/* Botón flotante */}
      <div className="fixed left-10 bottom-10">
        <button
          onClick={() => setModalVisible(true)}
          className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          {/* Ícono "+" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
