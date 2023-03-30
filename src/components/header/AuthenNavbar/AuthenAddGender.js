import React, { useContext, useState, useMemo } from "react";
import { AutummFemale, AutummMale, clothing, colors, dollarLogo, DotIcon, InputCheck, plus, SpringBoy, SpringChild, SpringFemale, SpringGirl, SpringMale, SummerFemale, SummerMale, WinterFemale, WinterMale } from "../../../assets/imgs";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { MdAdd } from "react-icons/md";
const AthenAddGender = () => {
    const [dressInfo, setDressInfo] = useContext(dressMainData)
    let dataStyle = ''
    let genderStyle = ''
    // let genderType = ''
    if (dressInfo?.type == 1111) {
        dataStyle = " hover:text-borderSpring "
        genderStyle = "focus:text-borderSpring focus:bg-bgSpring focus:border-borderSpring"
        // genderType = "ring-1 ring-inset text-borderSpring ring-borderSpring bg-bgSpring"
    }
    if (dressInfo?.type == 2222) {
        dataStyle = " hover:text-borderSummer"
        genderStyle = "focus:text-borderSummer focus:bg-bgSummer focus:border-borderSummer"
    }
    if (dressInfo?.type == 3333) {
        dataStyle = " hover:text-borderAutumm "
        genderStyle = "focus:text-borderAutumm focus:bg-bgAutumm focus:border-borderAutumm"
    }
    if (dressInfo?.type == 4444) {
        dataStyle = " hover:text-borderWinter "
        genderStyle = "focus:text-borderWinter focus:bg-bgWinter focus:border-borderWinter"
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
                            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dataStyle}`}>{data?.type}</p>
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
                            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dataStyle}`}>{data?.type}</p>
                    )
                })
            }
        </div>
    );
    const [changeColor, setChangeColor] = useState([
        { id: 1, data: 1, icons: InputCheck, action: false, colors: "bg-black" },
        { id: 2, data: 2, icons: InputCheck, action: false, colors: "bg-white" },
        { id: 3, data: 3, icons: InputCheck, action: false, colors: "bg-zinc-500" },
        { id: 4, data: 4, icons: InputCheck, action: false, colors: "bg-purple-500" },
        { id: 5, data: 5, icons: InputCheck, action: false, colors: "bg-sky-600" },
        { id: 6, data: 6, icons: InputCheck, action: false, colors: "bg-amber-400 " },
        { id: 7, data: 7, icons: InputCheck, action: false, colors: "bg-green-700 " },
        { id: 8, data: 8, icons: InputCheck, action: false, colors: "bg-amber-600 " },
        { id: 9, data: 9, icons: InputCheck, action: false, colors: "bg-red-700  " },
        { id: 10, data: 10, icons: InputCheck, action: false, colors: "bg-purple-800 " },
        { id: 11, data: 11, icons: InputCheck, action: false, colors: "bg-blue-900  " },
        { id: 12, data: 12, icons: InputCheck, action: false, colors: "bg-yellow-900 " },
    ]);
    const [getRadio, setGetRadio] = useState('')
    const colorIdPushContext = (id) => {
        setDressInfo({ ...dressInfo, ClothesBorder: id })
    }
    // --------------------------------------------
    const [textToColor, setTextToColor] = useState(false)

    return (
        <div className="flex flex-col justify-center items-center m-0 p-0 box-border ss:hidden md:block">
            <div className='max-w-[1280px] w-[100%] flex justify-center  py-3 items-center m-auto   '>






                {
                    personItems?.filter(value => value.id === dressInfo?.type).map(data => {
                        return (
                            <div key={data?.id} className="w-fit flex items-center ">
                                <button className={`mr-1 ${genderStyle}  w-[136px] h-[44px] px-[16px] justify-between mr-2 flex items-center bg-btnBgColor border border-searchBgColor rounded-lg`}>
                                    <img className="mr-3" src={data?.woman} alt="female" />
                                    <span className="mt-1 font-AeonikProMedium not-italic text-sm leading-4 tracking-[0,16px]">Женщинам</span>
                                </button>
                                <button className={`mr-1 ${genderStyle}  w-fit h-[44px] px-[16px] justify-between mr-2 flex items-center bg-btnBgColor border border-searchBgColor rounded-lg`}>
                                    <span className="mr-3" ><MdAdd /></span>
                                    <span className=" mt-1 not-italic font-AeonikProMedium text-sm leading-4 tracking-[0,16px]">Добавить персонажа</span>
                                </button>
                                <button className={`  ${genderStyle} w-[136px] h-[44px]  px-[16px] justify-between flex items-center bg-btnBgColor border border-searchBgColor mr-2 rounded-lg`}>
                                    <img className="mr-3" src={data?.man} alt="male" />
                                    <span className="mt-1 font-AeonikProMedium not-italic  text-sm leading-4 tracking-[0,16px]">Мужчинам</span>
                                </button>
                            </div>
                        )
                    })
                }

            </div >
        </div >
    )
}

export default AthenAddGender