import React, { useState } from "react";
import { bucket, formArrowRightCircle } from "../../../../assets/imgs";
import { NavLink } from "react-router-dom";
import { PaymentForBreadCamp } from "./PaymentForBreadCamp";

export default function PaymentForClothes() {
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
        <PaymentForBreadCamp />
      </div>
      <div className="w-full h-[84px] border-b border-searchBgColor">
        <div className="max-w-[1280px] w-[100%] h-full flex items-center border-x border-searchBgColor justify-between items-center m-auto   ">
          <div className="w-[68%] h-full px-8 border-r border-searchBgColor flex  items-center justify-between">
            <div className="w-fit  flex  items-center">
              <p className="flex not-italic font-AeonikProMedium text-2xl leading-7 text-black tracking-[1%]">
                Данные
              </p>
            </div>
            <div className="w-fit h-full flex  items-center">
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-right text-setTexOpacity">
                У тебя есть аккаунт?
              </span>
              <NavLink
                className={
                  "not-italic ml-2 font-AeonikProMedium text-base leading-4 text-right text-fullBlue tracking-[1%]"
                }
              >
                Авторизуйся
              </NavLink>
            </div>
          </div>
          <div className="w-[32%] h-full px-8  flex  items-center justify-between">
            <p className="not-italic mt-1 font-AeonikProMedium text-2xl leading-7 text-black tracking-[1%]">
              Оплата
            </p>
            <p className="not-italic mt-1 font-AeonikProMedium text-2xl leading-7 text-black tracking-[1%]">
              527 000 сум{" "}
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------- */}

      <div className="max-w-[1280px] w-[100%] h-fit flex  justify-between  m-auto    ">
        <div className="w-[68%] h-[100vh] border-t-0 border border-searchBgColor rounded-b-lg  flex flex-col  "></div>

        <div className="w-[32%] h-[30vh] border-t-0 border-l-0 border border-searchBgColor rounded-br-lg	 flex flex-wrap content-between"></div>
      </div>
    </div>
  );
}
