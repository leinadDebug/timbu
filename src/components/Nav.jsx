import { MdOutlineShoppingCart } from "react-icons/md";

// const Nav = () => {
//   return (
//     <div className="bg-[#21213E] py-8 px-40 text-white flex items-center justify-between text-[17px] h-[10vh]">
//       <div className="flex gap-8">
//         <h2 className="font-semibold text-[20px] font-MuseoModerno tracking-wide ">
//           Timbu
//         </h2>
//         <label className="opacity-20">|</label>
//         <label className="font-medium">Product</label>
//       </div>
//       <div className="flex gap-5">
//         <label className="opacity-20 text-2xl items-center ">|</label>
//         <div className="flex  items-center ">
//           <MdOutlineShoppingCart size={30} />
//           <sup className="pb-3">4</sup>
//         </div>
//       </div>
//     </div>
//   );
// };


// import React from "react";

// export const Nav = () => {
//   return (
//     <div className="relative w-[1440px] h-[84px] bg-[#21213e]">
//       <div className="inline-flex items-center gap-10 absolute top-[33px] left-20">
//         <div className="relative w-fit [font-family:'MuseoModerno-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
//           Timbu
//         </div>
//         <img className="relative w-px h-[17px] object-cover" alt="Line" src="line-1.svg" />
//         <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
//           <div className="relative w-fit mt-[-1.00px] [font-family:'PP_Neue_Montreal-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
//             Products
//           </div>
//         </div>
//       </div>
//       <div className="inline-flex items-center justify-end gap-6 absolute top-7 left-[1304px]">
//         <img className="relative w-px h-6 object-cover" alt="Line" src="line-3.svg" />
//         <div className="inline-flex items-center gap-[18px] relative flex-[0_0_auto]">
//           <div className="inline-flex items-start relative flex-[0_0_auto]">
//             <div className="relative"><MdOutlineShoppingCart className="text-white size-6"/></div>
//             <div className="relative w-fit mt-[-1.00px] [font-family:'PP_Neue_Montreal-Bold',Helvetica] font-bold text-white text-xs text-right tracking-[0] leading-[normal] whitespace-nowrap">
//               4
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex w-[231px] items-center gap-2.5 pl-0 pr-3 pt-0 pb-3 absolute top-7 left-[1049px] border-b [border-bottom-style:solid] border-[#ffffff30]">
//         <div className="relative w-fit mt-[-1.00px] [font-family:'PP_Neue_Montreal-Book',Helvetica] font-normal text-white text-xs text-right tracking-[0] leading-[normal] whitespace-nowrap">
//           Search
//         </div>
//       </div>
//       <img className="absolute w-[60px] h-0.5 top-14 left-[221px]" alt="Line" src="line-17.svg" />
//     </div>
//   );
// }
// export default Nav;

// import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa"; // Importing hamburger icon

const Navbar = () => {
  return (
    <div className="relative w-full h-[84px] bg-[#21213e]">
      <div className="hidden md:inline-flex items-center gap-10 absolute top-[33px] left-20">
        <div className="relative w-fit font-semibold text-[20px] font-MuseoModerno text-xl md:text-2xl text-white tracking-[0] leading-[normal] whitespace-nowrap">
          Timbu
        </div>
        <img className="relative w-px h-[17px] object-cover" alt="Line" src="line-1.svg" />
        <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'PP_Neue_Montreal-Bold',Helvetica] underline underline-offset-4 font-bold text-white text-sm tracking-[0] leading-[normal]">
            Products
          </div>
        </div>
      </div>

      <div className="hidden md:inline-flex items-center justify-end gap-6 absolute top-7 right-20">
        <img className="relative w-px h-6 object-cover" alt="Line" src="line-3.svg" />
        <div className="inline-flex items-center gap-[18px] relative flex-[0_0_auto]">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="relative"><MdOutlineShoppingCart className="text-white size-6" /></div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'PP_Neue_Montreal-Bold',Helvetica] font-bold text-white text-xs text-right tracking-[0] leading-[normal] whitespace-nowrap">
              4
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-[231px] items-center gap-2.5 pl-0 pr-3 pt-0 pb-3 absolute top-7 right-[320px] border-b [border-bottom-style:solid] border-[#ffffff30]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'PP_Neue_Montreal-Book',Helvetica] font-normal text-white text-xs text-right tracking-[0] leading-[normal] whitespace-nowrap">
          Search
        </div>
      </div>

      <img className="hidden md:block absolute w-[60px] h-0.5 top-14 left-[221px]" alt="Line" src="line-17.svg" />

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between w-full h-full px-4">
        <FaBars className="text-white size-6" />
        <div className="text-white [font-family:'MuseoModerno-Bold',Helvetica] font-bold text-xl">Timbu</div>
        <div className="flex items-center">
          <MdOutlineShoppingCart className="text-white size-6" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'PP_Neue_Montreal-Bold',Helvetica] font-bold text-white text-xs text-right tracking-[0] leading-[normal] whitespace-nowrap">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
