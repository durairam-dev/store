import { MdAddShoppingCart } from "react-icons/md";
import DashboardLayout from "../layouts/DashboardLayout";

const Billing = () => {
  return (
    <DashboardLayout>
      <section className="bg-white p-4 rounded-lg shadow-lg mb-2">
        <h2 className="text-xl font-semibold mb-2">Add Product to Bill</h2>
        <form
          id="billing-form"
          className="grid lg:grid-cols-6 grid-cols-1 gap-4"
        >
          <input
            type="text"
            id="product"
            className="lg:col-span-4 col-span-6 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Search product..."
          />

          <div className="lg:col-span-2 col-span-6 flex space-x-2 justify-between">
            <input
              type="number"
              id="quantity"
              className="p-2 border border-gray-300 rounded-md lg:w-full w-40"
              min="1"
              placeholder="Enter quantity"
            />

            <div className="flex items-end">
              <button
                type="button"
                className="flex items-center bg-blue-500 text-white font-bold px-4 py-2 rounded-md"
              >
                <MdAddShoppingCart className="mr-2 h-5 w-5" />
                Add
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Billed Products</h2>
        <div className="overflow-x-auto mt-2">
          <table className="min-w-full bg-white border rounded-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Quantity</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Total</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody id="billed-products"></tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold">RS 240</p>
          <div className="flex space-x-2 text-right">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Download Bill
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Print Bill
            </button>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Billing;
