import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formArrowRightCircle, person3D } from "../../../../assets/imgs";
import { BiChevronDown } from "react-icons/bi";
import { Popover } from "antd";
import UserOfBodyDesktop from "./UserOfBody/UserOfBodyDesktop";
import UserOfBodyMobile from "./UserOfBody/UsermakeBodyMobile/UserOfBodyMobile";
// import UserOfBodyMobile from "./UserOfBody/UserOfBodyMobile";

const AddUserBodyData = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`${!load && "LoadingAnimation"}`}>
      <div className="hidden md:block">
        <UserOfBodyDesktop />
      </div>
      <div className="px-4 py-5 block md:hidden">
        <UserOfBodyMobile />
      </div>
    </div>
  );
};
export default AddUserBodyData;
