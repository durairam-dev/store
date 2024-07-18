import { LuMenu } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
const HeaderComponent = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between h-14 p-4 bg-white shadow-md">
      <button className="focus:outline-none" onClick={toggleSidebar}>
        <LuMenu className="h-6 w-6 text-gray-700" />
      </button>
      <h1 className="text-xl font-semibold ">Admin Dashboard</h1>
      <button className="focus:outline-none" onClick={toggleSidebar}>
        <MdOutlineAccountCircle className="h-6 w-6 text-gray-700" />
      </button>
    </header>
  );
};

export default HeaderComponent;
