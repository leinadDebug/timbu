import React, { useState } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

function WatchItem({ img, price, name }) {
  const [open, setOpen] = useState(false);

  const HandleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div
      onMouseEnter={HandleClick}
      onMouseLeave={HandleClick}
      className="pb-[16px] md:px-[16px] text-center space-y-2  border rounded-sm w-fit"
    >
      <div className="flex justify-center max-w-[299px] max-h-[392px] w-[134px] h-[201px]">
        <img className="lg:max-w-[364px] lg:max-h-[553.09px] py-14" src={img} />
      </div>
      <div className="text-center flex flex-col items-center gap-[9px] w-full flex-[0_0_auto]">
        <button
          className={` ${
            open ? "flex" : "hidden"
          } px-4 py-2 justify-evenly w-full items-center text-center`}
        >
          <MdOutlineShoppingCart size={20} />
          Add to Cart
        </button>
      </div>

      <label
        className={`${
          open ? "hidden" : "block"
        } font-medium text-[#0b0b28b8] text-sm text-center tracking-[0] leading-[normal]`}
      >
        {name}
      </label>
      <h3 className="font-extrabold text-[#0b0b28] text-xl text-center tracking-[0] leading-[normal]">
        $12,000
      </h3>
      <div
        className={`${
          open ? "hidden" : "flex"
        } gap-1 w-full items-center justify-center mt-[-1.00px]  font-medium text-[#0b0b28b8] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap`}
      >
        <IoMdStarOutline className="" color="gold" />
        <label>4.9</label>
      </div>
    </div>
  );
}

export default WatchItem;
