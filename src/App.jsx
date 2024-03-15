import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Header from "./Components/Header";
import OrderCalendarPage from "./pages/OrderCalendarPage";

// Main component of the application
function App() {
  return (
    // Overall container with background color and minimum height and width
    <div className="bg-gray-300 min-h-screen min-w-full">
      {/* Header component */}
      <Header />
      {/* Main content area */}
      <div className="px-3 sm:px-8">
        {/* Routing setup */}
        <Routes>
          {/* Route for the Dashboard page */}
          <Route exact path="/" element={<Dashboard />} />
          {/* Route for the Orders page */}
          <Route exact path="/orders" element={<Orders />} />
          {/* Route for the Products page */}
          <Route exact path="/products" element={<Products />} />
          {/* Route for the Order Calendar page */}
          <Route exact path="/order-calendar" element={<OrderCalendarPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
