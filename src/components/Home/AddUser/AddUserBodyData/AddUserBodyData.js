import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { arrowBottom, AutummBoy, AutummChild, AutummFemale, AutummGirl, AutummMale, formArrowBottom, formArrowRight, formArrowRightCircle, formCalendar, formDate, formEmail, formPhone, formUser, formUzFlag, person3D, SpringBoy, SpringChild, SpringFemale, SpringGirl, SpringMale,  SummerBoy,  SummerChild,  SummerFemale, SummerGirl, SummerMale, user, uzbekFlag, WinterBoy, WinterChild, WinterFemale, WinterGirl, WinterMale, } from "../../../../assets/imgs";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { BiChevronDown } from "react-icons/bi";
import { Popover } from "antd";

const AddUserBodyData = () => {

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

    const [openWearSize, setOpenWearSize] = useState(false);

    const handleOpenChangeWearSize = (newOpen) => {
      setOpenWearSize(newOpen);
    };
    const [selectWearSize, setselectWearSize] = useState("Size");
    const handleWearValue = (value) => {
      setselectWearSize(value);
      setOpenWearSize(false);
    };
    const wearList = [
      { id: 1, type: "XS" },
      { id: 2, type: "S" },
      { id: 3, type: "M" },
      { id: 4, type: "L" },
      { id: 5, type: "XL" },
      { id: 5, type: "XXL" },
      { id: 5, type: "XXXL" },
    ];
    const contentWearSize = (
      <div className="w-[60px] h-fit m-0 p-0">
        {wearList.map((data) => {
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

    return(
        <main>  
            <div className="flex justify-center  my-8 gap-x-8">
                <div>
                    <img src={person3D} alt="" className="border border-solid border-searchBgColor rounded-lg"/>
                </div>
                <div>
                    <form className="rounded-lg border border-solid border-searchBgColor mb-6">
                        
                        <div className="flex flex-col py-6 w-[440px] border-b border-searchBgColor">
                            <div className="text-[20px] font-AeonikProMedium mb-3 px-10">Внешний вид персонажа</div>
                            <p className="text-textColor font-AeonikProRegular mb-7 px-10">Введите параметры вашего тела</p>
                            <div className="flex flex-col px-10">
                                <div className="flex items-center flex-row justify-between gap-x-5 mb-4">
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="firstname" className="mb-[6px] font-AeonikProRegular text-sm">Высота роста</label>
                                        <input type="text" name="firstname" id="firstname" placeholder="Высота роста" className="bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor p-4 rounded-lg h-12" />    
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="firstname" className="mb-[6px] font-AeonikProRegular text-sm">Вес тела</label>
                                        <input type="text" name="firstname" id="firstname" placeholder="Вес тела" className="bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor p-4 rounded-lg h-12" />    
                                    </div>
                                </div>
                                <div className="flex items-center flex-row justify-between gap-x-5">
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="waist" className="mb-[6px] font-AeonikProRegular text-sm">Обхват талии</label>
                                        <input type="text" name="firstname" id="firstname" placeholder="Обхват талии" className="bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor p-4 rounded-lg h-12" />  
                                        
                                        {/* <div className="flex items-center justify-between border border-solid border-searchBgColor bg-btnBgColor font-AeonikProRegular text-base  p-4 rounded-lg h-12 leading-4">
                                            <select name="waist" id="waist" className="appearance-none bg-transparent">
                                                <option value="" >Обхват талии</option>    
                                                <option value="20 sm">20 sm</option>    
                                                <option value="30 sm">30 sm</option>    
                                                <option value="40 sm">40 sm</option>    
                                                <option value="50 sm">50 sm</option>   
                                            </select> 
                                            <img src={formArrowBottom} alt="form-arrow-bottom" className="cursor-pointer" />     
                                        </div>  */}
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="waist" className="mb-[6px] font-AeonikProRegular text-sm">Обхват грудной клетки</label>
                                        <input type="text" name="firstname" id="firstname" placeholder="Обхват груди" className="bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor p-4 rounded-lg h-12" /> 
                                        {/* <div className="flex items-center justify-between border border-solid border-searchBgColor bg-btnBgColor font-AeonikProRegular text-base  p-4 rounded-lg h-12 leading-4">
                                            <select name="waist" id="waist" className="appearance-none bg-transparent">
                                                <option value="" >Обхват груди</option>    
                                                <option value="20 sm">20 sm</option>    
                                                <option value="30 sm">30 sm</option>    
                                                <option value="40 sm">40 sm</option>    
                                                <option value="50 sm">50 sm</option>   
                                            </select> 
                                            <img src={formArrowBottom} alt="form-arrow-bottom" className="cursor-pointer" />     
                                        </div>  */}
                                    </div>
                                </div>
                            </div>             
                        </div>

                        <div className="flex flex-col px-10 pt-6 w-[440px]">
                            <div className="text-[20px] font-AeonikProMedium mb-3">Размеры одежды</div>
                            <p className="text-textColor font-AeonikProRegular mb-7">Введите размеры ваших одежд</p>
                            
                            {/* Caps */}
                            <div className="w-full flex items-center pl-4 bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor rounded-lg h-12 mb-2">
                                <div className="flex items-center font-AeonikProMedium w-[75%] border-r border-searchBgColor h-12 bg-transparent pr-4">Обхват головы <span className="font-AeonikProRegular ml-1">(шапки)</span></div>
                                <input type="number" name="caps" id="caps" placeholder="Size" className="w-[15%] font-AeonikProRegular text-base bg-btnBgColor mx-4 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" /> 
                            </div>

                            {/* Shirts */}
                            <div className="flex items-center pl-4 bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor rounded-lg h-12 mb-2">
                                <div className="flex items-center font-AeonikProMedium w-[75%] border-r border-searchBgColor h-12 bg-transparent pr-4">Верхняя одежда<span className="font-AeonikProRegular ml-1">(рубашки)</span></div>
                                <Popover
                                    open={openWearSize}
                                    onOpenChange={handleOpenChangeWearSize}
                                    className="w-[25%] px-4 h-[44px] bg-btnBgColor flex items-center justify-between cursor-pointer select-none group  "
                                    trigger="click"
                                    options={["Hide"]}
                                    placement="bottom"
                                    content={contentWearSize}
                                    >
                                    <span className="not-italic font-AeonikProMedium text-center mt-1 text-sm leading-4 text-black">
                                        {selectWearSize}
                                    </span>
                                    <span>
                                        <BiChevronDown
                                        size={20}
                                        style={{ color: "#c2c2c2" }}
                                        className={`${openWearSize ? "rotate-[-180deg]" : ""} duration-200`}
                                        />{" "}
                                    </span>
                                </Popover>
                            </div>

                            {/* Trousers */}
                            <div className="flex items-center pl-4 bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor rounded-lg h-12 mb-2">
                                <div className="flex items-center font-AeonikProMedium w-[75%] border-r border-searchBgColor h-12 bg-transparent pr-4">Нижняя одежда <span className="font-AeonikProRegular ml-1">(брюки)</span></div>
                                <input type="number" name="caps" id="caps" placeholder="Size" className="w-[25%] font-AeonikProRegular text-base bg-btnBgColor px-4 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" /> 
                            </div>

                            {/* Shoes */}
                            <div className="flex items-center pl-4 bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor rounded-lg h-12">
                                <div className="flex items-center font-AeonikProMedium w-[75%] border-r border-searchBgColor h-12 bg-transparent pr-4">Обувь<span className="font-AeonikProRegular ml-1">(кроссовки, туфли)</span></div>
                                <input type="number" name="caps" id="caps" placeholder="Size" className="w-[25%] font-AeonikProRegular text-base bg-btnBgColor px-4 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" /> 
                                {/* <input type="text" name="firstname" id="firstname" placeholder="" className="bg-btnBgColor font-AeonikProRegular text-base border border-solid border-searchBgColor p-4 rounded-lg h-12" /> 
                                <div className="flex items-center justify-between font-AeonikProMedium">
                                    <select name="caps" id="caps" className="appearance-none px-4 bg-transparent cursor-pointer h-12">
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                    </select>
                                    <img src={formArrowBottom} alt="" className="cursor-pointer"/> 
                                </div>*/}
                            </div>
                            
                            <Link to="/" className="w-full bg-blue-500 flex items-center justify-center rounded-lg text-white py-4 mb-4 mt-6">
                                <span className="mr-[10px]">Следующий шаг</span>
                                <img src={formArrowRightCircle} alt="" />
                            </Link>
                            <Link to="/" className="w-[360px] mx-auto bg-gray-400 flex items-center justify-center rounded-lg text-white mb-6 py-4">
                                <span className="mr-[10px]">Следующий шаг</span>
                                <img src={formArrowRightCircle} alt="" />
                            </Link>
                        </div>
                    </form>

                </div>
                
            </div>
        </main>
    )
}
export default AddUserBodyData