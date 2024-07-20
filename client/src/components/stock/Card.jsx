import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Avatar"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="text-blue-500 hover:text-blue-700">
          <BiSolidEdit className="size-6" />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <MdDelete className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default Card;
