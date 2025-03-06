import React from "react";
import Image from "next/image";
import { BiCertification } from "react-icons/bi";
import Details from "../certificate.json";

const CertCard = () => {
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-row gap-4 justify-center">
          <BiCertification className="text-accent text-4xl" />
          <h2 className="text-accent font-medium text-3xl pb-7">
            Certifications
          </h2>
        </div>

        {Details.map((detail) => {
          return (
            <div
              key={detail.id}
              className="border-[2px] shadow-sm flex items-center gap-5 rounded-3xl px-10 py-5 mt-3 max-w-xl"
            >
              {detail.image?.map((data) => {
                return (
                  <div className="mt-3" key={detail.id}>
                    <Image
                      src={data.src}
                      alt={data.alt}
                      width={60}
                      height={60}
                    />
                  </div>
                );
              })}

              <div className="flex flex-col justify-center">
                <h5 className="font-medium text-gray-400 mt-3 py-2">
                  {detail.time}
                </h5>
                <h4 className="font-semibold text-2lg py-1">{detail.title}</h4>
                <h6 className="font-medium text-secondary py-1">
                  {detail.company}
                </h6>
              </div>
            </div>
          );
        })}

        {/* <div className="border-[1px] shadow-sm border-black-100 flex items-center justify-center gap-4 rounded-3xl p-5">
          <div className="mt-3">
            <Image
              src="/google.jpg"
              alt="USJ LOGO"
              width={60}
              height={60}
              className="mx-auto block"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="font-medium text-gray-400 mt-3 py-2">
              May 2024 - Feb 2025
            </h5>
            <h4 className="font-semibold text-2lg py-1">
              Google UX Design Professional Certificate
            </h4>
            <h6 className="font-medium text-secondary py-1">Google</h6>
          </div>
        </div>*/}
      </div>
    </>
  );
};

export default CertCard;
