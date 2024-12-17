import { Link, NavLink } from "react-router";

type Props = {};
export const NavBar = ({}: Props) => {
  return (
    <nav className="flex justify-between items-center py-4 px-8">
      <Link to="/">
        <img src="/Logo.png" alt="Logo" />
      </Link>
      {/* <div className="text-xl font-bold">WOODIES</div> */}
      <div className="flex space-x-6">
        <NavLink to="/" className="cursor-pointer hover:text-gray-600">
          Home
        </NavLink>
        <NavLink to="/about" className="cursor-pointer hover:text-gray-600">
          About Us
        </NavLink>
        <NavLink to="/products" className="cursor-pointer hover:text-gray-600">
          Products
        </NavLink>
      </div>
    </nav>

    // <div>
    //   <Link to="/">
    //     <img src="./Logo.png" alt="Logo" />
    //   </Link>

    //   <div>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/about">About Us</NavLink>
    //     <NavLink to="/products">Products</NavLink>
    //   </div>
    // </div>
  );
};
