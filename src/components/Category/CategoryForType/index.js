import React from "react";
import CategoryForType from "./CategoryForType";

export default function CategoryMainType() {
  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <div className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto">
        <div className="w-[100%] h-fit">
          <CategoryForType />
        </div>
      </div>
    </div>
  );
}
