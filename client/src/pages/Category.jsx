import { useState } from "react";

import AddButtonComponent from "../components/common/AddButtonComponent";
import Form from "../components/vendor/Form";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/category/Card";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const cards = Array.from({ length: 10 }, (_, index) => ({
    id: `${index}`,
    name: `Name ${index + 1}`,
    description: `Description ${index + 1}.`,
  }));
  return (
    <DashboardLayout>
      <ul className="flex flex-col space-y-2">
        {cards.map((card) => (
          <li key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>
      <AddButtonComponent toggleForm={toggleForm} />

      {isOpen && <Form toggleForm={toggleForm} />}
    </DashboardLayout>
  );
};

export default Category;
