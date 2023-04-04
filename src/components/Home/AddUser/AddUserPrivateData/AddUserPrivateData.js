import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { AutummBoy, AutummChild, AutummFemale, AutummGirl, AutummMale, formArrowBottom, formArrowRight, formArrowRightCircle, formCalendar, formDate, formEmail, formPhone, formUser, formUzFlag, SpringBoy, SpringChild, SpringFemale, SpringGirl, SpringMale,  SummerBoy,  SummerChild,  SummerFemale, SummerGirl, SummerMale, user, uzbekFlag, WinterBoy, WinterChild, WinterFemale, WinterGirl, WinterMale, } from "../../../../assets/imgs";
import AddUserPrivateSkeleton from '../Skeleton/AddUserPrivateSkeleton'
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
const AddUserPrivateInfo = () => {

    const [dressInfo, setDressInfo] = useContext(dressMainData)
    
    let genderStyle = ''
    let emailColor = ''
    if (dressInfo?.type == 1111) {
      genderStyle = "focus:text-borderSpring focus:bg-bgSpring focus:border focus:border-borderSpring focus:text-borderSpring"
      emailColor = "text-green-600"
    }
    if (dressInfo?.type == 2222) {
      genderStyle = "focus:text-borderSummer focus:bg-bgSummer focus:border focus:border-borderSummer focus:text-borderSummer"
      emailColor = "text-amber-500"
    }
    if (dressInfo?.type == 3333) {
      genderStyle = "focus:text-borderAutumm focus:bg-bgAutumm focus:border focus:border-borderAutumm focus:text-borderAutumm"
      emailColor = "text-orange-600"
    }
    if (dressInfo?.type == 4444) {
      genderStyle = "focus:text-borderWinter focus:bg-bgWinter focus:border focus:border-borderWinter focus:text-borderWinter"
      emailColor = "text-sky-600"
    }

    const PersonTypeArray = [
        { id: 1111, man: SpringMale, woman: SpringFemale, boy: SpringBoy, girl: SpringGirl, childs: SpringChild },
        { id: 2222, man: SummerMale, woman: SummerFemale, boy: SummerBoy, girl: SummerGirl, childs: SummerChild },
        { id: 3333, man: AutummMale, woman: AutummFemale, boy: AutummBoy, girl: AutummGirl, childs: AutummChild },
        { id: 4444, man: WinterMale, woman: WinterFemale, boy: WinterBoy, girl: WinterGirl, childs: WinterChild },
    ]

    const monthsList = [
        { id: 1, type: "January" },
        { id: 2, type: "February" },
        { id: 3, type: "March" },
        { id: 4, type: "April" },
        { id: 5, type: "May" },
        { id: 6, type: "June" },
        { id: 7, type: "July" },
        { id: 8, type: "August" },
        { id: 9, type: "September" },
        { id: 10, type: "October" },
        { id: 11, type: "November" },
        { id: 12, type: "December" },
      ];
      const contentMonth = (
        <div className="w-[110px] h-32 overflow-y-auto m-0 p-0">
          {monthsList.map((data) => {
            return (
              <p
                key={data?.id}
                onClick={() => {
                  handleWearValue(data?.type);
                }}
                className={`w-full h-[30px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
              >
                {data?.type}
              </p>
            );
          })}
        </div>
      );

    const [openMonth, setOpenMonth] = useState(false);

    const handleOpenChangeWear = (newOpen) => {
        setOpenMonth(newOpen);
    };

    const [selectMonth, setSelectMonth] = useState("Месяц");
    const handleWearValue = (value) => {
        setSelectMonth(value);
        setOpenMonth(false);
    };

    return(
        <main className="">
            <div className="flex flex-col px-10 py-6 w-[440px] rounded-lg border border-solid border-searchBgColor my-8 mx-auto">
                <div className="text-[20px] font-AeonikProMedium mb-3">Добавить персонаж</div>
                <p className="text-textColor font-AeonikProRegular mb-6">Добавляйте информацию о себе или близких людей в качестве персонажа</p>
                <div>
                    {
                        PersonTypeArray?.filter(data => data.id == dressInfo?.type).map(data => {
                            return (
                                <div>
                                    <div className="flex flex-col gap-y-2 gap-x-2 mb-7">
                                        <div className="w-full flex-row flex items-center justify-between gap-x-2">
                                            <button className={`w-[176px] ${genderStyle} bg-btnBgColor border border-solid border-searchBgColor rounded-lg px-[55px] py-3`}>
                                                <img src={data?.man} alt="" className="mb-[10px] mx-auto" />
                                                <span>Мужчина</span>
                                            </button>
                                            <button className={`w-[176px] ${genderStyle} bg-btnBgColor border border-solid border-searchBgColor rounded-lg px-[55px] py-3`}>
                                                <img src={data?.woman} alt="" className="mb-[10px] mx-auto" />
                                                <span>Женщина</span>
                                            </button>
                                        </div>
                                        {/* <div className="flex flex-row items-center gap-x-2">
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
                                        </div>  */}
                                    </div>
                                    <form>
                                        <label htmlFor="firstname" className="mb-[6px] font-AeonikProRegular text-sm">Имя</label>
                                        <div className="flex items-center justify-between border border-solid border-searchBgColor p-4 rounded-lg bg-btnBgColor mb-4">
                                            <input type="text" name="firstname" id="firstname" className="w-[90%] bg-transparent font-AeonikProMedium text-base" />
                                            <button>
                                                <img src={formUser} alt="" />
                                            </button>
                                        </div>
                                        <label htmlFor="lastname" className="mb-[6px] font-AeonikProRegular text-sm">Фамилия</label>
                                        <div className="flex items-center justify-between border border-solid border-searchBgColor px-4 py-[15px] rounded-lg bg-btnBgColor mb-4">
                                            <input type="text" name="lastname" id="lastname" className="w-[90%] bg-transparent font-AeonikProMedium text-base"/>
                                            <button>
                                                <img src={formUser} alt=""/>
                                            </button>
                                        </div>
                                        <label htmlFor="bdate" className="mb-[6px] font-AeonikProRegular text-sm">Дата рождения</label>
                                        <div className="flex items-center justify-start border border-solid border-searchBgColor rounded-lg bg-btnBgColor mb-4 h-full">
                                            <div className="w-[17%] h-full py-[15px] border-r border-searchBgColor">
                                                <img src={formCalendar} alt="" className="h-full mx-5 cursor-pointer"/>
                                            </div>
                                            {/* <div className="w-[2px] h-full bg-black mx-5"></div> */}

                                            {/* <div className="w-[20%] h-full">
                                                <input type="text" name="day" placeholder="День" id="day" className="bg-transparent font-AeonikProRegular text-base px-[14px] border-r border-searchBgColor"/>
                                            </div> */}
                                            <div className="w-[20%] py-[12px] border-r border-searchBgColor">
                                                <input type="text" name="day" placeholder="День" id="day" className="w-full bg-transparent font-AeonikProRegular text-base px-[14px] "/>
                                            </div>
                                            <div className="w-[38%]">
                                                {/* <input type="month" name="bdate" id="bdate" className=" bg-transparent font-AeonikProMedium text-base appearance-none"/> */}
                                                <Popover
                                                    open={openMonth}
                                                    onOpenChange={handleOpenChangeWear}
                                                    className=" px-[14px] h-[44px] border-r border-searchBgColor flex items-center justify-between cursor-pointer select-none group"
                                                    trigger="click"
                                                    options={["Hide"]}
                                                    placement="bottom"
                                                    content={contentMonth}
                                                    >
                                                    <span className="not-italic font-AeonikProMedium text-center mt-1 text-base leading-4 text-black">
                                                        {selectMonth}
                                                    </span>
                                                    <span>
                                                        <BiChevronDown
                                                        size={20}
                                                        style={{ color: "#c2c2c2" }}
                                                        className={`${openMonth ? "rotate-[-180deg]" : ""} duration-200`}
                                                        />{" "}
                                                    </span>
                                                </Popover>
                                            </div>
                                            {/* <input type="date" name="bdate" id="bdate" className=" bg-btnBgColor font-AeonikProMedium text-base"/>
                                            <input type="month" name="bdate" id="bdate" className=" bg-btnBgColor font-AeonikProMedium text-base"/> */}
                                        </div>
                                        {/* <label htmlFor="phone" className="mb-[6px] font-AeonikProRegular text-sm">Номер телефона</label>
                                        <div className="flex items-center justify-between border border-solid border-searchBgColor px-[16px] rounded-lg bg-btnBgColor mb-4">
                                            <div className="flex items-center w-[45%] pr-[50px] h-full border-r py-[13px] border-r-searchBgColor">
                                                <img src={formUzFlag} alt="" />
                                                <label htmlFor="" className="font-AeonikProMedium text-base ml-2 mr-4 flex items-center">+998</label>
                                                <img src={formArrowBottom} alt="form-arrow-bottom"/>
                                            </div>
                                            <input type="number" name="phone" id="phone" placeholder="(xx) xxx-xx-xx" className="bg-btnBgColor font-AeonikProRegular text-base ml-4 w-[178px] pr-[10px] [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"/>
                                            <button>
                                                <img src={formPhone} alt="" className="w-12 h-12"/>
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between ">
                                            <label htmlFor="email" className="mb-[6px] font-AeonikProRegular text-sm">Электронная почта</label>
                                            <label htmlFor="email" className="mb-[6px] font-AeonikProRegular text-sm"><span className={`${emailColor} font-AeonikProMedium`}>*</span>необязательная</label>
                                        </div>
                                        <div className="flex items-center justify-between border border-solid border-searchBgColor p-[15px] rounded-lg bg-btnBgColor mb-8">
                                            <input type="email" name="email" id="email" className="w-[90%] bg-btnBgColor font-AeonikProRegular text-base" placeholder="Адрес электронной почты"/>
                                            <button>
                                                <img src={formEmail} alt="" />
                                            </button>
                                        </div> */}
                                        <Link to="/add_user_body_data" className="w-full bg-blue-500 flex items-center justify-center rounded-lg text-white py-4">
                                            <span className="mr-[10px]">Следующий шаг</span>
                                            <img src={formArrowRightCircle} alt="" />
                                        </Link>
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
export default AddUserPrivateInfo