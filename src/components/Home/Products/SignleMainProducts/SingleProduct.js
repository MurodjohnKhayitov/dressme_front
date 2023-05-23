import React from "react";
import { useParams } from "react-router-dom";
import { SingleProductTop } from "./SingleProductTop";

const SingleProduct = () => {
  const { id } = useParams();
  const Newid = id?.replace(":", " ");
  return (
    <div className="flex flex-col  m-0 p-0 box-border border border-green-600">
      <div>
        <SingleProductTop />
      </div>
      <div className="max-w-[1280px] w-[100%] flex justify-start items-center m-auto  border-box border border-green-600">
        <div className="w-[100%] h-[100vh] border border-black flex justify-between">
          <div className="w-1/2 h-full border border-red-500">
            <div className="w-fit h-[600px] flex gap-x-[10px] border border-blue-600">
              <div className="w-[90px] h-full flex flex-col gap-y-[10px]  border border-black">
                <div className="w-[90px] h-[120px] border border-searchBgColor bg-btnBgColor rounded-lg"></div>
                <div className="w-[90px] h-[120px] border border-searchBgColor bg-btnBgColor rounded-lg"></div>
              </div>
              <div className="w-[440px] h-full bg-btnBgColor  border border-searchBgColor rounded-lg"></div>
            </div>
          </div>
          <div className="w-1/2 h-full border border-red-500"></div>
        </div>
      </div>
    </div>
  );
};
export { SingleProduct };
