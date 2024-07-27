import { useState } from "react";

import AddButtonComponent from "../components/common/AddButtonComponent";
import Form from "../components/vendor/Form";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/product/Card";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const cards = Array.from({ length: 10 }, (_, index) => ({
    name: `Name ${index + 1}`,
    category: `Category ${index + 1}.`,
    price: Math.floor(Math.random() * (1000 - 100)) + 100,
    description: `Description ${index + 1}.`,
  }));
  return (
    <DashboardLayout>
      <ul className="flex flex-col space-y-2">
        {cards.map((card, index) => (
          <li key={index}>
            <Card card={card} />
          </li>
        ))}
      </ul>
      <AddButtonComponent toggleForm={toggleForm} />

      {isOpen && <Form toggleForm={toggleForm} />}
    </DashboardLayout>
  );
};

export default Product;
