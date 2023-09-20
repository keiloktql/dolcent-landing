/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from "react";
import Image from "next/image";
import { BENTO_BOX_TYPE } from "@/config/enum";

const BentoBox = ({
  type = BENTO_BOX_TYPE.LONG_TEXT_LEFT,
  imageHref,
  heading,
  desc,
  content,
  className,
  textClassName
}) => {
  if (type === BENTO_BOX_TYPE.LONG_TEXT_LEFT) {
    return (
      <div
        className={`flex pt-16 md:pt-0 flex-col md:flex-row justify-between px-20 lg:px-40 bg-gray-100 rounded-xl mt-4 ${className}`}
      >
        <div className="flex flex-col justify-center md:mr-4">
          <h1
            className={`font-bold text-center md:text-left text-display-xs lg:text-display-sm ${textClassName}`}
          >
            {heading}
          </h1>
          <p className={`text-center md:text-left ${textClassName}`}>{desc}</p>
        </div>
        <div className="flex justify-center items-end mt-8">
          <Image src={imageHref} width={250} height={40} alt="image" />
        </div>
      </div>
    );
  }
  if (type === BENTO_BOX_TYPE.LONG_TEXT_RIGHT) {
    return (
      <div
        className={`flex pt-16 md:pt-0 flex-col-reverse md:flex-row justify-between px-20 lg:px-40 bg-gray-100 rounded-xl mt-4 ${className}`}
      >
        <div className="flex justify-center items-end mt-8">
          <Image src={imageHref} width={250} height={40} alt="image" />
        </div>
        <div className="flex flex-col justify-center md:ml-4">
          <h1
            className={`font-bold text-display-xs lg:text-display-sm text-center md:text-right ${textClassName}`}
          >
            {heading}
          </h1>
          <p className={`text-center md:text-right ${textClassName}`}>{desc}</p>
        </div>
      </div>
    );
  }

  // BENTO_BOX_TYPE.SMALL
  return (
    <div className="flex flex-col md:flex-row">
      {content.map((oneContent, index) => {
        if (oneContent.type === BENTO_BOX_TYPE.SMALL_TEXT_LEFT) {
          return (
            <div
              key={index}
              className={`flex w-full md:mr-2 pt-16 flex-col px-20 bg-gray-100 rounded-xl justify-between mt-4 ${oneContent.className}`}
            >
              <div className="flex flex-col justify-center">
                <h1
                  className={`font-bold text-display-xs lg:text-display-sm text-center ${textClassName}`}
                >
                  {oneContent.heading}
                </h1>
                <p className={`text-center ${textClassName}`}>
                  {oneContent.desc}
                </p>
              </div>
              <div className="flex justify-center items-end mt-8">
                <Image
                  src={oneContent.imageHref}
                  width={250}
                  height={40}
                  alt="image"
                />
              </div>
            </div>
          );
        }
        return (
          <div
            key={index}
            className={`flex w-full md:ml-2 pt-16 flex-col px-20 bg-gray-100 rounded-xl justify-between mt-4 ${oneContent.className}`}
          >
            <div className="flex flex-col justify-center">
              <h1
                className={`font-bold text-display-xs lg:text-display-sm text-center ${textClassName}`}
              >
                {oneContent.heading}
              </h1>
              <p className={`text-center ${textClassName}`}>
                {oneContent.desc}
              </p>
            </div>
            <div className="flex justify-center items-end mt-8">
              <Image
                src={oneContent.imageHref}
                width={250}
                height={40}
                alt="image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BentoBox;
