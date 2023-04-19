import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";


export default function GetGraph() {
    useQuery(['getWeather'],()=>{
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=32a5bb7b9aa1126387e06acad817149e&units=metric&q=Toshkent`).then(data=>data.json())
    },{
        onSuccess:res=>{
            console.log(res);
            console.log("--");
            // res.list.map(data=>{

            //     console.log(data.dt, res.city.timezone,"timeZone");
            // })
        },
        onError:err=>{
            console.log(err,"error");
        }
    }
    )
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
    return (
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 25, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis key={Math.random()} dataKey="time" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="max"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
            label={{
              fill: "black",
              fontSize: 15,
              position: "top"
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }

