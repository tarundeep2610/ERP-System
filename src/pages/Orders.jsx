import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useForm } from "react-hook-form";
import Modal from "../Components/Modal";
import CommonForm from "../Components/CommonForm";
import { Link } from "react-router-dom";

const Orders = () => {
  const { orders, setOrders } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({
    orderId: "",
    customerName: "",
    orderDate: "",
    status: "",
  });
  const [modalBody, setModalBody] = useState(<></>);
  const [modalHead, setModalHead] = useState(
    <>
      <h1>Add Orders:</h1>
    </>
  );

  const ordersForm = [
    {
      label: "OrderId",
      value: "",
      name: "orderId",
      required: true,
      type: "text",
    },
    {
      label: "Customer Name",
      value: "",
      name: "customerName",
      required: true,
      type: "text",
    },
    {
      label: "Order Date",
      value: "",
      name: "orderDate",
      required: true,
      type: "date",
    },
    {
      label: "Status",
      value: "",
      name: "status",
      required: true,
      type: "select",
      option: [
        { label: "Shipped", value: "Shipped" },
        { label: "Pending", value: "Pending" },
      ],
    },
  ];

  const setModal = (onClickFn, defaultValues) => {
    reset(defaultValues);

    setModalBody(
      <div>
        <CommonForm data={ordersForm} register={register} errors={errors} />
        <div className="w-full flex justify-center">
          <button
            onClick={handleSubmit((res) => onClickFn(res, defaultValues?.id))}
            className="py-1 px-4 bg-teal-500 text-white rounded-md mt-4 mb-2"
          >
            Save
          </button>
        </div>
      </div>
    );
  };

  const handleDelete = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  const handleAdd = (data) => {
    setOrders([...orders, { id: orders.length + 1, ...data }]);
    closeModal();
    reset();
  };

  const handleEdit = (data, id) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id === id) {
          return { id: order.id, ...data };
        }
        return order;
      })
    );

    closeModal();
    reset();
  };
  const openModal = (initialData) => {
    setIsOpen(true);

    setModalHead(initialData ? "Edit Order" : "Add Order");
    // setInitialValues(initialData || {});
  };

  const closeModal = () => {
    setIsOpen(false);
    reset();
  };

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({});

  return (
    <div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalHead={modalHead}
        size={"sm"}
      >
        {modalBody}
      </Modal>

      <div className="flex sm:flex-row flex-col p-2 pt-4 items-center sm:justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Orders Management
        </h1>

        <div className="mb-4 sm:ml-4 ml-auto flex">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
            onClick={() => {
              reset(initialValues);
              openModal();
              setModal(handleAdd);
            }}
          >
            Add Order
          </button>
          <div
            className="bg-teal-500 hover:bg-teal-700 text-white ml-2 font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
            onClick={() => {
              openModal();
              setModal(handleAdd);
            }}
          >
            <Link to="/order-calendar" className="block ml-auto w-fit">
              View Orders Calendar
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto sm:mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Customer Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">{order.orderId}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.customerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.orderDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => {
                      openModal(order);
                      setModal(handleEdit, order);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="w-full">
        
      </div> */}
    </div>
  );
};

export default Orders;
