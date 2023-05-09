import React, { useEffect, useState } from "react";
import YandexMapsDressMe from "./YandexMapsDressMe";

export default function YandexMapDressMe() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`${!load && "LoadingAnimation"}`}>
      <div className="flex flex-col justify-center items-center m-0 p-0 box-border ">
        <div className=" w-[100%] flex justify-center items-center m-auto">
          <div className="w-[100%] h-fit">
            <YandexMapsDressMe />
          </div>
        </div>
      </div>
    </div>
  );
}
