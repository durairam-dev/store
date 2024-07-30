import { useState } from "react";

import AddButtonComponent from "../components/common/AddButtonComponent";
import Form from "../components/vendor/Form";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/customer/Card";

const Customers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  function generateRandomIndianPhoneNumber() {
    // Generate a random 10-digit phone number starting with 7, 8, or 9
    const prefix = Math.floor(Math.random() * 3) + 7; // Randomly choose 7, 8, or 9
    const suffix = Math.floor(Math.random() * 100000000); // Random 8-digit number

    // Format the suffix to ensure it has 8 digits
    const formattedSuffix = suffix.toString().padStart(8, "0");

    // Combine the prefix and suffix
    const phoneNumber = `${prefix}${formattedSuffix}`;

    // Return the phone number in the standard format (e.g., 9876543210)
    return phoneNumber;
  }

  function generateRandomAddress() {
    // Sample data
    const streets = [
      "Main Street",
      "Elm Street",
      "Oak Avenue",
      "Pine Road",
      "Maple Lane",
    ];
    const buildings = [
      "Greenwood Apartments",
      "Sunny Heights",
      "Royal Towers",
      "Silver Oak Residency",
    ];
    const localities = [
      "Sector 17",
      "Sector 25",
      "Dwarka",
      "Vasant Kunj",
      "Rohini",
    ];
    const cities = ["New Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"];
    const states = [
      "Delhi",
      "Maharashtra",
      "Karnataka",
      "West Bengal",
      "Tamil Nadu",
    ];
    const pinCodes = ["110075", "400001", "560001", "700001", "600001"];

    // Generate random elements from each array
    const street = streets[Math.floor(Math.random() * streets.length)];
    const building = buildings[Math.floor(Math.random() * buildings.length)];
    const locality = localities[Math.floor(Math.random() * localities.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const state = states[Math.floor(Math.random() * states.length)];
    const pinCode = pinCodes[Math.floor(Math.random() * pinCodes.length)];

    // Generate a random house number and floor number
    const houseNumber = Math.floor(Math.random() * 1000) + 1;
    const floorNumber = Math.floor(Math.random() * 10) + 1;
    const flatNumber = Math.floor(Math.random() * 100) + 1;

    // Combine elements to form the address
    const address = `${houseNumber}, ${street}\nFlat No. ${flatNumber}, ${floorNumber} Floor\n${building}\n${locality}\n${city} - ${pinCode}\n${state}, India`;

    return address;
  }

  const cards = Array.from({ length: 10 }, (_, index) => ({
    id: `${index}`,
    name: `Name ${index + 1}`,
    email: `name@mail.com ${index + 1}`,
    phone: generateRandomIndianPhoneNumber(),
    address: generateRandomAddress(),
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

export default Customers;
