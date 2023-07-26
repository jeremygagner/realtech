import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";

const PropertiesGridView = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header hamburger={false} />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold">
            Properties
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-16 px-0 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector.svg"
                />
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
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector.svg"
                />
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
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {[
                    { value: "Popular properties" },
                    { value: "Latest properties" },
                    { value: "Recommended properties" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
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
        <PropertiesGridContainer />
        <div className="flex flex-row items-end justify-center gap-[8px]">
          <button className="cursor-pointer [border:none] p-2.5 bg-primary-50 rounded flex flex-row items-start justify-start">
            <img className="relative w-6 h-6" alt="" src="/arrowleft.svg" />
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-500 rounded-10xs flex flex-col items-start justify-start hover:bg-steelblue">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-gray-white text-center flex items-end justify-center w-[26px]">
              1
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              2
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              3
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              ...
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              54
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-2.5 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-steelblue">
            <img className="relative w-6 h-6" alt="" src="/arrowright.svg" />
          </button>
        </div>
      </div>
      <Footer
        imageIds="/houseline1.svg"
        smallImageIds="/social-media-logo.svg"
        mediumImageIds="/social-media-logo1.svg"
        extraSmallImageIds="/social-media-logo2.svg"
        largeImageIds="/social-media-logo3.svg"
        extraLargeImageIds="/social-media-logo4.svg"
      />
    </div>
  );
};

export default PropertiesGridView;
