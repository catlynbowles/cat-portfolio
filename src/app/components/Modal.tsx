import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const Modal = ({ isOpen, onClose, content }: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`bg-white p-6 rounded-lg shadow-lg relative transform transition-transform duration-500 ${
          isAnimating ? "scale-100 rotate-0" : "scale-0 rotate-45"
        }`}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="text-center text-lg">{content}</div>
      </div>
    </div>,
    document.body // Render the modal into the <body> element
  );
};

export default Modal;
