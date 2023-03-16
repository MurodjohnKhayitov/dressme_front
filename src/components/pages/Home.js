import React from "react";
import ClothesSlider from "../home/ClothesSlider";
import CollectionCards from "../home/CollectionCards";
import MainPageSliders from "../home/MainPageSliders";
import TypeSection from "../home/TypeSection";
import styles from '../home/clothers.module.css'

const Home = () => {

    return (
        <div className="flex flex-col justify-center items-center m-0 p-0 box-border">
            <div className='max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto'>
                <div className="w-[100%] h-fit">
                    <MainPageSliders />
                    <CollectionCards />
                    <ClothesSlider />
                    <TypeSection />
                </div>
            </div>
        </div>
    )
}
export default Home