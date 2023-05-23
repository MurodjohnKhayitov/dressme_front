import React from "react";

const ProductCarousel = () => {
  return (
    <div className="w-full h-full border">
      <div className="w-fit h-[600px] flex gap-x-[10px] border border-searchBgColor">
        <div className="w-[90px] h-full flex flex-col gap-y-[10px]  border border-searchBgColor">
          <div className="w-[90px] h-[120px] border border-searchBgColor bg-btnBgColor rounded-lg"></div>
          <div className="w-[90px] h-[120px] border border-searchBgColor bg-btnBgColor rounded-lg"></div>
        </div>
        <div className="w-[440px] h-full bg-btnBgColor  border border-searchBgColor rounded-lg"></div>
      </div>
    </div>
  );
};
export { ProductCarousel };
