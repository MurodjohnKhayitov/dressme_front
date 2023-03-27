/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { home, bucket, heart, user, catalogBlack} from "../../assets/imgs";

const menus = [
    {name: 'Главная', icon: home, id:1},
    {name: 'Каталог', icon: catalogBlack , id:2 },
    {name: 'Корзина', icon: bucket, id:3},
    {name: 'Избранное', icon: heart, id:4},
    {name: 'Профиль', icon: user, id:5}
]


const NavMenu = () => {
    
    const [active, setActive] = useState(0)

    return(
        <div className="bg-white drop-shadow-2xl px-4 w-full rounded-t-xl md:hidden z-50 h-full overscroll-none overflow-y-hidden">
            <ul className="flex items-center justify-between text-[10px] font-AeonikProMedium py-1 ">
                
                {menus.map((menu, index) => (
                    
                    <li className="w-[72px] h-[56px]" key={index}>

                        <Link to="#"  className="w-full flex flex-col text-center pt-2" onClick={()=> {setActive(index)}}>
                            
                            <span className={`relative mx-auto cursor-pointer`}> 
                                <img src={menu.icon} className=" w-5 h-5 mb-[6px]"/>
                                <span className={`${index === 2 ? 'count bg-red-700 w-4 h-4 text-white text-[10px] rounded flex items-center justify-center absolute -top-[10px] -right-[10px] font-AeonikProMedium' : 'hidden'}`}>4</span>
                            </span>
                            <span >
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