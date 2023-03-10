import React, { useContext, useState, useEffect } from "react";
import { arrowBottom, clothing, colors, dollarLogo, plus } from "../../assets/imgs";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { styles } from "../../util/style";
import { Button, Dropdown } from 'antd';
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const BottomHeader = () => {
    const [dressInfo, setDressInfo] = useContext(dressMainData)
    const handleChange = (value) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };
    let dataStyle = ''
    let genderStyle = ''
    if (dressInfo?.type == 1111) {
        dataStyle = " hover:text-borderSpring "
        genderStyle = "focus:text-borderSpring focus:bg-bgSpring focus:border-borderSpring focus:text-borderSpring"
    }
    if (dressInfo?.type == 2222) {
        dataStyle = " hover:text-borderSummer"
        genderStyle = "focus:text-borderSummer focus:bg-bgSummer focus:border-borderSummer focus:text-borderSummer"
    }
    if (dressInfo?.type == 3333) {
        dataStyle = " hover:text-borderAutumm "
        genderStyle = "focus:text-borderAutumm focus:bg-bgAutumm focus:border-borderAutumm focus:text-borderAutumm"
    }
    if (dressInfo?.type == 4444) {
        dataStyle = " hover:text-borderWinter "
        genderStyle = "focus:text-borderWinter focus:bg-bgWinter focus:border-borderWinter focus:text-borderWinter"
    }
    const [selectWear, setselectWear] = useState("Clothing type");
    const handleWearValue = (value) => {
        setselectWear(value)
    }
    const wearList = [
        { id: 1, type: "All Clothing types" },
        { id: 2, type: "Headwear" },
        { id: 3, type: "Outwear" },
        { id: 4, type: "Underwear" },
        { id: 5, type: "Legwear" },
        { id: 6, type: "Accessory" },
    ]
    const [OpenWear, setOpenWear] = useState(false);

    const [selectPrice, setselectPrice] = useState("Under 100$");
    const handlePriceValue = (value) => {
        setselectPrice(value)
    }
    const priceList = [
        { id: 1, type: "At all prices" },
        { id: 2, type: "More than 500 $" },
        { id: 3, type: "Under 500$" },
        { id: 4, type: "Under 200$" },
        { id: 5, type: "Under 100$" },
        { id: 6, type: "Under 50$" },
    ]
    const [openPrice, setOpenPrice] = useState(false);


    return (
        <div className={`bottom w-full max-w-[1440px] md:px-[80px] mx-auto my-3 hidden md:block`}>

            <div className="flex items-center justify-between text-sm">
                <button className="w-fit flex items-center bg-bgColor px-3 h-12  rounded mr-2 border-searchBgColor border">
                    <img src={clothing} alt="clothing" className="" />
                    {/* <span className="font-medium mr-[35px] text-sm">Тип одежды</span> */}
                    <div className="w-[130px] font-medium  h-[100%] ">
                        <div
                            onClick={() => setOpenWear(!OpenWear)}
                            className={`bg-bgColor w-full h-12 flex flex-col items-center justify-center ${!selectWear && "text-gray-700"
                                }`}
                        >
                            {selectWear}
                        </div>
                        <ul
                            className={`bg-white w-[200px] ml-[-33px] mt-2 overflow-y-auto relative
                            z-50 rounded shadow-lg	 ${OpenWear ? "max-h-60" : "max-h-0"
                                } `}
                        >
                            {wearList.map(data => {
                                return (
                                    <li
                                        key={data?.id}
                                        className={`p-2 text-sm hover:bg-bgColor ${dataStyle}`}
                                        onClick={() => {
                                            handleWearValue(data?.type)
                                            setOpenWear(false)
                                        }
                                        }
                                    >
                                        {data?.type}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <BiChevronDown size={25} style={{ color: "#c2c2c2" }} className={`${OpenWear && "rotate-180"} `} />


                </button>
                <button className="h-12 flex items-center bg-bgColor rounded mr-2 pr-3 border-searchBgColor border">
                    <img src={dollarLogo} alt="dollar full" className="px-[18px] py-3 border-r h-full" />
                    <div className="w-[130px] font-medium  h-[100%] ">
                        <div
                            onClick={() => setOpenPrice(!openPrice)}
                            className={`bg-bgColor w-full h-12 flex flex-col items-center justify-center ${!selectPrice && "text-gray-700"
                                }`}
                        >
                            {selectPrice}
                        </div>
                        <ul
                            className={`bg-white w-[200px] ml-[-33px] mt-2 overflow-y-auto relative
                            z-50 rounded shadow-lg	 ${openPrice ? "max-h-60" : "max-h-0"
                                } `}
                        >
                            {priceList.map(data => {
                                return (
                                    <li
                                        key={data?.id}
                                        className={`p-2 text-sm hover:bg-bgColor ${dataStyle}`}
                                        onClick={() => {
                                            handlePriceValue(data?.type)
                                            setOpenPrice(false)
                                        }
                                        }
                                    >
                                        {data?.type}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <BiChevronDown size={25} style={{ color: "#c2c2c2" }} className={`${openPrice && "rotate-180"} `} />
                    {/* <img src={arrowBottom} alt="arrow bottom" /> */}
                </button>
                <div className="flex items-center justify-between bg-bgColor rounded border-searchBgColor border h-12">
                    <img src={colors} alt="" className="px-[18px] py-[14px] border-r h-full mr-3" />
                    <label className="rounded-full w-6 h-6 bg-black cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color1">
                        <input className="hidden" type="checkbox" id="Color1" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-white cursor-pointer border border-solid mr-2	border-borderColorCard" htmlFor="Color2">
                        <input className="hidden" type="checkbox" id="Color2" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-zinc-500 cursor-pointer  border border-solid mr-3	border-borderColorCard" htmlFor="Color3">
                        <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-purple-500 cursor-pointer border border-solid mr-2 border-borderColorCard" htmlFor="Color4">
                        <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-sky-600 cursor-pointer border border-solid mr-2 border-borderColorCard" htmlFor="Color1">
                        <input className="hidden" type="checkbox" id="Color1" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-amber-400 cursor-pointer border border-solid mr-2	border-borderColorCard" htmlFor="Color2">
                        <input className="hidden" type="checkbox" id="Color2" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-green-700 cursor-pointer border border-solid mr-2	border-borderColorCard" htmlFor="Color3">
                        <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-amber-600 cursor-pointer border border-solid mr-2 border-borderColorCard" htmlFor="Color4">
                        <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-red-700 cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color1">
                        <input className="hidden" type="checkbox" id="Color1" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-purple-800 cursor-pointer border border-solid mr-2 border-borderColorCard" htmlFor="Color2">
                        <input className="hidden" type="checkbox" id="Color2" name="colors" value="1" />
                    </label>
                    <label className="rounded-full  w-6 h-6 bg-blue-900 cursor-pointer border border-solid mr-2 border-borderColorCard" htmlFor="Color3">
                        <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                    </label>
                    <label className="rounded-full w-6 h-6 bg-yellow-900 cursor-pointer border border-solid mr-3	border-borderColorCard" htmlFor="Color4">
                        <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                    </label>
                </div>
                <div className="line h-6 border text-textColor mx-3"></div>
                <button className={`mr-1 ${genderStyle} font-medium w-[111px] h-12 border border-searchBgColor rounded`}>
                    Женщинам
                </button>
                <button className={` font-medium ${genderStyle} w-[111px] h-12 border  border-searchBgColor mr-1 rounded`}>
                    Мужчинам
                </button>
                <button className="bg-bgColor font-medium w-12 h-12 flex items-center justify-center border border-searchBgColor rounded">
                    <img src={plus} alt="" />
                </button>
            </div>

        </div>
    )
}

export default BottomHeader