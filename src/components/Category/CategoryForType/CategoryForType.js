import React from "react";
import CategoryCards from "./CategoryElement/CategoryCards";
import { DownCate, arrowBottomRight, search } from "../../../assets/imgs";
import CategoryForBrand from "./CategoryForBrand/CategoryForBrand";

export default function CategoryForType() {
  return (
    <div className="w-full h-full border border-red-500 flex flex-gap-6 justify-between my-10">
      <div className="w-[20%] h-full ">
        <CategoryForBrand />
      </div>
      <div className="w-[78%] h-[full] border border-green-600">
        <CategoryCards />
      </div>
    </div>
  );
}
