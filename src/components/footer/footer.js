import React from "react";
import { Link } from "react-router-dom";
import { adduser, arrowBottomBlack, arrowBottomRight, baby, business, call, categoryContact, children, dashborad, downIcons, error, feedbackIcon, femaleContact, footer, girls, homeTrend, list, locate, location, logo, logoo, man, map, maps, markets, message, privateCheck, ru, shop, toRightIcons, upload } from "../../assets/imgs";
import { styles } from "../../util/style";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { RiFacebookCircleLine, RiMessengerLine } from "react-icons/ri";
const Footer = () => {

    return (

        <div>
            <div className='w-full h-full m-auto max-w-[1440px] xs:px-[100px] md:px-[80px] ss:bg-btnBgColor md:bg-white'>
                
                <div className='rounded-lg ss:px-4 ss:py-6 md:p-10 md:border md:border-searchBgColor'>
                    
                    {/* Footer LOGO and Fedback form */}
                    <div className="flex items-center justify-between mb-4 ss:px-4 md:px-0">
                        <Link to='#'>
                            <img src={logoo} alt="logo" />
                        </Link>
                        <Link to="#" className="hidden items-center bg-bgColor pl-16 py-[15px] border border-searchBgColor rounded md:flex">
                            <img src={feedbackIcon} alt="" />
                            <span className="text-base font-medium leading-4 ml-[12.5px] mr-[32.37px]">Форма для обратной связи</span>
                            <img src={arrowBottomRight} alt="arrow-right-black" className="mr-5" />
                        </Link>
                        <Link to='#' className="flex items-center md:hidden">
                            <img src={homeTrend} alt="" />
                            <span className="ml-2 font-medium text-sm">Дашборд</span>
                        </Link>

                    </div>

                    {/* Address */}
                    <div className="flex flex-col ss:w-full md:w-[306px] ss:px-4 md:px-0">
                        <div className="text-textColor mb-[18px] text-sm">Юридический адрес :</div>
                        <div className="flex items-center mb-[46px]">
                            <div className="border border-searchBgColor flex items-center justify-center rounded mr-3 w-24 h-12 ss:bg-white md:bg-transparent">
                                <img src={location} alt="location"/>
                            </div>
                            <div className="font-normal text-sm underline underline-offset-4">Мирзо-Улугбекский район, проспект Амира Темура, 60 - Ташкент, 100017</div>
                        </div>
                    </div>

                    {/* Categories, menu, social networks */}
                    <div className="flex-wrap flex-row justify-between mb-[104px] ss:hidden md:flex">
                        
                        {/* Categories */}
                        <div className="md:w-1/5">

                            <div className="font-medium w-fit text-base cursor-pointer ss:mb-4 md:mb-[30px]">
                                Категории
                            </div>
                            <ul className="text-sm font-normal">
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={man} alt="" className="ml-[2px]" />
                                        <span className="ml-[14px]">Мужчины</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={femaleContact} alt="" className="ml-[2px]" />
                                        <span className="ml-[14px]">Женщины</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={children} alt="" />
                                        <span className="ml-3">Мальчикы</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={girls} alt="" />
                                        <span className="ml-3">Девочкы</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={baby} alt="" />
                                        <span className="ml-3">Младенцы</span>
                                    </Link>
                                </li>
                            </ul>

                        </div>

                        {/* Menu */}
                        <div className="md:w-3/5 ">
                            
                            <div className="font-medium w-fit cursor-pointer text-base ss:mb-2 md:mb-[30px]">Меню</div>
                            <ul className="flex flex-row text-sm">
                                <div className="basis-1/3">
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={error} alt="" />
                                            <span className="font-normal ml-2">О нас</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={adduser} alt="" />
                                            <span className="font-normal ml-2">Вакансия</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={list} alt="" />
                                            <span className="font-normal ml-2">Наш блог</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={categoryContact} alt="" />
                                            <span className="font-normal ml-2">Каталог</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={maps} alt="" />
                                            <span className="font-normal ml-2">Карта сайта</span>
                                        </Link>
                                    </li>
                                </div>
                                <div className="basis-1/3">
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={shop} alt="" />
                                            <span className="font-normal ml-2">Магазины</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={homeTrend} alt="" />
                                            <span className="font-normal ml-2">Бизнес</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={map} alt="" />
                                            <span className="font-normal ml-2">Карта</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={list} alt="" />
                                            <span className="font-normal ml-2">Мои заказы</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={privateCheck} alt="" />
                                            <span className="font-normal ml-2">Политика конфиденциальности</span>
                                        </Link>
                                    </li>
                                </div>
                                <div className="basis-1/3"> 
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={homeTrend} alt="" />
                                            <span className="font-normal ml-2">Дашборд</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={message} alt="" />
                                            <span className="font-normal ml-2">Помощь</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-1 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <img src={call} alt="" />
                                            <span className="font-normal ml-2">Контакты</span>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        {/* Social networks */}
                        <div className="md:basis-1/5">
                            
                            <div className="font-medium w-fit cursor-pointer text-base ss:mb-2 md:mb-[30px]">
                                Социальная сеть
                            </div>
                            
                            <div className="flex flex-col items-center w-full ss:flex lg:block">
                                <ul className="ss:w-6/12 lg:w-full text-sm">
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <FiInstagram className="text-[20px]" />
                                            <span className="font-normal ml-2">Instagram</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <RiFacebookCircleLine className="text-[20px]" />
                                            <span className="font-normal ml-2">Facebook</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <RiMessengerLine className="text-[20px]" />
                                            <span className="font-normal ml-2">Message</span>
                                        </Link>
                                    </li>
                                    <li className="ss:mb-2 md:mb-4">
                                        <Link to='#' className="flex items-center">
                                            <TbBrandTelegram className="text-[20px]" />
                                            <span className="font-normal ml-2">Telegram</span>
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
                    
                    {/* Categories, menu, social networks for MOBILE*/}
                    <div className="flex flex-row items-center md:hidden ss:px-4 md:px-0">

                        {/* Menu */}
                        <div className="basis-1/2 ">
                            
                            <div className="font-medium w-fit cursor-pointer text-base ss:mb-2 md:mb-[30px]">Меню</div>
                            <ul className="text-sm"> 
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={error} alt="" />
                                        <span className="font-normal ml-2">О нас</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={adduser} alt="" />
                                        <span className="font-normal ml-2">Вакансия</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={list} alt="" />
                                        <span className="font-normal ml-2">Наш блог</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={categoryContact} alt="" />
                                        <span className="font-normal ml-2">Каталог</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={maps} alt="" />
                                        <span className="font-normal ml-2">Карта сайта</span>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>

                        {/* Categories */}
                        <div className="basis-1/2">

                            <div className="font-medium w-fit text-base cursor-pointer ss:mb-4 md:mb-[30px]">
                                Категории
                            </div>
                            <ul className="text-sm font-normal">
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={man} alt="" className="ml-[2px]" />
                                        <span className="ml-[14px]">Мужчины</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={femaleContact} alt="" className="ml-[2px]" />
                                        <span className="ml-[14px]">Женщины</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={children} alt="" />
                                        <span className="ml-3">Мальчикы</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={girls} alt="" />
                                        <span className="ml-3">Девочкы</span>
                                    </Link>
                                </li>
                                <li className="ss:mb-1 md:mb-4">
                                    <Link to='#' className="flex items-center">
                                        <img src={baby} alt="" />
                                        <span className="ml-3">Младенцы</span>
                                    </Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                    <Link to="#" className="flex items-center bg-bgColor pl-16 py-[15px] border border-searchBgColor rounded md:hidden">
                        <img src={feedbackIcon} alt="" />
                        <span className="text-base font-medium leading-4 ml-[12.5px] mr-[32.37px]">Форма для обратной связи</span>
                        <img src={arrowBottomRight} alt="arrow-right-black" className="mr-5" />
                    </Link>

                    {/* footer bottom section */}
                    <div className="flex items-center justify-between">
                        <div className="lg:flex ss:block  lg:justify-between ss:justify-center items-center ">
                            <div className=" ss:w-full lg:w-fit flex justify-between  items-center font-medium ">
                                
                                <div className="flex justify-between items-center ">
                                    <img src={footer} alt="" className="mr-2"/>
                                    <span className="sm:text-base ss:text-xs">2022 — Dress.me</span>
                                </div>
                                <div>
                                    <span className="ml-4 mr-4 sm:text-base ss:text-xs">All Rights reserved</span>
                                </div>

                                <div className="font-medium text-center ss:mt-3 lg:m-0 ss:text-xs sm:text-base">Designed by <Link to='#' className="text-fullBlue border-b border-fullBlue">Prince.UI</Link>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center">
                            <Link to="#" className="flex items-center bg-bgColor pl-4 py-[15px] border border-searchBgColor rounded">
                                <span className="text-base font-medium leading-4 mr-[8.78px]">U - Узбекский сум</span>
                                <img src={arrowBottomBlack} alt="arrow-right-black" className="mr-5" />
                            </Link>
                            <Link to="#" className="flex items-center bg-bgColor pl-4 py-[15px] border border-searchBgColor rounded ml-3">
                                <img src={location} alt="" />
                                <span className="text-base font-medium leading-4 ml-[12.5px] mr-[32.37px]">Ташкент</span>
                                <img src={arrowBottomBlack} alt="arrow-right-black" className="mr-[18px]" />
                            </Link>
                            <Link to="#" className="flex items-center bg-bgColor pl-4 py-[15px] border border-searchBgColor rounded ml-3">
                                <img src={ru} alt="" />
                                <span className="text-base font-medium leading-4 ml-[12.5px] mr-[32.37px]">Русский</span>
                                <img src={arrowBottomBlack} alt="arrow-right-black" className="mr-[18px]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer