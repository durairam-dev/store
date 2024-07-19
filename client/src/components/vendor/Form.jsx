import { IoClose } from "react-icons/io5";
const Form = ({ toggleForm }) => {
  return (
    <div
      id="add-vendor-modal"
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add Vendor</h2>

        <form id="add-vendor-form">
          <div className="mb-4">
            <input
              type="text"
              id="vendor-name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
              placeholder="Vendor Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="vendor-contact"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
              placeholder="Contact"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="vendor-email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
              placeholder="Email"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={toggleForm}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
