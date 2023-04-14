import React, { useContext } from "react";

import {
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
  GeolocationControl,
  SearchControl,
  TrafficControl,
  TypeSelector,
  RulerControl,
  RouteEditor,
  Placemark,
  Clusterer,
} from "react-yandex-maps";
import { markerIcons } from "../../assets/imgs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import "./yandex.css";
import YandexMapsIndex from "./YandexMapsNavbar/YandexMapsIndex";
import { dressMainData } from "../../ContextHook/ContextMenu";
function YandexMapsDressMe() {
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
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  let hoverText = "";

  if (dressInfo?.type === 1111) {
    hoverText = " borderSpring ";
  }
  if (dressInfo?.type === 2222) {
    hoverText = " borderSummer ";
  }
  if (dressInfo?.type === 3333) {
    hoverText = " borderAutumm ";
  }
  if (dressInfo?.type === 4444) {
    hoverText = " borderWinter ";
  }

  return (
    <div className=" h-fit w-full flex justify-center  ">
      <div className="w-[100%] h-[100vh] border-b border-searchBgColor overflow-hidden">
        <div className="absolute z-50 top-0  w-full">
          <YandexMapsIndex />
        </div>
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
              // className="bg-green-500 text-red-500"
              className={"placemarkCLuster"}
              options={{
                preset: "islands##004773ClusterIcons",
                groupByCoordinates: false,
              }}
            >
              {points.map((data, index) => (
                <Placemark
                  className={"placemarkCLuster"}
                  // className="bg-green-500 text-red-500 p-2 border border-red-500"
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
                className="absolute cursor-pointer top-[9px] right-2 z-20 bg-white overflow-hidden rounded w-[30px] h-[30px] border border-searchBgColor shadow-md"
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
                } absolute cursor-pointer top-[0px] left-0 z-20 h-[550px] overflow-hidden w-[380px] p-4 duration-500 bg-white   border-r border-searchBgColor`}
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
            {/* <div className="absolute border border-red-500 bottom-0 w-full border "> */}
            <div className="absolute bottom-[24px] left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg overflow-hidden z-50 bg-yandexNavbar backdrop-blur-sm rounded-lg h-[48px] w-[400px] shadow-lg">
              <div className="w-full h-full border border-black flex justify-between border border-green-500">
                <div className="w-[80%] h-full flex gap-x-2 items-center border border-red-400">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    className="group fill-green-500 hover:fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6235 14.5505 14.0673 10.986 14.0673Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.9861 11.0054C13.3126 11.0054 15.1984 9.11883 15.1984 6.79224C15.1984 4.46565 13.3126 2.57994 10.9861 2.57994C8.65946 2.57994 6.77285 4.46565 6.77285 6.79224C6.76502 9.11097 8.63851 10.9976 10.9564 11.0054H10.9861Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={`group fill-yellow-500 hover:fill-black`}
                  >
                    <path d="M5,20.5A3.5,3.5 0 0,1 1.5,17A3.5,3.5 0 0,1 5,13.5A3.5,3.5 0 0,1 8.5,17A3.5,3.5 0 0,1 5,20.5M5,12A5,5 0 0,0 0,17A5,5 0 0,0 5,22A5,5 0 0,0 10,17A5,5 0 0,0 5,12M14.8,10H19V8.2H15.8L13.86,4.93C13.57,4.43 13,4.1 12.4,4.1C11.93,4.1 11.5,4.29 11.2,4.6L7.5,8.29C7.19,8.6 7,9 7,9.5C7,10.13 7.33,10.66 7.85,10.97L11.2,13V18H13V11.5L10.75,9.85L13.07,7.5M19,20.5A3.5,3.5 0 0,1 15.5,17A3.5,3.5 0 0,1 19,13.5A3.5,3.5 0 0,1 22.5,17A3.5,3.5 0 0,1 19,20.5M19,12A5,5 0 0,0 14,17A5,5 0 0,0 19,22A5,5 0 0,0 24,17A5,5 0 0,0 19,12M16,4.8C17,4.8 17.8,4 17.8,3C17.8,2 17,1.2 16,1.2C15,1.2 14.2,2 14.2,3C14.2,4 15,4.8 16,4.8Z"></path>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={`group fill-${hoverText}`}
                  >
                    <path d="M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z"></path>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="group fill-yellow-500 hover:fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.224 6.37335L8.74667 9.85069C8.336 10.2614 7.664 10.2614 7.25333 9.85069L3.776 6.37335"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="group fill-yellow-500 hover:fill-black"
                  >
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                  </svg>
                </div>
                <div className="w-[20%] h-full flex items-center border border-red-400">
                  <RouteEditor
                    options={{
                      position: { bottom: "auto", right: "auto" },
                    }}
                  />
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* ---------- */}
            <GeolocationControl
              options={{ float: "right", position: { bottom: 40, right: 10 } }}
            />
            <ZoomControl
              options={{ float: "right", position: { bottom: 100, right: 10 } }}
            />

            {/* <SearchControl
              options={{
                float: "left",
              }}
            /> */}

            {/* <RulerControl options={{ float: "right" }} /> */}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
// ClusteredMapView.defaultProps = {
//   clusteringEnabled: true,
//   spiralEnabled: true,
//   animationEnabled: true,
//   preserveClusterPressBehavior: false,
//   layoutAnimationConf: LayoutAnimation.Presets.spring,
//   tracksViewChanges: false,
//   // SuperCluster parameters
//   radius: Dimensions.get("window").width * 0.06,
//   maxZoom: 20,
//   minZoom: 1,
//   minPoints: 2,
//   extent: 512,
//   nodeSize: 64,
//   // Map parameters
//   edgePadding: { top: 50, left: 50, right: 50, bottom: 50 },
//   // Cluster styles
//   clusterColor: "#00B386",
//   clusterTextColor: "#FFFFFF",
//   spiderLineColor: "#FF0000",
//   // Callbacks
//   onRegionChangeComplete: () => {},
//   onClusterPress: () => {},
//   onMarkersChange: () => {},
//   superClusterRef: {},
//   mapRef: () => {},
// };
export default React.memo(YandexMapsDressMe);
