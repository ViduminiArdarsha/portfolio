import React from "react";
import Image from "next/image";
import Details from "../projectData.json";

const page = () => {
  return (
    <div>
      {Details.map((detail) => {
        return (
          <div className="m-5" key={detail.id}>
            <h1 className="font-semibold text-7xl text-center pt-5">
              {detail.mainTitle}
            </h1>
            <h3 className="font-light text-gray-700 text-2xl text-center pt-10">
              {detail.subTitle}
            </h3>

            {detail.project?.map((data) => {
              return (
                <div className="mt-20 mx-40" key={detail.id}>
                  <h3 className="font-semibold text-3xl my-8">{data.topic}</h3>
                  <p className="text-xl my-8 text-gray-700">{data.content}</p>

                  {data.Image?.map((datas) => {
                    return (
                      <div
                        className="justify-items-center my-20"
                        key={detail.id}
                      >
                        <Image
                          src={datas.src}
                          alt={datas.alt}
                          width={800}
                          height={400}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default page;
