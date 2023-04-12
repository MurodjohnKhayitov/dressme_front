import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AreaChart, Area, XAxis, Tooltip } from "recharts";
import moment from "moment";

export default function WeatherInfo() {
  const [weatherSet, setWeatherSet] = useState("");
  const [cilciyToGradus, setCilciyToGradus] = useState(true);
  useQuery(
    ["Weather"],
    () => {
      return fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=aec6a76815144405ac3125132232903&q=Toshkent&days=7`
      ).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setWeatherSet(res);
      },
      onError: (err) => {
        console.log(err, "errpr");
      },
    }
  );

  const data1 = [
    {
      name: "09:00",
      uv: 16,
      amt: 50,
    },
    {
      name: "10:00",
      uv: 14,
      amt: 50,
    },

    {
      name: "12:00",
      uv: 12,
      amt: 50,
    },
    {
      name: "13:00",
      uv: 9,
      amt: 50,
    },
    {
      name: "14:00",
      uv: 12,
      amt: 50,
    },
    {
      name: "15:00",
      uv: 17,
      amt: 50,
    },
    {
      name: "16:00",
      uv: 22,
      amt: 50,
    },
  ];
  return (
    <div className="w-full  flex justify-center items-center">
      <div className="w-[750px] h-fit p-2 ">
        <div className="w-full h-fit my-2 flex justify-between ">
          <div className="w-fit h-full flex items-center flex-wrap gap-x-2">
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src={weatherSet?.current?.condition?.icon}
                alt="icon"
              />
            </div>
            <div className="flex items-start gap-x-2">
              <div className=" mt-[10px]">
                <span className="text-[60px]  not-italic font-AeonikProMedium  leading-10 text-black">
                  {cilciyToGradus ? (
                    <span>{weatherSet?.current?.temp_c}</span>
                  ) : (
                    <span>{parseInt(weatherSet?.current?.temp_f)}</span>
                  )}
                </span>
              </div>
              <div className="">
                <span
                  onClick={() => setCilciyToGradus(true)}
                  className={` not-italic select-none cursor-pointer font-AeonikProMedium text-base leading-4 ${
                    cilciyToGradus ? "text-black " : "text-borderColorCard"
                  }   `}
                >
                  <span className="before:content-['\00B0'] "></span>C
                </span>
                <span className="h-[2px] mx-2 border border-black w-[1px]"></span>
                <span
                  onClick={() => setCilciyToGradus(false)}
                  className={`not-italic select-none cursor-pointer font-AeonikProMedium text-base leading-4 ${
                    cilciyToGradus ? "text-borderColorCard" : "text-black"
                  }  `}
                >
                  <span className="before:content-['\00B0'] "></span> F
                </span>
              </div>
            </div>
            <div>
              <div className="not-italic font-AeonikProRegular ml-1 text-base leading-4 text-black">
                Опасность осадки:
                <span className="ml-1">
                  {weatherSet?.current?.precip_mm} %
                </span>{" "}
              </div>
              <div className="not-italic font-AeonikProRegular ml-1 text-base leading-4 my-1 text-black">
                влажность:
                <span className="ml-1">
                  {" "}
                  {weatherSet?.current?.cloud}%
                </span>{" "}
              </div>
              <div className="not-italic font-AeonikProRegular ml-1 text-base leading-4 text-black">
                ветер:
                <span className="ml-1">
                  {weatherSet?.current?.wind_mph} km/h
                </span>{" "}
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-fit h-full">
            <div className="text-end">
              <span className="text-[24px] not-italic font-AeonikProMedium  leading-7 text-black">
                погода
              </span>
            </div>
            <div className="text-end">
              <span className="not-italic font-AeonikProMedium text-[16px] leading-4 text-borderColorCard">
               
                {moment(
                  weatherSet?.current?.last_updated_epoch?.date_epoch
                ).format(" dddd  LT")}{" "}
              </span>
            </div>
            <div className="text-end">
              <span className="not-italic font-AeonikProMedium text-[16px] leading-4 text-borderColorCard">
                {weatherSet?.current?.condition?.text}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between  mt-5">
          <div>
            <span className="text-[20px] not-italic font-AeonikProMedium  leading-7 text-black">
              {weatherSet?.location?.region || "Region"}
            </span>
          </div>
          <div className="flex gap-x-1 items-center">
            <div className="text-[20px] not-italic font-AeonikProMedium ml-1 mr-4  leading-7 text-black">
              {moment(weatherSet?.location?.localtime).format("LLL")}
            </div>
          </div>
        </div>

       
        <div className="w-full h-400px  mt-5">
          <AreaChart
            width={750}
            height={150}
            data={data1}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#F1CD53"
              fill="#FEF5D4"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        </div>
        <div className="w-full h-fit flex justify-between  mt-5 ">
          {weatherSet?.forecast?.forecastday?.map((data) => {
            return (
              <div className="w-[13%] h-fit py-[8px] hover:bg-searchBgColor rounded-lg cursor-pointer">
                <div className="not-italic font-AeonikProMedium  text-[18px] leading-4 text-black flex justify-center  ">
                  {moment(data?.date).format(" ddd")}{" "}
                </div>
                <div className="w-full   flex justify-center ">
                  <img
                    className="w-[70%]"
                    src={data?.day?.condition?.icon}
                    alt="icon"
                  />
                </div>
                <div className="flex justify-center gap-x-2 ">
                  <span className="not-italic font-AeonikProMedium text-base leading-4 text-black after:content-['\00B0']">
                    {parseInt(data?.day?.maxtemp_c)}
                  </span>
                  <span className="not-italic font-AeonikProMedium text-base leading-4 text-borderColorCard after:content-['\00B0']">
                    {parseInt(data?.day?.mintemp_c)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
