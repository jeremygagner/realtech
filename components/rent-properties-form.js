import PropertyRentCard from "./property-rent-card";

const RentPropertiesForm = () => {
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto sm:w-auto sm:[align-self:unset] sm:items-center sm:justify-center">
          <div className="relative leading-[48px] font-semibold flex items-end justify-center w-[482px] lg:self-stretch lg:w-auto md:self-stretch md:w-auto sm:text-center sm:self-stretch sm:w-auto">
            Latest Properties for Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray lg:self-stretch lg:w-auto md:self-stretch md:w-auto sm:self-stretch sm:w-auto">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
          <PropertyRentCard />
          <PropertyRentCard propBackgroundImage={`url("/card-21@3x.png")`} />
          <PropertyRentCard propBackgroundImage={`url("/card-31@3x.png")`} />
          <PropertyRentCard propBackgroundImage={`url("/card-41@3x.png")`} />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-steelblue sm:max-w-full">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesForm;
