import React from "react";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <section className={` relative w-full h-[600px] mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-center items-start gap-5`}
      >
        <div>
          <div>
            <img
              src={"/123.jpg"}
              alt="not found"
              className="coverImg coverImgColor1 flex flex-row justify-center"
            />
          </div>

          <h1 className={`${styles.heroHeadText} text-white container`}>
            Hi, I'm{" "}
            <span className="text-[#915EFF] up">
              {" "}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Mohamad!")
                    .pauseFor(500)
                    .start({ loop: true, infinite: true });
                }}
              />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 up`}>
            I develop software <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
