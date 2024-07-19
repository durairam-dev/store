import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { getFirstPathFromCurrentUrl } from "../../utils/urlUtils";

const HeaderComponent = ({ toggleSidebar }) => {
  const [header, setHeader] = useState("Dashboard");

  return (
    <header className="flex items-center justify-between h-14 p-4 bg-gray-800 shadow-md">
      <button className="focus:outline-none" onClick={toggleSidebar}>
        <LuMenu className="h-6 w-6 text-white" />
      </button>
      <h1 className="text-xl font-semibold text-white capitalize">
        {getFirstPathFromCurrentUrl()
          ? getFirstPathFromCurrentUrl()
          : "Dashboard"}
      </h1>
      <button className="focus:outline-none" onClick={toggleSidebar}>
        <MdOutlineAccountCircle className="h-6 w-6 text-white" />
      </button>
    </header>
  );
};

export default HeaderComponent;
