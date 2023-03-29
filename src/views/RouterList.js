import React from "react";
import { Route, Routes } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import '../index.css'
import Header from "../components/header/header";
import Footer from '../components/footer/footer'
import SignIn from "../components/Authentification/SignIn/signIn";
const HomePage = React.lazy(() => import('../Page/Home/Home'))
const Weather = React.lazy(() => import('../Page/Weather/Weather'))
const RouterList = () => {
    return (
        <>
            <Header />
            <Routes >

                <Route path='/home' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <HomePage />
                    </React.Suspense>
                } />
                <Route path='/weather' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <Weather />
                    </React.Suspense>
                } />
                <Route path='/' element={<HomePage />} />
                <Route path='/sign_in' element={<SignIn />} />
                
            </Routes>
            <Footer />
        </>
    )
}
export default RouterList