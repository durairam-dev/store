import { MdAddCircle } from "react-icons/md";
const AddButtonComponent = ({ toggleForm }) => {
  return (
    <MdAddCircle
      className="fixed bottom-2 right-6 bg-white text-blue-500 h-12 w-12 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-md"
      onClick={toggleForm}
    />
  );
};

export default AddButtonComponent;
