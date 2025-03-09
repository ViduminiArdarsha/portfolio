import React from "react";
import Image from "next/image";

const HeadSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center text-center md:text-left gap-5 md:gap-20 p-6">
        <div className="text-center">
          <h1 className="font-semibold text-4xl md:text-6xl  m-8 text-accent">
            Vidumini Ardarsha
          </h1>
          <h2 className="font-normal text-sm md:text-2xl  m-8 text-secondary">
            Fresh Undergraduate | Aspiring UI/UX Designer
          </h2>
        </div>

        <div className="relative my-auto bg-gradient-to-b from-accent rounded-full w-40 h-40 overflow-hidden justify-center">
          <Image
            src="/profilePhoto.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
    </section>
  );
};

export default HeadSection;
