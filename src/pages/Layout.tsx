import { Outlet } from "react-router";
import { NavBar } from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {};

export const Layout = ({}: Props) => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
