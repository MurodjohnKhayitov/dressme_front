import React, { useContext, useState } from "react";
import { AutummBoy, AutummChild, AutummFemale, AutummGirl, AutummMale, formArrowRight, formArrowRightCircle, formDate, formEmail, formPhone, formUser, SpringBoy, SpringChild, SpringFemale, SpringGirl, SpringMale,  SummerBoy,  SummerChild,  SummerFemale, SummerGirl, SummerMale, user, WinterBoy, WinterChild, WinterFemale, WinterGirl, WinterMale, } from "../../../assets/imgs";
import { dressMainData } from "../../../ContextHook/ContextMenu";

const SignIn = () => {

    const [dressInfo, setDressInfo] = useContext(dressMainData)
    
    let genderStyle = ''
    if (dressInfo?.type == 1111) {
      genderStyle = "focus:text-borderSpring focus:bg-bgSpring focus:border focus:border-borderSpring focus:text-borderSpring"
    }
    if (dressInfo?.type == 2222) {
      genderStyle = "focus:text-borderSummer focus:bg-bgSummer focus:border focus:border-borderSummer focus:text-borderSummer"
    }
    if (dressInfo?.type == 3333) {
      genderStyle = "focus:text-borderAutumm focus:bg-bgAutumm focus:border focus:border-borderAutumm focus:text-borderAutumm"
    }
    if (dressInfo?.type == 4444) {
      genderStyle = "focus:text-borderWinter focus:bg-bgWinter focus:border focus:border-borderWinter focus:text-borderWinter"
    }

    const PersonTypeArray = [
        { id: 1111, man: SpringMale, woman: SpringFemale, boy: SpringBoy, girl: SpringGirl, childs: SpringChild },
        { id: 2222, man: SummerMale, woman: SummerFemale, boy: SummerBoy, girl: SummerGirl, childs: SummerChild },
        { id: 3333, man: AutummMale, woman: AutummFemale, boy: AutummBoy, girl: AutummGirl, childs: AutummChild },
        { id: 4444, man: WinterMale, woman: WinterFemale, boy: WinterBoy, girl: WinterGirl, childs: WinterChild },
    ]

    return(
        <main>
            <div className="flex flex-col px-10 py-6 w-[440px] rounded-lg border border-solid border-searchBgColor mt-8 mx-auto">
                <div className="text-[20px] font-AeonikProMedium mb-3">Добавить персонаж</div>
                <p className="text-textColor font-AeonikProRegular mb-6">Добавляйте информацию о себе или близких людей в качестве персонажа</p>
                <div>
                    {
                        PersonTypeArray?.filter(data => data.id == dressInfo?.type).map(data => {
                            return (
                                <div>
                                    <div className="flex flex-col gap-y-2 gap-x-2 mb-7">
                                        <div className="w-full flex-row flex items-center justify-between gap-x-2">
                                            <button className="w-[176px] bg-btnBgColor border border-solid border-searchBgColor rounded-lg px-[55px] py-3">
                                                <img src={data?.man} alt="" className="mb-[10px] mx-auto" />
                                                <span>Мужчина</span>
                                            </button>
                                            <button className="w-[176px] bg-btnBgColor border border-solid border-searchBgColor rounded-lg px-[55px] py-3">
                                                <img src={data?.woman} alt="" className="mb-[10px] mx-auto" />
                                                <span>Женщина</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-2">
                                            <button className="w-[114px] bg-btnBgColor flex-col items-center justify-center border border-solid border-searchBgColor rounded-lg px-[28px] py-3">
                                                <img src={data?.boy} alt="" className="mb-[10px] mx-auto"/>
                                                <span>Мальчик</span>
                                            </button>
                                            <button className="w-[114px] bg-btnBgColor flex-col items-center justify-center border border-solid border-searchBgColor rounded-lg px-[28px] py-3">
                                                <img src={data?.girl} alt="" className="mb-[10px] mx-auto"/>
                                                <span>Девочка</span>
                                            </button>
                                            <button className="w-[114px] bg-btnBgColor flex-col items-center justify-center border border-solid border-searchBgColor rounded-lg px-[28px] py-3">
                                                <img src={data?.childs} alt="" className="mb-[10px] mx-auto"/>
                                                <span>Младенец</span>
                                            </button>
                                        </div> 
                                    </div>
                                    <form>
                                        <label htmlFor="firstname" className="mb-[6px] font-AeonikProRegular text-sm">Имя</label>
                                        <div className="flex items-center justify-between border border-solid border-searchBgColor p-4 rounded-lg bg-btnBgColor mb-4">
                                            <input type="text" name="firstname" id="firstname" className="w-[90%] bg-btnBgColor font-AeonikProMedium text-base" />
                                            <img src={formUser} alt="" />
                                        </div>
                                        <label htmlFor="lastname" className="mb-[6px] font-AeonikProRegular text-sm">Фамилия</label>
                                        <div className="flex items-center justify-between border border-solid border-searchBgColor p-[15px] rounded-lg bg-btnBgColor mb-4">
                                            <input type="text" name="lastname" id="lastname" className="w-[90%] bg-btnBgColor font-AeonikProMedium text-base"/>
                                            <img src={formUser} alt="" />
                                        </div>
                                        <label htmlFor="bdate" className="mb-[6px] font-AeonikProRegular text-sm">Дата рождения</label>
                                        <div className="flex items-center justify-between border border-solid border-searchBgColor p-[15px] rounded-lg bg-btnBgColor mb-4">
                                            <input type="date" name="bdate" id="bdate" className="w-[90%] bg-btnBgColor font-AeonikProMedium text-base"/>
                                            <input type="text" name="bdate" id="bdate" className="w-[90%] bg-btnBgColor font-AeonikProMedium text-base"/>
                                            <input type="month" name="bdate" id="bdate" className="w-[90%] bg-btnBgColor font-AeonikProMedium text-base"/>
                                            <input type="date" name="bdate" id="bdate" className="w-[90%] bg-btnBgColor font-AeonikProMedium text-base"/>
                                            <img src={formDate} alt="" />
                                        </div>
                                        <label htmlFor="phone" className="mb-[6px] font-AeonikProRegular text-sm">Номер телефона</label>
                                        <div className="flex items-center justify-between border border-solid border-searchBgColor p-[15px] rounded-lg bg-btnBgColor mb-4">
                                            <input type="number" name="phone" id="phone" className="w-[90%] bg-btnBgColor font-AeonikProMedium text-base"/>
                                            <img src={formPhone} alt="" />
                                        </div>
                                        <label htmlFor="email" className="mb-[6px] font-AeonikProRegular text-sm">Электронная почта</label>
                                        <div className="flex items-center justify-between border border-solid border-searchBgColor p-[15px] rounded-lg bg-btnBgColor mb-8">
                                            <input type="email" name="email" id="email" className="w-[90%] bg-btnBgColor font-AeonikProRegular text-base" placeholder="Адрес электронной почты"/>
                                            <img src={formEmail} alt="" />
                                        </div>
                                        <button className="w-full bg-blue-500 flex items-center justify-center rounded-lg text-white py-4">
                                            <span className="mr-[10px]">Следующий шаг</span>
                                            <img src={formArrowRightCircle} alt="" />
                                        </button>
                                    </form>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}
export default SignIn