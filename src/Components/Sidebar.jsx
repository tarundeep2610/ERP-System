import { NavLink } from "react-router-dom";

// Component for the sidebar navigation
const Sidebar = ({ closeToggle }) => {
  // Function to close the sidebar
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-gray-800 border border-black h-full overflow-y-scroll min-w-210 hide-scrollbar py-4">
      <div className="flex flex-col">
        <div className="flex flex-col gap-5">
          {/* Dashboard link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize"
                : "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize"
            }
            onClick={handleCloseSidebar}
          >
            Dashboard
          </NavLink>
          {/* Orders link */}
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize"
                : "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize"
            }
            onClick={handleCloseSidebar}
          >
            Orders
          </NavLink>
          {/* Products link */}
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize"
                : "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize"
            }
            onClick={handleCloseSidebar}
          >
            Products
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
