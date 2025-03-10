"use client";
import React from "react";
import Image from "next/image";
import Details from "../projectCard.json";

const Projects = () => {
  return (
    <>
      <section className="p-2 lg:p-20 m-5">
        <div>
          <h3 className="lg:text-5xl text-3xl text-black font-semibold">
            Projects
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-3 justify-center">
        {Details.map((data) => {
          return (
            <div key={data.id} className="flex flex-col items-center justify-center mt-10 p-4  rounded-lg  border-gray-400 border-[1px] w-[400px] h-[350px]">
              {data.image?.map((det) => {
                return (
                  <Image src={det.src} alt={det.alt} width={300} height={300}className="flex items-center rounded-lg" />
                );
              })}

              <h3 className="font-semibold text-2xl py-2 mt-5">{data.name}</h3>
              <p className="text-gray-700">{data.description}</p>
            </div>
          );
        })}
        </div>
        
      </section>
    </>
  );
};

export default Projects;
