import { useState } from "react";

import AddButtonComponent from "../components/common/AddButtonComponent";
import Form from "../components/vendor/Form";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/stock/Card";

const Stock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const cards = Array.from({ length: 10 }, (_, index) => ({
    id: `${index}`,
    product: `Product Name ${index + 1}`,
    vendor: `Vendor Name ${index + 1}`,
    quantity: Math.floor(Math.random() * (1000 - 100)) + 100,
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

export default Stock;
