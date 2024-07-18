import DashboardLayout from "../layouts/DashboardLayout";

const Billing = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-100 rounded-md shadow-md h-full">
        <div className="container mx-auto lg:p-4 p-2">
          <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">Add Product to Bill</h2>
            <form
              id="billing-form"
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div>
                <label
                  for="product"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product
                </label>
                <input
                  type="text"
                  id="product"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Search product..."
                />
              </div>
              <div>
                <label
                  for="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  min="1"
                  placeholder="Enter quantity"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                >
                  Add
                </button>
              </div>
            </form>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Billed Products</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 border">Product Name</th>
                    <th className="py-2 px-4 border">Quantity</th>
                    <th className="py-2 px-4 border">Price</th>
                    <th className="py-2 px-4 border">Total</th>
                    <th className="py-2 px-4 border">Actions</th>
                  </tr>
                </thead>
                <tbody id="billed-products"></tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                Download Bill
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Print Bill
              </button>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Billing;
