import React from "react";

import {
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
  GeolocationControl,
  SearchControl,
 
  RulerControl,
  Placemark,
  Clusterer,
} from "react-yandex-maps";
import { markerIcons } from "../../assets/imgs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import "./yandex.css";
function DressmeMaps() {
  const [openMenuYandex, setOpenMenuYandex] = useState(false);
  const map = React.createRef();
  const ymaps = React.createRef();
  const points = [
    {
      id: 1,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.343505, 69.247869],
    },
    {
      id: 2,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.304935, 69.235164],
    },
    {
      id: 3,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.344238, 69.242964],
    },
    {
      id: 4,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.323764, 69.359813],
    },
    {
      id: 5,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.341694, 69.420043],
    },
    {
      id: 6,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.321907, 69.254526],
    },
    {
      id: 7,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.320452, 69.219132],
    },
    {
      id: 8,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.307447, 69.249306],
    },
    {
      id: 9,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.292876, 69.261085],
    },
    {
      id: 10,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.32621, 69.248896],
    },
    {
      id: 11,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.318716, 69.248341],
    },
    {
      id: 12,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.282263, 69.216182],
    },
  ];

  return (
    <div className=" h-fit w-full flex justify-center  ">
      <div className="w-[100%] h-[550px] border-b border-searchBgColor overflow-hidden">
        <YMaps
          className="w-full"
          query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}
        >
          <Map
            state={{ center: [41.311153, 69.279729], zoom: 11 }}
            instanceRef={map}
            onLoad={(ymapsInstance) => {
              ymaps.current = ymapsInstance;
            }}
            width="100%"
            height="100%"
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            {/* ---------- */}
            <Clusterer
              options={{
                preset: "islands#invertedVioletClusterIcons",
                groupByCoordinates: false,

              }}
              clusterTextColor={"#00B386"}
              clusterColor={"#FF0000"}
              pinColor={"#91c000"}
              
            >
              
              {points.map((data, index) => (
                <Placemark
                  key={index}
                  geometry={data?.cordinate}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: markerIcons,
                    iconImageSize: [32, 32],
                  }}
                  modules={["geoObject.addon.balloon"]}
                  properties={{
                    balloonContentHeader: `<div class="balloonContentHeader"><a class="title" href = "#">Пункт выдачи</a><br><span class="description11">${data?.address}</span></div>`,

                    // // Зададим содержимое основной части балуна.
                    balloonContentBody:
                      `<div class="bodyImgs"><img  className="data" src="https://images.wbstatic.net/PickupOffice/Img154040_Photo1.jpg"/><img  className="data" src="https://images.wbstatic.net/PickupOffice/Img154040_Photo1.jpg"/> </div><br/>` +
                      // `<div class="bodySana"><span class='text'>Режим работы:<span>${data?.workTime}</span></span></div><br/>` +
                      // `<div class="bodySana"><span class='text'>Примерочные: <span>${data?.imgs.length} шт</span></span></div><br/>` +

                      `<div class="bodySana">
                          <span class='text'>Режим работы:<span>${data?.workTime}</span></span><br/>
                          <span class='text'>Примерочные: <span>${data?.imgs.length} шт</span></span>
                      </div><br/>` +
                      `<div class="BtnUzGroup"><div class='BtnUz'>Выбрать</div></div>`,

                    balloonContentFooter: `<div class="footerText"><span>Directions:</span> ${data?.direction}</div>`,
                  }}
                />
                
              ))}
            </Clusterer>
            <div className="relative">
              <div
                onClick={() => setOpenMenuYandex(!openMenuYandex)}
                className="absolute cursor-pointer top-[9px] right-2 z-50 bg-white overflow-hidden rounded w-[30px] h-[30px] border border-searchBgColor shadow-md"
              >
                <div className="flex items-center justify-center w-full h-full">
                  {openMenuYandex ? (
                    <MdClose size={20} />
                  ) : (
                    <RxHamburgerMenu size={20} />
                  )}
                </div>{" "}
              </div>
              <div
                className={`${
                  openMenuYandex ? " ml-[0px]" : "  ml-[-1000px]"
                } absolute cursor-pointer top-[0px] left-0 z-50 h-[550px] overflow-hidden w-[380px] p-4 duration-500 bg-white   border-r border-searchBgColor`}
              >
                <div className="w-full py-2 not-italic font-AeonikProMedium text-xl leading-8 text-black">
                  Выберите адрес доставки
                </div>
                <div className="w-full h-[85%] mt-3 pr-1 overflow-y-auto   YandexListScroll">
                  {points?.map((data) => {
                    return (
                      <div
                        key={data?.id}
                        className="w-full h-[100px]  hover:bg-bgColor p-[6px] hover:rounded-lg focus:border border-searchBgColor"
                      >
                        <div>
                          <span className="not-italic font-AeonikProRegular text-[15px] leading-4 text-black tracking-wide">
                            {data?.address}{" "}
                          </span>
                        </div>
                        <div>
                          {" "}
                          <span className="not-italic font-AeonikProRegular leading-3 text-yandexText text-[15px]">
                            {data?.workTime}
                          </span>
                          <span className="not-italic font-AeonikProRegular leading-3 text-yandexText text-[15px] ml-4">
                            Примерочные: {data?.imgs.length}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* ---------- */}
            <ZoomControl
              options={{ float: "none", position: { top: 100, left: 10 } }}
            />
            <FullscreenControl
              options={{ float: "none", position: { top: 10, right: 50 } }}
            />
            <GeolocationControl
              options={{
                float: "left",
              }}
            />
            <SearchControl
              options={{
                float: "left",
              }}
            />

            <RulerControl options={{ float: "right" }} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default React.memo(DressmeMaps);
