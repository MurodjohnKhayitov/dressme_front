import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formArrowRightCircle, person3D } from "../../../../../assets/imgs";
import { BiChevronDown } from "react-icons/bi";
import { Popover } from "antd";

const UserOfBodyMobile = () => {

// ----------- Waist Size --------------
  const [openWaistSize, setOpenWaistSize] = useState(false);
  const handleOpenChangeWaistSize = (newOpen) => {
    setOpenWaistSize(newOpen);
  };
  const [selectWaistSize, setselectWaistSize] = useState("Обхват талии");
  const handleWaistValue = (value) => {
    setselectWaistSize(value);
    setOpenWaistSize(false);
  };
  const waistList = [
    { id: 1, type: "60 см" },
    { id: 2, type: "62 см" },
    { id: 3, type: "66 см" },
    { id: 4, type: "68 см" },
    { id: 5, type: "70 см" },
  ];
  const contentWaistSize = (
    <div className="w-[140px] h-fit m-0 p-0">
      {waistList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleWaistValue(data?.type);
            }}
            className={`w-full h-[30px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );

  // ----------- Chest girth Size --------------
  const [openChestSize, setOpenChestSize] = useState(false);
  const handleOpenChangeChestSize = (newOpen) => {
    setOpenChestSize(newOpen);
  };
  const [selectChestSize, setselectChestSize] = useState("Обхват груди");
  const handleChestValue = (value) => {
    setselectChestSize(value);
    setOpenChestSize(false);
  };
  const chestList = [
    { id: 1, type: "60 см" },
    { id: 2, type: "62 см" },
    { id: 3, type: "66 см" },
    { id: 4, type: "68 см" },
    { id: 5, type: "70 см" },
  ];
  const contentChestSize = (
    <div className="w-[140px] h-fit m-0 p-0">
      {chestList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleChestValue(data?.type);
            }}
            className={`w-full h-[30px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );

  // ----------- Caps Size --------------
  const [openCapSize, setOpenCapSize] = useState(false);
  const handleOpenChangeCapSize = (newOpen) => {
    setOpenCapSize(newOpen);
  };
  const [selectCapSize, setselectCapSize] = useState("53 см");
  const handleCapValue = (value) => {
    setselectCapSize(value);
    setOpenCapSize(false);
  };
  const capList = [
    { id: 1, type: "53" },
    { id: 2, type: "54" },
    { id: 3, type: "55" },
    { id: 4, type: "56" },
    { id: 5, type: "57" },
    { id: 6, type: "58" },
    { id: 6, type: "59" },
  ];
  const contentCapSize = (
    <div className="w-[60px] h-fit m-0 p-0">
      {capList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleCapValue(data?.type);
            }}
            className={`w-full h-[30px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );

  // ----------- Shirt Size --------------
  const [openShirtSize, setOpenShirtSize] = useState(false);
  const handleOpenChangeShirtSize = (newOpen) => {
    setOpenShirtSize(newOpen);
  };
  const [selectShirtSize, setselectShirtSize] = useState("3XL");
  const handleShirtValue = (value) => {
    setselectShirtSize(value);
    setOpenShirtSize(false);
  };
  const shirtList = [
    { id: 1, type: "L" },
    { id: 2, type: "XL" },
    { id: 3, type: "2XL" },
    { id: 4, type: "3XL" },
    { id: 5, type: "4XL" },
    { id: 6, type: "5XL" },
  ];
  const contentShirtSize = (
    <div className="w-[60px] h-fit m-0 p-0">
      {shirtList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleShirtValue(data?.type);
            }}
            className={`w-full h-[30px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );

  // ----------- Shoes Size --------------
  const [openShoesSize, setOpenShoesSize] = useState(false);
  const handleOpenChangeShoesSize = (newOpen) => {
    setOpenShoesSize(newOpen);
  };
  const [selectShoesSize, setselectShoesSize] = useState("40");
  const handleShoesValue = (value) => {
    setselectShoesSize(value);
    setOpenShoesSize(false);
  };
  const shoesList = [
    { id: 1, type: "38" },
    { id: 2, type: "39" },
    { id: 3, type: "40" },
    { id: 4, type: "41" },
    { id: 5, type: "42" },
  ];
  const contentShoesSize = (
    <div className="w-[60px] h-fit m-0 p-0">
      {shoesList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleShoesValue(data?.type);
            }}
            className={`w-full h-[30px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );

  // ----------- Trousers Size --------------
  const [openTrouserSize, setOpenTrouserSize] = useState(false);
  const handleOpenChangeTrouserSize = (newOpen) => {
    setOpenTrouserSize(newOpen);
  };
  const [selectTrouserSize, setselectTrouserSize] = useState("31");
  const handleTrouserValue = (value) => {
    setselectTrouserSize(value);
    setOpenTrouserSize(false);
  };
  const trouserList = [
    { id: 1, type: "28" },
    { id: 2, type: "29" },
    { id: 3, type: "30" },
    { id: 4, type: "31" },
    { id: 5, type: "32" },
  ];
  const contentTrouserSize = (
    <div className="w-[60px] h-fit m-0 p-0">
      {trouserList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleTrouserValue(data?.type);
            }}
            className={`w-full h-[30px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );

  

  return (
    <main>
      <div className="flex flex-col justify-center border border-green-500">
        <div className="w-full border border-black flex  justify-center ">
            <div className="w-fit border border-blue-500">
                <img
                    src={person3D}
                    alt=""
                    className="border border-solid border-searchBgColor rounded-lg"
                  />
            </div>
        </div>
        <div className="w-full border border-red-500 rounded-lg">
            <div className="flex flex-col py-6 w-[440px] border-b border-searchBgColor">
              <div className="text-[20px] font-AeonikProMedium mb-3 px-10">
                Внешний вид персонажа
              </div>
              <p className="text-textColor font-AeonikProRegular mb-7 px-10">
                Введите параметры вашего тела
              </p>
              <div className="flex flex-col px-10">
                <div className="flex items-center flex-row justify-between gap-x-5 mb-4">
                  <div className="flex flex-col w-[47%]">
                    <label
                      htmlFor="firstname"
                      className="mb-[6px] font-AeonikProRegular text-sm"
                    >
                      Высота роста
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Высота роста"
                      className="bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor p-4 rounded-lg h-12"
                    />
                  </div>
                  <div className="flex flex-col w-[47%]">
                    <label
                      htmlFor="firstname"
                      className="mb-[6px] font-AeonikProRegular text-sm"
                    >
                      Вес тела
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Вес тела"
                      className="bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor p-4 rounded-lg h-12"
                    />
                  </div>
                </div>
                <div className="flex items-center flex-row justify-between gap-x-5">
                  <div className="flex flex-col w-1/2">
                    <label
                      htmlFor="waist"
                      className="mb-[6px] font-AeonikProRegular text-sm"
                    >
                      Обхват талии
                    </label>
                    <Popover
                      open={openWaistSize}
                      onOpenChange={handleOpenChangeWaistSize}
                      className="w-full px-4 h-[48px] bg-btnBgColor flex items-center justify-between cursor-pointer select-none group rounded-lg border border-searchBgColor"
                      trigger="click"
                      options={["Hide"]}
                      placement="bottom"
                      content={contentWaistSize}
                    >
                      <span className="not-italic font-AeonikProMedium text-center mt-1 text-sm leading-4 text-black">
                        {selectWaistSize}
                      </span>
                      <span>
                        <BiChevronDown
                          size={20}
                          style={{ color: "#c2c2c2" }}
                          className={`${
                            openWaistSize ? "rotate-[-180deg]" : ""
                          } duration-200`}
                        />{" "}
                      </span>
                    </Popover>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label
                      htmlFor="waist"
                      className="mb-[6px] font-AeonikProRegular text-sm"
                    >
                      Обхват грудной клетки
                    </label>
                    <Popover
                      open={openChestSize}
                      onOpenChange={handleOpenChangeChestSize}
                      className="w-full px-4 h-[48px] bg-btnBgColor flex items-center justify-between cursor-pointer select-none group rounded-lg border border-searchBgColor"
                      trigger="click"
                      options={["Hide"]}
                      placement="bottom"
                      content={contentChestSize}
                    >
                      <span className="not-italic font-AeonikProMedium text-center mt-1 text-sm leading-4 text-black">
                        {selectChestSize}
                      </span>
                      <span>
                        <BiChevronDown
                          size={20}
                          style={{ color: "#c2c2c2" }}
                          className={`${
                            openChestSize ? "rotate-[-180deg]" : ""
                          } duration-200`}
                        />{" "}
                      </span>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col px-10 pt-6 w-[440px]">
              <div className="text-[20px] font-AeonikProMedium mb-3">
                Размеры одежды
              </div>
              <p className="text-textColor font-AeonikProRegular mb-7">
                Введите размеры ваших одежд
              </p>

              {/* Caps */}
              <div className="w-full flex items-center pl-4 bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor rounded-lg h-12 mb-2">
                <div className="flex items-center font-AeonikProMedium w-[75%] border-r border-searchBgColor h-12 bg-transparent pr-4">
                  Обхват головы{" "}
                  <span className="font-AeonikProRegular ml-1">(шапки)</span>
                </div>
                <Popover
                  open={openCapSize}
                  onOpenChange={handleOpenChangeCapSize}
                  className="w-[28%] px-4 h-[44px] bg-btnBgColor flex items-center justify-between cursor-pointer select-none group  "
                  trigger="click"
                  options={["Hide"]}
                  placement="bottom"
                  content={contentCapSize}
                >
                  <span className="not-italic font-AeonikProMedium text-center mt-1 text-sm leading-4 text-black">
                    {selectCapSize}
                  </span>
                  <span>
                    <BiChevronDown
                      size={20}
                      style={{ color: "#c2c2c2" }}
                      className={`${
                        openCapSize ? "rotate-[-180deg]" : ""
                      } duration-200`}
                    />{" "}
                  </span>
                </Popover>
              </div>

              {/* Shirts */}
              <div className="flex items-center pl-4 bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor rounded-lg h-12 mb-2">
                <div className="flex items-center font-AeonikProMedium w-[75%] border-r border-searchBgColor h-12 bg-transparent pr-4">
                  Верхняя одежда
                  <span className="font-AeonikProRegular ml-1">(рубашки)</span>
                </div>
                <Popover
                  open={openShirtSize}
                  onOpenChange={handleOpenChangeShirtSize}
                  className="w-[28%] px-4 h-[44px] bg-btnBgColor flex items-center justify-between cursor-pointer select-none group  "
                  trigger="click"
                  options={["Hide"]}
                  placement="bottom"
                  content={contentShirtSize}
                >
                  <span className="not-italic font-AeonikProMedium text-center mt-1 text-sm leading-4 text-black">
                    {selectShirtSize}
                  </span>
                  <span>
                    <BiChevronDown
                      size={20}
                      style={{ color: "#c2c2c2" }}
                      className={`${
                        openShirtSize ? "rotate-[-180deg]" : ""
                      } duration-200`}
                    />{" "}
                  </span>
                </Popover>
              </div>

              {/* Trousers */}
              <div className="flex items-center pl-4 bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor rounded-lg h-12 mb-2">
                <div className="flex items-center font-AeonikProMedium w-[75%] border-r border-searchBgColor h-12 bg-transparent pr-4">
                  Нижняя одежда{" "}
                  <span className="font-AeonikProRegular ml-1">(брюки)</span>
                </div>
                <Popover
                  open={openTrouserSize}
                  onOpenChange={handleOpenChangeTrouserSize}
                  className="w-[28%] px-4 h-[44px] bg-btnBgColor flex items-center justify-between cursor-pointer select-none group  "
                  trigger="click"
                  options={["Hide"]}
                  placement="bottom"
                  content={contentTrouserSize}
                >
                  <span className="not-italic font-AeonikProMedium text-center mt-1 text-sm leading-4 text-black">
                    {selectTrouserSize}
                  </span>
                  <span>
                    <BiChevronDown
                      size={20}
                      style={{ color: "#c2c2c2" }}
                      className={`${
                        openTrouserSize ? "rotate-[-180deg]" : ""
                      } duration-200`}
                    />{" "}
                  </span>
                </Popover>
              </div>

              {/* Shoes */}
              <div className="flex items-center pl-4 bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor rounded-lg h-12">
                <div className="flex items-center font-AeonikProMedium w-[75%] border-r border-searchBgColor h-12 bg-transparent pr-4">
                  Обувь
                  <span className="font-AeonikProRegular ml-1">
                    (кроссовки, туфли)
                  </span>
                </div>
                <Popover
                  open={openShoesSize}
                  onOpenChange={handleOpenChangeShoesSize}
                  className="w-[28%] px-4 h-[44px] bg-btnBgColor flex items-center justify-between cursor-pointer select-none group  "
                  trigger="click"
                  options={["Hide"]}
                  placement="bottom"
                  content={contentShoesSize}
                >
                  <span className="not-italic font-AeonikProMedium text-center mt-1 text-sm leading-4 text-black">
                    {selectShoesSize}
                  </span>
                  <span>
                    <BiChevronDown
                      size={20}
                      style={{ color: "#c2c2c2" }}
                      className={`${
                        openShoesSize ? "rotate-[-180deg]" : ""
                      } duration-200`}
                    />{" "}
                  </span>
                </Popover>
              </div>

              <Link
                to="/"
                className="w-full bg-blue-500 flex items-center justify-center rounded-lg text-white py-4 mb-4 mt-6"
              >
                <span className="mr-[10px]">Следующий шаг</span>
                <img src={formArrowRightCircle} alt="" />
              </Link>
              <Link
                to="/"
                className="w-[360px] mx-auto bg-gray-400 flex items-center justify-center rounded-lg text-white mb-6 py-4"
              >
                <span className="mr-[10px]">Следующий шаг</span>
                <img src={formArrowRightCircle} alt="" />
              </Link>
            </div>
        </div>
      </div>
    </main>
  );
};
export default UserOfBodyMobile;
