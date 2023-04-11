import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BsSun, BsSunset } from "react-icons/bs";
export default function WeatherInfo() {
  const [weatherSet, setWeatherSet] = useState("");
  useQuery(
    ["Weather"],
    () => {
      return fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=aec6a76815144405ac3125132232903&q=Toshkent`
      ).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setWeatherSet(res);
        console.log(res);
      },
      onError: (err) => {
        console.log(err, "errpr");
      },
    }
  );
  weatherSet?.forecast?.forecastday?.map((data) => {
    console.log(data?.hour);
  });
  // console.log(weatherSet?.forecast?.forecastday, "location");
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
    <div className="w-full h-[100vh] border border-green-500 flex justify-center items-center">
      <div className="w-[750px] h-fit p-2 border border-red-500">
        <div className="w-full h-fit my-2 flex justify-between border border-black">
          <div className="w-[65%] border border-green-500 h-full flex flex-wrap gap-x-2">
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src={weatherSet?.current?.condition?.icon}
                alt=""
              />
            </div>
            <div className="flex items-start gap-x-2">
              <div className=" mt-[10px]">
                <span className="text-[60px]  not-italic font-AeonikProMedium  leading-10 text-black">
                  {weatherSet?.current?.temp_c}
                </span>
              </div>
              <div className="">
                <span className="not-italic font-AeonikProMedium text-base leading-4 text-black before:content-['\00B0'] ">
                  C
                </span>
                <span className="h-1 mx-2 border border-black w-[1px]"></span>
                <span className="not-italic font-AeonikProMedium text-base leading-4 text-borderColorCard before:content-['\00B0']">
                  F
                </span>
              </div>
            </div>
            <div>
              <div className="not-italic font-AeonikProRegular ml-1 text-base leading-4 text-black">
                Опасность осадки:<span className="ml-1">{weatherSet?.current?.feelslike_f} %</span>{" "}
              </div>
              <div className="not-italic font-AeonikProRegular ml-1 text-base leading-4 my-1 text-black">
                влажность:<span className="ml-1"> {weatherSet?.current?.cloud}%</span>{" "}
              </div>
              <div className="not-italic font-AeonikProRegular ml-1 text-base leading-4 text-black">
                ветер:<span className="ml-1">{weatherSet?.current?.vis_km} km/h</span>{" "}
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-[50%] border border-green-500 h-full">
            <div className="text-end">
              <span className="text-[24px] not-italic font-AeonikProMedium  leading-7 text-black">
                погода
              </span>
            </div>
            <div className="text-end">
              <span className="not-italic font-AeonikProMedium text-[18px] leading-4 text-borderColorCard">
                четверг 20:00
              </span>
            </div>
            <div className="text-end">
              <span className="not-italic font-AeonikProMedium text-[18px] leading-4 text-borderColorCard">
                {weatherSet?.current?.condition?.text}
              </span>
            </div>
          </div>
        </div>
        {/* {weatherSet?.map((item) => {
          return item?.location?.map((data) => {
            return ( */}
        <div className="flex items-center justify-between border border-red-500 mt-5">
          <div>
            {/* <span className="text-[20px] not-italic font-AeonikProMedium  leading-7 text-black">
              {weatherSet?.location?.country || "Country"}
            </span> */}
            <span className="text-[20px] not-italic font-AeonikProMedium  leading-7 text-black">
              {weatherSet?.location?.region || "Region"}
            </span>
          </div>
          <div className="flex gap-x-1 items-center">
            <div className="text-[20px] not-italic font-AeonikProMedium ml-1 mr-4  leading-7 text-black">
              {weatherSet?.location?.localtime || "LocalTime"}
            </div>
            <div className="text-[16px] not-italic font-AeonikProRegular flex items-center   leading-7 text-black">
              <span className="mr-2">
                <BsSun />
              </span>
              <span className="mr-1">Rise:</span>
              {weatherSet?.forecast?.forecastday?.map((data) => {
                return <span>{data?.astro?.sunrise || "sunrise"}</span>;
              })}
            </div>
            <span className="w-[1px] border border-black h-4 mx-2"></span>
            <div className="text-[16px] not-italic font-AeonikProRegular flex items-center   leading-7 text-black">
              <span className="mr-2">
                <BsSunset />
              </span>
              <span className="mr-1">Set:</span>
              {weatherSet?.forecast?.forecastday?.map((data) => {
                return <span>{data?.astro?.sunset || "sunSet"}</span>;
              })}
            </div>
          </div>
        </div>
        {/* );
          });
        })} */}
        <div className="w-full h-400px border border-red-500 mt-5">
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
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        </div>
        <div className="w-full h-200px flex justify-between border border-red-500 mt-5">
          <div className="w-[14%] border border-yellow-700">
            <div className="not-italic font-AeonikProMedium mr-1 text-[18px] leading-4 text-black flex justify-center">
              Dush
            </div>
            <div className="w-full flex justify-center mt-1">
              <img
                className="w-full"
                src="https://storage.kun.uz/source/thumbnails/_medium/9/Tp7NXm68ql5IsmytKnhaq9lU_eTO5HYP_medium.jpg"
                alt=""
              />
            </div>
            <div className="mt-2 flex justify-center gap-x-1">
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-black after:content-['\00B0']">
                22
              </span>
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-borderColorCard after:content-['\00B0']">
                9
              </span>
            </div>
          </div>
          <div className="w-[14%] border border-yellow-700">
            <div className="not-italic font-AeonikProMedium mr-1 text-[18px] leading-4 text-black flex justify-center">
              Dush
            </div>
            <div className="w-full flex justify-center mt-1">
              <img
                className="w-full"
                src="https://storage.kun.uz/source/thumbnails/_medium/9/Tp7NXm68ql5IsmytKnhaq9lU_eTO5HYP_medium.jpg"
                alt=""
              />
            </div>
            <div className="mt-2 flex justify-center gap-x-1">
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-black after:content-['\00B0']">
                22
              </span>
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-borderColorCard after:content-['\00B0']">
                9
              </span>
            </div>
          </div>
          <div className="w-[14%] border border-yellow-700">
            <div className="not-italic font-AeonikProMedium mr-1 text-[18px] leading-4 text-black flex justify-center">
              Dush
            </div>
            <div className="w-full flex justify-center mt-1">
              <img
                className="w-full"
                src="https://storage.kun.uz/source/thumbnails/_medium/9/Tp7NXm68ql5IsmytKnhaq9lU_eTO5HYP_medium.jpg"
                alt=""
              />
            </div>
            <div className="mt-2 flex justify-center gap-x-1">
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-black after:content-['\00B0']">
                22
              </span>
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-borderColorCard after:content-['\00B0']">
                9
              </span>
            </div>
          </div>
          <div className="w-[14%] border border-yellow-700">
            <div className="not-italic font-AeonikProMedium mr-1 text-[18px] leading-4 text-black flex justify-center">
              Dush
            </div>
            <div className="w-full flex justify-center mt-1">
              <img
                className="w-full"
                src="https://storage.kun.uz/source/thumbnails/_medium/9/Tp7NXm68ql5IsmytKnhaq9lU_eTO5HYP_medium.jpg"
                alt=""
              />
            </div>
            <div className="mt-2 flex justify-center gap-x-1">
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-black after:content-['\00B0']">
                22
              </span>
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-borderColorCard after:content-['\00B0']">
                9
              </span>
            </div>
          </div>
          <div className="w-[14%] border border-yellow-700">
            <div className="not-italic font-AeonikProMedium mr-1 text-[18px] leading-4 text-black flex justify-center">
              Dush
            </div>
            <div className="w-full flex justify-center mt-1">
              <img
                className="w-full"
                src="https://storage.kun.uz/source/thumbnails/_medium/9/Tp7NXm68ql5IsmytKnhaq9lU_eTO5HYP_medium.jpg"
                alt=""
              />
            </div>
            <div className="mt-2 flex justify-center gap-x-1">
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-black after:content-['\00B0']">
                22
              </span>
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-borderColorCard after:content-['\00B0']">
                9
              </span>
            </div>
          </div>
          <div className="w-[14%] border border-yellow-700">
            <div className="not-italic font-AeonikProMedium mr-1 text-[18px] leading-4 text-black flex justify-center">
              Dush
            </div>
            <div className="w-full flex justify-center mt-1">
              <img
                className="w-full"
                src="https://storage.kun.uz/source/thumbnails/_medium/9/Tp7NXm68ql5IsmytKnhaq9lU_eTO5HYP_medium.jpg"
                alt=""
              />
            </div>
            <div className="mt-2 flex justify-center gap-x-1">
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-black after:content-['\00B0']">
                22
              </span>
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-borderColorCard after:content-['\00B0']">
                9
              </span>
            </div>
          </div>
          <div className="w-[14%] border border-yellow-700">
            <div className="not-italic font-AeonikProMedium mr-1 text-[18px] leading-4 text-black flex justify-center">
              Dush
            </div>
            <div className="w-full flex justify-center mt-1">
              <img
                className="w-full"
                src="https://storage.kun.uz/source/thumbnails/_medium/9/Tp7NXm68ql5IsmytKnhaq9lU_eTO5HYP_medium.jpg"
                alt=""
              />
            </div>
            <div className="mt-2 flex justify-center gap-x-1">
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-black after:content-['\00B0']">
                22
              </span>
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-borderColorCard after:content-['\00B0']">
                9
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
