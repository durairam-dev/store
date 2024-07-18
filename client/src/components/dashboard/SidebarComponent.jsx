import { MdDashboard } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { RiBillLine } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { FaWarehouse } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black opacity-50 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 shadow-md transform ${
          isOpen ? "translate-x-0 lg:hidden" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-14 text-blue-500 bg-white border-y">
          <h1 className="text-lg font-semibold">Company Name</h1>
        </div>
        <nav className="p-4">
          <ul>
            <li>
              <div className="flex items-center w-full p-3 rounded-lg text-start text-white hover:bg-blue-500 active:bg-blue-500 outline-none cursor-pointer">
                <MdDashboard className="grid place-items-center mr-4" />
                Dashboard
              </div>
            </li>
            <li>
              <div className="flex items-center w-full p-3 rounded-lg text-start text-white hover:bg-blue-500 active:bg-blue-500 outline-none cursor-pointer">
                <RiBillLine className="grid place-items-center mr-4" />
                Billing
              </div>
            </li>
            <li>
              <div className="flex items-center w-full p-3 rounded-lg text-start text-white hover:bg-blue-500 active:bg-blue-500 outline-none cursor-pointer">
                <FaWarehouse className="grid place-items-center mr-4" />
                Stock
              </div>
            </li>
            <li>
              <div className="flex items-center w-full p-3 rounded-lg text-start text-white hover:bg-blue-500 active:bg-blue-500 outline-none cursor-pointer">
                <AiOutlineProduct className="grid place-items-center mr-4" />
                Product
              </div>
            </li>
            <li>
              <div className="flex items-center w-full p-3 rounded-lg text-start text-white hover:bg-blue-500 active:bg-blue-500 outline-none cursor-pointer">
                <MdOutlineCategory className="grid place-items-center mr-4" />
                Category
              </div>
            </li>
            <li>
              <div className="flex items-center w-full p-3 rounded-lg text-start text-white hover:bg-blue-500 active:bg-blue-500 outline-none cursor-pointer">
                <ImUsers className="grid place-items-center mr-4" />
                Customer
              </div>
            </li>
            <li>
              <div className="flex items-center w-full p-3 rounded-lg text-start text-white hover:bg-blue-500 active:bg-blue-500 outline-none cursor-pointer">
                <ImUsers className="grid place-items-center mr-4" />
                Vendor
              </div>
            </li>
            <li>
              <div className="flex items-center w-full p-3 rounded-lg text-start text-white hover:bg-blue-500 active:bg-blue-500 outline-none cursor-pointer">
                <FaRegUser className="grid place-items-center mr-4" />
                User
              </div>
            </li>
            <li>
              <div className="flex items-center w-full p-3 rounded-lg text-start text-white hover:bg-blue-500 active:bg-blue-500 outline-none cursor-pointer">
                <IoIosLogOut className="grid place-items-center mr-4" />
                Log Out
              </div>
            </li>
            {/* Add more links here */}
          </ul>
        </nav>
      </div>
    </>
  );
}
