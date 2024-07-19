import { MdAddCircle } from "react-icons/md";
const AddButtonComponent = ({ toggleForm }) => {
  return (
    <MdAddCircle
      className="absolute bottom-7 right-7 text-blue-500 h-12 w-12 rounded-full hover:shadow-md"
      onClick={toggleForm}
    />
  );
};

export default AddButtonComponent;
