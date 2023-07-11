import { Filter } from "@/app/firebase/firestore/getData";
import { useState } from "react";

type SidebarNavProps = {
  handleToggleSidebar: () => void;
  isSidebarOpen: boolean;
  handleCloseSidebar: () => void;
  items: string[] | undefined;
  handleFilterClick: (cat: string) => Promise<void>;
};

const SidebarNav: React.FC<SidebarNavProps> = ({
  handleToggleSidebar,
  isSidebarOpen,
  handleCloseSidebar,
  items,
  handleFilterClick,
}) => {
  return (
    <div className="relative">
      {/* Button to open sidebar */}

      {/* Sidebar overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20">
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg">
            {/* Sidebar content */}
            <ul className="space-y-2 mt-14">
              {items?.map((item) => {
                return (
                  <li
                    className="relative group"
                    onClick={() => handleFilterClick(item.toLowerCase())}
                  >
                    <div className="flex items-center justify-center p-4 bg-white cursor-pointer transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-100">
                      <span className="text-gray-800 text-lg font-medium">
                        {item}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* ... */}

            {/* Close button */}
            <button
              className="absolute top-3 left-3 p-2 bg-gray-800 text-white rounded-full"
              onClick={handleCloseSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.707 5.293a1 1 0 010 1.414L2.414 10l4.293 4.293a1 1 0 11-1.414 1.414L1.586 10l3.707-3.707a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M18 10a1 1 0 01-1 1h-3v3a1 1 0 11-2 0v-3H7a1 1 0 110-2h3V7a1 1 0 112 0v3h3a1 1 0 011 1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarNav;
