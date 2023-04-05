import React, { useContext, useState } from "react";
import {
  formArrowBottom,
  formArrowRightCircle,
  formPhone,
  formUser,
  formUzFlag,
} from "../../../assets/imgs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import InputMask from "react-input-mask";
import { dressMainData } from "../../../ContextHook/ContextMenu";

export default function SignUp() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneCode: "+998",
    phoneNumber: "",
    email: "",
    password: "",
    eyesShow: true,
  });

  let data = state.phoneNumber.split("-");
  let arr = data.join("");
  let data1 = arr.split("(");
  let arr1 = data1.join("");
  let arr2 = arr1.split(")");
  let data2 = arr2.join("");
  let arr3 = state.phoneCode.split("+");
  let data3 = arr3.join("");
  const sendMessagePhoneNumber = data3 + data2;

  const [dressInfo] = useContext(dressMainData);
  let genderStyle = "";
  if (dressInfo?.type === 1111) {
    genderStyle = "text-borderSpring ";
  }
  if (dressInfo?.type === 2222) {
    genderStyle = "text-borderSummer ";
  }
  if (dressInfo?.type === 3333) {
    genderStyle = "text-borderAutumm ";
  }
  if (dressInfo?.type === 4444) {
    genderStyle = "text-borderWinter ";
  }
  return (
    <div className=" py-8 w-full h-full flex justify-center">
      <div className="w-[440px] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
        <div className=" w-full mt-1 mb-7 not-italic font-AeonikProMedium text-xl  leading-5 ss:text-start md:text-center  tracking-[0,16px] text-black">
          Добро пожаловать в <span className={`${genderStyle}`}>Dressme</span>!
        </div>

        <div className="mt-2 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            Имя{" "}
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type="text"
              // name="fname"
              placeholder="Имя"
              required
            />
            <img src={formUser} alt="" />
          </div>
        </div>
        <div className="mt-4 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            Фамилия{" "}
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type="text"
              // name="lname"
              placeholder="Фамилия"
              required
            />
            <img src={formUser} alt="" />
          </div>
        </div>

        {/* Phone Number */}
        <div className="mt-4 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            Номер телефона{" "}
          </div>
          <div className="flex items-center justify-center overflow-hidden border border-searchBgColor rounded-lg">
            <div className="ss:w-[35%] md:w-[30%] h-12 flex items-center justify-center  cursor-pointer border-r border-searchBgColor overflow-hidden">
              <img src={formUzFlag} alt="form-arrow-bottom" />
              <input
                className="w-[40px]  h-full select-none mx-2 not-italic font-AeonikProMedium text-base leading-4 text-black"
                type="text"
                // name=""
                value={state.phoneCode}
                readOnly
              />
              <img src={formArrowBottom} alt="form-arrow-bottom" />
            </div>
            <div className="ss:w-[65%] md:w-[70%] h-12 overflow-hidden">
              <InputMask
                mask="(99)999-99-99"
                value={state?.phoneNumber}
                onChange={(e) =>
                  setState(...state, { phoneNumber: e.target.value })
                }
                className={`w-full px-4  h-full not-italic ${
                  state?.phoneNumber ? "font-AeonikProMedium" : null
                } text-base leading-4 text-black`}
                placeholder={"(77) 777-77-77"}
              ></InputMask>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mt-4 w-full h-fit">
          <div className=" flex items-center justify-between w-full">
            <NavLink
              to={"/forget_password"}
              className="not-italic font-AeonikProRegular text-sm leading-4 cursor-pointer text-black  tracking-[0,16px]"
            >
              Электронная почта{" "}
            </NavLink>
            <NavLink
              to={"/forget_password"}
              className="not-italic 	 font-AeonikProRegular text-sm leading-4 cursor-pointer text-black  tracking-[0,16px]"
            >
              *необязательная{" "}
            </NavLink>
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type="email"
              // name="email"
              placeholder="Адрес электронной почты"
              required
            />
            <img src={formUser} alt="" />
          </div>
        </div>
        <div className="mt-4 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            Пароль
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type={state?.eyesShow ? "password" : "text"}
              placeholder="Enter your password"
              required
            />
            <span className="cursor-pointer">
              {state?.eyesShow ? (
                <AiOutlineEyeInvisible
                  onClick={() => setState({ ...state, eyesShow: false })}
                  size={20}
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setState({ ...state, eyesShow: true })}
                  size={20}
                />
              )}
            </span>
          </div>
          <div className="not-italic mt-2 font-AeonikProRegular selec-none text-xs leading-3 text-black tracking-[0,16px] ">
            Пароль должен быть не менее 8 символов
          </div>
        </div>

        <div className="mt-8 border  cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70	">
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
            Войти в систему
          </span>
          <img className="" src={formArrowRightCircle} alt="female" />
        </div>
      </div>
    </div>
  );
}
