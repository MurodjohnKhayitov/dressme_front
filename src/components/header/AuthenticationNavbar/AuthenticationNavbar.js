import React, { useContext } from "react";
import {
  AutummFemale,
  AutummMale,
  SpringFemale,
  SpringMale,
  SummerFemale,
  SummerMale,
  WinterFemale,
  WinterMale,
  user,
} from "../../../assets/imgs";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { MdAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
const AuthenticationNavbar = () => {
  const [dressInfo] = useContext(dressMainData);
  let genderStyle = "";
  if (dressInfo?.type === 1111) {
    genderStyle =
      "text-borderSpring bg-bgSpring border-borderSpring w-[170px] h-[44px]  px-[16px] justify-between flex items-center bg-btnBgColor border  mr-2 rounded-lg";
  }
  if (dressInfo?.type === 2222) {
    genderStyle =
      "text-borderSummer bg-bgSummer border-borderSummer w-[170px] h-[44px]  px-[16px] justify-between flex items-center bg-btnBgColor border  mr-2 rounded-lg";
  }
  if (dressInfo?.type === 3333) {
    genderStyle =
      "text-borderAutumm bg-bgAutumm border-borderAutumm w-[170px] h-[44px]  px-[16px] justify-between flex items-center bg-btnBgColor border  mr-2 rounded-lg";
  }
  if (dressInfo?.type === 4444) {
    genderStyle =
      "text-borderWinter bg-bgWinter border-borderWinter w-[170px] h-[44px]  px-[16px] justify-between flex items-center bg-btnBgColor border  mr-2 rounded-lg";
  }

  const personItems = [
    { id: 1111, man: user, woman: user },
    { id: 2222, man: user, woman: user },
    { id: 3333, man: user, woman: user },
    { id: 4444, man: user, woman: user },
  ];

  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 box-border ss:hidden md:block">
      <div className="max-w-[1280px] w-[100%] flex justify-center  py-3 items-center m-auto   ">
        {personItems
          ?.filter((value) => value.id === dressInfo?.type)
          .map((data) => {
            return (
              <div key={data?.id} className="w-fit flex items-center ">
                <NavLink
                  to={"/sign_in"}
                  className={({ isActive }) =>
                    isActive
                      ? genderStyle
                      : "w-[170px] h-[44px]  px-[16px] justify-between flex items-center bg-btnBgColor border  mr-2 rounded-lg"
                  }
                >
                  <img className="" src={data?.woman} alt="female" />
                  <span className="mt-1 font-AeonikProMedium not-italic text-sm leading-4 tracking-[0,16px]">
                    Войти в систему
                  </span>
                </NavLink>
                <NavLink
                  to={"/sign_up"}
                  className={({ isActive }) =>
                    isActive
                      ? genderStyle
                      : "w-[170px] h-[44px]  px-[16px] justify-between flex items-center bg-btnBgColor border  mr-2 rounded-lg"
                  }
                >
                  <img className="" src={data?.man} alt="male" />
                  <span className="mt-1 font-AeonikProMedium not-italic  text-sm leading-4 tracking-[0,16px]">
                    Создать аккаунт
                  </span>
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AuthenticationNavbar;
