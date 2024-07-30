import { MdDashboard } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { RiBillLine } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { FaWarehouse } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";

import { Link } from "react-router-dom";
import { getFirstPathFromCurrentUrl } from "../../utils/urlUtils";

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
        <div className="flex items-center justify-center h-14 bg-gray-800 text-white border-2 rounded-md shadow-md">
          <h1 className="text-lg font-semibold">Company Name</h1>
        </div>
        <nav className="p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                className={`flex items-center w-full p-2 rounded-lg text-start text-white hover:bg-blue-500 outline-none cursor-pointer ${
                  getFirstPathFromCurrentUrl() == "" && "bg-blue-500"
                }`}
                to="/"
              >
                <MdDashboard className="grid place-items-center mr-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center w-full p-2 rounded-lg text-start text-white hover:bg-blue-500 outline-none cursor-pointer ${
                  getFirstPathFromCurrentUrl() == "billing" && "bg-blue-500"
                }`}
                to="/billing"
              >
                <RiBillLine className="grid place-items-center mr-4" />
                Billing
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center w-full p-2 rounded-lg text-start text-white hover:bg-blue-500 outline-none cursor-pointer ${
                  getFirstPathFromCurrentUrl() == "orders" && "bg-blue-500"
                }`}
                to="/orders"
              >
                <SlBasket className="grid place-items-center mr-4" />
                Orders
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center w-full p-2 rounded-lg text-start text-white hover:bg-blue-500 outline-none cursor-pointer ${
                  getFirstPathFromCurrentUrl() == "stock" && "bg-blue-500"
                }`}
                to="/stock"
              >
                <FaWarehouse className="grid place-items-center mr-4" />
                Stock
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center w-full p-2 rounded-lg text-start text-white hover:bg-blue-500 outline-none cursor-pointer ${
                  getFirstPathFromCurrentUrl() == "product" && "bg-blue-500"
                }`}
                to="/product"
              >
                <AiOutlineProduct className="grid place-items-center mr-4" />
                Product
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center w-full p-2 rounded-lg text-start text-white hover:bg-blue-500 outline-none cursor-pointer ${
                  getFirstPathFromCurrentUrl() == "category" && "bg-blue-500"
                }`}
                to="/category"
              >
                <MdOutlineCategory className="grid place-items-center mr-4" />
                Category
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center w-full p-2 rounded-lg text-start text-white hover:bg-blue-500 outline-none cursor-pointer ${
                  getFirstPathFromCurrentUrl() == "customer" && "bg-blue-500"
                }`}
                to="/customer"
              >
                <ImUsers className="grid place-items-center mr-4" />
                Customer
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center w-full p-2 rounded-lg text-start text-white hover:bg-blue-500 outline-none cursor-pointer ${
                  getFirstPathFromCurrentUrl() == "vendor" && "bg-blue-500"
                }`}
                to="/vendor"
              >
                <ImUsers className="grid place-items-center mr-4" />
                Vendor
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center w-full p-2 rounded-lg text-start text-white hover:bg-blue-500 outline-none cursor-pointer ${
                  getFirstPathFromCurrentUrl() == "user" && "bg-blue-500"
                }`}
                to="/user"
              >
                <FaRegUser className="grid place-items-center mr-4" />
                User
              </Link>
            </li>
            <li>
              <Link className="flex items-center w-full p-2 rounded-lg text-start text-white hover:bg-blue-500 active:bg-blue-500 outline-none cursor-pointer">
                <IoIosLogOut className="grid place-items-center mr-4" />
                Log Out
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </nav>
      </div>
    </>
  );
}
