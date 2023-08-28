const Footer = () => {
  return (
    <div
      className="overflow-hidden flex flex-row p-[50px] items-start justify-between md:w-auto md:flex-row sm:flex-col"
    >
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px]">
        <div className="w-[312px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600 pr-[20px]">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="w-11 h-11" alt="" src={"/houseline.svg"} />
            <div className="flex flex-col items-start justify-start">
              <div className="leading-[24px] font-semibold">REIS</div>
              <div className="text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className="text-5xl leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <a href="https://google.com" className="[text-decoration:none] leading-[24px] text-[inherit]">
              Call:&nbsp;+123 456 7890
            </a>
            <a href="https://google.com" className="[text-decoration:none] leading-[24px] text-[inherit]">
              Email:&nbsp;realtech@mail.com
            </a>
            <div className="leading-[24px] flex items-end">
              Or reach us on our social media pages.
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <a href="https://google.com" className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-[21.67px]"
                alt=""
                src="/social-media-logo.svg"
              />
            </a>
            <a href="https://google.com" className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo1.svg"
              />
            </a>
            <a href="https://google.com" className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo2.svg"
              />
            </a>
            <a href="https://google.com" className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo3.svg"
              />
            </a>
            <a href="https://google.com" className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="social-media-logo4.svg"
              />
            </a>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
          <div className="leading-[32px] font-semibold">Features</div>
          <div className="h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a href="/" className="[text-decoration:none] leading-[24px] text-[inherit]">
              Home
            </a>
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Become a Host
            </a>
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Pricing
            </a>
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Blog
            </a>
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Contact
            </a>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Company</div>
          <div className="h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              About Us
            </a>
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Press
            </a>
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Contact
            </a>
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Careers
            </a>
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Blog
            </a>
          </div>
        </div>
        <div className="w-[203px] flex flex-col items-start justify-start gap-[32px]">
          <div className=" leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Terms of servies
            </a>
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Privacy Policy
            </a>
            <a className="[text-decoration:none] leading-[24px] text-[inherit]">
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
