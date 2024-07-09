import CollectionSidebar from "./collectionSidebar";
import WatchItem from "./watchItem";
import img0 from "../assets/watch0.png";
import img1 from "../assets/watch1.png";
import img2 from "../assets/watch2.png";
import img3 from "../assets/watch3.png";
import img4 from "../assets/watch4.png";
import img5 from "../assets/watch5.png";
import img6 from "../assets/watch6.png";
import img7 from "../assets/watch7.png";
import img8 from "../assets/watch8.png";
import img9 from "../assets/watch9.png";
import img10 from "../assets/watch10.png";
import img11 from "../assets/watch11.png";
import FilterUi from "./filter_Ui";

const Hero2 = () => {
  const data = [
    { id: 0, img: img0, name: "Hublot" },
    { id: 1, img: img1, name: "Hublot Chronoscape" },
    { id: 2, img: img2, name: "Hublot Starpath" },
    { id: 3, img: img3, name: "Hublot Techframe" },
    { id: 4, img: img4, name: "Hublot Aerolight" },
    { id: 5, img: img5, name: "Hublot Deepsea" },
    { id: 6, img: img6, name: "Royal Oak Offshore" },
    { id: 7, img: img7, name: "Jules Audemars Tourbillon" },
    { id: 8, img: img8, name: "Code 11.59" },
    { id: 9, img: img9, name: "Millenary" },
    { id: 10, img: img10, name: "Royal Oak Concept" },
    { id: 11, img: img11, name: "Cartier Pasha Cœur" },
  ];

  return (
    <section className="py-8 md:px-20 px-5 flex flex-col gap-7 md:flex-row">
      <div className="hidden lg:block">
        <CollectionSidebar />
      </div>

      <section className="flex-1">
        <div className="flex flex-col gap-8 items-start w-full">
          <h1 className="font-bold text-[#0b0b28] text-2xl md:text-3xl">
            Collection
          </h1>
          <div className="flex text-gray-500 hover:text-[#0b0b28]">
            <button className="py-2 px-2 md:px-4 border-0 border-black hover:border-b-4 text-sm md:text-xl">
              Men's Watches
            </button>
            <button className="py-2 px-2 md:px-4 border-0 border-black hover:border-b-4 text-sm md:text-xl">
              Women's Watches
            </button>
            <button className="py-2 px-2 md:px-4 border-0 border-black hover:border-b-4 text-sm md:text-xl">
              Kid's Watches
            </button>
          </div>
          <div className="w-full lg:hidden">
            <FilterUi />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3 py-8 justify-center">
          {data.map((item) => (
            <WatchItem key={item.id} img={item.img} name={item.name} price />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Hero2;
