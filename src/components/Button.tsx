import React from "react";
import { NavLink } from "react-router";

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <NavLink
      className="absolute bottom-4 right-4 bg-yellow-500 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-600"
      to={link}
    >
      {text}
    </NavLink>
  );
};

export default Button;
