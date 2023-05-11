import React, { useState } from "react";
import { DownCate, search } from "../../../../assets/imgs";

export default function CategoryForBrand() {
  const [state, setState] = useState({
    brandShow: true,
  });

  console.log(state?.brandShow);
  return (
    <div className="w-full h-hull border border-green-500 rounded-lg px-5 py-[30px]">
      <div className="w-full border border-red-500 flex flex-wrap gap-x-[4px] gap-y-[8px]">
        <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white rounded-lg">
          Men
        </button>
        <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white rounded-lg">
          Women
        </button>
        <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white rounded-lg">
          Kids
        </button>
        <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white rounded-lg">
          Sale
        </button>
      </div>
      {/* Brands filter */}
      <div className="w-full h-fit border border-red-500 mt-[40px]">
        {/* Controls */}
        <div className="w-full flex justify-between items-center border border-red-500">
          <div
            onClick={() => setState({ ...state, brandShow: !state.brandShow })}
            className="flex items-center cursor-pointer select-none"
          >
            <span className="not-italic mr-1 font-AeonikProMedium text-lg leading-4 text-black">
              Brands
            </span>
            <img
              src={DownCate}
              className={`${
                state?.brandShow ? "rotate-[180deg]" : ""
              } duration-200`}
              alt=""
            />
          </div>
          <span className="not-italic font-AeonikProMedium text-base leading-4 text-fullBlue cursor-pointer">
            Clear
          </span>
        </div>
        <div className="border border-green-600 mt-5">
          {/* Search */}
          <div className="h-[44px] w-full flex items-center justify-between px-4 border border-searchBgColor rounded-lg ">
            <input
              className="w-[85%] h-full "
              type="text"
              name="search"
              placeholder="Search for brand"
            />
            <img src={search} className="" />
          </div>
          {/* Field */}
          <div className="h-[300px] w-full border border-blue-600 mt-5">
            <div className="flex items-center cursor-pointer">
              <div className="w-[22px] h-[22px] hover:bg-red-500 mr-[10px] rounded-lg border border-searchBgColor">
                {/* <input type="checkbox" className="border border-red-500" /> */}
              </div>
              <p className="not-italic mr-2 font-AeonikProRegular text-lg leading-4 text-black">
                Reebok
              </p>
              <p className="not-italic font-AeonikProRegular text-base leading-4 text-setTexOpacity">
                (142)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
