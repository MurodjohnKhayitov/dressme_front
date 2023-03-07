import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { next, category, arrowBottomFull, mouse, toBottom, markets, } from '../../assets/imgs'
import styles from './clothers.module.css'
import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from "react-slick";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import required modules``
export default function MainPageSliders() {
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        XlMobile: {
            breakpoint: { max: 768, min: 568 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 568, min: 0 },
            items: 2,
        },
    };
    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 4,
        },
        XlMobile: {
            breakpoint: { max: 768, min: 568 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 567, min: 0 },
            items: 2,
        },
    };
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const [clothesToggle, setClothesToggle] = useState(true)
    const [carosuelData, setCarosuelData] = useState([
        {
            Category: [
                { id: 1, type: "Student", count: 123, img:""  },
                { id: 2, type: "Businiess", count: 223, img:""  },
                { id: 3, type: "Muslim", count: 80, img:""  },
                { id: 4, type: "Travel", count: 453, img:""  },
                { id: 5, type: "Sport", count: 320, img:""  },
                { id: 6, type: "Classic", count: 40, img:""  },
                { id: 7, type: "Relaxed", count: 180, img:""  },
                { id: 8, type: "Dramatic", count: 250, img:""  },
                { id: 9, type: "Creative", count: 190, img:""  },


            ],

            campany: [
                { id: 1, type: "Adidas", imgFull:""  },
                { id: 2, type: "Nike", imgFull:""  },
                { id: 3, type: "Puma", imgFull:""  },
                { id: 4, type: "Reebok", imgFull:""  },
                { id: 5, type: "polo", imgFull:""  },
                { id: 6, type: "suprime", imgFull:""  },
                { id: 7, type: "luisVitton", imgFull:""  },
                { id: 8, type: "locaste", imgFull:""  },
                { id: 9, type: "loroPiono", imgFull:""  },
                { id: 10, type: "dolce", imgFull:""  },

            ]
        },

    ])
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.NextArrow} onClick={onClick}>
                <button className="next">
                    <GrNext />
                </button>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.PrevArrow} onClick={onClick}>
                <button className="prev">
                    <GrPrevious />
                </button>
            </div>
        );
    };
    let settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    let settings1 = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <div className='box-border flex flex-col justify-center	'>
            <div className="h-fit  max-w-[1440px]  md:px-[80px]    sm:px-[50px] ss:px-[16px] ">
                <div className='w-full 	m-auto	my-5 py-7   ss:hidden xs:block'>
                    <Slider {...settings} className='!w-[100%] flex xs:justify-between'
                    >
                        {
                            carosuelData?.map(data => {
                                return (
                                    data.Category.map(data => {
                                        return (
                                            <div key={data.id} className='ss:!w-[95%]  h-[260px] rounded ml-1 '>
                                                <div className='w-full h-[230px] bg-bgColor border border-solid	border-borderColorCard '>
                                                    {data?.img ? <img className='h-full w-full' src={data?.img} alt="student" /> : null}
                                                </div>
                                                <div className='h-12.5 flex items-center justify-start'>
                                                    <p className='not-italic font-medium text-base leading-4 text-black mt-3 mr-2  '>{data?.type || "type"}
                                                        <span className='not-italic font-normal text-xs leading-4 ml-1.5 text-gray-500'>({data?.count || "0"})</span></p>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                            })
                        }

                    </Slider>
                </div>
                {/* carosuel hidden bloack */}
                <div className="w-full h-fit ss:block xs:hidden ss:flex  flex-wrap gap-y-1	 justify-between   	my-5 py-7 ">
                    {
                        carosuelData?.map(data => {
                            return (
                                data.Category.map(data => {
                                    return (
                                        <div className='ll:w-[100px] ss:w-[80px]' >
                                            <div className='w-[100%] h-[80px] rounded bg-bgColor  border border-solid border-borderColorCard'>
                                                <img className='h-full w-full'  src={data?.img} alt=""/>
                                            </div>
                                            <div className='w-full py-1 flex items-center'>
                                                <p className='not-italic  mr-2 font-medium text-sm leading-6 text-black'>{data?.type || "type"}
                                                    <span className='not-italic font-normal text-xs leading-4 text-gray-500'>({data?.count || "0"})</span></p>
                                            </div>
                                        </div>
                                    )

                                })
                            )
                        })
                    }

                </div>
                <div className='w-full 	m-auto		my-9 py-7   ss:hidden xs:block'>
                    <Slider {...settings1} className='w-[100%] flex xs:justify-between'
                    >
                        {
                            carosuelData?.map(data => {
                                return (
                                    data.campany.map(data => {
                                        return (
                                            <div key={data?.id} className='!w-[95%] h-[100px]  rounded-lg bg-catalogBg flex items-center justify-center select-none border border-solid border-searchBgColor'>
                                                <p className='w-full h-full flex items-center justify-center not-italic font-medium text-xl leading-6 text-center text-black '>{data?.type || "0"}</p>
                                                {/* <img src={data?.imgFull} alt="" /> */}
                                            </div>

                                        )
                                    })

                                )
                            })
                        }


                    </Slider>
                </div>



                <div className='flex 	m-auto flex-wrap justify-between items-center ss:mt-3 md:mt-12 gap-y-5 py-7   ss:hidden xs:block xs:flex'>
                    {/* 1 */}
                    <div className='lg:w-[23%] sm:w-[47%] ss:w-[100%] ss:h-20 py-[20px] px-[16px] xs:h-[100px] bg-bgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                        <div className='w-full'>
                            <p className='not-italic font-normal ss:text-sm xs:text-base leading-4 text-black'>Strengthen Health</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <p className='nnot-italic font-medium text-xl leading-6 text-black'>Sports clothes</p>
                            <p><img src={category} alt="next" className='ss:w-[70%] xs:w-[100%]' /></p>
                        </div>
                    </div>
                    {/* 2 */}

                    <div className='lg:w-[23%] sm:w-[47%] ss:w-[100%] ss:h-20 xs:h-[100px] py-[20px] px-[16px] bg-bgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                        <div className='w-full'>
                            <p className='not-italic font-normal ss:text-sm xs:text-base leading-4 text-black'>Based on your Interests</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <p className='not-italic font-medium text-xl leading-6 text-black'>Muslim clothes</p>
                            <p><img src={category} alt="next" className='ss:w-[70%] xs:w-[100%]' /></p>
                        </div>
                    </div>
                    {/* 3*/}

                    <div className='lg:w-[23%] sm:w-[47%] ss:w-[100%] ss:h-20 xs:h-[100px] py-[20px] px-[16px] bg-bgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                        <div className='w-full'>
                            <p className='not-italic font-normal ss:text-sm xs:text-base leading-4 text-black'>Sort by your Money</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <p className='flex items-end'><span className='not-italic font-normal text-base text-gray-500 mr-2'>ниже</span><span className='not-italic font-medium text-xl leading-6 text-black'>40$</span><span><img src={arrowBottomFull} alt="arrowBottomFull" /></span></p>
                            <p><img src={category} alt="next" className='ss:w-[70%] xs:w-[100%]' /></p>
                        </div>
                    </div>
                    {/* 4*/}

                    <div className='lg:w-[23%] sm:w-[47%] ss:w-[100%] ss:h-20 xs:h-[100px] py-[20px] px-[16px] bg-bgColor rounded-lg  flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                        <div className='w-full'>
                            <p className='not-italic font-normal ss:text-sm xs:text-base leading-4 text-black'>Магазины ближе к вам</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <p className='flex mr-2 items-center'><span><img src={markets} alt="arrowBottomFull" className='mr-2' /></span><span className='not-italic font-medium ss:tex-tlg ll:text-xl leading-6 text-black'>Найти магазина</span></p>
                            <p><img src={category} alt="next" /></p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
