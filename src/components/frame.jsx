import React from "react";
import img from "../assets/watch2_png.png";
import mobileWatch from '../assets/mobileWatch.png'

export const Frame = () => {
  return (
    // <div className="bg-[#0b0b28] overflow-hidden w-full h-[461px]">
    //   <div className="relative h-[616px]">
    //     <img
    //       className="absolute top-0 left-0 w-[1440px] h-[461px]"
    //       alt="Vector"
    //       src="vector.svg"
    //     />
    //     <div className="w-[1146px] h-[575px]">
    //       <img
    //         className="absolute w-[981px] h-[575px] top-14 right-0 opacity-35"
    //         alt="Image"
    //         src={img}
    //       />
    //     </div>

    //     <div className="flex flex-col w-[616px] items-start gap-8 absolute top-[118px] left-20">
    //       <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
    //         <p className="relative self-stretch mt-[-1.00px] [font-family:'Frank_Ruhl_Libre-Regular',Helvetica] font-normal text-white text-[56px] tracking-[0] leading-[74px]">
    //           Elevate Your Collection. Explore Watches.
    //         </p>
    //       </div>
    //       <div className="inline-flex items-center justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-white">
    //         <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway-Medium',Helvetica] font-medium text-[#0b0b28] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
    //           Shop Now
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#0b0b28] overflow-hidden w-full h-auto md:h-[461px]">
      {/* Desktop View */}
      <div className="relative hidden md:block h-[616px]">
        <img
          className="absolute top-0 left-0 w-[1440px] h-[461px]"
          alt="Vector"
          src="vector.svg"
        />
        <div className="w-[1146px] h-[575px]">
          <img
            className="absolute w-[981px] h-[575px] top-14 right-0 opacity-35"
            alt="Image"
            src={img}
          />
        </div>
        <div className="flex flex-col w-[616px] items-start gap-8 absolute top-[118px] left-20">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Frank_Ruhl_Libre-Regular',Helvetica] font-normal text-white text-[56px] tracking-[0] leading-[74px]">
              Elevate Your Collection. Explore Watches.
            </p>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-white">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway-Medium',Helvetica] font-medium text-[#0b0b28] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
              Shop Now
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="relative block md:hidden w-[390px] h-[350px] mx-auto">
        <div className="relative w-[601px] h-[461px] left-[-151px]">
          <img
            className="absolute top-0 left-[151px] w-[390px] h-[350px]"
            alt="Vector"
            src="vector.svg"
          />
          <div className="absolute w-[601px] h-[302px] top-[159px] left-0">
            <img
              className="absolute w-[390px] h-[191px] top-0 left-[151px]"
              alt="Mask group"
              src={mobileWatch}
            />
          </div>
          <div className="flex flex-col w-[358px] items-start gap-8 absolute top-[58px] left-[167px]">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Frank_Ruhl_Libre-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
                Elevate Your Collection. Explore Watches.
              </p>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-white">
              <div className="relative w-fit mt-[-1.00px] [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[#0b0b28] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                Shop Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
