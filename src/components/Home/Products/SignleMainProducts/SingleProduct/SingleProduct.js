import React from "react";
import { useParams } from "react-router-dom";
import { ProductCarousel } from "./Product_Carousel/ProductCarousel";
import { ProductDetails } from "./Product_Detail/ProductDetails";
import { SingleProductTop } from "../SingleProductTop/SingleProductTop";

const SingleProduct = () => {
  const { id } = useParams();
  const Newid = id?.replace(":", " ");
  return (
    <div className="flex flex-col  m-0 p-0 box-border">
      <div>
        <SingleProductTop />
      </div>
      <div className="max-w-[1280px] w-[100%] flex justify-start items-center m-auto  border-box ">
        <div className="w-[100%] h-fit mt-6 flex justify-between">
          <div className="w-1/2 h-full">
            <ProductCarousel />
          </div>
          <div className="w-1/2 h-full ">
            <ProductDetails />
          </div>
        </div>
      </div>
    </div>
  );
};
export { SingleProduct };
