import React, { useState } from "react";
import {
  CategoryMenu,
  DownCate,
  clothing,
  delivery,
} from "../../../../assets/imgs";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { BiChevronDown } from "react-icons/bi";

export default function CategoryTopDetail() {
  const [value, SetValue] = useState({ min: 20, max: 150 });

  return (
    <div className="flex flex-col min-h-[44px]  justify-center items-center m-0 p-0 box-border border border-green-600 ">
      <div className="max-w-[1280px] w-[100%] flex items-center justify-between items-center m-auto py-3  ">
        <div>
          <button className="w-fit h-[44px] px-3 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center  cursor-pointer select-none group  ">
            <span>
              <img src={CategoryMenu} alt="CategoryMenu" className="" />{" "}
            </span>
            <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%] px-2 mt-1">
              Все категории{" "}
            </span>
            <span>
              <img src={DownCate} className={`rotate-[90deg]`} alt="" />
            </span>
          </button>
        </div>

        <div className="flex items-center">
          <div className="flex items-center w-fit mr-4">
            <span className="not-italic font-normal text-sm leading-4 text-setTexOpacity tractking-[1%]">
              Цена:
            </span>
          </div>{" "}
          <div className="w-[360px] border border-red-500 ">
            <div className="w-full border border-green-500 flex justify-between">
              <span className="not-italic font-AeonikProMedium text-sm leading-4 tracking-[1%] ">
                60 000 сум
              </span>
              <span className="not-italic font-AeonikProMedium text-sm leading-4 tracking-[1%] ">
                180 000 сум
              </span>
            </div>
            <div className="w-full border border-green-500">
              <InputRange
                // formatLabel={(value) => `${value}$`}
                minValue={0}
                maxValue={200}
                value={value}
                onChange={(value) => SetValue(value)}
                className={"mt-[-15px]"}
                ariaLabelledby="hello"
                ariaControls="hi"
                allowSameValues={true}
              />
            </div>
          </div>
        </div>

        <div>
          <button className="w-fit h-[44px] px-4 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center  cursor-pointer select-none group  ">
            {/* <span>
              <img src={CategoryMenu} alt="CategoryMenu" className="" />{" "}
            </span> */}
            <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%] mr-2 mt-1">
              Доставка{" "}
            </span>
            <span>
              <img src={delivery} className={``} alt="" />
            </span>
          </button>
        </div>
        <div className="w-[fit] flex items-center ">
          <div className="flex items-center w-fit mr-4">
            <span className="not-italic font-normal text-sm leading-4 text-setTexOpacity tractking-[1%]">
              Сортировка:
            </span>
          </div>
          <div>
            <button className="w-[260px] h-[44px] px-4 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between  cursor-pointer select-none group  ">
              {/* <span>
                <img src={CategoryMenu} alt="CategoryMenu" className="" />{" "}
              </span> */}
              <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]  mt-1">
                Последние добавленные{" "}
              </span>
              <span>
                <img src={DownCate} className={`rotate-[180deg]`} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
