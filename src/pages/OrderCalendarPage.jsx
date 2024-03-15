import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import { AppContext } from "../context/AppContext";
import "react-calendar/dist/Calendar.css";

const OrderCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { orders, setOrders } = useContext(AppContext);

  const filteredOrders = orders.filter(
    (order) =>
      new Date(order.orderDate).toLocaleDateString() ===
      selectedDate.toLocaleDateString()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto p-2 md:p-4 lg:p-5">
      <h1 className="text-2xl md:text-3xl font-bold mb-5 ml-2">
        Orders Calendar
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-normal md:items-baseline">
        <div className="bg-white p-2 md:p-5 rounded-lg shadow-md max-w-full  flex justify-center items-center w-fit mb-5 md:mb-0">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            calendarType="US"
            className="mb-5"
          />
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md min-w-full md:min-w-80 w-fit flex flex-col md:ml-10">
          <h3 className="text-lg font-semibold">
            Orders on {selectedDate.toLocaleDateString()}
          </h3>
          <ul>
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
