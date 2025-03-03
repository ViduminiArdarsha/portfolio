import React from "react";
import Image from "next/image";
import { BiCertification } from "react-icons/bi";

const CertCard = () => {
  return (
    <>
      <div className="p-10 shadow-lg mt-10">
        <div className="flex flex-row gap-3 justify-center">
          <BiCertification className="text-accent text-4xl" />
          <h2 className="text-accent font-medium text-3xl pb-10">
            Certifications
          </h2>
        </div>

        <div className=" flex relative items-center justify-center">
          <div className="flex flex-col h-full">
            <div className="absolute w-[1px] h-full bg-gray-300"></div>
            <div className="space-y-8 ml-12">
              <div className="relative">
                <div className="absolute -left-8 top-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="flex items-center gap-4">
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
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="flex items-center gap-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertCard;
