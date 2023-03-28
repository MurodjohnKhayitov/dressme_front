import React, { useState } from 'react'
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { addBag, adidas, checkFalse, checkTrue, star } from '../../../assets/imgs';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
export default function SetClothesWear() {


    const [productList, setproductList] = useState([
        {
            headWear: [
                { id: 1, product_id: 1, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097" },
                { id: 2, product_id: 2, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cftf79vhj8j9g698gbbg/t_product_540_high.jpg#1679979817050" },
                { id: 3, product_id: 3, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cft1g4vhgiov1qid0vmg/t_product_540_high.jpg#1679979817063" },
                { id: 4, product_id: 4, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfodt77hgiov1qiced4g/t_product_540_high.jpg#1679979817205" },
                { id: 5, product_id: 5, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfof77nhgiov1qicem8g/t_product_540_high.jpg#1679979817243" },
                { id: 6, product_id: 6, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cggr0vfg49devoabrpcg/original.jpg" },
                { id: 7, product_id: 7, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cggr0ong49devoabrpb0/original.jpg" },
                { id: 8, product_id: 8, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfrot37hj8j9g698anjg/t_product_540_high.jpg#1679979896400" },
                { id: 9, product_id: 9, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfs5nmvhgiov1qict4a0/t_product_540_high.jpg#1679979896386" },
                { id: 10, product_id: 10, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cgct0dvhgiov1qif5450/t_product_540_high.jpg#1679979896266" },
                { id: 11, product_id: 11, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfs5nr7g49devoa91atg/t_product_540_high.jpg#1679979896338" },
            ],
            outWear: [
                { id: 1, product_id: 1, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, out_wear_img: "https://images.uzum.uz/cf2g6o8l08k0o9qhrkb0/t_product_240_high.jpg" },
                { id: 2, product_id: 2, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, out_wear_img: "" },
                { id: 3, product_id: 3, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, out_wear_img: "" },
                { id: 4, product_id: 4, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, out_wear_img: "" },
                { id: 5, product_id: 5, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, out_wear_img: "" },
                { id: 6, product_id: 6, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, out_wear_img: "" },
                { id: 7, product_id: 7, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, out_wear_img: "" },
                { id: 8, product_id: 8, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, out_wear_img: "" },
                { id: 9, product_id: 9, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, out_wear_img: "" },
                { id: 10, product_id: 10, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, out_wear_img: "" },
                { id: 11, product_id: 11, gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, out_wear_img: "" },
            ],


        },

    ])

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute right-[36px] top-[25%] z-50 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormNext size={15} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute left-[36px] top-[25%] z-50 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormPrevious size={15} />
            </div>
        );
    };
    const NextArrow1 = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute right-[36px] top-[40%] z-50 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormNext size={15} />
            </div>
        );
    };

    const PrevArrow1 = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute left-[36px] top-[40%] z-50 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormPrevious size={15} />
            </div>
        );
    };
    const NextArrowshoesWear = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute right-[36px] top-[25%] z-50 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormNext size={15} />
            </div>
        );
    };

    const PrevArrowshoesWear = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute left-[36px] top-[25%] z-50 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormPrevious size={15} />
            </div>
        );
    };
    const NextArrowAccessory = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute right-[8px] top-[25%] z-50 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormNext size={15} />
            </div>
        );
    };

    const PrevArrowAccessory = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute left-[8px] top-[25%] z-50 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormPrevious size={15} />
            </div>
        );
    };

    const [getSliderId, setGetSliderId] = useState({
        headWearId: 1,
        outWearId: 1,
        underWearId: 1,
        legWearId: 1,
        accessoryId: 1
    })
    let headWear = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        afterChange: current => setGetSliderId({ ...getSliderId, headWearId: current + 1 })
    };

    let outWear = {
        nextArrow: <NextArrow1 />,
        prevArrow: <PrevArrow1 />,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        afterChange: current => setGetSliderId({ ...getSliderId, outWearId: current + 1 })
    };
    let underWear = {
        nextArrow: <NextArrow1 />,
        prevArrow: <PrevArrow1 />,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        afterChange: current => setGetSliderId({ ...getSliderId, underWearId: current + 1 })
    };
    let legWear = {
        nextArrow: <NextArrowshoesWear />,
        prevArrow: <PrevArrowshoesWear />,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        afterChange: current => setGetSliderId({ ...getSliderId, legWearId: current + 1 })
    };
    let Accessory = {
        nextArrow: <NextArrowAccessory />,
        prevArrow: <PrevArrowAccessory />,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        afterChange: current => setGetSliderId({ ...getSliderId, accessoryId: current + 1 })
    };
    return (
        <div className='w-full box-border	 h-fit flex justify-between gap-y-5 flex-wrap  border border-red-500'>
            <div className='w-[630px] h-[480px] flex overflow-hidden border border-searchBgColor rounded-lg '>
                <div className='w-[360px] border-r bg-white border-searchBgColor'>
                    {/* Head wear */}

                    <div className='w-full h-full flex  flex-wrap content-center gap-y-1	  justify-center '>
                        <div className="w-full h-fit">
                            <Slider {...headWear} className={`w-full h-[60px]`}>
                                {
                                    productList?.map(data => {
                                        return (
                                            data.headWear.map(data => {
                                                return (
                                                    <div key={data?.id} className={`!w-[192px] ml-[84px] h-[60px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                        {/* <img className='' src={data?.imgFull} alt="" /> */}
                                                        {data?.id}
                                                    </div>
                                                )
                                            })
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                        <div className="w-full h-fit">
                            <Slider {...outWear} className={`w-full h-[148px]`}>
                                {
                                    productList?.map(data => {
                                        return (
                                            data.headWear.map(data => {
                                                return (
                                                    <div key={data?.id} className={`!w-[192px] ml-[84px] h-[148px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                        {/* <img className='' src={data?.imgFull} alt="" /> */}
                                                        {data?.id}
                                                    </div>
                                                )
                                            })
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                        <div className="w-full h-fit">
                            <Slider {...underWear} className={`w-full h-[168px]`}>
                                {
                                    productList?.map(data => {
                                        return (
                                            data.headWear.map(data => {
                                                return (
                                                    <div key={data?.id} className={`!w-[192px] ml-[84px] h-[168px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                        {/* <img className='' src={data?.imgFull} alt="" /> */}
                                                        {data?.id}
                                                    </div>
                                                )
                                            })
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                        <div className="w-full h-fit">
                            <Slider {...legWear} className={`w-full h-[60px]`}>
                                {
                                    productList?.map(data => {
                                        return (
                                            data.headWear.map(data => {
                                                return (
                                                    <div key={data?.id} className={`!w-[192px] ml-[84px] h-[60px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                        {/* <img className='' src={data?.imgFull} alt="" /> */}
                                                        {data?.id}
                                                    </div>
                                                )
                                            })
                                        )
                                    })
                                }
                            </Slider>
                        </div>

                    </div>

                </div>
                <div className='w-[270px] flex flex-wrap content-between bg-white'>
                    <div className='w-full h-[76px] border-b border-searchBgColor p-4'>
                        <div className='not-italic font-AeonikProRegular text-sm leading-4 text-gray-500'>Набор: <span className='not-italic font-AeonikProMedium text-base text-black ml-2'>Business Wear (Man)</span></div>
                        <div className='not-italic font-AeonikProRegular text-sm leading-4 text-gray-500'>Магазин: <span className='not-italic font-AeonikProMedium text-base text-black ml-2'>Patek Business Wear</span></div>
                    </div>
                    <div className='w-full h-[212px] flex flex-wrap content-between border-b border-searchBgColor p-4'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center'>
                                <span><img src={checkFalse} alt="checkTrue" /></span>
                                <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>Головной убор</span></div>
                            <div>
                                <span className='not-italic font-AeonikProMedium line-through	 text-base leading-4 text-right text-setTexOpacity'>42 000</span>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center'>
                                <span><img src={checkTrue} alt="checkTrue" /></span>
                                <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>Верхняя одежда</span></div>
                            <div>
                                <span className='not-italic font-AeonikProMedium text-base leading-4 text-right text-black'>128 000</span>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center'>
                                <span><img src={checkTrue} alt="checkTrue" /></span>
                                <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>Нижняя одежда</span></div>
                            <div>
                                <span className='not-italic font-AeonikProMedium text-base leading-4 text-right text-black'>128 000</span>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center'>
                                <span><img src={checkTrue} alt="checkTrue" /></span>
                                <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>Обувь</span></div>
                            <div>
                                <span className='not-italic font-AeonikProMedium text-base leading-4 text-right text-black'>128 000</span>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center'>
                                <span><img src={checkTrue} alt="checkTrue" /></span>
                                <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>Аксессуары</span></div>
                            <div>
                                <span className='not-italic font-AeonikProMedium text-base leading-4 text-right text-black'>128 000</span>
                            </div>
                        </div>

                    </div>
                    <div className='w-full h-[104px] flex items-center border-b border-searchBgColor '>
                        <div className="w-full h-fit ">
                            <Slider {...Accessory} className={`w-full h-[72px]`}>
                                {
                                    productList?.map(data => {
                                        return (
                                            data.headWear.map(data => {
                                                return (
                                                    <div key={data?.id} className={`!w-[174px] ml-[48px] h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                        {/* <img className='' src={data?.imgFull} alt="" /> */}
                                                        {data?.id}
                                                    </div>
                                                )
                                            })
                                        )
                                    })
                                }
                            </Slider>
                        </div>

                    </div>
                    <div className='w-full h-[88px] pt-4 pl-4 pr-2 pb-2  flex flex-wrap content-between'>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex'>
                                <span className='mr-[6px] flex  items-center'> <img src={star} alt="star" /></span>
                                <span className='not-italic font-normal text-base leading-4 text-black'>2.5 <span className='mr-1 not-italic font-AeonikProRegular text-xs leading-3 text-setTexOpacity'>(20 голосов)</span></span>
                            </div>
                            <div className='w-[100px] h-[24px]  rounded bg-setButtonColor flex items-center justify-center'>
                                <span className='not-italic flex  items-center font-AeonikProRegular text-center text-black text-[10px]'>
                                    Страница набора
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center w-full justify-between'>
                            <div >
                                <span className='not-italic font-AeonikProMedium text-2xl leading-7 text-setPriceRed mr-[6px]'>828000</span>
                                <span className='not-italic font-AeonikProRegular line-through	 text-sm leading-4 text-setTexOpacity'>828000</span>
                            </div>
                            <div className='w-[36px] h-[36px] rounded bg-btnBgColor flex items-center justify-center'>
                                <img src={addBag} alt="addbag" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className='w-[630px] h-[480px] border border-searchBgColor rounded-lg '>
                <div>
                    <p>  getSliderId.headWearId: <strong>{getSliderId.headWearId}</strong></p>
                    <p>  getSliderId.outWearId: <strong>{getSliderId.outWearId}</strong></p>
                    <p>  getSliderId.underWearId: <strong>{getSliderId.underWearId}</strong></p>
                    <p>  getSliderId.legWearId: <strong>{getSliderId.legWearId}</strong></p>
                    <p>  getSliderId.accessoryId: <strong>{getSliderId.accessoryId}</strong></p>
                </div>
            </div>
            <div className='w-[630px] h-[480px] border border-searchBgColor rounded-lg '>

            </div>
            <div className='w-[630px] h-[480px] border border-searchBgColor rounded-lg '>

            </div>

        </div>
    )
}
