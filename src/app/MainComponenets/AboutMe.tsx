import React from "react";
import EduCard from "../Components/EduCard";
import CertCard from "../Components/CertCard";
import Tool from "../Components/Tool";

const AboutMe = () => {
  return (
    <>
      <section className="p-6 lg:p-20 m-5">
        <div>
          <h3 className="lg:text-5xl text-3xl text-black font-semibold">
            About Me
          </h3>
          <p className="text-secondary pt-10">
            I am currently an undergraduate at the University of Sri
            Jayewardenepura. I am passionate on{" "}
            <span className="text-accent font-medium">UX designing</span> and{" "}
            <span className="text-accent font-medium">
              Human Computer Interaction.
            </span>{" "}
            More over I have done several projects regarding Web Development,
            Data Analysis and Embedded Systems.
          </p>
        </div>
        <EduCard />
        <CertCard />
        <Tool />
      </section>
    </>
  );
};

export default AboutMe;
