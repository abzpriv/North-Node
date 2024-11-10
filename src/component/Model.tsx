// components/Modal.tsx
import React from 'react';

interface ModalProps {
  show: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, title, message, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        {/* Warning Text */}
        <div className="absolute top-4 right-4 text-red-500 font-bold">
          Warning!
        </div>
        
        <h2 className="text-2xl text-black font-bold mb-4">{title}</h2>
        <p className="mb-6 text-black">{message}</p>
        <div className="flex justify-end">
          <button 
            onClick={onCancel}
            className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
