import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const Modal = ({ isOpen, onClose, content }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Disable background scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Cleanup: Restore scrolling when modal is closed
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={onClose} // Close modal when clicking on the overlay
      ></div>

      {/* Modal Content */}
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 scale-100"
        style={{ animation: "spiralIn 0.5s forwards" }}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="text-center text-lg">{content}</div>
      </div>

      {/* Spiral Animation */}
      <style>
        {`
          @keyframes spiralIn {
            0% {
              transform: scale(0) rotate(45deg);
            }
            100% {
              transform: scale(1) rotate(0deg);
            }
          }
        `}
      </style>
    </div>,
    document.body // Render the modal into the <body> element
  );
};

export default Modal;
