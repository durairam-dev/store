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
    title: `Card Title ${index + 1}`,
    description: `This is the description for card ${index + 1}.`,
  }));
  return (
    <DashboardLayout>
      <ul className="h-full space-y-2 mb-10">
        {cards.map((card, index) => (
          <li>
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          </li>
        ))}
      </ul>
      <AddButtonComponent toggleForm={toggleForm} />

      {isOpen && <Form toggleForm={toggleForm} />}
    </DashboardLayout>
  );
};

export default Stock;
