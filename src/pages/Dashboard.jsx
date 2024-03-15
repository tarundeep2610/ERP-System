import { Link } from "react-router-dom";
import { Line, Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";

Chart.register(CategoryScale);

export const Dashboard = () => {
  const revenueTrendData = [1000, 1500, 2000, 1800, 2200, 2500];
  const retentionRate = 85;
  const avgOrderValue = 150;
  const inventoryAgingData = [50, 80, 120, 90, 60];
  const employeePerformanceData = [
    { name: "Himanshu Verma", sales: 100, customerServiceRating: 4.5 },
    { name: "Neha Vashisht", sales: 120, customerServiceRating: 4.8 },
    { name: "Muskan Yadav", sales: 120, customerServiceRating: 4.8 },
    { name: "Joey", sales: 120, customerServiceRating: 4.8 },
  ];

  // Revenue trend chart data
  const revenueTrendChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: revenueTrendData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // Inventory aging chart data
  const inventoryAgingChartData = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        label: "Inventory Aging",
        data: inventoryAgingData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
      {/* <div className="container mx-auto p-5"> */}

      {/* </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-lg shadow-md md:col-span-2 lg:col-span-3">
          <p className="mb-4 text-lg font-semibold">
            Welcome to the ERP System! This system is designed to streamline
            various aspects of your business operations. Here's an overview of
            its key features:
          </p>
          <ul className="list-disc ml-5 mb-4">
            <li>
              Efficient management of products through the Products Management
              page.
            </li>
            <li>
              Seamless handling of orders with the Orders Management page.
            </li>
            <li>
              Optionally, you can view orders on a calendar interface using the
              Orders Calendar View.
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Revenue Trends</h2>
          <Line data={revenueTrendChartData} />
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md flex   flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Customer Retention Rate
            </h2>
            <p className="mb-3">Retention Rate: {retentionRate}%</p>
          </div>
          <div className="">
            <h2 className="text-xl font-semibold mb-3">
              Average Order Value (AOV)
            </h2>
            <p className="mb-3">Average Order Value: ${avgOrderValue}</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Inventory Aging</h2>
          <Bar data={inventoryAgingChartData} />
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">
            Employee Performance Metrics
          </h2>
          {/* Display employee performance metrics (e.g., sales, customer service rating) */}
          <ul className="overflow-y-auto">
            {employeePerformanceData.map((employee, index) => (
              <li key={index} className="flex border-b border-b-black p-1">
                <span className="w-24 font-semibold">{employee.name} : </span>
                <div className="ml-2">
                  <div>Sales - {employee.sales}</div>{" "}
                  <div>
                    Customer Service Rating - {employee.customerServiceRating}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="mb-3">
            <Link
              to="/products"
              className="text-xl hover:text-blue-500 font-semibold"
            >
              Products
            </Link>
          </div>
          <p className=" mb-1">
            <span className="font-semibold">Total number of products: </span> 10
          </p>
          <p className="">
            {" "}
            <span className="font-semibold">
              Total number of categories:{" "}
            </span>{" "}
            5
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="mb-3">
            <Link
              to="/orders"
              className="text-xl hover:text-blue-500 font-semibold"
            >
              Orders
            </Link>
          </div>
          <p className=" mb-1">
            {" "}
            <span className="font-semibold">Total number of orders: </span>: 20
          </p>
          <p className="">
            {" "}
            <span className="font-semibold">Total revenue: </span>: $1000
          </p>
        </div>
      </div>
    </div>
  );
};
