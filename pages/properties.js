import React from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Pagination } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";
import { createClient } from "@supabase/supabase-js";

const defaultOrder = [
  {
    key: "1",
    label: <a onClick={(e) => e.preventDefault}>Popular Properties</a>,
  },
  {
    key: "2",
    label: <a onClick={(e) => e.preventDefault}>Latest Properties</a>,
  },
  {
    key: "3",
    label: <a onClick={(e) => e.preventDefault}>Recommended Properties</a>,
  },
];

const PropertiesGridView = () => {
  const client = createClient(
    process.env.NEXT_PUBLIC_URL,
    process.env.NEXT_PUBLIC_KEY
  );
  const [properties, setProperties] = React.useState([]);
  React.useEffect(() => {
    const fetchProperties = async () => {
      const result = await client.from("Properties").select("*");
      setProperties(result.data);
    };
    fetchProperties();
  }, []);
  return (
    <div className="bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header hamburger={false} />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">Properties</div>
          <div className="text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-16 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px]">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row flex-wrap items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6">
                <img
                  className="absolute h-[6.25%] w-[56.25%] top-[21.88%] right-[12.5%] bottom-[71.88%] left-[31.25%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />
                <img
                  className="absolute h-[6.25%] w-[56.25%] top-[46.88%] right-[12.5%] bottom-[46.88%] left-[31.25%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />
                <img
                  className="absolute h-[6.25%] w-[56.25%] top-[71.88%] right-[12.5%] bottom-[21.88%] left-[31.25%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />
                <img
                  className="absolute h-[9.38%] w-[9.38%] top-[20.31%] right-[78.13%] bottom-[70.31%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector2.svg"
                />
                <img
                  className="absolute h-[9.38%] w-[9.38%] top-[45.31%] right-[78.13%] bottom-[45.31%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector2.svg"
                />
                <img
                  className="absolute h-[9.38%] w-[9.38%] top-[70.31%] right-[78.13%] bottom-[20.31%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector2.svg"
                />
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6">
                <img
                  className="absolute h-[31.25%] w-[31.25%] top-[15.63%] right-[53.13%] bottom-[53.13%] left-[15.63%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector3.svg"
                />
                <img
                  className="absolute h-[31.25%] w-[31.25%] top-[15.63%] right-[15.63%] bottom-[53.13%] left-[53.13%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector3.svg"
                />
                <img
                  className="absolute h-[31.25%] w-[31.25%] top-[53.13%] right-[53.13%] bottom-[15.63%] left-[15.63%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector3.svg"
                />
                <img
                  className="absolute h-[31.25%] w-[31.25%] top-[53.13%] right-[15.63%] bottom-[15.63%] left-[53.13%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector3.svg"
                />
              </button>
            </div>
            <div className="leading-[24px]">Sort by:</div>
            <Dropdown
              menu={{ items: defaultOrder }}
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <PropertiesGridContainer allProperties={properties} />
        <div className="flex flex-row items-end justify-center gap-[8px]">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertiesGridView;
