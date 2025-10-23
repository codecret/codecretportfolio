"use client";
import { Navbar, Footer } from "./components";

const SharedLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
