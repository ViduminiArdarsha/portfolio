"Use Client";
import React from "react";
import Image from "next/image";
import { BiAnchor } from "react-icons/bi";
import Data from "../tools.json";

const Tool = () => {
  return (
    <div className="mt-20 justify-center">
      <div className="flex flex-row gap-4 justify-center">
        <BiAnchor className="text-accent text-4xl" />
        <h2 className="text-accent font-medium text-3xl pb-8">Technologies</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-4">
        {Data.map((data) => {
          return (
            <div
              key={data.id}
              className="flex flex-row gap-5 mt-3 border-[1px] border-gray-300 rounded-md"
            >
              {data.image?.map((datas) => {
                return (
                  <div key={data.id}>
                    <Image
                      src={datas.src}
                      alt={datas.alt}
                      width={80}
                      height={80}
                      className="rounded-s-md"
                    />
                  </div>
                );
              })}

              <h2 className="font-medium flex items-center text-gray-700">
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
