import React from "react";

const CommonForm = ({ data, errors, register, defaultValues }) => {
  console.log(defaultValues);
  console.log(data);
  return (
    <div>
      <form className="grid grid-cols-1 gap-2 px-2">
        {data?.map((item, index) => {
          let res = "";
          if (item.type === "select") {
            res = (
              <>
                <select
                  {...register(item.name, {
                    required: item.required ? "This Field is required" : false,
                    ...item.props,
                  })}
                  className={
                    "p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
                  }
                  // value={defaultValues?.[item?.name]}
                >
                  <option selected value={""} disabled>
                    Select
                  </option>
                  {item.option.map((selitm) => {
                    return (
                      <option key={selitm.value} value={selitm.value}>
                        {selitm.label}
                      </option>
                    );
                  })}
                </select>
                <p className="text-xs text-red-700">
                  {errors[item.name]?.message}
                </p>
              </>
            );
          } else if (item.type === "date") {
            res = (
              <>
                <input
                  type="date"
                  id="start"
                  name={item.name}
                  // value={new Date().getDate()}
                  // value="2024-03-15"
                  {...register(item.name, {
                    required: item.required ? "This Field is required" : false,
                    ...item.props,
                  })}
                  className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
                  // min="2018-01-01"
                  // max="2018-12-31"
                />
              </>
            );
          } else if (item.type === "number") {
            res = (
              <>
                {" "}
                <input
                  type="number"
                  {...register(item.name, {
                    required: item.required ? "This Field is required" : false,
                    ...item.props,
                  })}
                  className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
                  // value={defaultValues?.[item?.name]}
                />
              </>
            );
          } else {
            res = (
              <>
                <input
                  type={item.type}
                  disabled={item.disabled ? true : false}
                  {...register(item.name, {
                    required: item.required
                      ? "This " + " Field is required"
                      : false,
                    ...item.props,
                  })}
                  placeholder={item.placeholder ? item.placeholder : ""}
                  className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
                  {...item.props}
                  // value={defaultValues?.[item?.name]}
                />
                {console.log(
                  errors,
                  [item.name],
                  item.required,
                  "errors?.item?"
                )}
                <p className="text-xs text-red-700 pt-2">
                  {errors[item.name]?.message}
                </p>
              </>
            );
          }

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
