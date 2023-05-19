import React, { useState } from "react";
import { BasketCheckOutTop } from "./BasketCheckOutTop";
import { bucket, formArrowRightCircle } from "../../../../assets/imgs";
import { NavLink } from "react-router-dom";

export default function BasketCheckOut() {
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
                  4
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
      <div className="max-w-[1280px] w-[100%] h-fit flex  justify-between  m-auto    ">
        <div className="w-[68%] h-full border-t-0 border border-searchBgColor rounded-b-lg  flex flex-col  ">
          {array.map((data) => {
            return (
              <div className="w-full pl-5 pr-8 flex flex-col justify-center">
                <div className="w-full h-[180px] my-5 flex items-center justify-between">
                  <div className=" flex items-center h-full">
                    <div className="w-[132px] h-full rounded-lg bg-btnBgColor border border-searchBgColor">
                      1
                    </div>
                    <div className=" ml-5 w-[325px] py-2 h-full flex flex-wrap content-between">
                      <div className="w-full ">
                        <span className="not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                          Спортивная мужская кроссовка Nike RUN
                        </span>
                      </div>
                      <div className="w-full  ">
                        <div className="flex items-center">
                          <span>
                            <img src={bucket} alt="" />
                          </span>
                          <span className="not-italic mt-1 ml-1 font-AeonikProRegular text-base leading-4 text-black  tracking-[1%]">
                            <span className="not-italic ml-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                              Магазин:
                            </span>{" "}
                            Nike Store Official Dealer
                          </span>
                        </div>
                        <div className="flex items-center mt-4">
                          <div className="w-[112px] cursor-pointer h-fit p-[2px] flex items-center rounded-lg border border-searchBgColor">
                            <p className="w-8 h-8 border border-searchBgColor rounded-lg bg-setTexOpacity"></p>
                            <p className="not-italic ml-[10px] mt-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                              Серый
                            </p>
                          </div>
                          <div className=" h-[36px]  cursor-pointer ml-3 px-4 flex items-center rounded-lg border border-searchBgColor">
                            <p className="not-italic  mt-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                              3XL
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
                          372 000
                        </p>
                        <p className="not-italic font-AeonikProMedium text-2xl leading-7 text-black tracking-[1%]">
                          258 000 сум
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
                Товары (2)
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
    </div>
  );
}
