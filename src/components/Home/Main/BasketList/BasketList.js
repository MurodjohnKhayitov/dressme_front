import React, { useContext, useState } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import {
  ProductSuccess,
  TrashDelet,
  bucket,
  delivery,
  downIcons,
  formArrowRightCircle,
  heart,
} from "../../../../assets/imgs";
import { GrFormPrevious } from "react-icons/gr";
import { NavLink } from "react-router-dom";

export default function BasketList() {
  const bucket_products = [
    {
      id: 1,
      title: "Спортивная мужская кроссовка Nike RUN",
      img: "",
      store_dealer: "Nike Store Official Dealer",
      size: "3XL",
      color: "bg-zinc-400",
      color_text: "Серый",
      old_prize: "372 000",
      new_prize: "258 000",
    },
    {
      id: 2,
      title: "Спортивная мужская кроссовка Adidas RUN",
      img: "",
      store_dealer: "Adidas Store Official Dealer",
      size: "3XL",
      color: "bg-sky-700",
      color_text: "Синий океан",
      old_prize: "372 000",
      new_prize: "258 000",
    },
  ];
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    clothesCount: 1,
  });
  let array = [1, 2, 3, 4];
  const handleDecrement = () => {
    if (state?.clothesCount > 0) {
      setState({
        ...state,
        clothesCount: state.clothesCount - 1,
      });
    }
  };
  return (
    <div className="w-full h-full px-8 flex flex-wrap content-between">
      <div className="w-full">
        <div className="flex justify-between items-center h-[60px] border-b border-searchBgColor">
          <div className="flex items-center">
            <span>
              <img src={ProductSuccess} alt="" />
            </span>
            <span className="mt-1 ml-2 not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
              Оформить все
            </span>
          </div>
          <div className="flex items-center">
            <span>
              <img src={heart} alt="" />
            </span>
            <span className="mt-1 ml-2 not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
              В список желаний
            </span>
          </div>
          <div className="flex items-center">
            <span>
              <img src={TrashDelet} alt="" />
            </span>
            <span className="mt-1 ml-2 not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
              Очистить все
            </span>
          </div>
        </div>
        <div className=" ">
          {bucket_products.map((data) => {
            return (
              <div
                key={data.id}
                className="w-full h-[180px] flex justify-between   mt-2"
              >
                <div className="h-full w-[132px] rounded-lg border border-searchBgColor bg-btnBgColor overflow-hidden">
                  <img src={data?.img} alt="" />
                </div>
                <div className="w-[75%] py-2  flex flex-wrap content-between">
                  <div className="w-full">
                    <span className="not-italic font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                      Спортивная мужская кроссовка Nike RUN
                    </span>
                  </div>
                  {/*  */}
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <span className="not-italic mt-1 font-AeonikProMedium text-[20px] leading-9 text-black trcking-[1%]">
                        258 000 сум
                      </span>{" "}
                      <span className="not-italic ml-2 mt-1 font-AeonikProRegular line-through text-[14px] leading-7 text-setTexOpacity">
                        372 000
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span>
                        <img src={delivery} alt="" />
                      </span>
                      <span className="not-italic flex items-center mt-1  font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                        Бесплатная
                      </span>
                    </div>
                  </div>
                  {/*  */}
                  <div className="w-full flex items-center">
                    <div className="cursor-pointer h-fit p-[2px] flex items-center rounded-lg border border-searchBgColor">
                      <p
                        className={`w-[72px] h-8 border border-searchBgColor rounded-lg bg-setTexOpacity ${data.color}`}
                      ></p>
                      <p className="ml-2">
                        <img src={downIcons} alt="" />
                      </p>
                    </div>
                    <div className=" h-[36px]   cursor-pointer ml-3 px-4 flex items-center rounded-lg border border-searchBgColor">
                      <p className="not-italic  mt-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                        {data.size}
                      </p>
                      <p className="ml-2">
                        <img src={downIcons} alt="" />
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="w-full flex items-center justify-between">
                    <div className="w-fit flex items-center gap-x-3">
                      <div className="h-[36px] w-[120px] flex items-center justify-around rounded-lg border border-searchBgColor">
                        <button
                          onClick={handleDecrement}
                          className="w-1/3 not-italic font-AeonikProMedium mt-1 text-lg cursor-pointer leading-4 text-center text-black"
                        >
                          -
                        </button>
                        <button className="w-1/3 not-italic font-AeonikProMedium mt-1 text-lg  leading-4 text-center text-black">
                          {state?.clothesCount}
                        </button>
                        <button
                          onClick={() =>
                            setState({
                              ...state,
                              clothesCount: state.clothesCount + 1,
                            })
                          }
                          className="w-1/3 not-italic font-AeonikProMedium mt-1 text-lg cursor-pointer leading-4 text-center text-black"
                        >
                          +
                        </button>
                      </div>
                      <div className="w-fit">
                        <span className="not-italic mt-1 font-AeonikProRegular text-[14px] leading-5 text-right tracking-[1%]">
                          В наличии
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <span>
                          <img src={heart} alt="" />
                        </span>
                        <span className="not-italic ml-[6px] font-AeonikProMedium mt-1 text-sm leading-4 text-black tracking-[1%]">
                          Сохранять
                        </span>
                      </div>
                      <div className="w-[1px] h-[14px] border border-searchBgColor mx-4"></div>
                      <div className="flex items-center">
                        <span>
                          <img src={heart} alt="" />
                        </span>
                        <span className="not-italic ml-[6px] font-AeonikProMedium mt-1 text-sm leading-4 text-black tracking-[1%]">
                          Удалить
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Payment */}
      <div className="w-full mt-5">
        <ul>
          <li className="h-[60px] flex items-center justify-between border-t border-searchBgColor">
            <span className="not-italic font-AeonikProMedium text-base leading-4 text-black">
              Промежуточный итог
            </span>
            <span className="not-italic font-AeonikProMedium text-xl leading-6 text-right text-setTexOpacity">
              516 000 сум
            </span>
          </li>
          <li className="h-[60px] flex items-center justify-between border-t border-searchBgColor">
            <span className="not-italic font-AeonikProMedium text-base leading-4 text-black">
              Доставка{" "}
            </span>
            <span className="not-italic font-AeonikProMedium text-xl leading-6 text-right text-setTexOpacity">
              9 000 сум{" "}
            </span>
          </li>
          <li className="h-[60px] flex items-center justify-between border-t border-searchBgColor">
            <span className="not-italic font-AeonikProMedium text-base leading-4 text-black">
              Итоговая цена{" "}
            </span>
            <span className="not-italic font-AeonikProMedium text-xl leading-6 text-right text-setTexOpacity">
              527 000 сум{" "}
            </span>
          </li>
          <li className="h-fit flex items-center py-5 justify-between border-t border-searchBgColor">
            <button className="flex items-center">
              <span>
                <GrFormPrevious size={25} className="text-setTexOpacity" />
              </span>
              <span className="not-italic mt-1 font-AeonikProMedium text-base leading-4 text-setTexOpacity">
                Продолжить покупки
              </span>
            </button>
            <NavLink
              to="/basket-check-out"
              className="h-[52px] cursor-pointer px-6 text-white bg-SignInBgColor rounded-lg flex items-center justify-center"
            >
              <span>
                <img src={formArrowRightCircle} alt="" />
              </span>
              <span className="ml-2 not-italic mt-1 font-AeonikProMedium text-base leading-4 tracking-[1%]">
                Оформить все
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
