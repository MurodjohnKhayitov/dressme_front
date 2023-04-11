import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  business,
  eng,
  englishFlag,
  glasses,
  help,
  location,
  order,
  ru,
  russiaFlag,
  shop,
  uzbekFlag,
  weatherBrandIcon,
} from "../../../assets/imgs";
import { dressMainData } from "../../../ContextHook/ContextMenu";
// import { Select, Space } from 'antd';
import { Button, Divider, Popover, Segmented } from "antd";
const YandexTop = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const SeasonTypeArray = [
    { id: 1, type: "Uzbekcha", icons: uzbekFlag },
    { id: 2, type: "Russian", icons: russiaFlag },
    { id: 3, type: "English", icons: englishFlag },
  ];

  let dataStyle = "";
  let genderStyle = "";
  if (dressInfo?.type == 1111) {
    dataStyle = " hover:text-borderSpring ";
    genderStyle =
      "focus:text-borderSpring focus:bg-bgSpring focus:border-borderSpring focus:text-borderSpring";
  }
  if (dressInfo?.type == 2222) {
    dataStyle = " hover:text-borderSummer";
    genderStyle =
      "focus:text-borderSummer focus:bg-bgSummer focus:border-borderSummer focus:text-borderSummer";
  }
  if (dressInfo?.type == 3333) {
    dataStyle = " hover:text-borderAutumm ";
    genderStyle =
      "focus:text-borderAutumm focus:bg-bgAutumm focus:border-borderAutumm focus:text-borderAutumm";
  }
  if (dressInfo?.type == 4444) {
    dataStyle = " hover:text-borderWinter ";
    genderStyle =
      "focus:text-borderWinter focus:bg-bgWinter focus:border-borderWinter focus:text-borderWinter";
  }
  // -----Language Change-------------------
  const [selectLang, setselectLang] = useState(1);

  const LanguageList = [
    { id: 1, type: "English", icons: englishFlag },
    { id: 2, type: "Русский", icons: russiaFlag },
    { id: 3, type: "O'zbekcha", icons: uzbekFlag },
  ];

  const [openLang, setOpenLang] = useState(false);

  const handleOpenChangeWear = (newOpen) => {
    setOpenLang(newOpen);
  };

  const handleLangValue = (value) => {
    setselectLang(value);
    setOpenLang(false);
  };

  const contentLang = (
    <div className="w-fit h-fit m-0 p-0">
      {LanguageList.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 text-sm cursor-pointer hover:bg-bgColor flex items-center justify-start  ${dataStyle}`}
            onClick={() => {
              handleLangValue(data?.id);
            }}
          >
            <p className="mr-[6px]  w-5 h-5">
              <img className="w-full h-full" src={data?.icons} alt="" />
            </p>
            <p
              className={`not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  ${dataStyle}`}
            >
              {data?.type}
            </p>
          </div>
        );
      })}
    </div>
  );

  // -------City Change -------------
  const [selectCity, setSelectCity] = useState("Tashkent");
  const [openRegion, setOpenRegion] = useState(false);

  const handleOpenChangeCity = (newOpen) => {
    setOpenRegion(newOpen);
  };

  const handleCityValue = (value) => {
    setSelectCity(value);
    setOpenRegion(false);
  };

  const CityList = [
    { id: 1, type: "Samarqand" },
    { id: 2, type: "Sirdaryo" },
    { id: 3, type: "Jizzax" },
    { id: 4, type: "Andijon" },
    { id: 5, type: "Xorazm" },
    { id: 6, type: "Navoiy" },
  ];

  const contentCity = (
    <div className="w-[100px] h-fit m-0 p-0">
      {CityList.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  hover:bg-bgColor cursor-pointer ${dataStyle}`}
            onClick={() => {
              handleCityValue(data?.type);
            }}
          >
            {data?.type}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="  flex justify-between items-center m-auto ">
      <div className="left h-full flex items-center  ">
        <div  className="flex w-fit items-center">
          <img src={location} alt="location" className="mr-2" />
          <span className="text-textColor text-[13px] mr-[6px] font-AeonikProMedium">
            Город:
          </span>
          <div className="w-[90px] font-AeonikProMedium   flex items-center ">
            <Popover
              open={openRegion}
              onOpenChange={handleOpenChangeCity}
              className=" flex text-[13px]  items-center  "
              trigger="click"
              options={["Hide"]}
              placement="bottom"
              content={contentCity}
            >
              <a className="border-b border-slate-900" href="#">
                {selectCity}
              </a>
            </Popover>
          </div>
        </div>
        <div className="flex items-center mx-[40px]  ">
          <NavLink to="/weather" className={"flex items-center cursor-pointer"}>
            <span className="mr-[6px]">
              <img src={weatherBrandIcon} alt="weatherBrandIcon" />
            </span>
            <span className="not-italic font-AeonikProMedium text-base  leading-4 text-black after:content-['\00B0'] after:font-AeonikProMedium  mt-[3px]">
              16
            </span>
            <span className="not-italic font-AeonikProRegular text-base  mt-[3px] leading-4 text-black">
              C
            </span>
          </NavLink>
        </div>

        <div className="w-fit h-full rounded bg-white font-AeonikProMedium select-none cursor-pointer">
          {LanguageList.filter((data) => data.id === selectLang).map((data) => {
            return (
              <Popover
                key={data?.id}
                open={openLang}
                onOpenChange={handleOpenChangeWear}
                className="w-full flex text-[13px] items-center h-[32px] px-3 rounded-lg"
                trigger="click"
                options={["Hide"]}
                placement="bottom"
                content={contentLang}
              >
                <p className="mr-[6px] ">
                  <img src={data?.icons} alt="" />
                </p>
                <p className="not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black ">
                  {data?.type}
                </p>
              </Popover>
            );
          })}
        </div>

        <div className="flex h-[32px] px-[11px] items-center bg-white rounded-lg ml-3 cursor-pointer ">
          <img src={glasses} alt="glasses" className="mr-2" />
          <span className="h-full flex items-center font-AeonikProMedium text-[13px] ">
            Спец. возможности
          </span>
        </div>
      </div>
      <div className="right h-full flex items-center ">
        <Link to="#" className="flex items-center h-full ">
          <img src={help} alt="help" className="mr-2" />
          <span className="text-textColor text-[13px]   font-AeonikProMedium  ">
            Помощь
          </span>
        </Link>
        <Link to="#" className="flex items-center h-full  ml-6 ">
          <img src={business} alt="business" className="mr-2" />
          <span className="text-textColor text-[13px]   font-AeonikProMedium  ">
            Бизнес
          </span>
        </Link>
        <div className="line h-5 border text-textColor ml-6"></div>
        <Link to="#" className="flex items-center h-full  ml-6 ">
          <img src={order} alt="my orders" className="mr-2" />
          <span className="text-textColor  text-[13px]   font-AeonikProMedium  ">
            Мои заказы
          </span>
        </Link>
        <button className="flex items-center bg-white rounded-lg cursor-pointer h-[32px] ml-6 px-3">
          <img src={shop} alt="shop" className="mr-2" />
          <span className="font-AeonikProMedium  text-[13px]    ">
            Магазины
          </span>
        </button>
      </div>
    </div>
  );
};
export default YandexTop;
