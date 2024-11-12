import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg">
        <div className="p-4 flex justify-between items-center border-b dark:border-gray-800">
          <h2 className="text-lg font-semibold dark:text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5 dark:text-gray-100" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                onClick={onClose}
              >
                Map
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                onClick={onClose}
              >
                Forecast
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                onClick={onClose}
              >
                Alerts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};