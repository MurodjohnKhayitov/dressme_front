import React, { useState } from "react";
import Slider from "react-slick";
import {
  LeftBlack,
  Liked,
  MenuClose,
  RightBlack,
  addBag,
  model1,
  star,
} from "../../../../assets/imgs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./yandex.css";
export default function SetClothesOpenModelModal() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      product_id: 1,
      name: "Головной убор",
      gender: "Male",
      quality: "semi-original",
      composition: "cotton 100%",
      wear_size: "51",
      make_country: "china",
      amount: "50000",
      currensy: "UZB",
      active: true,
      head_wear_img:
        "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097",
    },
    {
      id: 2,
      product_id: 2,
      name: "Головной убор",
      gender: "Male",
      quality: "semi-original",
      composition: "cotton 100%",
      wear_size: "51",
      make_country: "china",
      amount: "10000",
      currensy: "UZB",
      active: true,
      head_wear_img:
        "https://images.uzum.uz/cftf79vhj8j9g698gbbg/t_product_540_high.jpg#1679979817050",
    },
    {
      id: 3,
      product_id: 3,
      name: "Головной убор",
      gender: "Male",
      quality: "semi-original",
      composition: "cotton 100%",
      wear_size: "51",
      make_country: "china",
      amount: "25000",
      currensy: "UZB",
      active: false,
      head_wear_img:
        "https://images.uzum.uz/cft1g4vhgiov1qid0vmg/t_product_540_high.jpg#1679979817063",
    },
  ]);
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-[23%] bottom-[13px] z-50 text-center cursor-pointer no-underline w-10 h-10 flex items-center justify-center  rounded-lg bg-yandexWhite duration-200 border  border-searchBgColor	`}
        onClick={onClick}
      >
        <img src={RightBlack} alt="" />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-[23%] bottom-[13px] z-50 text-center cursor-pointer no-underline w-10 h-10 flex items-center justify-center rounded-lg bg-yandexWhite duration-200 border  border-searchBgColor`}
        onClick={onClick}
      >
        <img src={LeftBlack} alt="" />
      </div>
    );
  };

  let headWear = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    dotsClass: "button__bar",
    // className: "SlickMain",
  };

  return (
    <div className="w-full flex frex-row h-[90vh] ">
      <div className="w-[580px] flex items-center justify-center border-r border-searchBgColor ">
        <Slider {...headWear} className="w-full h-full  ">
          {productList?.map((item) => {
            return (
              <div key={item?.id} className=" flex justify-center mx-auto">
                <div className="!w-[280px] h-[90vh] mx-auto ">
                  <img src={model1} alt="" className="w-full h-full" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="w-[420px]   flex flex-wrap content-between">
        <div className="h-[100px] px-2  flex flex-wrap content-center w-full border-b border-searchBgColor">
          <div className="px-3 w-full font-AeonikProMedium text-2xl">
            Business Wear (Man)
          </div>
          <div className="px-3 w-full font-AeonikProRegular text-base">
            <span className="text-setTexOpacity mr-2">Магазин:</span>
            Patek Business Wear
          </div>
        </div>

        <div className="h-[calc(100%-216px)] pt-3 px-2  w-full  cursor-pointer  overflow-auto YandexListScroll">
          <div className="px-3 mb-[22px] ">
            <div className="font-AeonikProMedium text-sm mb-2">
              Головной убор
            </div>
            <div className="border rounded-lg p-3">
              {/* ----- */}
              <div className=" mb-5">
                <div className="">
                  <div className="flex justify-between">
                    <div className="w-[92px] border border-searchBgColor h-[120px] bg-btnBgColor rounded-lg ">
                      <img src="" alt="" />
                    </div>
                    <div className="py-3 w-[60%] flex flex-wrap content-between mx-2">
                      <div className="w-full font-AeonikProRegular text-sm  ">
                        Eleganza Шарф
                      </div>
                      <div className="  w-full font-AeonikProMedium text-base">
                        <span className="text-xl">149 000</span> сум
                      </div>
                    </div>
                    <div className="w-12 flex flex-wrap content-end ">
                      <button className=" w-12 h-12 mb-1 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                        <img src={Liked} alt="addbag" className="w-5 " />
                      </button>
                      <button className=" w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                        <img src={addBag} alt="addbag" className="w-8" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* ----- */}
              {/* ----- */}
              <div className=" mb-5">
                <div className="">
                  <div className="flex justify-between">
                    <div className="w-[92px] border border-searchBgColor h-[120px] bg-btnBgColor rounded-lg ">
                      <img src="" alt="" />
                    </div>
                    <div className="py-3 w-[60%] flex flex-wrap content-between mx-2">
                      <div className="w-full font-AeonikProRegular text-sm  ">
                        Eleganza Шапка CHERLO Style
                      </div>
                      <div className="flex flex-col font-AeonikProMedium text-base text-red-700">
                        <span className="  font-AeonikProRegular text-sm text-setTexOpacity">
                          359 000
                        </span>
                        <span className="text-xl">
                          124 000 <span>сум</span>
                        </span>
                      </div>
                    </div>
                    <div className="w-12 flex flex-wrap content-end ">
                      <button className=" w-12 h-12 mb-1 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                        <img src={Liked} alt="addbag" className="w-5 " />
                      </button>
                      <button className=" w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                        <img src={addBag} alt="addbag" className="w-8" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>

          <div className="px-3 mb-8">
            <div className="font-AeonikProMedium text-sm mb-2">
              Верхняя одежда
            </div>
            <div className="px-3">
              <div className="flex justify-between">
                <div className="w-[92px] border border-searchBgColor h-[120px] bg-btnBgColor rounded-lg ">
                  <img src="" alt="" />
                </div>
                <div className="py-3 w-[60%] flex flex-wrap content-between mx-2">
                  <div className="w-full font-AeonikProRegular text-sm  ">
                    Mango Man футболка CHERLO Style
                  </div>
                  <div className="  w-full font-AeonikProMedium text-base">
                    <span className="text-xl">279 000</span> сум
                  </div>
                </div>
                <div className="w-12 flex flex-wrap content-end ">
                  <button className=" w-12 h-12 mb-1 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                    <img src={Liked} alt="addbag" className="w-5 " />
                  </button>
                  <button className=" w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                    <img src={addBag} alt="addbag" className="w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 mb-3">
            <div className="font-AeonikProMedium text-sm mb-2">
              Верхняя одежда
            </div>
            <div className="px-3">
              <div className="flex justify-between">
                <div className="w-[92px] border border-searchBgColor h-[120px] bg-btnBgColor rounded-lg ">
                  <img src="" alt="" />
                </div>
                <div className="py-3 w-[60%] flex flex-wrap content-between mx-2">
                  <div className="w-full font-AeonikProRegular text-sm  ">
                    Mango Man футболка CHERLO Style
                  </div>
                  <div className="  w-full font-AeonikProMedium text-base">
                    <span className="text-xl">279 000</span> сум
                  </div>
                </div>
                <div className="w-12 flex flex-wrap content-end ">
                  <button className=" w-12 h-12 mb-1 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                    <img src={Liked} alt="addbag" className="w-5 " />
                  </button>
                  <button className=" w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                    <img src={addBag} alt="addbag" className="w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[116px] w-full px-3 py-3  border-t border-searchBgColor">
          <div className="mb-3 flex items-center justify-between">
            <div className="font-AeonikProRegular text-setTexOpacity text-sm">
              <span className="font-AeonikProMedium text-red-700 text-2xl mr-[11px]">
                814 000
              </span>
              1 054 000
            </div>
            <div className="flex items-center">
              <span className="mr-[6px] flex items-center">
                <img src={star} alt="star" />
              </span>
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-black">
                2.5{" "}
                <span className="mr-1 not-italic font-AeonikProRegular text-xs leading-3 text-setTexOpacity">
                  (20 голосов)
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button className="group h-12 w-[49%] rounded-lg bg-btnBgColor border border-searchBgColor flex items-center justify-center pl-[10px] pr-[5px] py-[7px] hover:bg-SignInBgColor transition ease-in duration-300">
              <span className="group-hover:text-white flex  items-center font-AeonikProRegular text-center text-black text-[14px] mr-2">
                Страница набора
              </span>
              <svg
                className="group-hover:fill-white group-hover:stroke-white stroke-black"
                opacity={100}
                viewBox="-6 -6 36 36"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                {" "}
                <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
              </svg>
            </button>
            <button className="group h-12 w-[49%] rounded-lg bg-btnBgColor border border-searchBgColor flex items-center justify-center pl-[10px] pr-[5px] py-[7px] hover:bg-SignInBgColor transition ease-in duration-300">
              <span className="group-hover:text-white flex  items-center font-AeonikProRegular text-center text-black text-[14px] mr-2">
                Набор в корзину
              </span>
              <img src={addBag} alt="" className="hover:bg-transparent" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
