import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import YandexTop from "./YandexTop";
import YandexMedium from "./YandexMedium";
import YandexFilter from "./YandexFilter";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import BottomHeader from "../../header/bottom";
import NavMenu from "../../header/nav-menu";
export default function YandexMapsIndex() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  return (
    <div className="w-full flex flex-col justify-center items-center m-0 p-0 box-border">
      <div className="max-w-[1320px] w-[100%] ss:block md:flex  md:py-0 justify-center items-center m-auto ">
        {/* {!dressInfo?.yandexOpenMenu ? ( */}
        <div>
          <div className={`ss:px-3 mt-[1px] md:mt-0 md:px-[40px] md:rounded-b-[16px] ${
              !dressInfo?.yandexOpenMarket
                ? "bg-yandexNavbar backdrop-blur-sm"
                : "bg-white"
            }	border border-searchBgColor border-t-0`}
          >
            <div className="hidden md:block">
              {" "}
              <YandexTop />
            </div>
            {!dressInfo?.yandexFullScreen && (
              <div className="overflow-hidden">
                <YandexMedium />
              </div>
            )}
          </div>

          {!dressInfo?.yandexOpenMarket && (
            <div className={`flex flex-col justify-center overflow-hidden
            ${ !dressInfo?.yandexOpenMarket ? 'absolute left-0 right-0 bottom-[-670px] md:top-[105px]' : ''} 
            ${ !dressInfo?.yandexFullScreen ? 'absolute left-0 right-0 bottom-[-535px] md:top-[105px]' : ''}
            `}>
              <YandexFilter />
            </div>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
}


// position: absolute;
    // left: 0;
    // bottom: -669px;
    // right: 0;
