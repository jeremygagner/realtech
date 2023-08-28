import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const agents = () => {
  return (
    <div className="bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header hamburger={false} />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">Agents</div>
          <div className="text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Agents</span>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-col pb-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-body-regular-600">
        <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
          <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ut purus quis nunc pulvinar mollis iaculis vel erat.
              Ut luctus, dui ut rhoncus eleifend, justo nulla pharetra tellus,
              quis imperdiet urna nisi et purus. Aenean venenatis, dui eget
              mattis mattis, mauris diam efficitur arcu, sit amet pretium sem
              quam vel tortor. Aliquam erat volutpat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Donec at rutrum nisl. Mauris
              tellus urna, placerat vel mauris quis, faucibus ultricies lorem.
              Pellentesque mollis augue sed facilisis ultricies. Maecenas
              pretium suscipit egestas. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Nulla tincidunt
              scelerisque enim non feugiat. Phasellus risus augue, dapibus quis
              dignissim scelerisque, luctus ut magna.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default agents;
