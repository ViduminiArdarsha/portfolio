"Use Client";
import React from "react";
import Image from "next/image";
import { BiAnchor } from "react-icons/bi";
import Data from "../tools.json";

const Tool = () => {
  return (
    <div className="flex flex-col items-center  mt-20">

      <div className="flex flex-row gap-4">
        <BiAnchor className="text-accent text-4xl" />
        <h2 className="text-accent font-medium text-3xl pb-8">Technologies</h2>
      </div>

      
      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 p-5">
        {Data.map((data) => {
          return (
            <div
              key={data.id}
              className="flex flex-col items-center justify-center border-[1px] border-gray-300 rounded-md h-[150px] w-[150px]"
            >
              {data.image?.map((datas) => {
                return (
                  <div key={data.id} className="h-[70px] w-[70px] flex items-center ">
                    <Image
                      src={datas.src}
                      alt={datas.alt}
                      width={70}
                      height={70} 
                      className="rounded-xl"
                    />
                  </div>
                );
              })}

              <h2 className="font-medium  text-gray-700 mt-5">
                {data.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tool;
