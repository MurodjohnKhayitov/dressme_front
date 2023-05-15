import React, { useEffect, Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import "../index.css";

// -------Navbar VS Footer
import Header from "../components/header/header";
// import Footer from "../components/footer/footer";

// -------Without Lazy

// ---------Only Skeleton

import AuthenIndex from "../components/header/AuthenticationNavbar/AuthenIndex";
// import YandexMapsIndex from "../components";
import YandexSkeletonIndex from "../components/YandexMap/YandexMapsSkeleton/YandexSkeletonIndex";
// import ForgetPasswordIndex from "../components/Authentication/SignInDetail";
import ConfirmPassword from "../components/Authentication/ConfirmPassword/ConfirmPassword";

import LoadingOpacity from "../Page/Loading/LoadingOpacity";
// import HomePage from "../Page/Home/Home";

import YandexMapDressMe from "../components/YandexMap";
import AddUserPrivateInfo from "../components/Home/AddUser/AddUserPrivateData/AddUserPrivateData";
import AddUserBodyData from "../components/Home/AddUser/AddUserBodyData/AddUserBodyData";
import SignIn from "../components/Authentication/SignIn/SignIn";
import SignUp from "../components/Authentication/SignUp/SignUp";
// import ForgetPassword from "../components/Authentication/SignInDetail/ForgetPassword";
// import SetNewPassword from "../components/Authentication/SignInDetail/SetNewPassword";
// import ForgetConfirmPassword from "../components/Authentication/SignInDetail/ForgetConfirmPassword";
import CategoryMainType from "../components/Category/CategoryForType";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// -------------------------------------
import SkeletonHomeIndex from "../components/Home/Skeleton/SkeletonHomeIndex";
import AddUserPrivateSkeleton from "../components/Home/AddUser/Skeleton/AddUserPrivateSkeleton";
import AddUserBodySkeleton from "../components/Home/AddUser/Skeleton/AddUserPrivateSkeleton";
import SignInSkeletonIndex from "../components/Authentication/SignUpSkeleton";
import SignUpSkeletonIndex from "../components/Authentication/SignUpSkeleton";

// -------------------------------------
const HomePage = React.lazy(() => import("../Page/Home/Home"));
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
const ForgetConfirmPassword = React.lazy(() =>
  import("../components/Authentication/SignInDetail/ForgetConfirmPassword")
);
const SetNewPassword = React.lazy(() =>
  import("../components/Authentication/SignInDetail/SetNewPassword")
);
const ForgetPassword = React.lazy(() =>
  import("../components/Authentication/SignInDetail/ForgetPassword")
);
const Footer = React.lazy(() => import("../components/footer/footer"), 500);

// -------------------------------------

const RouterMain = () => {
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
    console.log(locationWindow, "locationWindow");
  }, [location.pathname]);
  return (
    <>
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
              path="/"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SkeletonHomeIndex />
                    </div>
                  }
                >
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="/add_user_private_data"
              element={<AddUserPrivateInfo />}
            />
            <Route path="/delivery-points" element={<YandexMapDressMe />} />
            <Route path="/add_user_body_data" element={<AddUserBodyData />} />
            <Route
              path="/categoriesType"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SkeletonHomeIndex />
                    </div>
                  }
                >
                  <CategoryMainType />
                </Suspense>
              }
            />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route
              path="/forget_password"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SignInSkeletonIndex />
                    </div>
                  }
                >
                  <ForgetPassword />
                </Suspense>
              }
            />
            <Route
              path="/set_new_password"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SignInSkeletonIndex />
                    </div>
                  }
                >
                  <SetNewPassword />
                </Suspense>
              }
            />
            <Route
              path="/enter_password_validate"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SignInSkeletonIndex />
                    </div>
                  }
                >
                  <ForgetConfirmPassword />
                </Suspense>
              }
            />
            <Route
              path="/confirm_password"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SignInSkeletonIndex />
                    </div>
                  }
                >
                  <ConfirmPassword />
                </Suspense>
              }
            />

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
        <Suspense fallback={<>Loading...</>}>
          <Footer />
        </Suspense>
      ) : // <Footer />
      null}
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
