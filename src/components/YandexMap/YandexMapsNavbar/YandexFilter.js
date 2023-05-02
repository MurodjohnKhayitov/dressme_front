import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";

export default function YandexFilter() {
  const wearGroup = [
    { id: 1, name: "Футболки" },
    { id: 2, name: "Рубашки" },
    { id: 3, name: "Шорты" },
    { id: 4, name: "Джинсы" },
    { id: 5, name: "Свитер" },
    { id: 6, name: "Куртки" },
    { id: 7, name: "Толстовки" },
    { id: 8, name: "Обуви" },
    { id: 9, name: "Куртки" },
    { id: 10, name: "Сапоги" }, 
    { id: 11, name: "Платья" },
    { id: 12, name: "Юбки" },
    { id: 13, name: "Ремень" },
  ];
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute ss:hidden text-center cursor-pointer no-underline  w-12 h-12 flex items-center justify-center top-[3px] z-50	right-[-1px]  rounded-full bg-white duration-200 border  border-searchBgColor		`}
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
        className={`absolute ss:hidden text-center cursor-pointer no-underline  w-12 h-12 flex items-center justify-center top-[3px] z-10	left-[0px]  rounded-full bg-white duration-200 border  border-searchBgColor`}
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
    arrows: true,
    speed: 500,
    dots: false,
    slidesToShow: 8,
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
          slidesToShow: 7,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <div className=" max-w-[1280px]  w-[100%] py-2 ss:px-3 mt-[-2px] md:px-6 overflow-hidden md:rounded-b-[16px] bg-yandexNavbar border border-searchBgColor border-t-0 backdrop-blur-sm flex justify-between items-center m-auto md:border-t">
      <div className="w-full ss:hidden  md:block md:flex  items-center justify-between ">
        {wearGroup?.map((data) => {
          return (
            <span
              key={data?.id}
              className="px-4 py-[10px] cursor-pointer rounded-lg bg-white not-italic font-AeonikProMedium text-sm text-black tracking-[0.16px] leading-[120%] border border-searchBgColor"
            >
              {data?.name || "none"}{" "}
            </span>
          );
        })}
      </div>
      <div className="w-full ss:block md:hidden flex items-center justify-between ">
        <Slider
          {...settings1}
          className="w-[100%] h-full items-center  flex xs:justify-between  "
        >
          {wearGroup?.map((data) => {
            return (
              <div key={data.id} className="!w-[84px]  h-full ">
                <div
                  className={` w-full h-[38px] px-3 m-auto  bg-white rounded-lg flex justify-center items-center cursor-pointer  border border-searchBgColor  `}
                >
                  <p className=" cursor-pointer rounded-lg bg-white not-italic font-AeonikProMedium text-sm text-black tracking-[1%] ">
                    {data?.name || "0"}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
