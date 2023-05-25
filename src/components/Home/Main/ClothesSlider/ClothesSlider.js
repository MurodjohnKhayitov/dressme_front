import React, { useContext } from "react";
import {
  next,
  arrowBottomFull,
  star,
  delivery,
  heart,
  addBag,
  cardImg,
  ticketDiscount,
} from "../../../../assets/imgs";

import Slider from "react-slick";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { dressMainData } from "../../../../ContextHook/ContextMenu";
export default function ClothesSlider() {
  const carosuelData = [
    {
      Category: [
        { id: 1, type: "Student", count: 123, img: "" },
        { id: 2, type: "Businiess", count: 223, img: "" },
        { id: 3, type: "Muslim", count: 80, img: "" },
        { id: 4, type: "Travel", count: 453, img: "" },
        { id: 5, type: "Sport", count: 320, img: "" },
        { id: 6, type: "Classic", count: 40, img: "" },
        { id: 7, type: "Relaxed", count: 180, img: "" },
        { id: 8, type: "Dramatic", count: 250, img: "" },
        { id: 9, type: "Creative", count: 190, img: "" },
        { id: 10, type: "Rebellious", count: 310, img: "" },
        { id: 11, type: "Feminine", count: 479, img: "" },
      ],

      campany: [
        { id: 1, check: true, type: "Bсе типы", name: "Bсе типы" },
        { id: 2, check: false, type: "Категория типы", name: "" },
        { id: 3, check: false, type: "Категория типы", name: "" },
        { id: 4, check: false, type: "Категория типы", name: "" },
        { id: 5, check: false, type: "Категория типы", name: "" },
        { id: 6, check: false, type: "Категория типы", name: "" },
        { id: 7, check: false, type: "Категория типы", name: "" },
        { id: 8, check: false, type: "Категория типы", name: "" },
        { id: 9, check: false, type: "Категория типы", name: "" },
        { id: 10, check: false, type: "Категория типы", name: "" },
        { id: 11, check: false, type: "Категория типы", name: "" },
        { id: 12, check: false, type: "Категория типы", name: "" },
        { id: 13, check: false, type: "Категория типы", name: "" },
        { id: 14, check: false, type: "Категория типы", name: "" },
        { id: 15, check: false, type: "Категория типы", name: "" },
      ],
    },
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline  w-10 h-10 flex items-center justify-center top-[24%] z-10	right-[52px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard		`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline hidden opacity-50 w-10 h-10 flex items-center justify-center top-[25%] z-10	left-[18px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };

  const NextArrow2 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	right-[22px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard		`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };

  const PrevArrow2 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	left-[26px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };

  let settings1 = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    dots: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let settings = {
    nextArrow: <NextArrow2 />,
    prevArrow: <PrevArrow2 />,
    infinite: true,
    speed: 500,
    dots: false,

    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [dressInfo] = useContext(dressMainData);
  let dataStyle = "";
  let genderStyle = "";
  if (dressInfo?.type === 1111) {
    dataStyle = " #008F0E ";
    genderStyle = " bg-bgSpring border-borderSpring text-borderSpring";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = " #EAA700";
    genderStyle = " bg-bgSummer border-borderSummer text-borderSummer";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = " #E17A02 ";
    genderStyle = " bg-bgAutumm border-borderAutumm text-borderAutumm";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = " #007DCA ";
    genderStyle = " bg-bgWinter border-borderWinter text-borderWinter";
  }

  return (
    <div className="flex flex-col  box-border mt-[64px] ss:hidden xs:block">
      <div className="w-full h-fit">
        <div className=" flex ss:flex-col xs:flex-row xs:justify-between ss:justify-center items-center h-fit ">
          <div className="flex items-center ss:justify-center md:justify-start ss:w-full xs:w-[48%] md:w-fit border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded-lg ">
            <p className="flex items-center cursor-pointer select-none">
              <span className="not-italic font-AeonikProRegular xs:text-base md:text-base ss:text-base leading-7 text-black">
                Категория и продукты от:{" "}
              </span>
              <span className="flex items-center not-italic font-AeonikProMedium text-xl leading-6 text-black ml-3 mr-2">
                100$
                <img className="mt-[-1px] " src={arrowBottomFull} alt="next" />
              </span>{" "}
            </p>
          </div>
          <div className="flex items-center ss:justify-center md:justify-end ss:w-full xs:w-[48%]  md:w-fit ss:mt-4 xs:mt-0 border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded-lg">
            <p className="flex items-center cursor-pointer select-none">
              <span className="not-italic font-AeonikProMedium mr-2 md:text-base ss:text-base xs:text-sm leading-4 text-right text-black">
                Страница фильтра{" "}
              </span>
              <span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 12.5019L18.3333 7.50193C18.3333 3.33526 16.6666 1.6686 12.5 1.6686L7.49996 1.6686C3.33329 1.6686 1.66663 3.33527 1.66663 7.50193L1.66663 12.5019C1.66663 16.6686 3.33329 18.3353 7.49996 18.3353L12.5 18.3353C16.6666 18.3353 18.3333 16.6686 18.3333 12.5019Z"
                    stroke={dataStyle}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.8667 12.9436L11.8 10.0019L8.8667 7.06027"
                    stroke={dataStyle}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="w-full h-fit mt-12  ">
          <Slider
            {...settings1}
            className="w-[100%] flex xs:justify-between xs:pl-0"
          >
            {carosuelData?.map((data) => {
              return data.campany.map((data) => {
                return (
                  <div key={data.id} className="!w-[110px]  h-full ">
                    <div
                      className={`${
                        data.check
                          ? genderStyle
                          : "bg-btnBgColor  border-searchBgColor"
                      } w-full h-[110px] border m-auto ss:py-5  ls:p-0   rounded-full flex justify-center items-center cursor-pointer    `}
                    >
                      <p className="not-italic font-AeonikProMedium text-xs leading-4 text-center text-black">
                        {/* {data?.type || "0"} */}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66669 13.3334H9.33335C12 13.3334 13.3334 12 13.3334 9.33335V6.66669C13.3334 4.00002 12 2.66669 9.33335 2.66669H6.66669C4.00002 2.66669 2.66669 4.00002 2.66669 6.66669V9.33335C2.66669 12 4.00002 13.3334 6.66669 13.3334Z"
                            stroke="#000"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22.6667 13.3334H25.3334C28 13.3334 29.3334 12 29.3334 9.33335V6.66669C29.3334 4.00002 28 2.66669 25.3334 2.66669H22.6667C20 2.66669 18.6667 4.00002 18.6667 6.66669V9.33335C18.6667 12 20 13.3334 22.6667 13.3334Z"
                            stroke="#000"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22.6667 29.3334H25.3334C28 29.3334 29.3334 28 29.3334 25.3334V22.6667C29.3334 20 28 18.6667 25.3334 18.6667H22.6667C20 18.6667 18.6667 20 18.6667 22.6667V25.3334C18.6667 28 20 29.3334 22.6667 29.3334Z"
                            stroke="#000"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.66669 29.3334H9.33335C12 29.3334 13.3334 28 13.3334 25.3334V22.6667C13.3334 20 12 18.6667 9.33335 18.6667H6.66669C4.00002 18.6667 2.66669 20 2.66669 22.6667V25.3334C2.66669 28 4.00002 29.3334 6.66669 29.3334Z"
                            stroke="#000"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                    </div>
                    <div>
                      <p className="not-italic font-AeonikProMedium ss:text-sm xs:text-xs leading-4 text-center ls:mt-5 ss:mt-2 text-black ">
                        {data?.type || "type"}
                      </p>
                    </div>
                  </div>
                );
              });
            })}
          </Slider>
        </div>
      </div>

      <div className="w-full h-fit flex flex-col border-t	 border-searchBgColor mt-12 ">
        <div className="w-full flex items-center py-4">
          <Slider
            {...settings}
            className="w-[100%] flex xs:justify-between px-3"
          >
            {dressInfo.ProductList.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`!w-[100%] ss:m-0 md:my-8 cursor-pointer  border border-solid borderColorCard overflow-hidden rounded-lg`}
                  // className={`!w-[100%] ss:m-0 md:my-8 cursor-pointer transition ease-in-out delay-150 hover:shadow-cardShadow ${shadowStyle} border border-solid borderColorCard overflow-hidden rounded-lg`}
                >
                  <div className="relative w-full  h-[206px] ls:h-[220px] ll:h-[234px] xs:h-[309px] lg:h-[320px] bg-white flex flex-wrap content-between items-center overflow-hidden border-b border-solid	border-borderColorCard">
                    {data.ProducImg ? (
                      <img
                        className="w-full h-full m-auto  hover:scale-105 transition duration-700 ease-in-out"
                        src={data.ProducImg}
                        alt="ProducImg"
                      />
                    ) : (
                      <img
                        className="w-full h-fit"
                        src={data.noProductImg}
                        alt="noProductImg"
                      />
                    )}
                    <div className="w-full flex justify-between absolute top-px p-[5px]">
                      <div className="group w-8 hover:w-[85px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center justify-center">
                        <span className="w-8 h-8 flex items-center justify-center  ">
                          <img src={ticketDiscount} alt="" />
                        </span>
                        <span className=" w-0 flex items-center mt-1 group-hover:w-[40px] duration-300 not-italic  font-AeonikProRegular text-[11px]">
                          Delivery
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-solid bg-bgCard border-borderColorCard hover:bg-white transition ease-out duration-500">
                        <img src={heart} alt="" />
                      </div>
                    </div>

                    <div className="absolute w-full flex justify-between items-center px-1 bottom-[-0.2px] border-b border-searchBgColor xs:h-[38px] lg:h-8 ss:h-[30px] xs:px-2 md:px-4 bg-white hover:backdrop-brightness-125 hover:bg-white/60 transition ease-out duration-500">
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-purple-500 cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color1"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color1"
                          name="colors"
                          value="1"
                        />
                      </label>
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-black cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color2"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color2"
                          name="colors"
                          value="1"
                        />
                      </label>
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-white cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color3"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color3"
                          name="colors"
                          value="1"
                        />
                      </label>
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-zinc-500 cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color4"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color4"
                          name="colors"
                          value="1"
                        />
                      </label>
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-sky-600 cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color5"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color5"
                          name="colors"
                          value="1"
                        />
                      </label>
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-amber-400 cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color6"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color6"
                          name="colors"
                          value="1"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="w-full rounded-b-xl bg-white   flex flex-wrap h-[100px] md:h-[106px]">
                    <div className="w-full xs:px-3 ss:px-3 xs:mt-3 ss:mt-2">
                      <div className="relative w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[10px] ls:text-xs lg:text-[14px] leading-4 text-black mb-3 md:mb-0  cursor-pointer">
                        <div className="absolute categoryLinearText left-0 w-full h-full z-[51] top-0"></div>
                        {data?.title || "NoData"}
                      </div>
                      <div className="w-full flex justify-between items-center xs:mt-3 ">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center w-[14px] h-[14px] ">
                            <img
                              className="w-full h-full mt-[-4px]"
                              src={star}
                              alt=""
                            />
                          </span>
                          <span className="not-italic flex items-center  font-AeonikProRegular mt-[2px] text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 ">
                            <span className="flex items-center font-AeonikProMedium text-[10px] ls:text-xs not-italic mx-1 text-black md:mr-[6px] md:text-[13px]">
                              5.0{" "}
                            </span>
                            ({data?.starCount || 0}{" "}
                            <span className="flex items-center ss:hidden lg:block md:ml-1 md:text-[11px] font-AeonikProRegular">
                              голосов
                            </span>
                            )
                          </span>
                        </div>
                        <div className="not-italic xs:font-AeonikProRegular ss:font-AeonikProRegular leading-4 text-black text-[11px] sm:text-xs  md:text-[13px] ">
                          <b>
                            <span>{data?.shirtSize || 0}</span>
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-between mt-1 pl-3 pr-[5px]">
                      <div
                        className="not-italic font-AeonikProMedium text-base leading-4  "
                        style={{ color: "black" }}
                      >
                        {data?.price}{" "}
                      </div>
                      <div className="flex items-center">
                        <button className="w-[32px] h-[32px] mb-[4px] overflow-hidden rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                          <img src={addBag} alt="addbag" className="w-8" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
