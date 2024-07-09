// import { IoSettingsOutline } from "react-icons/io5";
// import { LuClock3 } from "react-icons/lu";
// import { MdOutlineWatch } from "react-icons/md";

// const HeroBottom = () => {
//   return (
//     <div className="lg:flex gap-4 items-center px-16 py-8 rounded text-white bg-[#FFFFFF] bg-opacity-10 absolute bottom-0 lg:w-[80vw] ">
//       <div className="flex gap-2 items-center">
//         <IoSettingsOutline />
//         <label>Precision Engineering</label>
//       </div>
//       <div className="flex gap-2 items-center">
//         <LuClock3 />
//         <label>Timeless Design</label>
//       </div>
//       <div className="flex gap-2 items-center">
//         <MdOutlineWatch />
//         <label>Swiss-Made Excellence</label>
//       </div>
//     </div>
//   );
// };

// export default HeroBottom

import { IoSettingsOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineWatch } from "react-icons/md";

const HeroBottom = () => {
  return (
    // <div className="flex flex-col lg:flex-row gap-4 items-center px-8 lg:px-16 py-8 rounded text-white bg-[#FFFFFF] bg-opacity-10 absolute bottom-0 w-full lg:w-[80vw]">
    //   <div className="flex gap-2 items-center mb-4 lg:mb-0">
    //     <IoSettingsOutline className="text-xl lg:text-2xl" />
    //     <label className="text-sm lg:text-base">Precision Engineering</label>
    //   </div>
    //   <div className="flex gap-2 items-center mb-4 lg:mb-0">
    //     <LuClock3 className="text-xl lg:text-2xl" />
    //     <label className="text-sm lg:text-base">Timeless Design</label>
    //   </div>
    //   <div className="flex gap-2 items-center">
    //     <MdOutlineWatch className="text-xl lg:text-2xl" />
    //     <label className="text-sm lg:text-base">Swiss-Made Excellence</label>
    //   </div>
    // </div>
    <div className="w-full md:w-[80vw] bg-[#ffffff14] border-b border-[#ffffff14] bg-opacity-10 flex flex-col lg:flex-row lg:px-16 absolute bottom-0 lg:mx-40">
      <div className="flex flex-col lg:flex-row items-center gap-8 px-5 lg:px-10 py-4 lg:py-8">
        <div className="flex items-center gap-1">
          <IoSettingsOutline className="text-xl lg:text-2xl" />
          <div className="text-sm lg:text-base font-medium text-[#ffffffcc] whitespace-nowrap">
            Precision Engineering
          </div>
        </div>
        <div className="flex items-center gap-1">
          <LuClock3 className="text-xl lg:text-2xl" />
          <div className="text-sm lg:text-base font-medium text-[#ffffffcc] whitespace-nowrap">
            Timeless Design
          </div>
        </div>
        <div className="flex items-center gap-1">
          <MdOutlineWatch className="text-xl lg:text-2xl" />
          <div className="text-sm lg:text-base font-medium text-[#ffffffcc] whitespace-nowrap">
            Swiss-Made Excellence
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
