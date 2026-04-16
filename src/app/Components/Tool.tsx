"use client";
import React from "react";
import Image from "next/image";
import tools from "../tools.json";

const Tool = () => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {tools.map((tool) => (
        <div
          key={tool.id}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="flex-shrink-0">
            <Image
              src={tool.image[0].src}
              alt={tool.image[0].alt}
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {tool.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tool;
