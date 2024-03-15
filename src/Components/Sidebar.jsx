import { NavLink, Link } from "react-router-dom";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-gray-800 border border-black h-full overflow-y-scroll min-w-210 hide-scrollbar py-4">
      <div className="flex flex-col">
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            {/* <RiHomeFill /> */}
            Dashboard
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            {/* <RiHomeFill /> */}
            Orders
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            {/* <RiHomeFill /> */}
            Products
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
