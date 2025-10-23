"use client";
import { Navbar, Footer } from "./index";

const SharedLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
