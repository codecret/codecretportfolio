import { Outlet, Link } from "react-router-dom";
import { Navbar, Footer } from "./components";

const SharedLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
