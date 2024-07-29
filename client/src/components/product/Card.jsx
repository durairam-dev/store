import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Card = ({ card }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <h2 className="text-xl font-semibold text-gray-800">{card.name} - </h2>
          <p className="text-gray-800 font-bold mt-1">₹{card.price}</p>
          <p className="text-gray-600 text-sm px-2 py-1 rounded-sm shadow-sm bg-slate-200">{card.category}</p>
        </div>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:text-white hover:bg-blue-500 p-1 rounded-md shadow-md">
            <BiSolidEdit className="size-6" />
          </button>
          <button className="text-red-500 hover:text-white hover:bg-red-500 p-1 rounded-md shadow-md">
            <MdDelete className="size-6" />
          </button>
        </div>
      </div>
      <p className="mt-2 text-gray-600">{card.description}</p>
    </div>
  );
};

export default Card;
