import React from "react";

// This component renders a common form with various input fields based on the provided data.
// It accepts 'data', 'errors', and 'register' as props to populate and handle form fields and validation.

const CommonForm = ({ data, errors, register }) => {
  return (
    <div>
      {/* Form element */}
      <form className="grid grid-cols-1 gap-2 px-2">
        {/* Mapping over the 'data' array to generate form fields dynamically */}
        {data?.map((item, index) => {
          let res = "";

          // Conditional rendering based on the type of input field
          if (item.type === "select") {
            // Rendering select element for dropdown
            res = (
              <>
                <select
                  // Registering input field for validation
                  {...register(item.name, {
                    required: item.required ? "This Field is required" : false,
                    ...item.props,
                  })}
                  className={
                    // Styling for select element
                    "p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
                  }
                >
                  {/* Default option */}
                  <option selected value={""} disabled>
                    Select
                  </option>
                  {/* Mapping over options to populate select dropdown */}
                  {item.option.map((selitm) => {
                    return (
                      <option key={selitm.value} value={selitm.value}>
                        {selitm.label}
                      </option>
                    );
                  })}
                </select>
                {/* Displaying validation error message */}
                <p className="text-xs text-red-700">
                  {errors[item.name]?.message}
                </p>
              </>
            );
          } else if (item.type === "date") {
            // Rendering input field for date
            res = (
              <>
                <input
                  type="date"
                  id="start"
                  name={item.name}
                  {...register(item.name, {
                    required: item.required ? "This Field is required" : false,
                    ...item.props,
                  })}
                  className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
                />
              </>
            );
          } else if (item.type === "number") {
            // Rendering input field for numeric values
            res = (
              <>
                <input
                  type="number"
                  {...register(item.name, {
                    required: item.required ? "This Field is required" : false,
                    ...item.props,
                  })}
                  className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
                />
              </>
            );
          } else {
            // Rendering default input field for text, email, password, etc.
            res = (
              <>
                <input
                  type={item.type}
                  disabled={item.disabled ? true : false}
                  {...register(item.name, {
                    required: item.required ? "This Field is required" : false,
                    ...item.props,
                  })}
                  placeholder={item.placeholder ? item.placeholder : ""}
                  className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
                  {...item.props}
                />
                {/* Logging errors for debugging */}
                {console.log(
                  errors,
                  [item.name],
                  item.required,
                  "errors?.item?"
                )}
                {/* Displaying validation error message */}
                <p className="text-xs text-red-700 pt-2">
                  {errors[item.name]?.message}
                </p>
              </>
            );
          }

          // Rendering form field and label
          return (
            <div key={index}>
              <label className="block text-sm font-medium text-black ml-0">
                {item.label}
              </label>
              {res}
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default CommonForm;
