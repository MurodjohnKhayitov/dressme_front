import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { arrowBottomBlack, arrowBottomRight, autummBrand, autummSeason, blog, booking, brush, bucket, business, businessBlack, catalog, close, clothing, contact, dashboard, dollar, eng, female, heart, help, helpBlack, location, logo, logoo, male, map, menu, search, shop, springBrand, springSeason, summerBrand, summerSeason, topBrands, user, voice, winter, winterBrand, winterSeason, } from "../../assets/imgs";
import { styles } from "../../util/style";
import { Button, Dropdown } from 'antd';
import { dressMainData } from "../../ContextHook/ContextMenu";

const MediumHeader = () => {
    const [dressInfo, setDressInfo] = useContext(dressMainData)
    const [hamburgerMenu, setHamburgerMenu] = useState(true);
    const [toggle, setToggle] = useState(false);

    // const [changeGenderColor, setChangeGenderColor] = useState(false)
    let dataStyle = ''
    if (dressInfo?.type === 1111) {
        dataStyle = "green-800"
    }
    if (dressInfo?.type === 2222) {
        dataStyle = "yellow-500"
    }
    if (dressInfo?.type === 3333) {
        dataStyle = "orange-600"
    }
    if (dressInfo?.type === 4444) {
        dataStyle = "blue-600"
    }

    const SeasonTypeArray = [
        { id: 1111, type: "Spring", icons: springSeason },
        { id: 2222, type: "Summer", icons: summerSeason },
        { id: 3333, type: "Autumm", icons: autummSeason },
        { id: 4444, type: "Winter", icons: winterSeason },
    ]
    const BrandTypeArray = [
        { id: 1111, type: "Spring", icons: springBrand },
        { id: 2222, type: "Summer", icons: summerBrand },
        { id: 3333, type: "Autumm", icons: autummBrand },
        { id: 4444, type: "Winter", icons: winterBrand },
    ]
    console.log(dressInfo.type, "dressInfo");
    const handleSeason = (id) => {
        setDressInfo({
            type: id
        })
        console.log(id, "HandleSeasonb");
    }
    const items = [
        {
            key: '1',
            label: (
                <div>{
                    SeasonTypeArray.map((value, index) => {
                        return (
                            <p className='w-full  sm:flex items-center  mt-1 hover:bg-slate-200 select-none' onClick={() => handleSeason(value.id)}>
                                <span className='mr-3 '><img src={value?.icons} alt="" /></span>
                                <span className='font-medium text-base text-black not-italic'>{value?.type}</span>
                            </p>
                        )
                    })

                }
                </div>
            ),
        },

    ];
    const toggleHamburger = () => setHamburgerMenu((val) => !val);

    return (

        <div className="w-full max-w-[1440px] md:px-[80px] mx-auto px-4">

            {/* Starting Full Screen page section */}
            <div className="w-full flex justify-between items-center py-3">

                <div className=" w-full flex items-center ss:w-full md:w-fit md:justify-between">

                    {/* Menu section */}
                    <div onClick={toggleHamburger} className={`flex items-center justify-center bg-bgColor border px-4 h-12 rounded cursor-pointer md:hidden`}>

                        <img src={!hamburgerMenu ? close : menu} alt="voice" className={`${close ? 'w-6 h-6' : ''} `} />

                        {/*Starting of Opened Hamburger menu section */}
                        <div className={`${!hamburgerMenu ? "hamburger flex flex-col ease-linear duration-500" : "left-[-1000px] ease-linear duration-500"} top-[75px] left-0 fixed right-0 w-full bg-white z-10 h-full overflow-y-scroll ss:px-[15px] ll:flex-fit`}>

                            {/* Searching section */}
                            <div className="search flex items-center justify-between rounded font-medium h-12 mt-6 mb-6 border border-searchBg ss:mt-3 md:hidden w-full">
                                <img src={search} alt="search" className=" flex ss:pl-[11.65px] md:hidden" />
                                <input type="text" placeholder="Search products or brands" className="bg-transparent w-full px-3 h-12 text-[14px] border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12" />
                            </div>
                            {/* Music and Map selection for Mobile */}
                            <div className="flex items-center justify-between h-11 mb-4">
                                <button className="left py-[9px] px-10 rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                                    <img src={voice} alt="misic" />
                                    <span className="ml-[10px]">Music</span>
                                </button>
                                <Link to="#" className="right px-10 py-[9px] rounded flex items-center justify-center font-medium border border-gray-300 bg-bgColor ss:w-[48%]">
                                    <img src={map} alt="map" />
                                    <span className="ml-[10px]">Map</span>
                                </Link>
                            </div>

                            {/* Categories */}
                            <ul className="flex flex-col">
                                <li>
                                    <button className="flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 w-full">
                                        <div className="flex items-center">
                                            <span className="border-r border-gray-300 py-3 pr-5">
                                                <img src={dashboard} alt="" />
                                            </span>
                                            <span className="ml-[11.67px]">Dashboard (demo)</span>
                                        </div>
                                        <img src={arrowBottomRight} alt="" className="arrowRotate ml-auto" />
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 w-full">
                                        <div className="flex items-center">
                                            <span className="border-r border-gray-300 py-3 pr-5">
                                                <img src={businessBlack} alt="" />
                                            </span>
                                            <span className="ml-[11.67px]">Business</span>
                                        </div>
                                        <img
                                            src={arrowBottomRight}
                                            alt=""
                                            className="arrowRotate ml-auto"
                                        />
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 w-full">
                                        <div className="flex items-center">
                                            <span className="border-r border-gray-300 py-3 pr-5">
                                                <img src={booking} alt="" />
                                            </span>
                                            <span className="ml-[11.67px]">My orders</span>
                                        </div>
                                        <img
                                            src={arrowBottomRight}
                                            alt=""
                                            className="arrowRotate ml-auto"
                                        />
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 w-full">
                                        <div className="flex items-center">
                                            <span className="border-r border-gray-300 py-3 pr-5">
                                                <img src={shop} alt="" />
                                            </span>
                                            <span className="ml-[11.67px]">Shop</span>
                                        </div>
                                        <img
                                            src={arrowBottomRight}
                                            alt=""
                                            className="arrowRotate ml-auto"
                                        />
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 w-full">
                                        <div className="flex items-center">
                                            <span className="border-r border-gray-300 py-3 pr-5">
                                                <img src={blog} alt="" />
                                            </span>
                                            <span className="ml-[11.67px]">My blog</span>
                                        </div>
                                        <img
                                            src={arrowBottomRight}
                                            alt=""
                                            className="arrowRotate ml-auto"
                                        />
                                    </button>
                                </li>
                            </ul>

                            {/*Help and Contact selection for Mobile */}
                            <div className="flex items-center justify-between h-11 mb-4">
                                <button className="left py-[9px] px-10 rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                                    <img src={helpBlack} alt="misic" />
                                    <span className="ml-[10px]">Help</span>
                                </button>
                                <Link to="#" className="left py-[9px] px-10 rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                                    <img src={contact} alt="map" />
                                    <span className="ml-[10px]">Contact</span>
                                </Link>
                            </div>

                            {/* Line */}
                            <div className="line border-b w-[300px] border-gray-300 mb-4 ls:w-full"></div>

                            {/* Location and Language */}
                            <div className="flex items-center justify-between h-11 mb-4">
                                <button className="left py-[9px] px-10 rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                                    <img src={location} alt="music" />
                                    <span className="ml-[10px] mr-5">Tashkent</span>
                                    <img src={arrowBottomBlack} alt="" />
                                </button>
                                <Link to="#" className="left py-[9px] px-10 rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                                    <img src={eng} alt="map" />
                                    <span className="ml-[10px] mr-5">English</span>
                                    <img src={arrowBottomBlack} alt="map" />
                                </Link>
                            </div>
                        </div>
                        {/*Ending of Opened Hamburger menu section */}

                    </div>

                    {/* Logo section */}
                    <div className=" flex justify-center items-center rounded h-12 ss:bg-bgColor border border-searchBgColor ss:px-2 ss:mx-3 ls:px-6 ls:mx-3 ll:px-10 ss:w-fit md:bg-white md:px-0 md:border-none">
                        {
                            BrandTypeArray.filter(data => data.id == dressInfo.type).map(data => {
                                return (
                                    <img src={data?.icons} alt="logo" />
                                )
                            })
                        }
                    </div>
                    {/* Voice section */}
                    <div
                        className={`${styles.flexCenter} bg-bgColor border border-searchBgColor px-4  h-12 rounded cursor-pointer hidden md:flex`}>
                        <img src={voice} alt="voice" />
                    </div>

                    {/* Weather section */}
                    {/* <div className={`flex items-center ss:w-fit bg-bgColor px-4 mx-4 h-12 border rounded cursor-pointer md:justify-center md:ml-[25px]`}>
                        <img src={winter} alt="weather" className="mr-0 md:mr-[10px]" />
                        <span className="font-medium hidden md:block text-[15px]">Зима</span>
                    </div> */}
                    <div className='w-30 h-12 mx-4 bg-bgColor'>


                        {
                            SeasonTypeArray.filter(data => data.id == dressInfo.type).map(data => {
                                return (

                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        placement="bottom"
                                        arrow={{
                                            pointAtCenter: true,
                                        }}
                                        className='md:w-[120px] h-full flex items-center justify-center border rounded  ss:w-fit bg-white  cursor-pointer  '
                                    >
                                        <p className='w-full h-full  sm:flex items-center  select-none cursor-pointer' >
                                            <img src={data?.icons} alt="weather" className="mr-0 md:mr-[5px]" />
                                            <span className="font-medium hidden md:block text-[15px]">{data?.type}</span>
                                        </p>
                                    </Dropdown>
                                )
                            })
                        }
                    </div>





                    {/* Searching section */}
                    <div className="search flex items-center justify-between rounded font-medium h-12 border border-searchBgColor md:border-transparent md:w-[578px] ss:hidden md:flex">
                        {/* Catalog section */}
                        <button className="items-center bg-catalogBg pl-5 pr-7 h-12 rounded-l cursor-pointer hidden md:flex">
                            <img src={catalog} alt="catalog" />
                            <span className={`text-${dataStyle} px-[9.5px] font-medium text-[15px]`}>Каталог</span>
                        </button>
                        <img src={search} alt="search" className="flex md:hidden" />
                        <input type="text" placeholder="Поиск продуктов или брендов" className="bg-transparent w-full px-3 h-12 text-sm border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12" />
                        <button className="bg-searchBgColor w-[100px] h-12 items-center justify-center rounded-r border border-bgColor hidden md:flex">
                            <img src={search} alt="search" />
                        </button>
                    </div>

                    {/* Line border */}
                    <div className="line h-5 border text-textColor mx-3 hidden md:flex"></div>

                    {/* Map section */}
                    <Link to="#" className="flex items-center justify-center bg-bgColor border border-searchBgColor rounded px-4 h-10 mt-3 md:h-12 ss:text-sm md:w-[98px] md:mt-0 ss:hidden md:flex">
                        <img src={map} alt="map" className="pr-[6px]" />
                        <span className="font-medium text-sm">Карта</span>
                    </Link>

                    {/* Line border */}
                    <div className="line h-5 border text-textColor mx-3 hidden md:flex"></div>

                    {/* User section */}
                    <button className=" items-center bg-bgColor border border-searchBgColor rounded px-4 h-12 mr-2 hidden md:flex">
                        <img src={user} alt="" />
                    </button>

                    {/* Heart section */}
                    <button className="items-center bg-bgColor border border-searchBgColor rounded px-4 h-12 mr-2 hidden md:flex">
                        <img src={heart} alt="heart" />
                    </button>

                    {/* Bucket section */}
                    <button className=" items-center bg-bgColor border border-searchBgColor rounded px-4 h-12 relative md:flex ss:hidden">
                        <img src={bucket} alt="bucket" />
                        <span className="count bg-red-700 w-4 h-4 text-white text-[10px] rounded flex items-center justify-center absolute top-0 right-0 font-medium"> 4 </span>
                    </button>
                </div>

            </div>
            {/* Ending of Full Screen page sesction */}

            {/*Starting of Blocked  Hamburger Menu section */}
            <div className={`md:hidden `}>

                <div className="flex items-center justify-between w-full ">

                    {/* Searching section */}
                    <div className="search flex items-center rounded font-medium h-10 mt-3 border ss:w-[65%] ls:w-[70%] ll:w-[72%]">
                        <img src={search} alt="search" className="pl-[11.65px]" />
                        <input type="text" placeholder="Search..." className="bg-transparent w-full text-[14px] border border-transparent px-2" />
                    </div>

                    {/* Map section */}
                    <Link to="#" className="flex items-center w-full justify-center bg-bgColor border border-searchBgColor rounded ss:px-4 h-10 mt-3 ss:w-[30%] ls:w-[25%] ll:w-[23%]" >
                        <img src={map} alt="map" className="pr-[6px]" />
                        <div className="font-medium">Map</div>
                    </Link>

                </div>

                {/* Gender selection for Mobile */}
                <div className="flex flex-wrap items-center justify-between mt-6 rounded  mb-4 w-full">

                    <button className={` left px-10 h-10 py-[7.5px] flex items-center justify-center font-medium rouded border  border-solid border-gray-200 rounded drob-shadow-md ss:w-[47%] ls:w-[48%] sm:w-[30%]`}>
                        <img src={female} alt="female" />
                        <span className="ml-[10px]">Woman</span>
                    </button>

                    <button className={`right px-10 h-10 py-[9px] rounded flex items-center bg-bgColor border  border-solid border-gray-200 justify-center font-medium ss:w-[47%] ls:w-[48%] sm:w-[30%]`} >
                        <img src={male} alt="male" />
                        <span className="ml-[10px]">Man</span>
                    </button>

                    <button onClick={() => { setToggle(!toggle); }} className="flex items-center bg-btnBgColor font-medium h-10 rounded border border-gray-200 px-5 ss:w-full sm:w-[30%] ss:mt-4 sm:m-0">
                        <div className="flex items-center ml-auto">
                            <img src={clothing} alt="" />
                            <span className="ml-[11.67px]">Clothing options</span>
                        </div>
                        <img src={arrowBottomBlack} alt="" className="arrowRotate ml-auto" />
                    </button>

                </div>

                {/* Params for Mobile */}
                <div className={`${toggle ? "closeFile" : "openFile h-0 mb-0"} md:hidden`}>

                    <ul className="ss:w-full my-4 bg-white">
                        <li>
                            <button className="ss:w-full flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">

                                <div className="flex items-center">
                                    <span className="border-r border-gray-300 py-3 pr-5">
                                        <img src={clothing} alt="" />
                                    </span>
                                    <span className="ml-[11.67px]">Clothing options</span>
                                </div>
                                <img src={arrowBottomRight} alt="" className="arrowRotate ml-auto" />

                            </button>
                        </li>
                        <li>
                            <button className="flex items-center w-full bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">

                                <div className="flex items-center">
                                    <span className="border-r border-gray-300 py-3 pr-5">
                                        <img src={dollar} alt="" />
                                    </span>
                                    <span className="ml-[11.67px]">Up to 500.000 sum</span>
                                </div>
                                <img src={arrowBottomRight} alt="" className="arrowRotate ml-auto" />

                            </button>
                        </li>
                        <li>
                            <button className="w-full flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">

                                <span className="border-r w-[60px] border-gray-300 py-3 pr-5">
                                    <img src={brush} alt="" />
                                </span>

                                <div className="flex items-center overflow-x-scroll">
                                    <div className="ml-[11.67px] flex items-center">
                                        <div className=" w-full h-[48px] flex justify-between items-center px-4   border-t	 border-solid	border-borderColorCard">
                                            <label className="rounded-full mr-1 w-6 h-6 bg-purple-500 cursor-pointer  border border-solid border-borderColorCard" htmlFor="Color1">
                                                <input className="hidden" type="checkbox" id="Color1" name="colors" value="1" />
                                            </label>
                                            <span className="mr-2">purple,</span>
                                            <label className="rounded-full mr-2 w-6 h-6 bg-green-600 cursor-pointer  border	 border-solid	border-borderColorCard" htmlFor="Color2" >
                                                <input className="hidden" type="checkbox" id="Color2" name="colors" value="1" />
                                            </label>
                                            <span className="mr-2">green,</span>
                                            <label className="rounded-full mr-1 w-6 h-6 bg-red-700 cursor-pointer  border	 border-solid	border-borderColorCard" htmlFor="Color3" >
                                                <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                                            </label>
                                            <span className="mr-2">red,</span>
                                            <label className="rounded-full mr-1 w-6 h-6 bg-yellow-500 cursor-pointer  border	border-solid border-borderColorCard" htmlFor="Color4" >
                                                <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                                            </label>
                                            <span className="mr-2">yellow,</span>
                                        </div>
                                    </div>
                                </div>

                                <span className="w-[40px]">
                                    <img src={arrowBottomRight} alt="" className="arrowRotate ml-auto" />
                                </span>

                            </button>
                        </li>
                        <li>
                            <button className="w-full flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">

                                <div className="flex items-center">
                                    <span className="border-r border-gray-300 py-3 pr-5">
                                        <img src={topBrands} alt="" />
                                    </span>
                                    <span className="ml-[11.67px]">Top Brands</span>
                                </div>
                                <img src={arrowBottomRight} alt="" className="arrowRotate ml-auto" />

                            </button>
                        </li>
                    </ul>

                </div>

            </div>
            {/* Ending of Blocked  Hamburger Menu section  */}
        </div >

    );
};
export default MediumHeader;
