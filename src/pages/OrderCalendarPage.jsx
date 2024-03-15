import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import { AppContext } from "../context/AppContext";
import "react-calendar/dist/Calendar.css";

// Component for displaying orders on a calendar
const OrderCalendarPage = () => {
  // State to manage the selected date on the calendar
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Accessing orders data from context
  const { orders, setOrders } = useContext(AppContext);

  // Filtering orders based on the selected date
  const filteredOrders = orders.filter(
    (order) =>
      new Date(order.orderDate).toLocaleDateString() ===
      selectedDate.toLocaleDateString()
  );

  // Function to handle date change on calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto p-2 md:p-4 lg:p-5">
      <h1 className="text-2xl md:text-3xl font-bold mb-5 ml-2">
        Orders Calendar
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-normal md:items-baseline">
        {/* Calendar component */}
        <div className="bg-white p-2 md:p-5 rounded-lg shadow-md max-w-full  flex justify-center items-center w-fit mb-5 md:mb-0">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            calendarType="US"
            className="mb-5"
          />
        </div>
        {/* Orders list for the selected date */}
        <div className="bg-white p-5 rounded-lg shadow-md min-w-full md:min-w-80 w-fit flex flex-col md:ml-10">
          <h3 className="text-lg font-semibold">
            Orders on {selectedDate.toLocaleDateString()}
          </h3>
          <ul>
            {/* Displaying filtered orders */}
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <li
                  key={order.id}
                  className="border-b border-gray-200 py-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{order.orderId}</p>
                    <p className="text-gray-500">{order.customerName}</p>
                  </div>
                  {/* Displaying order status with appropriate color */}
                  <p
                    className={`text-gray-500 ${
                      order.status !== "Pending"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {order.status}
                  </p>
                </li>
              ))
            ) : (
              // Displaying message when no orders are available for the selected date
              <li className="border-b border-gray-200 py-3 flex justify-between items-center">
                No orders Available
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderCalendarPage;
