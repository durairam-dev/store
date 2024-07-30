import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Card = ({ order }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          {order.customer_name}
          <span className="text-gray-600 text-sm"> ({order.status})</span>
        </h2>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:text-white hover:bg-blue-500 p-1 rounded-md shadow-md">
            <BiSolidEdit className="size-6" />
          </button>
          <button className="text-red-500 hover:text-white hover:bg-red-500 p-1 rounded-md shadow-md">
            <MdDelete className="size-6" />
          </button>
        </div>
      </div>
      <div className="mt-2 overflow-x-auto w-full">
        <h3 className="text-gray-700 font-semibold">Products:</h3>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-transparent">Name</th>
              <th className="px-4 py-2 border-transparent">Quantity</th>
              <th className="px-4 py-2 border-transparent">Price</th>
              <th className="px-4 py-2 border-transparent">Total</th>
            </tr>
          </thead>
          <tbody>
            {order.products.map((product, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-transparent">
                  {product.product_name}
                </td>
                <td className="px-4 py-2 border-transparent">
                  {product.quantity}
                </td>
                <td className="px-4 py-2 border-transparent">
                  ₹{product.price.toFixed(2)}
                </td>
                <td className="px-4 py-2 border-transparent">
                  ₹{(product.price.toFixed(2) * product.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-4 py-2 border-transparent font-bold">
                Total Amount
              </td>
              <td className="px-4 py-2 border-transparent">
                ₹{order.total_amount.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Card;
