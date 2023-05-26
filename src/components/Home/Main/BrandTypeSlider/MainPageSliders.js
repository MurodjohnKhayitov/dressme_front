import React, { useContext } from "react";

import {

  adidas,
  chanel,
  hm,
  lacoste,
  nike,
  puma,
  tommy,
  zara,
} from "../../../../AssetsMain";


import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NavLink } from "react-router-dom";
// import required modules``
export default function MainPageSliders() {
  const [dressInfo] = useContext(dressMainData);
  let dataStyle = "";
  let genderStyle = "";
  if (dressInfo?.type == 1111) {
    dataStyle = " #008F0E ";
    genderStyle = "text-borderSpring bg-btnBgColor border-searchBgColor";
  }
  if (dressInfo?.type == 2222) {
    dataStyle = " #EAA700";
    genderStyle = "text-borderSummer bg-btnBgColor border-searchBgColor";
  }
  if (dressInfo?.type == 3333) {
    dataStyle = " #E17A02 ";
    genderStyle = "text-borderAutumm bg-btnBgColor border-searchBgColor";
  }
  if (dressInfo?.type == 4444) {
    dataStyle = " #007DCA ";
    genderStyle = "text-borderWinter bg-btnBgColor border-searchBgColor";
  }

  const changeColor = [
    { id: 1, data: 1, action: false, colors: "border-black" },
    { id: 2, data: 2, action: false, colors: "border-white" },
    { id: 3, data: 3, action: false, colors: "border-zinc-500" },
    { id: 4, data: 4, action: false, colors: "border-purple-500" },
    { id: 5, data: 5, action: false, colors: "border-sky-600" },
    { id: 6, data: 6, action: false, colors: "border-amber-400 " },
    { id: 7, data: 7, action: false, colors: "border-green-700 " },
    { id: 8, data: 8, action: false, colors: "border-amber-600 " },
    { id: 9, data: 9, action: false, colors: "border-red-700  " },
    { id: 10, data: 10, action: false, colors: "border-purple-800 " },
    { id: 11, data: 11, action: false, colors: "border-blue-900  " },
    { id: 12, data: 12, action: false, colors: "border-yellow-900 " },
  ];
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
      ],

      campany: [
        { id: 1, imgFull: adidas },
        { id: 2, imgFull: chanel },
        { id: 3, imgFull: adidas },
        { id: 4, imgFull: lacoste },
        { id: 5, imgFull: hm },
        { id: 6, imgFull: lacoste },
        { id: 7, imgFull: adidas },
        { id: 8, imgFull: nike },
        { id: 9, imgFull: puma },
        { id: 10, imgFull: puma },
        { id: 11, imgFull: tommy },
        { id: 12, imgFull: zara },
      ],
      service: [
        { id: 1111, type: "Spring" },
        { id: 2222, type: "Summer" },
        { id: 3333, type: "Autumm" },
        { id: 4444, type: "Winter" },
      ],
    },
  ];
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	right-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard		`}
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
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	left-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };
  const NextArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[30%] z-10	right-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard	`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };

  const PrevArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[30%] z-10	left-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard	`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };
  let settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    dots: false,

    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3,
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
  let settings1 = {
    nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3,
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

  return (
    <div className="box-border flex flex-col justify-center	 my-6">
      <div className="w-full ss:hidden xs:block">
        <Slider
          {...settings}
          className="w-[100%] flex xs:justify-between flex-wrap  "
        >
          {carosuelData?.map((data) => {
            return data.Category.map((data) => {
              return (
                <NavLink
                  to={"/categoriesType"}
                  key={data?.id}
                  className="!w-[99%]  h-[260px] rounded-lg  "
                >
                  <div className="w-full h-[230px] bg-btnBgColor p-2 ml-[0.5px]  rounded-lg">
                    {changeColor
                      .filter((e) => e.id === dressInfo?.ClothesBorder)
                      .map((value) => {
                        return (
                          <div
                            key={value?.id}
                            className={`w-full h-full border border-solid	${value?.colors} rounded-lg`}
                          >
                            {data?.img ? (
                              <img
                                className="h-full w-full"
                                src={data?.img}
                                alt="student"
                              />
                            ) : null}
                          </div>
                        );
                      })}
                  </div>
                  <div className="h-12.5 flex items-center justify-start">
                    <p className="not-italic font-AeonikProMedium text-base leading-4 text-black mt-3 mr-2   ml-2">
                      {data?.type || "type"}
                      <span className="not-italic ml-2 font-AeonikProRegular text-xs leading-4 text-gray-500">
                        ({data?.count || "0"})
                      </span>
                    </p>
                  </div>
                </NavLink>
              );
            });
          })}
        </Slider>
      </div>
      {/* carosuel hidden bloack */}
      <div className="w-full h-fit xs:hidden grid grid-cols-3  gap-4 ll:gap-x-[38px] ls:gap-x-[35px] overflow-hidden  my-0 py-0 md:my-5 md:py-7 ">
        {carosuelData?.map((data) => {
          return data.Category.map((data) => {
            return (
              <div key={data?.id} className="ll:w-[100px] ss:w-[80px] ">
                <div className="w-[100%] h-[80px] flex items-center justify-center	p-1 bg-btnBgColor border border-searchBgColor	rounded-lg ">
                  <img
                    className="border-0 w-fit h-fit	"
                    src={
                      data?.img || (
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5 33H22.5C30 33 33 30 33 22.5V13.5C33 6 30 3 22.5 3H13.5C6 3 3 6 3 13.5V22.5C3 30 6 33 13.5 33Z"
                            stroke="#E8E8E8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5 15C15.1569 15 16.5 13.6569 16.5 12C16.5 10.3431 15.1569 9 13.5 9C11.8431 9 10.5 10.3431 10.5 12C10.5 13.6569 11.8431 15 13.5 15Z"
                            stroke="#E8E8E8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.00488 28.425L11.3999 23.46C12.5849 22.665 14.2949 22.755 15.3599 23.67L15.8549 24.105C17.0249 25.11 18.9149 25.11 20.0849 24.105L26.3249 18.75C27.4949 17.745 29.3849 17.745 30.5549 18.75L32.9999 20.85"
                            stroke="#E8E8E8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )
                    }
                    alt="."
                  />
                </div>
                <div className="w-full py-1 flex items-center">
                  <p className="not-italic font-AeonikProMedium text-sm leading-6 text-black">
                    {data?.type || "type"}
                    <span className="not-italic font-AeonikProRegular text-xs leading-4 text-gray-500 ml-1">
                      ({data?.count || "0"})
                    </span>
                  </p>
                </div>
              </div>
            );
          });
        })}
      </div>
      <div className="w-full flex justify-center items-center  mt-10 ">
        <button
          className={`w-fit cursor-pointer active:scale-95	active:opacity-70 flex items-center h-[52px] px-10 rounded-lg border ${genderStyle}`}
        >
          <span className="not-italic mt-1 font-AeonikProMedium text-base leading-4 text-center">
            Посмотреть все категории
          </span>
          <span className="ml-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke={dataStyle}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 12H14.5"
                stroke={dataStyle}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 15L15.5 12L12.5 9"
                stroke={dataStyle}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="w-full 	mt-[60px] ss:hidden xs:block">
        <Slider
          {...settings1}
          className="w-[100%] flex xs:justify-between  px-[1px]"
        >
          {carosuelData?.map((data) => {
            return data.campany.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="!w-[98.88%] h-[100px]  rounded-lg bg-btnBgColor flex items-center justify-center select-none border border-solid border-searchBgColor"
                >
                  <div className=" h-full flex items-center justify-center px-[35px]">
                    <img
                      className="h-[70px] w-[80%] "
                      src={data?.imgFull}
                      alt=""
                    />
                  </div>
                </div>
              );
            });
          })}
        </Slider>
      </div>

      {carosuelData?.map((data) => {
        return data?.service
          ?.filter((data) => data.id === dressInfo?.type)
          .map((data) => {
            return (
              <div
                key={data?.id}
                className="flex 	mt-[64px] flex-wrap justify-between items-center  gap-y-5    ss:hidden xs:block xs:flex"
              >
                {/* 1 */}
                <div
                  className={`lg:w-[305px]  sm:w-[47%] ss:w-[100%] ss:h-20 py-[20px] px-[16px] xs:h-[100px] bg-btnBgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-searchBgColor `}
                >
                  <div className="w-full">
                    <p
                      className={`not-italic font-AeonikProRegular ss:text-sm xs:text-base leading-4 text-black `}
                    >
                      Strengthen Health
                    </p>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <p className="nnot-italic font-AeonikProMedium text-xl leading-6 text-black">
                      Sports clothes
                    </p>
                    <p>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.6666 17.5L25.6666 10.5C25.6666 4.66669 23.3333 2.33336 17.5 2.33336L10.5 2.33336C4.66665 2.33336 2.33331 4.66669 2.33331 10.5L2.33331 17.5C2.33331 23.3334 4.66665 25.6667 10.5 25.6667L17.5 25.6667C23.3333 25.6667 25.6666 23.3334 25.6666 17.5Z"
                          stroke={dataStyle}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"

                        />
                        <path
                          d="M12.4133 18.1183L16.52 14L12.4133 9.88168"
                          stroke={dataStyle}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"

                        />
                      </svg>
                    </p>
                  </div>
                </div>
                {/* 2 */}

                <div className="lg:w-[305px] sm:w-[47%] ss:w-[100%] ss:h-20 xs:h-[100px] py-[20px] px-[16px] bg-btnBgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-searchBgColor">
                  <div className="w-full">
                    <p className="not-italic font-AeonikProRegular ss:text-sm xs:text-base leading-4 text-black">
                      Based on your Interests
                    </p>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <p className="not-italic font-AeonikProMedium text-xl leading-6 text-black">
                      Muslim clothes
                    </p>
                    <p>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.6666 17.5L25.6666 10.5C25.6666 4.66669 23.3333 2.33336 17.5 2.33336L10.5 2.33336C4.66665 2.33336 2.33331 4.66669 2.33331 10.5L2.33331 17.5C2.33331 23.3334 4.66665 25.6667 10.5 25.6667L17.5 25.6667C23.3333 25.6667 25.6666 23.3334 25.6666 17.5Z"
                          stroke={dataStyle}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"

                        />
                        <path
                          d="M12.4133 18.1183L16.52 14L12.4133 9.88168"
                          stroke={dataStyle}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"

                        />
                      </svg>
                    </p>
                  </div>
                </div>
                {/* 3*/}

                <div className="lg:w-[305px] sm:w-[47%] ss:w-[100%] ss:h-20 xs:h-[100px] py-[20px] px-[16px] bg-btnBgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-searchBgColor">
                  <div className="w-full">
                    <p className="not-italic font-AeonikProRegular ss:text-sm xs:text-base leading-4 text-black">
                      Sort by your Money
                    </p>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <p className="flex items-end">
                      <span className="not-italic font-AeonikProRegular text-base text-gray-500 mr-2">
                        ниже
                      </span>
                      <span className="not-italic font-AeonikProMedium text-xl leading-6 text-black">
                        40$
                      </span>
                      <span className="mt-[-4px]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.0575 13.8589C9.00917 13.8118 8.8025 13.634 8.6325 13.4684C7.56333 12.4975 5.81333 9.9646 5.27917 8.6389C5.19333 8.43757 5.01167 7.92856 5 7.6566C5 7.39601 5.06 7.14759 5.18167 6.91054C5.35167 6.61503 5.61917 6.37798 5.935 6.24809C6.15417 6.16447 6.81 6.03458 6.82167 6.03458C7.53917 5.90469 8.705 5.83325 9.99333 5.83325C11.2208 5.83325 12.3392 5.90469 13.0675 6.01104C13.0792 6.02322 13.8942 6.15311 14.1733 6.29518C14.6833 6.55577 15 7.06478 15 7.60951V7.6566C14.9875 8.01137 14.6708 8.75743 14.6592 8.75743C14.1242 10.0117 12.46 12.4861 11.3542 13.4806C11.3542 13.4806 11.07 13.7607 10.8925 13.8824C10.6375 14.0724 10.3217 14.1666 10.0058 14.1666C9.65333 14.1666 9.325 14.0602 9.0575 13.8589Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </p>
                    <p>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.6666 17.5L25.6666 10.5C25.6666 4.66669 23.3333 2.33336 17.5 2.33336L10.5 2.33336C4.66665 2.33336 2.33331 4.66669 2.33331 10.5L2.33331 17.5C2.33331 23.3334 4.66665 25.6667 10.5 25.6667L17.5 25.6667C23.3333 25.6667 25.6666 23.3334 25.6666 17.5Z"
                          stroke={dataStyle}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"

                        />
                        <path
                          d="M12.4133 18.1183L16.52 14L12.4133 9.88168"
                          stroke={dataStyle}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"

                        />
                      </svg>
                    </p>
                  </div>
                </div>
                {/* 4*/}

                <div className="lg:w-[305px] sm:w-[47%] ss:w-[100%] ss:h-20 xs:h-[100px] py-[20px] px-[16px] bg-btnBgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-searchBgColor">
                  <div className="w-full">
                    <p className="not-italic font-AeonikProRegular ss:text-sm xs:text-base leading-4 text-black">
                      Магазины ближе к вам
                    </p>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <p className="flex mr-2 items-center">
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.50833 9.3501V13.0918C2.50833 16.8334 4.00833 18.3334 7.75 18.3334H12.2417C15.9833 18.3334 17.4833 16.8334 17.4833 13.0918V9.3501"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 9.99984C11.525 9.99984 12.65 8.75817 12.5 7.23317L11.95 1.6665H8.05833L7.5 7.23317C7.35 8.75817 8.475 9.99984 10 9.99984Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.2583 9.99984C16.9417 9.99984 18.175 8.63317 18.0083 6.95817L17.775 4.6665C17.475 2.49984 16.6417 1.6665 14.4583 1.6665H11.9167L12.5 7.50817C12.6417 8.88317 13.8833 9.99984 15.2583 9.99984Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.7 9.99984C6.075 9.99984 7.31667 8.88317 7.45 7.50817L7.63333 5.6665L8.03334 1.6665H5.49167C3.30834 1.6665 2.475 2.49984 2.175 4.6665L1.95 6.95817C1.78333 8.63317 3.01667 9.99984 4.7 9.99984Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 14.1665C8.60833 14.1665 7.91667 14.8582 7.91667 16.2498V18.3332H12.0833V16.2498C12.0833 14.8582 11.3917 14.1665 10 14.1665Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="not-italic font-AeonikProMedium ss:tex-tlg ll:text-xl leading-6 text-black">
                        Найти магазина
                      </span>
                    </p>
                    <p>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.6666 17.5L25.6666 10.5C25.6666 4.66669 23.3333 2.33336 17.5 2.33336L10.5 2.33336C4.66665 2.33336 2.33331 4.66669 2.33331 10.5L2.33331 17.5C2.33331 23.3334 4.66665 25.6667 10.5 25.6667L17.5 25.6667C23.3333 25.6667 25.6666 23.3334 25.6666 17.5Z"
                          stroke={dataStyle}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"

                        />
                        <path
                          d="M12.4133 18.1183L16.52 14L12.4133 9.88168"
                          stroke={dataStyle}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}

                    </p>
                  </div>
                </div>
              </div>
            );
          });
      })}
    </div>
  );
}
