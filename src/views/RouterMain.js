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
import SkeletonHomeIndex from "../components/Home/Skeleton/SkeletonHomeIndex";
import AddUserPrivateSkeleton from "../components/Home/AddUser/Skeleton/AddUserPrivateSkeleton";
import AddUserBodySkeleton from "../components/Home/AddUser/Skeleton/AddUserPrivateSkeleton";
import SignInSkeletonIndex from "../components/Authentication/SignUpSkeleton";
import SignUpSkeletonIndex from "../components/Authentication/SignUpSkeleton";
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

// --------With lazy component
// const HomePage = React.lazy(() => import("../Page/Home/Home"));
// const AddUserPrivateInfo = React.lazy(() =>
//   import("../components/Home/AddUser/AddUserPrivateData/AddUserPrivateData")
// );
// const AddUserBodyData = React.lazy(() =>
//   import("../components/Home/AddUser/AddUserBodyData/AddUserBodyData")
// );
// const YandexMapDressMe = React.lazy(() =>
//   import("../components/YandexMap/index")
// );
// const SignIn = React.lazy(() =>
//   import("../components/Authentication/SignIn/index")
// );
// const SignUp = React.lazy(() =>
//   import("../components/Authentication/SignUp/index")
// );
// const ForgetConfirmPassword = React.lazy(() =>
//   import("../components/Authentication/SignInDetail/ForgetConfirmPassword")
// );
// const SetNewPassword = React.lazy(() =>
//   import("../components/Authentication/SignInDetail/SetNewPassword")
// );
// const ForgetPassword = React.lazy(() =>
//   import("../components/Authentication/SignInDetail/ForgetPassword")
// );
const RouterMain = () => {
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route element={<Header />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Yandex Maps */}
        <Route>
          <Route path="/delivery-points" element={<YandexMapDressMe />} />
        </Route>

        {/* Add user */}
        <Route element={<AddUserNavbar />}>
          <Route
            path="/add_user_private_data"
            element={<AddUserPrivateInfo />}
          />
          <Route path="/add_user_body_data" element={<AddUserBodyData />} />
        </Route>
        {/* Registration page  */}
        <Route element={<AuthenIndex />}>
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/forget_password" element={<ForgetPassword />} />
          <Route path="/set_new_password" element={<SetNewPassword />} />
          <Route
            path="/enter_password_validate"
            element={<ForgetConfirmPassword />}
          />
          <Route path="/confirm_password" element={<ConfirmPassword />} />
        </Route>
      </Routes>

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
      {/* {locationWindow !== "/add_user_private_data" ||
      locationWindow !== "/add_user_body_data" ||
      locationWindow !== "/confirm_password" ||
      locationWindow !== "/forget_password" ||
      locationWindow !== "/sign_up" ||
      locationWindow !== "/sign_in" ||
      locationWindow !== "/delivery-points" ? (
        <Footer />
      ) : null} */}
    </>
  );
};
export default RouterMain;
