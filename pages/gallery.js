import React from "react";
import "antd/dist/antd.min.css";
import { Pagination } from "antd";
import Header from "../components/header";
import Footer from "../components/footer";
const Gallery = () => {
  const images = [];
  return (
    <div className="bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header hamburger={false} />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">Gallery</div>
          <div className="text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Gallery</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap pt-16 pb-2 px-10 items-start justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] min-w-full">
        {images.map((index, image) => (
            <img key={index} src={image} className=""/>
        ))}
        <div className="flex flex-row items-end justify-center gap-[8px] min-w-full">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
