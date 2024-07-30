import { useState } from "react";

import AddButtonComponent from "../components/common/AddButtonComponent";
import Form from "../components/vendor/Form";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/orders/Card";
import { groupByDate } from "../utils/responseUtils";
import { formatDate } from "../utils/dateFormatUtils";

const Orders = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const data = [
    {
      id: 1,
      customer_name: "Alice",
      date: "2024-07-01",
      status: "Pending",
      products: [
        {
          product_name: "product_001",
          quantity: 1,
          price: 24.99,
        },
        {
          product_name: "product_002",
          quantity: 2,
          price: 49.99,
        },
      ],
      total_amount: 124.97,
    },
    {
      id: 2,
      customer_name: "Bob",
      date: "2024-07-02",
      status: "Shipped",
      products: [
        {
          product_name: "product_003",
          quantity: 3,
          price: 15.99,
        },
        {
          product_name: "product_004",
          quantity: 1,
          price: 199.99,
        },
      ],
      total_amount: 247.96,
    },
    {
      id: 3,
      customer_name: "Charlie",
      date: "2024-07-03",
      status: "Delivered",
      products: [
        {
          product_name: "product_005",
          quantity: 5,
          price: 9.99,
        },
      ],
      total_amount: 49.95,
    },
    {
      id: 4,
      customer_name: "Diana",
      date: "2024-07-04",
      status: "Cancelled",
      products: [
        {
          product_name: "product_001",
          quantity: 2,
          price: 24.99,
        },
        {
          product_name: "product_002",
          quantity: 1,
          price: 49.99,
        },
      ],
      total_amount: 99.97,
    },
    {
      id: 5,
      customer_name: "Eve",
      date: "2024-07-05",
      status: "Pending",
      products: [
        {
          product_name: "product_003",
          quantity: 4,
          price: 15.99,
        },
      ],
      total_amount: 63.96,
    },
    {
      id: 6,
      customer_name: "Frank",
      date: "2024-07-06",
      status: "Shipped",
      products: [
        {
          product_name: "product_004",
          quantity: 2,
          price: 199.99,
        },
      ],
      total_amount: 399.98,
    },
    {
      id: 7,
      customer_name: "Grace",
      date: "2024-07-07",
      status: "Delivered",
      products: [
        {
          product_name: "product_005",
          quantity: 10,
          price: 9.99,
        },
      ],
      total_amount: 99.9,
    },
    {
      id: 8,
      customer_name: "Hank",
      date: "2024-07-08",
      status: "Shipped",
      products: [
        {
          product_name: "product_001",
          quantity: 1,
          price: 24.99,
        },
        {
          product_name: "product_002",
          quantity: 3,
          price: 49.99,
        },
        {
          product_name: "product_003",
          quantity: 2,
          price: 15.99,
        },
      ],
      total_amount: 236.92,
    },
    {
      id: 9,
      customer_name: "Ivy",
      date: "2024-07-09",
      status: "Cancelled",
      products: [
        {
          product_name: "product_004",
          quantity: 1,
          price: 199.99,
        },
      ],
      total_amount: 199.99,
    },
    {
      id: 10,
      customer_name: "Jack",
      date: "2024-07-10",
      status: "Pending",
      products: [
        {
          product_name: "product_002",
          quantity: 1,
          price: 49.99,
        },
        {
          product_name: "product_003",
          quantity: 5,
          price: 15.99,
        },
      ],
      total_amount: 149.94,
    },
    {
      id: 11,
      customer_name: "Karen",
      date: "2024-07-11",
      status: "Shipped",
      products: [
        {
          product_name: "product_001",
          quantity: 3,
          price: 24.99,
        },
        {
          product_name: "product_005",
          quantity: 1,
          price: 9.99,
        },
      ],
      total_amount: 84.96,
    },
    {
      id: 12,
      customer_name: "Liam",
      date: "2024-07-12",
      status: "Delivered",
      products: [
        {
          product_name: "product_003",
          quantity: 2,
          price: 15.99,
        },
        {
          product_name: "product_004",
          quantity: 1,
          price: 199.99,
        },
      ],
      total_amount: 231.97,
    },
  ];

  const cards = groupByDate(data);

  return (
    <DashboardLayout>
      <ul className="flex flex-col space-y-2">
        {Object.keys(cards).map((date) => (
          <li key={date}>
            <h2 className="w-full text-md text-white font-semibold bg-slate-400 rounded-md shadow-md p-2 mb-2">
              {formatDate(date)}
            </h2>
            <ul>
              {cards[date].map((order) => (
                <li key={order.id}>
                  <Card order={order} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <AddButtonComponent toggleForm={toggleForm} />

      {isOpen && <Form toggleForm={toggleForm} />}
    </DashboardLayout>
  );
};

export default Orders;
