// import Img from "../assets/watch_png.png";
// import HeroBottom from "./HeroBottom";

// const Hero = () => {
//   return (
//     <main className=" lg:h-[90vh] diagonal-stripes bg-[#0B0B28] text-white lg:flex gap-7 overflow-hidden px-40 relative">
//       <div className="lg:mt-20 py-10 font-ClashDisplay flex flex-col gap-3 lg:max-w-[52%] h-fit">
//         <h3 className="text-6xl font-medium leading-tight">
//           Explore Our <span className="font-extrabold">Luxury Watch</span>{" "}
//           Collection.
//         </h3>
//         <p className="max-w-[70%]">
//           Our luxury watches are more than just timepieces, they are statements
//           of sophistication and discerning taste, crafted to your personal
//           satisfaction --
//         </p>
//       </div>
//       <div className="lg:absolute lg:right-5 px-20 opacity-75">
//         <img className="w-[720px] -mt-28 " src={Img} />
//       </div>
//       <HeroBottom/>
//     </main>
//   );
// };

// export default Hero;

import Img from "../assets/watch_png.png";
import HeroBottom from "./HeroBottom";

const Hero = () => {
  return (
    <>
    <main className="lg:h-[90vh] diagonal-stripes bg-[#0B0B28] text-white lg:flex gap-7 overflow-hidden relative">
      <div className="lg:mt-20 py-10 font-ClashDisplay flex flex-col gap-3 lg:max-w-[52%] h-fit px-8 lg:px-40">
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-tight">
          Explore Our <span className="font-extrabold">Luxury Watch</span>{" "}
          Collection.
        </h3>
        <p className="max-w-full md:max-w-[70%]">
          Our luxury watches are more than just timepieces, they are statements
          of sophistication and discerning taste, crafted to your personal
          satisfaction --
        </p>
      </div>
      <div className="lg:absolute lg:right-5 px-0 lg:px-20 opacity-75 flex justify-center">
        <img className="w-[80%] md:w-[500px] lg:w-[720px] -mt-10 lg:-mt-28 h-1/2 bg-gradient-to-t from-inherit via-transparent to-transparent opacity-75 " src={Img} />
      </div>
      <HeroBottom/>
    </main>
      </>
  );
};

export default Hero;

