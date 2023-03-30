import React, { useEffect, useState } from 'react'
import TopHeader from "../top";
import MediumHeader from "../medium";
import { Outlet } from 'react-router-dom';
import BottomHeader from "../bottom";
import AthenAddGender from './AuthenAddGender';
// import NavMenu from "./nav-menu";
export default function AthenNavbar() {
    // ----------------NavBar----------------
    const [show, setShow] = useState(true)
    const [scrollPost, setscrollPost] = useState(0)

    // ----------------NavMenu----------------
    const [ShowNavMenu, setShowNavMenu] = useState(true)
    const [ScrollPostNavMenu, setScrollPostNavMenu] = useState(0)

    // ----------------NavBar----------------
    const handleScroll = () => {
        setscrollPost(document.body.getBoundingClientRect().top)
        if (parseInt(Math.abs(scrollPost)) > 300) {
            setShow(document.body.getBoundingClientRect().top > scrollPost)
        }
    }

    // ----------------NavMenu----------------
    const handleScrollNavMenu = () => {
        setScrollPostNavMenu(document.body.getBoundingClientRect().top)
        setShowNavMenu(document.body.getBoundingClientRect().top < ScrollPostNavMenu)

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', handleScrollNavMenu)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('scroll', handleScrollNavMenu)
        }
    }, [show, scrollPost, ShowNavMenu, ScrollPostNavMenu])

    return (
        <div>

            <header className="border-b border-searchBgColor">
                {/* <div className={`ss:block md:hidden `}>
                    <TopHeader />
                    <MediumHeader />
                </div> */}
                {/* <div className={`fixed top-0 w-full bg-white  ${show ? "visible duration-500 z-50" : "visible duration-500 z-50 translate-y-[-100%]"} hidden md:block`}> */}
                    <TopHeader />
                    <MediumHeader />
                {/* </div> */}
                {/* <div className='md:mt-[99px] ss:mt-0'> */}
                    <AthenAddGender/>
                {/* </div> */}

            </header>
            <Outlet />
        </div>

    )
}
