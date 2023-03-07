/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { home, bucket, heart, user, catalogBlack} from "../../assets/imgs";

const menus = [
    {name: 'Главная', icon: home, dis: 'translate-x-0'},
    {name: 'Каталог', icon: catalogBlack , dis: 'translate-x-16'},
    {name: 'Корзина', icon: bucket, dis: 'translate-x-32'},
    {name: 'Избранное', icon: heart, dis: 'translate-x-48'},
    {name: 'Профиль', icon: user, dis: 'translate-x-64'},
]


const NavMenu = () => {
    
    const [active, setActive] = useState(0)

    return(
        <div className="bg-blue-300 drop-shadow-2xl fixed bottom-0  px-8 max-h-[4.4rem] w-full rounded-t-xl md:hidden z-50">
            <ul className="flex text-[14px] font-medium justify-between py-3">
                
                {/* <span className={`bg-blue-500 ${menus[active].dis} duration-500 border-4 border-gray-900 h-14 w-14 absolute -top-4 rounded-full -z-10`}>
                    <span className="w-3.5 h-3.5 bg-transparent absolute top-[13px] -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
                    <span className="w-3.5 h-3.5 bg-transparent absolute top-[13px] -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
                </span> */}
                {menus.map((menu, index) => (
                    
                    <li className="w-12 " key={index}>
                        <Link to="#"  className="flex flex-col text-center pt-3" onClick={()=> {setActive(index)}}>
                            <span className={`${index === active && '-mt-3 text-white' } relative duration-500 mx-auto cursor-pointer`}> 
                                <img src={menu.icon} width='24'/>
                                <span className={`${index === 2 ? 'count bg-red-700 w-4 h-4 text-white text-[10px] rounded flex items-center justify-center absolute -top-[6px] -right-[6px] font-medium' : 'opacity-0 translate-y-10 hidden'}`}>4</span>
                            </span>
                            <span className={` ${
                                active === index 
                                ? 'translate-y-2 duration-700 opacity-100 pb-2' 
                                : 'opacity-0 translate-y-10'}`
                            }>
                                <div>{menu.name}</div>
                            </span>
                        </Link>

                    </li>

                ))}
            </ul>
        </div>
    )
}
export default NavMenu