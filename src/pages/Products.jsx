// src/components/Products.js
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Modal from "../Components/Modal";
import { useForm } from "react-hook-form";
import CommonForm from "../Components/CommonForm";

const Products = () => {
  const { products, setProducts } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const initialValues = {
    name: "",
    category: "",
    price: "",
    stockQuantity: "",
  };
  const [modalBody, setModalBody] = useState(<></>);
  const [modalHead, setModalHead] = useState(
    <>
      <h1>Add Products:</h1>
    </>
  );

  const productsForm = [
    {
      label: "Name",
      value: "",
      name: "name",
      required: true,
      type: "text",
    },
    {
      label: "Category",
      value: "",
      name: "category",
      required: true,
      type: "select",
      option: [
        { label: "Category1", value: "Category1" },
        { label: "Category2", value: "Category2" },
      ],
    },
    {
      label: "Price",
      value: "",
      name: "price",
      required: true,
      type: "number",
    },
    {
      label: "Stock",
      value: "",
      name: "stockQuantity",
      required: true,
      type: "number",
    },
  ];

  const setModal = (onClickFn, defaultValues) => {
    reset(defaultValues);
    setModalBody(
      <div>
        <CommonForm data={productsForm} register={register} errors={errors} />
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

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleAdd = (data) => {
    setProducts([...products, { id: products.length + 1, ...data }]);
    closeModal();
    reset();
  };

  const handleEdit = (data, id) => {
    setProducts((prev) =>
      prev.map((product) => {
        if (product.id === id) {
          return { id: product.id, ...data };
        }
        return product;
      })
    );

    closeModal();
    reset();
  };
  const openModal = (initialData) => {
    setIsOpen(true);

    setModalHead(initialData ? "Edit product" : "Add product");
  };

  const closeModal = () => {
    setIsOpen(false);
    reset();
  };

  const {
    register,
    handleSubmit,
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
          Products Management
        </h1>
        <div className="sm:mb-4 sm:ml-4 ml-auto">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
            onClick={() => {
              reset(initialValues);
              openModal();
              setModal(handleAdd);
            }}
          >
            Add product
          </button>
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
                product ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Quantity
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
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.stockQuantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => {
                      openModal(product);
                      setModal(handleEdit, product);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
