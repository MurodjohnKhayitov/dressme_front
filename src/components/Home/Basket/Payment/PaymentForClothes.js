import React, { useState } from "react";
import { arrowBottomPayment, bucket, callPayment, emailPayment, formArrowBottom, formArrowRightCircle, formUzFlag, kartaLogoPayment, profilePayment } from "../../../../assets/imgs";
import { NavLink } from "react-router-dom";
import { PaymentForBreadCamp } from "./PaymentForBreadCamp";
import InputMask from "react-input-mask";

export default function PaymentForClothes() {
  const [state, setState] = useState({
    clothesCount: 1,
  });
  
  const [phone, setPhone] = useState("");
  const [codes, setCodes] = useState({
    phoneCode: "+998",
  })

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
        <div className="max-w-[1280px] w-[100%] h-full flex items-center border-x border-searchBgColor justify-between m-auto">
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
        <div className="w-[68%] h-[100vh] border-t-0 border border-searchBgColor rounded-b-lg  flex flex-col  ">
          <form >
              <div className="w-full h-fit flex flex-row gap-x-5 px-8 py-5">
                <div className="w-1/2 flex flex-col">
                    <label htmlFor="firstname" className="text-sm font-AeonikProRegular mb-[6px]">Имя</label>
                    <div className="w-full flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular p-4 ">
                      <input type="text" name="firstname" id="firstname" placeholder="Имя" className="bg-transparent w-full pr-3"/>
                      <img src={profilePayment} alt="" className="cursor-pointer"/>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col">
                    <label htmlFor="lastname" className="text-sm font-AeonikProRegular mb-[6px]">Фамилия</label>
                    <div className="w-full flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular p-4 ">
                      <input type="text" name="lastname" id="lastname" placeholder="Фамилия" className="bg-transparent w-full pr-3"/>
                      <img src={profilePayment} alt="" className="cursor-pointer"/>
                    </div>
                </div>
              </div>
              <div className="w-full h-fit flex flex-row gap-x-5 px-8 py-5">
                <div className="w-1/2 flex flex-col">
                    <label htmlFor="firstname" className="text-sm font-AeonikProRegular mb-[6px]">Номер телефона</label>
                    <div className="flex items-center justify-center overflow-hidden border border-searchBgColor rounded-lg px-4 bg-btnBgColor">
                      <div className="w-[35%] h-12 flex items-center  cursor-pointer border-r border-searchBgColor overflow-hidden">
                        <img src={formUzFlag} alt="form-arrow-bottom" />
                        <input
                          className="w-[45px] h-full select-none mx-3 not-italic font-AeonikProMedium text-base leading-4 text-black bg-transparent"
                          type="text"
                          value={codes.phoneCode}
                          readOnly
                        />
                        <img src={formArrowBottom} alt="form-arrow-bottom" />
                      </div>
                      <div className="w-[60%] h-12 overflow-hidden">
                        <InputMask
                          mask="(99)999-99-99"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={`w-full px-4  h-full not-italic bg-btnBgColor ${
                            phone ? "font-AeonikProMedium" : null
                          } text-base leading-4 text-black`}
                          placeholder={"(77) 777-77-77"}
                        ></InputMask>
                      </div>
                      <img src={callPayment} alt=""/>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col">
                    <div className="flex items-center justify-between">
                      <label htmlFor="lastname" className="text-sm font-AeonikProRegular mb-[6px]">Электронная почта</label>
                      <p className="text-sm font-AeonikProRegular"><span className="text-blue-700">*</span>необязательная</p>
                    </div>
                    <div className="w-full flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular p-4 ">
                      <input type="text" name="lastname" id="lastname" placeholder="Адрес электронной почты" className="bg-transparent w-full pr-3"/>
                      <img src={emailPayment} alt="" className="cursor-pointer"/>
                    </div>
                </div>
              </div>
              
              <div className="w-full h-fit px-8 pt-[30px]">
                <div className="flex items-center justify-between">
                  <label htmlFor="lastname" className="font-AeonikProMedium text-xl">Адрес</label>
                  <p className="text-base font-AeonikProRegular text-zinc-400">Цены на доставку могут быть изменены</p>
                </div>
                <div className="w-full flex gap-x-5 py-5">
                  <div className="w-1/2 flex flex-col flex-wrap">
                      <div className="w-full flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular p-4 ">
                        <input type="text" name="region" id="region" placeholder="Выберите город или область" className="bg-transparent w-full pr-3"/>
                        <img src={arrowBottomPayment} alt="" className="cursor-pointer"/>
                      </div>
                  </div>
                  <div className="w-1/2 flex flex-col">  
                      <div className="w-full flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular p-4 ">
                        <input type="text" name="area" id="area" placeholder="Выберите район" className="bg-transparent w-full pr-3"/>
                        <img src={arrowBottomPayment} alt="" className="cursor-pointer"/>
                      </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular p-[2px]">
                  <input type="text" name="area" id="area" placeholder="Введите свой полный адрес" className="bg-transparent w-[88%] px-4"/>
                  <button className="flex items-center text-sm font-AeonikProMedium border border-searchBgColor bg-white rounded-lg px-4 py-[14px]">
                    <img src={kartaLogoPayment} alt="Karta-logo-payment" className="mr-[10px] -pt-1" />
                    Карта
                  </button>
                </div>
              </div>
          </form>
        </div>

        <div className="w-[32%] h-[30vh] border-t-0 border-l-0 border border-searchBgColor rounded-br-lg	 flex flex-wrap content-between">

        </div>
      </div>
    </div>
  );
}
