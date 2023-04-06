import React, { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import "../index.css";

// -------Navbar VS Footer
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AddUserNavbar from "../components/header/AddUserNavbar/AddUserNavbar";

// -------Without Lazy
import WeatherInfo from "../components/Weather/WeatherInfo";

// ---------Only Skeleton
import SkeletonHomeIndex from "../components/Home/Skeleton/SkeletonHomeIndex";
import AddUserPrivateSkeleton from "../components/Home/AddUser/Skeleton/AddUserPrivateSkeleton";
import AddUserBodySkeleton from "../components/Home/AddUser/Skeleton/AddUserPrivateSkeleton";
import SignInSkeletonIndex from "../components/Authentication/SignUpSkeleton";
import SignUpSkeletonIndex from "../components/Authentication/SignUpSkeleton";
import AuthenIndex from "../components/header/AuthenticationNavbar/AuthenIndex";
import YandexMapsIndex from "../components/header/YandexMapsNavbar/YandexMapsIndex";

// --------With lazy component
const HomePage = React.lazy(() => import("../Page/Home/Home"));
const Weather = React.lazy(() => import("../Page/Weather/Weather"));
const AddUserPrivateInfo = React.lazy(() =>
  import("../components/Home/AddUser/AddUserPrivateData/AddUserPrivateData")
);
const AddUserBodyData = React.lazy(() =>
  import("../components/Home/AddUser/AddUserBodyData/AddUserBodyData")
);
const YandexMapDressMe = React.lazy(() =>
  import("../components/YandexMap/index")
);
const SignIn = React.lazy(() =>
  import("../components/Authentication/SignIn/index")
);
const SignUp = React.lazy(() =>
  import("../components/Authentication/SignUp/index")
);
const RouterList = () => {
  const match = useRef(window.location.pathname);

  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route element={<Header />}>
          <Route
            path="/"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <SkeletonHomeIndex />
                  </div>
                }
              >
                <HomePage />
              </React.Suspense>
            }
          />
          <Route
            path="/weather"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <WeatherInfo />
                  </div>
                }
              >
                <Weather />
              </React.Suspense>
            }
          />
        </Route>

        {/* Yandex Maps */}
        <Route element={<YandexMapsIndex />}>
          <Route
            path="/delivery-points"
            element={
              <React.Suspense fallback={<div>Kechikish....</div>}>
                <YandexMapDressMe />
              </React.Suspense>
            }
          />
        </Route>

        {/* Add user */}
        <Route element={<AddUserNavbar />}>
          <Route
            path="/add_user_private_data"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <AddUserPrivateSkeleton />
                  </div>
                }
              >
                <AddUserPrivateInfo />
              </React.Suspense>
            }
          />
          <Route
            path="/add_user_body_data"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <AddUserBodySkeleton />
                  </div>
                }
              >
                <AddUserBodyData />
              </React.Suspense>
            }
          />
        </Route>
        {/* Registration page  */}
        <Route element={<AuthenIndex />}>
          <Route
            path="/sign_in"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <SignInSkeletonIndex />
                  </div>
                }
              >
                <SignIn />
              </React.Suspense>
            }
          />
          <Route
            path="/sign_up"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <SignUpSkeletonIndex />
                  </div>
                }
              >
                <SignUp />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
      {match.current !== "/add_user_private_data" ||
      match.current !== "/add_user_private_data" ? (
        <Footer />
      ) : null}
    </>
  );
};
export default RouterList;
