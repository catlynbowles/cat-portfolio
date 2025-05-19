import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Detail } from "./Column";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: Detail;
  media?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, content, media }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className="modal transform transition-transform duration-500 scale-100 bg-gray-800 rounded-lg shadow-lg p-5"
        style={{
          animation: "spiralIn 0.5s forwards",
        }}
      >
        <button
          className="absolute top-10 right-10 modal-text hover:text-gray-300 text-3xl cursor-pointer"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="flex flex-col  max-h-screen overflow-y-auto">
          {media && <div className="pt-24">{media}</div>}

          {content.url ? (
            <a
              href={content.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${content.url && "underline"} text-white`}
            >
              <div className="modal-text m-10 md:m-20 text-white">
                {content.title}
              </div>
            </a>
          ) : (
            <div className="modal-text m-5 md:m-20 text-xs">
              {content.title}
            </div>
          )}
        </div>
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
    document.body
  );
};

export default Modal;
