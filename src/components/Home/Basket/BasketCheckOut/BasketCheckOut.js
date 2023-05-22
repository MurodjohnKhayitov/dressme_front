import React, { useState } from "react";
import { BasketCheckOutTop } from "./BasketCheckOutTop";
import { bucket, formArrowRightCircle } from "../../../../assets/imgs";
import { NavLink } from "react-router-dom";

import { discount, video, delivery, heart, shirt, addBag, cardImg, star, setpersonIcons, InputCheck, ticketDiscount, PrevCate, NextCate } from "../../../../assets/imgs";

export default function BasketCheckOut() {
  
  const bucket_products = [
    {
      id:1, 
      title: 'Спортивная мужская кроссовка Nike RUN',
      img:"",
      store_dealer:'Nike Store Official Dealer',
      size:'3XL',
      color:'bg-zinc-400',
      color_text:"Серый",
      old_prize: "372 000",
      new_prize: "258 000",
    },
    {
      id:2, 
      title: 'Спортивная мужская кроссовка Adidas RUN',
      img:"",
      store_dealer:'Adidas Store Official Dealer',
      size:'3XL',
      color:'bg-sky-700',
      color_text:"Синий океан",
      old_prize: "372 000",
      new_prize: "258 000"
    },
  ]

  const [productList, setProductList] = useState([
    {
      id: 1,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg: "",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 2,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg: "",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 3,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg: "",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 4,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfh16dd40v9uauhi42hg/t_product_540_high.jpg#1677855222081",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 5,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 6,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cf557s8l08k0o9qi31gg/t_product_540_high.jpg#1677855329602",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 7,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 8,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cf2h9jqvtie1lhbgt6mg/t_product_540_high.jpg#1677855329588",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 9,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cf53ng0v1htd23al4sqg/t_product_540_high.jpg#1677855423341",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "15.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 10,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cf5vfb2vtie1lhbh7h50/t_product_540_high.jpg#1677855423352",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
  ]);
 
  const [state, setState] = useState({
    clothesCount: 1,
  });
  let array = [1, 2, 3, 4];
  const handleDecrement = () => {
    if (state?.clothesCount > 0) {
      setState({
        ...state,
        clothesCount: state.clothesCount - 1,
      });
    }
  };
  return (
    <div className="flex flex-col  m-0 p-0 box-border">
      <div>
        <BasketCheckOutTop />
      </div>
      <div className="w-full h-[84px] border-b border-searchBgColor">
        <div className="max-w-[1280px] w-[100%] h-full flex items-center border-x border-searchBgColor justify-between items-center m-auto   ">
          <div className="w-[68%] h-full px-8 border-r border-searchBgColor flex  items-center justify-between">
            <div className="w-fit  flex  items-center">
              <p className="flex not-italic font-AeonikProMedium text-2xl leading-7 text-black tracking-[1%]">
                Корзина{" "}
                <span className="w-6 h-6 ml-2 pt-1 rounded-full flex items-center justify-center bg-red-500 not-italic font-AeonikProMedium text-base leading-4 text-center text-white">
                  {bucket_products.length}
                </span>
              </p>
            </div>
            <div className="w-fit h-full flex  items-center">
              <div>
                <p className="flex">
                  <img src={bucket} alt="" />
                  <span className="not-italic ml-2 mt-1 font-AeonikProMedium text-base text-textOpacity leading-4 tracking-[1%]">
                    {" "}
                    Удалить
                  </span>
                </p>
              </div>
              <div className="ml-8 flex items-center">
                <p className="flex">
                  <span className="not-italic mt-1 font-AeonikProMedium text-base leading-4 text-right text-black">
                    {" "}
                    Выбрать все
                  </span>
                </p>
                <p
                  className={`w-[32px] h-[32px] p-1 flex items-center   rounded-lg ml-3 border border-borderColorCard`}
                ></p>
              </div>
            </div>
          </div>
          <div className="w-[32%] h-full px-8  flex  items-center justify-between">
            <p className="not-italic mt-1 font-AeonikProMedium text-2xl leading-7 text-black tracking-[1%]">
              Итого
            </p>
            <p className="not-italic mt-1 font-AeonikProMedium text-2xl leading-7 text-black tracking-[1%]">
              527 000 сум
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] w-[100%] h-fit flex justify-between m-auto mb-[120px]">
        <div className="w-[68%] h-full border-t-0 border border-searchBgColor rounded-b-lg  flex flex-col  ">
          {bucket_products.map((data) => {
            return (
              <div key={data.id} className="w-full pl-5 pr-8 flex flex-col justify-center">
                <div className="w-full h-[180px] my-5 flex items-center justify-between">
                  <div className=" flex items-center h-full">
                    <div className="w-[132px] h-full rounded-lg bg-btnBgColor border border-searchBgColor">
                      <img src="#" alt="" />
                    </div>
                    <div className=" ml-5 w-[325px] py-2 h-full flex flex-wrap content-between">
                      <div className="w-full ">
                        <span className="not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                          {data.title}
                        </span>
                      </div>
                      <div className="w-full">
                        <div className="flex items-center">
                          <span>
                            <img src={bucket} alt="" />
                          </span>
                          <span className="not-italic mt-1 ml-1 font-AeonikProRegular text-base leading-4 text-black  tracking-[1%]">
                            <span className="not-italic ml-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                              Магазин:
                            </span>{" "}
                            {data.store_dealer}
                          </span>
                        </div>
                        <div className="flex items-center mt-4">
                          <div className="cursor-pointer h-fit p-[2px] flex items-center rounded-lg border border-searchBgColor">
                            <p className={`w-8 h-8 border border-searchBgColor rounded-lg bg-setTexOpacity ${data.color}`}></p>
                            <p className="not-italic pl-[10px] pr-[15px] mt-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                              {data.color_text}
                            </p>
                          </div>
                          <div className=" h-[36px]  cursor-pointer ml-3 px-4 flex items-center rounded-lg border border-searchBgColor">
                            <p className="not-italic  mt-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                              {data.size}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className=" flex items-center h-full">
                    <div className="w-[170px]  py-2  flex flex-wrap content-between   h-full">
                      <div className="h-12 w-[120px] flex items-center justify-around rounded-lg border border-searchBgColor">
                        <button
                          onClick={handleDecrement}
                          className="w-1/3 not-italic font-AeonikProMedium mt-1 text-lg cursor-pointer leading-4 text-center text-black"
                        >
                          -
                        </button>
                        <button className="w-1/3 not-italic font-AeonikProMedium mt-1 text-lg  leading-4 text-center text-black">
                          {state?.clothesCount}
                        </button>
                        <button
                          onClick={() =>
                            setState({
                              ...state,
                              clothesCount: state.clothesCount + 1,
                            })
                          }
                          className="w-1/3 not-italic font-AeonikProMedium mt-1 text-lg cursor-pointer leading-4 text-center text-black"
                        >
                          +
                        </button>
                      </div>
                      <div className="w-full ">
                        <p className="not-italic font-AeonikProRegular text-xl leading-6 text-setTexOpacity line-through	 tracking-[1%]">
                          {data.old_prize}
                        </p>
                        <p className="not-italic font-AeonikProMedium text-2xl leading-7 text-black tracking-[1%]">
                          {data.new_prize} сум
                        </p>
                      </div>
                    </div>
                    <div className=" h-full py-2">
                      <div>
                        <p
                          className={`w-[32px] h-[32px] p-1 flex items-center   rounded-lg ml-3 border border-borderColorCard`}
                        ></p>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="w-[98%] h-[1px] mx-auto border-b border-searchBgColor"></div>
              </div>
            );
          })}
        </div>

        <div className="w-[32%] h-full border-t-0 border-l-0 border border-searchBgColor rounded-br-lg	 flex flex-wrap content-between">
          <div className="w-full border-b border-searchBgColor py-5 px-8">
            <div className="w-full flex justify-between items-center ">
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                Товары ({bucket_products.length})
              </span>
              <span className="not-italic font-AeonikProMedium text-xl leading-6 text-right text-setTexOpacity">
                516 000 сум
              </span>
            </div>
            <div className="w-full flex justify-between items-center  mt-[22px]">
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                Доставка
              </span>
              <span className="not-italic font-AeonikProMedium text-xl leading-6 text-right text-setTexOpacity">
                9 000 сум
              </span>
            </div>
            <div className="w-full flex justify-between items-center  mt-[26px]">
              <span className="not-italic font-medium text-base leading-4 text-AeonikProMedium text-BasketMoneyColor tracking-[1%]">
                Вы экономите:{" "}
              </span>
              <span className="not-italic font-medium text-base leading-4 text-AeonikProMedium text-BasketMoneyColor tracking-[1%]">
                228 000 сум{" "}
              </span>
            </div>
          </div>
          <div className="w-full px-8 py-6 flex flex-col items-center">
            <NavLink
              to="/payment"
              className="h-[56px] w-full flex items-center justify-center rounded-lg bg-fullBlue text-white flex items-center active:scale-95	active:opacity-70"
            >
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-white">
                Перейти к оформлению
              </span>
              <span className="ml-3">
                <img src={formArrowRightCircle} alt="" />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1280px] w-[100%] flex justify-start items-center m-auto">
        <div className="w-[100%] h-fit">
          <div className="w-full flex items-center mb-10">
            <div className="font-AeonikProMedium text-2xl">Подобрали для вас</div>
          </div>
          <div className="flex  flex-wrap gap-x-5 gap-y-5 ">
            {productList.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`w-[240px] h-[440px] border border-solid borderColorCard overflow-hidden rounded-lg`}
                >
                  <div className="relative w-full cursor-pointer bg-btnBgColor h-[319px] flex content-between items-center overflow-hidden border-b border-solid flex-nowrap">
                    <img
                      className=" m-auto hover:scale-105 transition duration-700 ease-in-out "
                      src={data?.ProducImg || cardImg}
                      alt="ProducImg"
                    />

                    <div className="w-full flex absolute top-px p-[5px] justify-end">
                      <p className="w-8 h-8 rounded-lg flex items-center bg-bgCard justify-center border border-solid border-borderColorCard hover:bg-white transition ease-out duration-500">
                        <img src={heart} alt="" />
                      </p>
                    </div>
                  </div>
                  <div className="w-full rounded-b-1xl bg-white  flex flex-wrap h-[120px] ">
                    <div className="w-full px-3 mt-3">
                      <div className="relative w-full  whitespace-nowrap overflow-hidden py-1 not-italic font-AeonikProRegular text-[14px] leading-4 text-black mb-2 md:mb-0  cursor-pointer">
                        <div className="absolute categoryLinearText left-0 w-full h-full z-[51] top-0"></div>
                        <span>{data?.title || "NoData"}</span>
                      </div>
                      <div className="w-full flex justify-between items-center xs:mt-3">
                        <div className="flex items-center justify-between">
                          <span>
                            {" "}
                            <img src={star} alt="" />
                          </span>
                          <span className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex items-center">
                            <span className="font-AeonikProMedium text-[10px] ls:text-xs not-italic mx-1 text-black md:mr-[6px] md:text-[13px]">
                              5.0{" "}
                            </span>
                            ({data?.starCount || 0}{" "}
                            <span className="ss:hidden lg:block md:ml-1 md:text-[11px]">
                              голосов
                            </span>
                            )
                          </span>
                        </div>
                        <div className="not-italic xs:font-AeonikProMedium ss:font-AeonikProRegular leading-4 text-black  ss:text-[11px] sm:text-xs  md:text-[13px] ">
                          <b>
                            <span>{data?.shirtSize || 0}</span>
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-between  pl-3 pr-[5px]">
                      <div className="flex items-center ">
                        {data.sale ? (
                          <div className="flex ss:flex-col-reverse md:flex-row	text-start items-start ">
                            <div className="text-start m-0 p-0  not-italic font-AeonikProMedium text-[16px]  md:text-base leading-1 text-red-700 xs:text-base xs:leading-4 mr-1">
                              {data?.sale}
                            </div>
                            <div className="text-start m-0 p-0 text-[11px] mt-[8px]  line-through not-italic font-AeonikProRegular leading-3  text-borderColorCard ss:leading-1 md:text-[11px]">
                              {data?.price}
                            </div>
                          </div>
                        ) : (
                          <p
                            className="not-italic font-AeonikProMedium text-base leading-4"
                            style={{ color: "black" }}
                          >
                            {data?.price}{" "}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center">
                        <button className="w-[32px] h-[32px] mb-[4px]  rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                          <img src={addBag} alt="addbag" className="w-8" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
