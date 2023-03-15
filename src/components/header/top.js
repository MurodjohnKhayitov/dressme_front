import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { business, eng, englishFlag, glasses, help, location, order, ru, russiaFlag, shop, uzbekFlag } from "../../assets/imgs";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { styles } from "../../util/style";
// import { Select, Space } from 'antd';
import { Button, Divider, Popover, Segmented } from 'antd';
const TopHeader = () => {


    const [dressInfo, setDressInfo] = useContext(dressMainData)

    const SeasonTypeArray = [
        { id: 1, type: "Uzbekcha", icons: uzbekFlag },
        { id: 2, type: "Russian", icons: russiaFlag },
        { id: 3, type: "English", icons: englishFlag }
    ]


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
    // -----Language Change-------------------
    const [selectLang, setselectLang] = useState(1);

    const LanguageList = [
        { id: 1, type: "Uzbekcha", icons: uzbekFlag },
        { id: 2, type: "Russian", icons: russiaFlag },
        { id: 3, type: "English", icons: englishFlag }
    ]

    const [openLang, setOpenLang] = useState(false);

    const handleOpenChangeWear = (newOpen) => {
        setOpenLang(newOpen);
    };

    const handleLangValue = (value) => {
        setselectLang(value)
        setOpenLang(false);
    }

    const contentLang = (
        <div className="w-[98px] h-fit m-0 p-0">
            {
                LanguageList.map(data => {
                    return (
                        <div
                            key={data?.id}
                            className={`p-2 text-sm cursor-pointer hover:bg-bgColor flex items-center justify-center ${dataStyle}`}
                            onClick={() => {
                                handleLangValue(data?.id)
                            }
                            }
                        >
                            <span className="mr-1"><img src={data?.icons} alt="" /></span>
                            <span className={`not-italic font-normal text-sm leading-4 text-black ${dataStyle}`}>{data?.type}</span>
                        </div>
                    )
                })
            }
        </div>
    );


    // -------City Change -------------
    const [selectCity, setSelectCity] = useState("Tashkent");
    const [openRegion, setOpenRegion] = useState(false);

    const handleOpenChangeCity = (newOpen) => {
        setOpenRegion(newOpen);
    };

    const handleCityValue = (value) => {
        setSelectCity(value)
        setOpenRegion(false);
    }


    const CityList = [
        { id: 1, type: "Samarqand" },
        { id: 2, type: "Sirdaryo" },
        { id: 3, type: "Jizzax" },
        { id: 4, type: "Andijon" },
        { id: 5, type: "Xorazm" },
        { id: 6, type: "Navoiy" },
    ]


    const contentCity = (
        <div className="w-[100px] h-fit m-0 p-0">
            {
                CityList.map(data => {
                    return (
                        <div
                            key={data?.id}
                            className={`p-2  text-sm text-start hover:bg-bgColor cursor-pointer ${dataStyle}`}
                            onClick={() => {
                                handleCityValue(data?.type)
                            }
                            }
                        >
                            {data?.type}
                        </div>
                    )
                })
            }
        </div>
    );

    return (
        <div className="flex flex-col justify-center items-center top bg-bgColor ss:hidden md:block m-0 p-0 box-border">
            <div className='max-w-[1280px] w-[100%] h-[32px] py-[2px] flex justify-between items-center m-auto  '>

                <div className="left h-full flex items-center  ">
                    <Link to="/" className="flex w-fit items-center">
                        <img src={location} alt="location" className="mr-2" />
                        <span className="text-textColor text-[13px] mr-[6px] font-medium">Город:</span>
                        <div className="w-[90px] font-medium   flex items-center ">
                            <Popover
                                open={openRegion}
                                onOpenChange={handleOpenChangeCity}
                                className=" flex text-[13px] mt-1 items-center  "
                                trigger="click"
                                options={['Hide']}
                                placement="bottom"
                                content={contentCity} >
                                <a className="border-b border-slate-900" href="#">{selectCity}</a>
                            </Popover>

                          
                        </div>
                    </Link>

                    <div className="w-[98px] h-full rounded bg-white ml-[15px]  font-medium select-none cursor-pointer">

                        {
                            LanguageList.filter(data => data.id === selectLang).map(data => {
                                return (
                                    <Popover
                                        key={data?.id}
                                        open={openLang}
                                        onOpenChange={handleOpenChangeWear}
                                        className="w-full flex text-[13px] h-full px-3 items-center "
                                        trigger="click"
                                        options={['Hide']}
                                        placement="bottom"
                                        content={contentLang} >
                                        <span className="mr-1"><img src={data?.icons} alt="" /></span>
                                        <span>{data?.type}</span>
                                    </Popover>
                                )
                            })
                        }

                    </div>


                    <div className="flex h-full px-[11px] items-center bg-white rounded ml-3 cursor-pointer ">
                        <img src={glasses} alt="glasses" className="mr-2" />
                        <span className="font-medium text-[13px]">Спец. возможности</span>
                    </div>
                </div>
                <div className="right h-full flex items-center ">
                    <Link to="#" className="flex items-center h-full ">
                        <img src={help} alt="help" className="mr-2" />
                        <span className="text-textColor text-[13px] font-medium">Помощь</span>
                    </Link>
                    <Link to="#" className="flex items-center h-full  ml-6">
                        <img src={business} alt="business" className="mr-2" />
                        <span className="text-textColor text-[13px] font-medium">Бизнес</span>
                    </Link>
                    <div className="line h-5 border text-textColor ml-6"></div>
                    <Link to="#" className="flex items-center h-full  ml-6">
                        <img src={order} alt="my orders" className="mr-2" />
                        <span className="text-textColor  text-[13px] font-medium">Мои заказы</span>
                    </Link>
                    <button className="flex items-center bg-white rounded cursor-pointer h-full  ml-6 px-3">
                        <img src={shop} alt="shop" className="mr-2" />
                        <span className="font-medium  text-[13px]">Магазины</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TopHeader