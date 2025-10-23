"use client";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <div className={`flex flex-col justify-center items-center h-screen`}>
      <section className={`relative w-full mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          {/* line with circle */}
          <div className="flex flex-col justify-center items-center mt-5 up ">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white `}>
              My <span className="text-[#915EFF] up"> Collection</span>
            </h1>
          </div>
        </div>
      </section>
      <ComputersCanvas />

      {/* Centered button */}
      <a
        href="/collection"
        className="bg-slate-700 px-5 py-3 rounded-lg my-8 cursor-pointer inline-block"
      >
        Watch
      </a>
    </div>
  );
};

export default SectionWrapper(Hero, "setup");
