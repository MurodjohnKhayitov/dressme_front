import React, { useEffect, useState } from 'react'
import TopHeader from "./top";
import MediumHeader from "./medium";
import BottomHeader from "./bottom";
import NavMenu from "./nav-menu";
import './header.css'
const Header = () => {
  const [show, setShow] = useState(true)
  const [scrollPost, setscrollPost] = useState(0)

  const handleScroll = () => {
    setscrollPost(document.body.getBoundingClientRect().top)
    setShow(document.body.getBoundingClientRect().top > scrollPost)

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [show, scrollPost])

  return (
    <header className="border border-searchBgColor">
      <div className={`ss:block md:hidden `}>
        <TopHeader />
        <MediumHeader />
      </div>
      <div className={`navbaritem  ${show ? "activeOne" : "hiddenOne"} hidden md:block`}>
        <TopHeader />
        <MediumHeader />
      </div>
      <div className='mt-[105px]'>
        <BottomHeader />
        <NavMenu />
      </div>
    </header>
  );
};
export default Header;
