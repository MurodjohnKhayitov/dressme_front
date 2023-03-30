import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import '../index.css';
import Header from "../components/header/header";
import Footer from '../components/footer/footer';
import AddUserNavbar from '../components/header/AuthenNavbar/AthenIndex';

const HomePage = React.lazy(() => import('../Page/Home/Home'));
const Weather = React.lazy(() => import('../Page/Weather/Weather'));
const SignInStepOne = React.lazy(() => import('../components//Authentification/SignIn/signInStepOne'));
const SignInStepTwo = React.lazy(() => import('../components/Authentification/SignIn/signInStepTwo'));
const RouterList = () => {
    return (
        <>
            <Routes >
                <Route element={<Header />}>
                    <Route path='/' element={
                        <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                            <HomePage />
                        </React.Suspense>
                    } />
                    <Route path='/weather' element={
                        <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                            <Weather />
                        </React.Suspense>
                    } />

                </Route>
                <Route element={<AddUserNavbar />}>
                    <Route path='/signInStepOne' element={
                        <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                            <SignInStepOne />
                        </React.Suspense>
                    } />
                    <Route path='/signInStepTwo' element={
                        <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                            <SignInStepTwo />
                        </React.Suspense>
                    } />

                </Route>
                {/* <Route path='/' element={<Navigate to={<HomePage />} />} /> */}




            </Routes>
            <Footer />
        </>
    )
}
export default RouterList