import React from "react";
import { Link } from "react-router-dom";
import { adduser, baby, call, categoryContact, childre, dashborad, downIcons, error, femaleContact, footer, girls, homeTrend, list, locate, logo, man, map, maps, markets, message, privateCheck, russi, toRightIcons, upload } from "../../assets/imgs";
import { styles } from "../../util/style";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { RiFacebookCircleLine, RiMessengerLine } from "react-icons/ri";
const Footer = () => {

    return (

        <div className="w-full h-full  flex flex-col  box-border ">
            <div className='w-full h-full md:px-[130px] m-auto max-w-[1440px] xs:px-[100px] ss:px-[36px]  '>
                <div className='w-full h-full  '>
                    <div className="flex flex-wrap justify-between ss:p-0   py-7 px-10 md:border md:border-solid md:border-searchBgColor  ">
                        {/* 1 */}
                        <div className=" lg:w-1/5  ss:py-2   ss:w-full ss:mb-4    ">
                            <div className="flex items-center justify-between lg:block w-full py-1">
                                <Link to='#'>
                                    <img src={logo} alt="logo" />
                                </Link>
                                <Link to="#" className="flex items-center  lg:hidden">
                                    <img src={dashborad} alt="" />
                                    <span className="not-italic ml-2 font-medium text-sm leading-4">Dashboard</span>
                                </Link>
                            </div>
                            <div className="title text-textColor md:my-4 ss:my-2  mb-7 w-[200px] mt-9 lg:text-xs ">Dress.me official address:</div>
                            <div className="flex  items-center ss:justify-between md:justify-start">
                                <p className="w-12 h-12 mr-3 lg:hidden flex items-center justify-center rounded bg-white border border-solid border-searchBgColor"><img src={locate} alt="location" /></p>
                                <p className="not-italic font-normal text-base underline leading-4 lg:py-2 lg:leading-8 text-black">Uzbekistan, Tashkent city, Chilanzar district, N.hood “Mevazor”, 1A</p>
                            </div>
                        </div>
                        {/* 2 */}

                        <div className="lg:w-1/5 sm:py-3 ss:w-6/12  ">
                            <div className="font-medium w-fit  text-xl cursor-pointer ss:mb-2 ss:text-lg  md:mb-[30px] hover:border-b-2 hover:text-fullBlue hover:border-fullBlue">Menus</div>
                            <ul>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={error} alt="" />
                                        <span className="font-normal ml-2  ss:text-sm md:text-base">About us</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={adduser} alt="" />
                                        <span className="font-normal ml-2  ss:text-sm md:text-base">Vacancy</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={list} alt="" />
                                        <span className="font-normal ml-2  ss:text-sm md:text-base">Our Blog</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={categoryContact} alt="" />
                                        <span className="font-normal ml-2  ss:text-sm md:text-base">Catolog</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={maps} alt="" />
                                        <span className="font-normal ml-2  ss:text-sm md:text-base">Cite Maps</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        {/* 3 */}


                        <div className="lg:w-1/5 sm:py-3  ss:w-6/12  ">

                            <div className="font-medium w-fit  text-xl cursor-pointer   ss:mb-4 ss:text-lg md:mb-[30px] hover:border-b-2 hover:text-fullBlue hover:border-fullBlue">Categories</div>
                            <ul className="">
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={man} alt="" className="m-0" />
                                        <span className="font-normal ml-2  ss:text-sm md:text-base">Men</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={femaleContact} alt="" className="ml-[6px]" />
                                        <span className="font-normal ml-4  ss:text-sm md:text-base">Women</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={childre} alt="" />
                                        <span className="font-normal ml-2  ss:text-sm md:text-base">Children</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={girls} alt="" />
                                        <span className="font-normal ml-2  ss:text-sm md:text-base">Girls</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={baby} alt="" />
                                        <span className="font-normal ml-2  ss:text-sm md:text-base">Baby</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* 4 */}

                        <div className="ss:w-full lg:w-1/5">

                            <div className="ss:block lg:hidden w-full h-12 ss:flex items-center justify-center ss:my-4 rounded border border-solid border-borderColorCard ">
                                <p><img src={upload} alt="" /></p>
                                <p className="not-italic font-medium mx-2 text-base leading-4 text-black lg:text-xs">Форма для обратной связи</p>
                                <p><img src={toRightIcons} alt="img" /></p>
                            </div>

                            <div className="font-medium w-fit cursor-pointer text-xl ss:hidden    lg:block py-3  ss:mb-4 ss:text-lg md:mb-[18px] hover:border-b-2 hover:text-fullBlue hover:border-fullBlue">Feedback Form</div>


                            {/* 5 */}
                            <div className=" w-full h-fit ss:my-0   ">
                                <ul className="w-full lg:h-fit ss:h-10  lg:block ss:flex items-center justify-between ">
                                    <li className="lg:w-full ss:w-6/12 h-full  ss:flex items-center md:mb-2">
                                        <Link to='#' className="flex items-center">
                                            <img src={markets} alt="" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">Markets</span>
                                        </Link>
                                    </li>
                          <li className="lg:w-full ss:w-6/12 h-full   flex items-center md:mb-2">
                                        <Link to='#' className="flex items-center">
                                            <img src={message} alt="" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">Message</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="w-full lg:h-fit ss:h-10 lg:block ss:flex items-center justify-between ">

                                    <li className="lg:w-full ss:w-6/12 h-full flex items-center md:mb-2">
                                        <Link to='#' className="flex items-center">
                                            <img src={homeTrend} alt="" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">Business</span>
                                        </Link>
                                    </li>

                                    <li className="lg:w-full ss:w-6/12 h-full   lg:block ss:flex items-center md:mb-2">
                                        <Link to='#' className="flex items-center">
                                            <img src={call} alt="" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">Contact</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="w-full lg:h-fit ss:h-10  lg:block ss:flex items-center justify-between ">

                                    <li className="lg:w-full ss:w-6/12 h-full   flex items-center md:mb-2">
                                        <Link to='#' className="flex items-center">
                                            <img src={map} alt="" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">Maps</span>
                                        </Link>
                                    </li>


                                </ul>
                                <ul className="w-full lg:h-fit ss:h-10  lg:block ss:flex items-center justify-between ">

                                    <li className="lg:w-full ss:w-6/12 h-full   flex items-center md:mb-2">
                                        <Link to='#' className="flex items-center">
                                            <img src={list} alt="" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">My order</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="w-full lg:h-fit ss:h-10  lg:block ss:flex items-center justify-between md:mb-2">
                                    <li className="lg:w-full ss:w-6/12 h-full  flex items-center ">
                                        <Link to='#' className="flex items-center">
                                            <img src={privateCheck} alt="" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">Privacy Policy
                                            </span>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                            {/* 6 */}

                        </div>
                        <div className=" w-full h-11 lg:hidden flex items-center justify-between my-4  ">
                            <div className="w-[47%] h-full  flex items-center justify-center  border border-solid border-borderColorCard rounded">
                                <p><img src={locate} alt="" /></p>
                                <p className="not-italic font-medium ll:mx-5 ss:mx-2 ll:text-base ss:text-sm  leading-4 text-black">Toshkent</p>
                                <p><img src={downIcons} alt="img" /></p>
                            </div>
                            <div className="w-[47%] h-full flex items-center justify-center  border border-solid border-borderColorCard rounded">
                                <p><img src={russi} alt="" /></p>
                                <p className="not-italic font-medium ll:mx-5  ss:mx-2 ll:text-base ss:text-sm leading-4 text-black">Russia</p>
                                <p><img src={downIcons} alt="img" /></p>
                            </div>
                        </div>

                        {/* 7 */}
                        <div className="lg:w-1/5 ss:w-full sm:py-3   ">
                            <div className="font-medium w-fit  text-xl cursor-pointer  ss:mb-4 ss:text-lg md:mb-[30px] hover:border-b-2 hover:text-fullBlue hover:border-fullBlue">Social network</div>
                            <div className="w-full ss:flex lg:block items-center  ">

                                <ul className="ss:w-6/12 lg:w-full">
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <FiInstagram className="text-[20px]" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">Instagram</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <RiFacebookCircleLine className="text-[20px]" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">Facebook</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <RiMessengerLine className="text-[20px]" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">Message</span>
                                        </Link>
                                    </li>

                                </ul>
                                <ul className="text-start h-fit	  ">
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <TbBrandTelegram className="text-[20px]" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">Telegram</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <AiOutlineYoutube className="text-[20px]" />
                                            <span className="font-normal ml-2  ss:text-sm md:text-base">You Tube</span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className=" mb-[30px]  ">
                        <div className="left">
                            <div className="w-full flex items-center justify-start mt-10 font-medium text-xl mb-[30px]">Каталоги одежды</div>
                            <div className="w-full flex items-center flex-wrap ">

                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Students</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Business</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Classic</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Sport</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Free Style</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Muslim</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Travel</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Military</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Home</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Party</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Sneakers</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">T-Shorts</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Shorts</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Jeans</button>
                            </div>
                            <div className="w-full flex items-center justify-start mt-10 font-medium text-xl mb-[30px]">Типы одежды</div>
                            <div className="w-full flex items-center flex-wrap ">

                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Students</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Business</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Classic</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Sport</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Free Style</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Muslim</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Travel</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Military</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Home</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Party</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Sneakers</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">T-Shorts</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Shorts</button>
                                <button className="font-medium text-sm bg-searchBgColor rounded ss:py-[5px] ss:px-2 xs:py-[10px] xs:px-4 mr-4 mb-4">Jeans</button>
                            </div>

                            <div className="lg:flex ss:block  lg:justify-between ss:justify-center items-center  mt-10 ">
                                <div className=" ss:w-full  lg:w-fit flex justify-between  items-center font-medium ">
                                    <div className="flex justify-between items-center ">
                                        <img src={footer} alt="" /><span className="sm:text-base ss:text-xs">2022 — Dress.me</span>
                                    </div>
                                    <div>
                                        <span className="ml-6 sm:text-base ss:text-xs">All Rights reserved</span>
                                    </div>
                                </div>
                                <div className="font-medium text-center ss:mt-3 lg:m-0 ss:text-xs sm:text-base ">Designed by <Link to='#' className="text-fullBlue border-b border-fullBlue">Prince.UI</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer