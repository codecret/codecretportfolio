import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "./utils/motion";
import { setup } from "./constants/index";
import herobg from "./assets/herobg.png";
import { styles } from "./styles";
import { Link } from "react-router-dom";
import { Navbar } from "./components";

const SetupCard = ({ title, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: index === 0 || index === 1 || index === 2 ? 0.5 : 1,
      }}
      className="w-full xs:mb-5 sm:w-full sm:min-h-28	"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full  border-b-4 border-zinc-400"
      >
        <div className="image-container">
          <img src={herobg} alt="Image 1" className="w-full h-auto" />
          <img
            src={image}
            alt="Image 2"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] "
          />
        </div>
        <div className="mx-4 py-4">
          <h2 className="font-lights">{title}</h2>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Collection = () => {
  return (
    <>
      <Navbar links={false} />
      <section className="relative w-full mx-auto bg-primary">
        <div
          // absolute inset-0 top-[120px]
          className={` max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5 mt-[120px]`}
        >
          <h1 className="text-3xl font-bold circle-sketch-highlight">
            My{" "}
            <span className="circle-sketch-highlight font-normal">
              Collection
            </span>
          </h1>
          <Link to={"/"}>{">"} Back</Link>
          <div className="mt-20 gap-10 w-full lg:grid xl:grid md:grid grid-cols-3 h-full">
            {setup.map((e, index) => (
              <SetupCard title={e.title} image={e.image} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
