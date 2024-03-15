import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Header from "./Components/Header";
import OrderCalendarPage from "./pages/OrderCalendarPage";

function App() {
  return (
    <div className="bg-gray-300 min-h-screen min-w-full">
      <Header />
      <div className="px-3 sm:px-8">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/order-calendar" element={<OrderCalendarPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
