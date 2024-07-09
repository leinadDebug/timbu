import React from "react";
import { MdOutlineSort } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdSettingsInputComponent } from "react-icons/md";

function FilterUi() {
  return (
    <div className="flex gap-8 justify-between relative">
      <div className="flex items-center gap-1 relative flex-1 grow align-middle">
        <MdOutlineSort className="size-6" />
        <div className="relative w-fit [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[#0b0b28b8] text-sm tracking-[0] leading-[normal]">
          Default Sorting
        </div>
        <MdKeyboardArrowDown />
      </div>
      <div className="inline-flex flex-col items-start gap-2.5 px-3 py-2 relative flex-[0_0_auto] bg-white border border-solid border-[#f2f2f9]">
        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <MdSettingsInputComponent />
            <div className="relative w-fit [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[#0b0b28b8] text-sm tracking-[0] leading-[normal]">
              Filter
            </div>
          </div>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}

export default FilterUi;
