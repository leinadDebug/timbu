import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-start gap-6 md:gap-[51px] pt-16 md:pt-20 px-6 md:px-20 py-3 md:py-16 bg-[#0b0b28]">
      <div className="relative self-stretch mt-[-1.00px] font-bold text-white text-xl tracking-[0] leading-[normal]">
        Timbu
      </div>
      <div className="flex flex-col md:flex-row items-start lg:items-center justify-between w-full border-t md:pt-5 space-y-5">
        <div className="flex md:flex-row items-center md:order-2 gap-3 mt-4 md:mt-0">
          <FaFacebookF className="w-4 h-4 md:w-6 md:h-6" color="white" />
          <FaInstagram className="w-4 h-4 md:w-6 md:h-6" color="white" />
          <FaTwitter className="w-4 h-4 md:w-6 md:h-6" color="white" />
          <FaLinkedin className="w-4 h-4 md:w-6 md:h-6" color="white" />
        </div>
        <p className="font-normal text-[#ffffffb8] text-xs md:text-sm leading-[21px] whitespace-nowrap md:order-1">
          Timbu 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
