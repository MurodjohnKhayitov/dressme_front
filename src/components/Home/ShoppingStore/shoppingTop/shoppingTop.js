import { useContext, useState } from "react";
import { DownCate, allStore, manGenderStore, womanGenderStore } from "../../../../assets/imgs"
import { dressMainData } from "../../../../ContextHook/ContextMenu";


const ShoppingTop = () => {

    const [categories, setSetCategories] = useState(true);
    const [dressInfo] = useContext(dressMainData);

  let dataStyle = "";
  let shadowStyle = "";
  if (dressInfo?.type === 1111) {
    dataStyle = "text-borderSpring ";
    shadowStyle = "hover:shadow-green-300/100 ";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = "text-borderSummer";
    shadowStyle = "hover:shadow-amber-200/100  ";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = "text-borderAutumm";
    shadowStyle = "hover:shadow-orange-200/100   ";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = "text-borderWinter";
    shadowStyle = "hover:shadow-sky-200/100  ";
  }

    return(
        <div className="flex flex-col min-h-[44px]  justify-center items-center my-5">
            <div className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto">
                <div className="flex items-center">
                    
                    <div className="w-full flex  items-center mr-6">
                        <div className="w-full h-10 rounded-lg overflow-hidden flex justify-between bg-slate-50 border border-solid ss:mt-5 md:mt-0 mx-auto ">
                        <button
                            onClick={() => setSetCategories(true)}
                            className={`flex items-center h-10 text-[15px] text-black text-center px-6 font-AeonikProRegular ${
                            categories
                                ? `{ bg-white border  border-searchBgColor rounded-lg ${dataStyle}`
                                : ""
                            } `}
                        >
                            <img src={allStore} alt="" className="mr-3 -mt-1"/>
                            Все
                        </button>
                        <button
                            onClick={() => setSetCategories(false)}
                            className={`h-10 text-[15px] text-black text-center px-6 font-AeonikProRegular ${
                            !categories
                                ? ` bg-white border  border-searchBgColor rounded-lg ${dataStyle}`
                                : ""
                            } `}
                        >
                            Верхняя
                        </button>
                        <button
                            onClick={() => setSetCategories(false)}
                            className={`h-10 text-[15px] text-black text-center px-6 font-AeonikProRegular ${
                            !categories
                                ? ` bg-white border  border-searchBgColor rounded-lg ${dataStyle}`
                                : ""
                            } `}
                        >
                            Нижняя
                        </button>
                        <button
                            onClick={() => setSetCategories(false)}
                            className={`h-10 text-[15px] text-black text-center px-6 font-AeonikProRegular ${
                            !categories
                                ? ` bg-white border  border-searchBgColor rounded-lg ${dataStyle}`
                                : ""
                            } `}
                        >
                            Обувь
                        </button>
                        <button
                            onClick={() => setSetCategories(false)}
                            className={`h-10 text-[15px] text-black text-center px-6 font-AeonikProRegular ${
                            !categories
                                ? ` bg-white border  border-searchBgColor rounded-lg ${dataStyle}`
                                : ""
                            } `}
                        >
                            Аксессуары
                        </button>
                        </div>
                    </div>
                    <div className="w-full flex  items-center">
                        <div className="w-full h-10 rounded-lg overflow-hidden flex justify-between bg-slate-50 border border-solid ss:mt-5 md:mt-0 mx-auto ">
                            <button
                                onClick={() => setSetCategories(true)}
                                className={`flex items-center h-10 text-[15px] text-black text-center px-6 font-AeonikProRegular ${
                                categories
                                    ? `{ bg-white border  border-searchBgColor rounded-lg ${dataStyle}`
                                    : ""
                                } `}
                            >
                                <img src={allStore} alt="" className="mr-3 -mt-1"/>
                                Все
                            </button>
                            <button
                                onClick={() => setSetCategories(false)}
                                className={`h-10 text-[15px] text-black text-center px-6 font-AeonikProRegular ${
                                !categories
                                    ? ` bg-white border  border-searchBgColor rounded-lg `
                                    : ""
                                } `}
                            >
                                <img src={manGenderStore} alt="" />
                            </button>
                            <button
                                onClick={() => setSetCategories(false)}
                                className={`h-10 text-[15px] text-black text-center px-6 font-AeonikProRegular ${
                                !categories
                                    ? ` bg-white border  border-searchBgColor rounded-lg `
                                    : ""
                                } `}
                            >
                                <img src={womanGenderStore} alt="" />
                            </button>
                        </div>
                    </div>

                </div>
                
                
                <div className="w-[fit] flex items-center ">
                    <div className="flex items-center w-fit mr-4">
                        <span className="not-italic font-normal text-sm leading-4 text-setTexOpacity tractking-[1%]">
                        Сортировка:
                        </span>
                    </div>
                    <div>
                        <button className="w-[260px] h-[44px] px-4 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between  cursor-pointer select-none group  ">
                        <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]  mt-1">
                            Последние добавленные{" "}
                        </span>
                        <span>
                            <img src={DownCate} className={`rotate-[180deg]`} alt="" />
                        </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShoppingTop