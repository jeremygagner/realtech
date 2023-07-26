import { useMemo } from "react";

const Footer = ({
  imageIds,
  smallImageIds,
  mediumImageIds,
  extraSmallImageIds,
  largeImageIds,
  extraLargeImageIds,
  propOverflow,
}) => {
  const footerSectionStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className="self-stretch overflow-hidden flex flex-row p-[50px] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col"
      style={footerSectionStyle}
    >
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
        <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="relative w-11 h-11" alt="" src={imageIds} />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">REIS</div>
              <div className="relative text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className="relative text-5xl leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Call : +123 400 123
            </a>
            <div className="relative leading-[24px] flex items-end w-[312px]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <a className="[text-decoration:none] relative leading-[24px] text-gray-700">
              Email: example@mail.com
            </a>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <a className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="relative w-5 h-[21.67px]"
                alt=""
                src={smallImageIds}
              />
            </a>
            <a className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={mediumImageIds}
              />
            </a>
            <a className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={extraSmallImageIds}
              />
            </a>
            <a className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={largeImageIds}
              />
            </a>
            <a className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={extraLargeImageIds}
              />
            </a>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Home
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Become a Host
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Pricing
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Blog
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Contact
            </a>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              About Us
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Press
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Contact
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Careers
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Blog
            </a>
          </div>
        </div>
        <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Terms of servies
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Privacy Policy
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
