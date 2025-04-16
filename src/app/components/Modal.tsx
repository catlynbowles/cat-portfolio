import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const Modal = ({ isOpen, onClose, content }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={onClose} // Close modal when clicking on the overlay
      ></div>

      {/* Modal Content */}
      <div
        className="modal"
        style={{
          animation: "spiralIn 0.5s forwards",
        }}
      >
        <button
          className="absolute top-10 right-10 modal-text hover:text-gray-300 text-3xl"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="modal-text m-10">{content}</div>
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
