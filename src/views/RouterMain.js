import React, { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import "../index.css";

// -------Navbar VS Footer
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AddUserNavbar from "../components/header/AddUserNavbar/AddUserNavbar";

// -------Without Lazy

// ---------Only Skeleton

import AuthenIndex from "../components/header/AuthenticationNavbar/AuthenIndex";
// import YandexMapsIndex from "../components";
import YandexSkeletonIndex from "../components/YandexMap/YandexMapsSkeleton/YandexSkeletonIndex";
// import ForgetPasswordIndex from "../components/Authentication/SignInDetail";
import ConfirmPassword from "../components/Authentication/ConfirmPassword/ConfirmPassword";

import LoadingOpacity from "../Page/Loading/LoadingOpacity";
import HomePage from "../Page/Home/Home";
import YandexMapDressMe from "../components/YandexMap";
import AddUserPrivateInfo from "../components/Home/AddUser/AddUserPrivateData/AddUserPrivateData";
import AddUserBodyData from "../components/Home/AddUser/AddUserBodyData/AddUserBodyData";
import SignIn from "../components/Authentication/SignIn/SignIn";
import SignUp from "../components/Authentication/SignUp/SignUp";
import ForgetPassword from "../components/Authentication/SignInDetail/ForgetPassword";
import SetNewPassword from "../components/Authentication/SignInDetail/SetNewPassword";
import ForgetConfirmPassword from "../components/Authentication/SignInDetail/ForgetConfirmPassword";
import CategoryForType from "../components/Category/CategoryForType/CategoryForType";
import CategoryMainType from "../components/Category/CategoryForType";

import { TransitionGroup, CSSTransition } from "react-transition-group";

const RouterMain = () => {
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/delivery-points" element={<YandexMapDressMe />} />
      </Routes>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames={"fade"}
          exit={false}
        >
          <Routes>
            <Route
              path="/add_user_private_data"
              element={<AddUserPrivateInfo />}
            />
            <Route path="/add_user_body_data" element={<AddUserBodyData />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/categoriesType" element={<CategoryMainType />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/forget_password" element={<ForgetPassword />} />
            <Route path="/set_new_password" element={<SetNewPassword />} />
            <Route
              path="/enter_password_validate"
              element={<ForgetConfirmPassword />}
            />
            <Route path="/confirm_password" element={<ConfirmPassword />} />
            {/* </Route> */}
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      {locationWindow !== "/add_user_private_data" &&
      locationWindow !== "/add_user_body_data" &&
      locationWindow !== "/confirm_password" &&
      locationWindow !== "/set_new_password" &&
      locationWindow !== "/enter_password_validate" &&
      locationWindow !== "/forget_password" &&
      locationWindow !== "/sign_up" &&
      locationWindow !== "/sign_in" &&
      locationWindow !== "/delivery-points" ? (
        <Footer />
      ) : null}
      {/* {locationWindow !== "/add_user_private_data" 
      locationWindow !== "/add_user_body_data" 
      locationWindow !== "/confirm_password" 
      locationWindow !== "/forget_password" 
      locationWindow !== "/sign_up" 
      locationWindow !== "/sign_in" 
      locationWindow !== "/delivery-points" ? (
        <Footer />
      ) : null} */}
    </>
  );
};
export default RouterMain;
