import React from "react";

import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="mt-8 sm:px-[140px] sm:py-10 px-6 py-4 bg-black mr-3 w-full ">
      <div className="flex justify-between">
        <div>
          <p className="text-sm">Copyright © 2023. All rights are reserved</p>
          <div className="flex mt-2 gap-3">
            <AiFillLinkedin
              className="icon-social  cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mohammed-malek-alkhodary-47a763243/",
                  "_blank"
                )
              }
            />
            <AiFillInstagram
              className="icon-social cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/codecret/", "_blank")
              }
            />
            <AiFillGithub
              className="icon-social cursor-pointer"
              onClick={() =>
                window.open("https://github.com/codecret", "_blank")
              }
            />
            <AiFillTwitterCircle
              className="icon-social cursor-pointer"
              onClick={() =>
                window.open("https://twitter.com/codecret", "_blank")
              }
            />
          </div>
        </div>

        <button
          onClick={() => window.scrollTo(0, 0)}
          className="bg-purple-900 px-6 py-3 rounded-md	"
        >
          <IoIosArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
