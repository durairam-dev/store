import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Form from "../components/vendor/Form";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DashboardLayout>
      <header className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product List</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={toggleForm}
        >
          Add Product
        </button>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border">Product Name</th>
                <th className="py-2 px-4 border">Contact</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody id="Product-list"></tbody>
          </table>
        </div>
      </section>
      {isOpen && <Form toggleForm={toggleForm} />}
    </DashboardLayout>
  );
};

export default Product;
