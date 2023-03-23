import React, { useContext, useState, useMemo } from "react";
import { arrowBottom, AutummFemale, AutummMale, clothing, colors, dollarLogo, DotIcon, plus, SpringBoy, SpringChild, SpringFemale, SpringGirl, SpringMale, SummerFemale, SummerMale, WinterFemale, WinterMale } from "../../assets/imgs";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { styles } from "../../util/style";
import { Dropdown } from 'antd';
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";

import { Button, Divider, Popover, Segmented } from 'antd';
const BottomHeader = () => {
    const [dressInfo, setDressInfo] = useContext(dressMainData)

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

    const [personItems, setPersonItems] = useState([
        // { id: 1111, male: SpringMale, female: SpringFemale, boy: SpringBoy, girls: SpringGirl, childs: SpringChild },
        { id: 1111, man: SpringMale, woman: SpringFemale },
        { id: 2222, man: SummerMale, woman: SummerFemale },
        { id: 3333, man: AutummMale, woman: AutummFemale },
        { id: 4444, man: WinterMale, woman: WinterFemale },
    ])


    // ----------------Wear state management----------------------------
    const [openwear, setOpenwear] = useState(false);

    const handleOpenChangeWear = (newOpen) => {
        setOpenwear(newOpen);
    };
    const [selectWear, setselectWear] = useState("Clothing type");
    const handleWearValue = (value) => {
        setselectWear(value)
        setOpenwear(false);

    }
    const wearList = [
        { id: 1, type: "All Clothing types" },
        { id: 2, type: "Headwear" },
        { id: 3, type: "Outwear" },
        { id: 4, type: "Underwear" },
        { id: 5, type: "Legwear" },
        { id: 6, type: "Accessory" },
    ]
    const contentWear = (
        <div className="w-[170px] h-fit m-0 p-0">
            {
                wearList.map(data => {
                    return (
                        <p
                            key={data?.id}
                            onClick={() => {
                                handleWearValue(data?.type)
                            }
                            }
                            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-medium text-sm leading-4 text-center hover:bg-bgColor ${dataStyle}`}>{data?.type}</p>
                    )
                })
            }
        </div>
    );


    // --------------------------------------------
    // ----------------------Price State Management----------------------
    const [openPrice, setOpenOrice] = useState(false);

    const handleOpenChangePrice = (newOpen) => {
        setOpenOrice(newOpen);
    };
    const [selectPrice, setselectPrice] = useState("Under 100$");
    const handlePriceValue = (value) => {
        setselectPrice(value)
        setOpenOrice(false)
    }
    const priceList = [
        { id: 1, type: "At all prices" },
        { id: 2, type: "More than 500 $" },
        { id: 3, type: "Under 500$" },
        { id: 4, type: "Under 200$" },
        { id: 5, type: "Under 100$" },
        { id: 6, type: "Under 50$" },
    ]
    const contentPrice = (
        <div className="w-[170px] h-fit m-0 p-0">
            {
                priceList.map(data => {
                    return (
                        <p
                            key={data?.id}
                            onClick={() => {
                                handlePriceValue(data?.type)
                            }
                            }
                            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-medium text-sm leading-4 text-center hover:bg-bgColor ${dataStyle}`}>{data?.type}</p>
                    )
                })
            }
        </div>
    );
    const [changeColor, setChangeColor] = useState([
        { id: 1, value: 1, action: false, colors: "bg-black" },
        { id: 2, value: 2, action: false, colors: "bg-white" },
        { id: 3, value: 3, action: false, colors: "bg-zinc-500" },
        { id: 4, value: 4, action: false, colors: "bg-purple-500" },
        { id: 5, value: 5, action: false, colors: "bg-sky-600" },
        { id: 6, value: 6, action: false, colors: "bg-amber-400 " },
        { id: 7, value: 7, action: false, colors: "bg-green-700 " },
        { id: 8, value: 8, action: false, colors: "bg-amber-600 " },
        { id: 9, value: 9, action: false, colors: "bg-red-700  " },
        { id: 10, value: 10, action: false, colors: "bg-purple-800 " },
        { id: 11, value: 11, action: false, colors: "bg-blue-900  " },
        { id: 12, value: 12, action: false, colors: "bg-yellow-900 " },
    ]);
    const handleGetChecked = (info) => {
        const newState = changeColor.map((obj) => {
            if (obj.id === info) {
                if (obj.action) {
                    return { ...obj, action: false };
                } else {
                    return { ...obj, action: true };
                }
            }
            return obj;
        });
        setChangeColor(newState);
    };
    // --------------------------------------------
    const [textToColor, setTextToColor] = useState(false)

    return (
        <div className="flex flex-col justify-center items-center m-0 p-0 box-border ss:hidden md:block">
            <div className='max-w-[1280px] w-[100%] flex justify-center  py-3 items-center m-auto   '>

                <Popover
                    open={openwear}
                    onOpenChange={handleOpenChangeWear}
                    className="w-[190px] px-[17px] h-[44px]  rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
                    trigger="click"
                    options={['Hide']}
                    placement="bottom"
                    content={contentWear} >
                    <span><img src={clothing} alt="clothing" className="" /> </span>
                    <span className="not-italic font-medium text-center text-sm leading-4 text-black">{selectWear}</span>
                    <span><BiChevronDown size={20} style={{ color: "#c2c2c2" }} className={`${openwear ? "rotate-[-180deg]" : ""} duration-200`} /> </span>
                </Popover>
                <Popover
                    open={openPrice}
                    onOpenChange={handleOpenChangePrice}
                    className="w-[190px]  h-[44px]  rounded-lg bg-btnBgColor  border-searchBgColor border  flex items-center justify-between  cursor-pointer select-none group ml-2"
                    trigger="click"
                    options={['Hide']}
                    placement="bottom"
                    content={contentPrice} >
                    <p className="w-[48px] h-full flex items-center justify-center border-r border-searchBgColor"><img src={dollarLogo} alt="dollar full" /> </p>
                    <p className=" w-[142px] h-full flex justify-between items-center px-3">
                        <span className="not-italic font-medium text-center text-sm leading-4 text-black ">{selectPrice}</span>
                        <span className=""><BiChevronDown size={20} style={{ color: "#c2c2c2" }} className={`${openPrice ? "rotate-[-180deg]" : ""} duration-200`} /> </span>
                    </p>
                </Popover>


                <div className="flex items-center w-[536px] justify-start bg-btnBgColor overflow-hidden rounded-lg border-searchBgColor border h-[44px] ml-2">
                    <div onClick={() => setTextToColor(!textToColor)} className="w-[48px] cursor-pointer border-r border-searchBgColor h-full flex items-center justify-center" >
                        {/* <img src={colors} alt="" className="w-[21px]" /> */}
                        <div className=" w-fit h-fit flex items-center justify-center select-none ">
                            <div className={`w-[8px] h-[20px] flex items-end justify-center  py-[2px] border border-black  rounded-[3px] z-[25] bg-white rounded-b-[5px]`}>
                                <img src={DotIcon} alt="DotIcon" />
                            </div>
                            <div className={`w-[8px] h-[20px] border left-[-3px] top-[2px] z-[24] bg-white relative border-black rounded-[3px] duration-200  rounded-b-[5px] ${!textToColor ? "rotate-[45deg] " : "left-[-8px] top-[0.2px] rotate-[0deg]"}`}>
                            </div>
                            <div className={`w-[8px] h-[20px] border relative left-[-10px] top-[6px] z-[23] bg-white border-black rounded-[3px] duration-200  rounded-b-[5px] ${!textToColor ? "rotate-[90deg]" : "left-[-16px] top-[0.2px] rotate-[0deg]"}`}>
                            </div>
                        </div>
                    </div>

                    <div className={`${textToColor ? "w-0 px-0" : "w-[480px] px-3"} duration-500  h-full flex items-center justify-between  `}>
                        {changeColor?.map(data => {
                            return (
                                <div
                                    onClick={() => handleGetChecked(data?.id)}
                                    className={`rounded-full w-6 h-6 ${data?.colors} cursor-pointer flex items-center justify-center ${!textToColor && "border"}  border-borderColorCard	`} >
                                    {data?.action ? (
                                        <BsCheck2Square size={15} className={`text-white ${textToColor ? "hidden" : "block"}`} />
                                    ) : null}
                                </div>
                            )
                        })
                        }
                        {/* <div className="rounded-full w-6 h-6 bg-white cursor-pointer   border	border-gray-100	" ></div>
                        <div className="rounded-full w-6 h-6 bg-zinc-500 cursor-pointer    border	border-gray-100	" ></div>
                        <div className="rounded-full w-6 h-6 bg-purple-500 cursor-pointer   border border-gray-100	" ></div>
                        <div className="rounded-full w-6 h-6 bg-sky-600 cursor-pointer   border border-gray-100	" ></div>
                        <div className="rounded-full w-6 h-6 bg-amber-400 cursor-pointer   border	border-gray-100	" ></div>
                        <div className="rounded-full w-6 h-6 bg-green-700 cursor-pointer   border	border-gray-100	" ></div>
                        <div className="rounded-full w-6 h-6 bg-amber-600 cursor-pointer   border border-gray-100	" ></div>
                        <div className="rounded-full w-6 h-6 bg-red-700 cursor-pointer   border border-gray-100	" ></div>
                        <div className="rounded-full w-6 h-6 bg-purple-800 cursor-pointer   border border-gray-100	" ></div>
                        <div className="rounded-full w-6 h-6 bg-blue-900 cursor-pointer   border border-gray-100	" ></div>
                        <div className="rounded-full w-6 h-6 bg-yellow-900 cursor-pointer   border	border-gray-100	" ></div> */}
                    </div>
                    <div className={`${textToColor ? "w-[480px] " : " mr-[-500px]"} duration-500 px-3 overflow-hidden h-full  flex items-center `}>
                        Не давай своей гардеробной шкафной жизни стать скучной.
                    </div>
                </div>
                <div className="line h-6 border-r-[1px] text-textColor mx-3"></div>
                {
                    personItems?.filter(value => value.id === dressInfo?.type).map(data => {
                        return (
                            <div key={data?.id} className="w-fit flex items-center ">
                                <button className={`mr-1 ${genderStyle} font-medium w-[136px] h-[44px] px-[16px] justify-between mr-2 flex items-center bg-btnBgColor border border-searchBgColor rounded-lg`}>
                                    <img className="mr-3" src={data?.woman} alt="female" /><span> Женщинам</span>
                                </button>
                                <button className={` font-medium ${genderStyle} w-[136px] h-[44px]  px-[16px] justify-between flex items-center bg-btnBgColor border border-searchBgColor mr-2 rounded-lg`}>
                                    <img className="mr-3" src={data?.man} alt="male" />    <span>Мужчинам</span>
                                </button>
                            </div>
                        )
                    })
                }
                <button className="bg-btnBgColor font-medium w-[44px] h-[44px] flex items-center justify-center border border-searchBgColor rounded-lg">
                    <img src={plus} alt="" />
                </button>
            </div >
        </div >
    )
}

export default BottomHeader