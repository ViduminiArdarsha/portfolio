import React from "react";
import Image from "next/image";
import Details from "../certificate.json";

const CertCard = () => {
  return (
    <div className="grid grid-flow-row lg:grid-cols-3 sm:grid-cols-1 gap-4">
      {Details.map((detail) => {
        return (
          <div
            key={detail.id}
            className="border-[2px] shadow-sm flex items-center gap-5 rounded-xl px-5 py-2"
          >
            {detail.image?.map((data) => {
              return (
                <div className="mt-2" key={detail.id}>
                  <Image src={data.src} alt={data.alt} width={45} height={45} />
                </div>
              );
            })}

            <div className="flex flex-col justify-center">
              <h5 className="font-medium text-gray-400 text-xs py-1">
                {detail.time}
              </h5>
              <h4 className="font-semibold text-sm py-0.5">{detail.title}</h4>
              <h6 className="font-medium text-secondary text-xs py-0.5">
                {detail.company}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CertCard;
