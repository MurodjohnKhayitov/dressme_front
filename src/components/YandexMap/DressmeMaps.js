import React from "react";
// import {
//   YMaps,
//   Map,
//   ObjectManager,
//   Placemark,
//   Button,
// } from "react-yandex-maps";
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
  ObjectManager,
  Placemark,
  Clusterer,
} from "react-yandex-maps";
import { FaMapMarkerAlt } from "react-icons/fa";
import { addBag, markerIcons } from "../../assets/imgs";
function DressmeMaps() {
  const map = React.createRef();
  const ymaps = React.createRef();
  const points = [
    { id: 1, cordinate: [41.343505, 69.247869] },
    { id: 2, cordinate: [41.304935, 69.235164] },
    { id: 3, cordinate: [41.344238, 69.242964] },
    { id: 4, cordinate: [41.323764, 69.359813] },
    { id: 5, cordinate: [41.341694, 69.420043] },
    { id: 6, cordinate: [41.321907, 69.254526] },
    { id: 7, cordinate: [41.320452, 69.219132] },
    { id: 8, cordinate: [41.307447, 69.249306] },
    { id: 9, cordinate: [41.292876, 69.261085] },
    { id: 10, cordinate: [41.32621, 69.248896] },
    { id: 11, cordinate: [41.318716, 69.248341] },
    { id: 12, cordinate: [41.282263, 69.216182] },
  ];
  return (
    <div className="my-8 h-fit w-full flex justify-between border border-borderColorCard ">
      <div className="w-[40%] h-[600px]"></div>
      <div className="w-[60%] h-[600px]">
        <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}>
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
          
            {points.map((coordinates, index) => (
              <Placemark
                key={index}
                geometry={coordinates?.cordinate}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: markerIcons,
                  iconImageSize: [32, 32],
                }}
              />
            ))}

            {/* ---------- */}
            <ZoomControl
              options={{ float: "none", position: { top: 100, left: 10 } }}
            />
            <FullscreenControl />
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
            <TrafficControl
              options={{
                float: "right",
              }}
            />
            <TypeSelector
              options={{
                float: "right",
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
