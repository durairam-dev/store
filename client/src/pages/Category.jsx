import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Form from "../components/vendor/Form";
import Add from "../components/common/AddButtonComponent";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DashboardLayout>
      <div className="relative h-full bg-white rounded-md shadow-md">
        <Add toggleForm={toggleForm} />
      </div>
      {isOpen && <Form toggleForm={toggleForm} />}
    </DashboardLayout>
  );
};

export default Category;
