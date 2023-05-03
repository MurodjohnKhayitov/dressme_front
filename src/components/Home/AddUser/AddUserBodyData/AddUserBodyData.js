import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formArrowRightCircle, person3D } from "../../../../assets/imgs";
import { BiChevronDown } from "react-icons/bi";
import { Popover } from "antd";
import UserOfBodyDesktop from "./UserOfBody/UserOfBodyDesktop";
import UserOfBodyMobile from "./UserOfBody/UserOfBodyMobile";

const AddUserBodyData = () => {
  return (
    <div>
      <div className="hidden">
        <UserOfBodyDesktop />
      </div>
      <div className="px-4 py-5">
        <UserOfBodyMobile />

      </div>
    </div>
  );
};
export default AddUserBodyData;
