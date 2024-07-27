import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Card = ({ card }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">
          {card.name} - ₹{card.price}
          <span className="bg-slate-200 rounded-md shadow-md px-2 py-1 ml-5">
            {card.category}
          </span>
        </h3>
        <div className="flex items-center space-x-2">
          <button className="text-blue-500 hover:text-blue-700">
            <BiSolidEdit className="size-6" />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <MdDelete className="size-6" />
          </button>
        </div>
      </div>
      <p className="text-gray-500 mt-2">{card.description}</p>
    </div>
  );
};

export default Card;
