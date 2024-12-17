import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#f1f1f1] text-gray-700 px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-gray-300 border-t-2 border-solid  pt-8 ">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <img className="pb-4" src="./Logo.png" alt="Logo" />
          <p className="py-2 text-sm text-[#8D8D8D]">
            <span className="inline-block filter grayscale">📞</span> (012)
            8967453
          </p>
          <p className="py-2 text-sm text-[#8D8D8D]">
            <span className="inline-block filter grayscale">✉️</span>
            woodies@gmail.com
          </p>
          <p className="py-2 text-sm text-[#8D8D8D]">
            <span className="inline-block filter grayscale">📍</span> Jakarta,
            Indonesia
          </p>
        </div>

        <div className="absolute w-[500px] right-0 bottom-0">
          <img src="/Footer.png" alt="Decor" />
        </div>
      </div>
      <div className="text-center text-sm mt-8">© 2020 WOODIES</div>
    </footer>
  );
};

export default Footer;
