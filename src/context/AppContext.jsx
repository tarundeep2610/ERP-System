// src/context/AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      category: "Category1",
      price: 10,
      stockQuantity: 100,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category2",
      price: 20,
      stockQuantity: 200,
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category2",
      price: 70,
      stockQuantity: 2000,
    },
    {
      id: 4,
      name: "Product 4",
      category: "Category1",
      price: 10,
      stockQuantity: 210,
    },
    {
      id: 5,
      name: "Product 5",
      category: "Category2",
      price: 29,
      stockQuantity: 550,
    },
  ]);
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderId: "ORD001",
      customerName: "Shivam Kumar",
      orderDate: "2024-03-09",
      status: "Pending",
    },
    {
      id: 2,
      orderId: "ORD002",
      customerName: "Kunal Babbar",
      orderDate: "2024-03-10",
      status: "Shipped",
    },
    {
      id: 3,
      orderId: "ORD003",
      customerName: "Amit Sharma",
      orderDate: "2024-03-10",
      status: "Pending",
    },
    {
      id: 4,
      orderId: "ORD004",
      customerName: "Dharmendar",
      orderDate: "2024-03-15",
      status: "Shipped",
    },
    {
      id: 5,
      orderId: "ORD005",
      customerName: "Tarun",
      orderDate: "2024-03-10",
      status: "Shipped",
    },
  ]);

  return (
    <AppContext.Provider value={{ products, setProducts, orders, setOrders }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
