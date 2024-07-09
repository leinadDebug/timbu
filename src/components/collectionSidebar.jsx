import { MdOutlineCancel } from "react-icons/md";

const CollectionSidebar = () => {
  return (
    <aside className="sticky top-0 h-fit rounded  bg-background p-4 md:w-[260px] ">
      <div className="border p-2 rounded">
        <legend className="text-sm font-semibold leading-6 text-gray-900 ">
          FILTER BY BRAND
        </legend>
        <div className="mt-6 space-y-3">
          <div className="relative flex  justify-between">
            <div className="flex gap-x-3 h-6 items-center">
              <input type="checkbox" className="accent-black h-4 w-4" />
              <div className="flex items-center gap-2 text-sm leading-6">
                <label className="font-medium text-gray-900">All</label>
                <MdOutlineCancel size={18} />
              </div>
            </div>
          </div>

          <div className="relative flex  justify-between">
            <div className="flex gap-x-3 h-6 items-center">
              <input type="checkbox" className="accent-black h-4 w-4" />
              <div className="flex items-center gap-2 text-sm leading-6">
                <label className="font-medium text-gray-900">Hublot</label>
              </div>
            </div>
            <h3 className="right-0">234</h3>
          </div>
          <div className="relative flex  justify-between">
            <div className="flex gap-x-3 h-6 items-center">
              <input type="checkbox" className="accent-black h-4 w-4" />
              <div className="flex items-center gap-2 text-sm leading-6">
                <label className="font-medium text-gray-900">
                  Audemars Piguet
                </label>
              </div>
            </div>
            <h3 className="right-0">234</h3>
          </div>
          <div className="relative flex  justify-between">
            <div className="flex gap-x-3 h-6 items-center">
              <input type="checkbox" className="accent-black h-4 w-4" />
              <div className="flex items-center gap-2 text-sm leading-6">
                <label className="font-medium text-gray-900">Cartier</label>
              </div>
            </div>
            <h3 className="right-0">234</h3>
          </div>
          <div className="relative flex  justify-between">
            <div className="flex gap-x-3 h-6 items-center">
              <input type="checkbox" className="accent-black h-4 w-4" />
              <div className="flex items-center gap-2 text-sm leading-6">
                <label className="font-medium text-gray-900">Casio</label>
              </div>
            </div>
            <h3 className="right-0">234</h3>
          </div>
        </div>
        </div>
        <div className="mt-4 border p-2 rounded">
          <legend className="text-sm font-semibold leading-6 text-gray-900 ">
            FILTER BY BRAND
          </legend>
          <div className="mt-6 space-y-3">
            <div className="relative flex  justify-between">
              <div className="flex gap-x-3 h-6 items-center">
                <input type="checkbox" className="accent-black h-4 w-4" />
                <div className="flex items-center gap-2 text-sm leading-6">
                  <label className="font-medium text-gray-900">All</label>
                  <MdOutlineCancel size={18} />
                </div>
              </div>
            </div>

            <div className="relative flex justify-between">
              <div className="flex gap-x-3 h-6 items-center">
                <input type="checkbox" className="accent-black h-4 w-4" />
                <div className="flex items-center gap-2 text-sm leading-6">
                  <label className="font-medium text-gray-900">Hublot</label>
                </div>
              </div>
              <h3 className="right-0">234</h3>
            </div>
            <div className="relative flex  justify-between">
              <div className="flex gap-x-3 h-6 items-center">
                <input type="checkbox" className="accent-black h-4 w-4" />
                <div className="flex items-center gap-2 text-sm leading-6">
                  <label className="font-medium text-gray-900">
                    Audemars Piguet
                  </label>
                </div>
              </div>
              <h3 className="right-0">234</h3>
            </div>
            <div className="relative flex  justify-between">
              <div className="flex gap-x-3 h-6 items-center">
                <input type="checkbox" className="accent-black h-4 w-4" />
                <div className="flex items-center gap-2 text-sm leading-6">
                  <label className="font-medium text-gray-900">Cartier</label>
                </div>
              </div>
              <h3 className="right-0">234</h3>
            </div>
            <div className="relative flex  justify-between">
              <div className="flex gap-x-3 h-6 items-center">
                <input type="checkbox" className="accent-black h-4 w-4" />
                <div className="flex items-center gap-2 text-sm leading-6">
                  <label className="font-medium text-gray-900">Casio</label>
                </div>
              </div>
              <h3 className="right-0">234</h3>
            </div>
          </div>
        </div>
    </aside>
  );
};
export default CollectionSidebar;
