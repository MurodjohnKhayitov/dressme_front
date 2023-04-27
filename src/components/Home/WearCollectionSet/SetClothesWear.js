import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { GrClose, GrFormNext, GrFormPrevious } from "react-icons/gr";
import {
  addBag,
  adidas,
  arrowRightCircle,
  checkFalse,
  checkTrue,
  Liked,
  MenuClose,
  model1,
  model2,
  modelToSet,
  nextInfo,
  setHuman,
  setpersonIcons,
  star,
  statusFalse,
} from "../../../assets/imgs";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Modal } from "antd";
import SetClothesOpenModelModal from "./SetClothesOpenModelModal";
export default function SetClothesWear() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      SetToModel: true,
      category_name: "Business",
      category: [
        { id: 1, name: "Business Wear (Man)", market: "Patek Business Wear" },
      ],
      headWear: [
        {
          id: 1,
          product_id: 1,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://s.alicdn.com/@sc04/kf/H7819bbac91324384871fa6a41223c2955.png_300x300.png",
        },
        {
          id: 2,
          product_id: 2,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://s.alicdn.com/@sc04/kf/Hf31393ba732d413f9aef8d8d037bdcb0s.jpg_300x300.jpg",
        },
      ],
      outWear: [
        {
          id: 1,
          product_id: 1,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://s.alicdn.com/@sc04/kf/H4fe3f2c95d9f450baae7569fadb2fab4e.png_300x300.png",
        },
        {
          id: 1,
          product_id: 1,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://s.alicdn.com/@sc04/kf/H4fe3f2c95d9f450baae7569fadb2fab4e.png_300x300.png",
        },
      ],
      underWear: [
        {
          id: 1,
          product_id: 1,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://s.alicdn.com/@sc04/kf/He9ecb7e78532450291e12c4e1de92035B.jpg_300x300.jpg",
        },
      ],
      legWear: [
        {
          id: 1,
          product_id: 1,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://s.alicdn.com/@sc04/kf/H8c6e7c4d96c34f628cfe9fd1acf5414eY.jpg_300x300.jpg",
        },
      ],
      Accessory: [
        {
          id: 1,
          product_id: 1,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://s.alicdn.com/@sc04/kf/Hec52a45bd6454b8c83bfc190d8748332y.jpg_300x300.jpg",
        },
      ],
      modelsList: [
        { id: 1, modelImg: require("../../../assets/imgs/Models/model1.svg") },
        { id: 2, modelImg: require("../../../assets/imgs/Models/model2.svg") },
        { id: 3, modelImg: require("../../../assets/imgs/Models/model3.svg") },
        { id: 4, modelImg: require("../../../assets/imgs/Models/model4.svg") },
      ],
    },
    {
      id: 2,
      SetToModel: false,
      category_name: "Business",
      category: [
        { id: 1, name: "Business Wear (Man)", market: "Patek Business Wear" },
      ],
      headWear: [
        {
          id: 1,
          product_id: 1,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://s.alicdn.com/@sc04/kf/Ud6b25ff4e9e3477696538bc8e4836240A.jpg_300x300.jpg",
        },
      ],
      outWear: [
        {
          id: 1,
          product_id: 1,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://s.alicdn.com/@sc04/kf/Hb52d77d0b9de428bb26551bebbbafd32D.jpg_300x300.jpg",
        },
      ],
      underWear: [
        {
          id: 1,
          product_id: 1,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://s.alicdn.com/@sc04/kf/He9ecb7e78532450291e12c4e1de92035B.jpg_300x300.jpg",
        },
      ],
      legWear: [
        {
          id: 1,
          product_id: 1,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://s.alicdn.com/@sc04/kf/H5b976707bf2d4e4493a7ab0a40b86ed2g.jpg_300x300.jpg",
        },
      ],
      Accessory: [
        {
          id: 1,
          product_id: 1,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://s.alicdn.com/@sc04/kf/Ha425f08d23ab4911ba76ac71c221924eD.jpg_300x300.jpg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://s.alicdn.com/@sc04/kf/Hec52a45bd6454b8c83bfc190d8748332y.jpg_300x300.jpg",
        },
      ],
      modelsList: [
        { id: 1, modelImg: require("../../../assets/imgs/Models/model1.svg") },
        { id: 2, modelImg: require("../../../assets/imgs/Models/model2.svg") },
        { id: 3, modelImg: require("../../../assets/imgs/Models/model3.svg") },
        { id: 4, modelImg: require("../../../assets/imgs/Models/model4.svg") },
      ],
    },
    {
      id: 3,
      SetToModel: true,
      category_name: "Business",
      category: [
        { id: 1, name: "Business Wear (Man)", market: "Patek Business Wear" },
      ],
      headWear: [
        {
          id: 1,
          product_id: 1,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://s.alicdn.com/@sc04/kf/HTB1oGyobfWG3KVjSZFgq6zTspXa5.jpg_300x300.jpg",
        },
      ],
      outWear: [
        {
          id: 1,
          product_id: 1,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://s.alicdn.com/@sc04/kf/H4fe3f2c95d9f450baae7569fadb2fab4e.png_300x300.png",
        },
      ],
      underWear: [
        {
          id: 1,
          product_id: 1,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://s.alicdn.com/@sc04/kf/Hdf774be8cb404a8baa1eb7a834c08403m.jpg_300x300.jpg",
        },
      ],
      legWear: [
        {
          id: 1,
          product_id: 1,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://s.alicdn.com/@sc04/kf/H5b976707bf2d4e4493a7ab0a40b86ed2g.jpg_300x300.jpg",
        },
      ],
      Accessory: [
        {
          id: 1,
          product_id: 1,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://s.alicdn.com/@sc04/kf/Hec52a45bd6454b8c83bfc190d8748332y.jpg_300x300.jpg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://s.alicdn.com/@sc04/kf/Hda0077b16e1f459cb3b6e3127dd7caffa.jpg_300x300.jpg",
        },
      ],
      modelsList: [
        { id: 1, modelImg: require("../../../assets/imgs/Models/model1.svg") },
        { id: 2, modelImg: require("../../../assets/imgs/Models/model2.svg") },
        { id: 3, modelImg: require("../../../assets/imgs/Models/model3.svg") },
        { id: 4, modelImg: require("../../../assets/imgs/Models/model4.svg") },
      ],
    },
    {
      id: 4,
      SetToModel: false,
      category_name: "Business",
      category: [
        { id: 1, name: "Business Wear (Man)", market: "Patek Business Wear" },
      ],
      headWear: [
        {
          id: 1,
          product_id: 1,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://s.alicdn.com/@sc04/kf/Hf31393ba732d413f9aef8d8d037bdcb0s.jpg_300x300.jpg",
        },
      ],
      outWear: [
        {
          id: 1,
          product_id: 1,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://s.alicdn.com/@sc04/kf/H4fe3f2c95d9f450baae7569fadb2fab4e.png_300x300.png",
        },
      ],
      underWear: [
        {
          id: 1,
          product_id: 1,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://s.alicdn.com/@sc04/kf/Hdf774be8cb404a8baa1eb7a834c08403m.jpg_300x300.jpg",
        },
      ],
      legWear: [
        {
          id: 1,
          product_id: 1,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://s.alicdn.com/@sc04/kf/H5b976707bf2d4e4493a7ab0a40b86ed2g.jpg_300x300.jpg",
        },
      ],
      Accessory: [
        {
          id: 1,
          product_id: 1,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://s.alicdn.com/@sc04/kf/H859bc6f4d7394ae3a7c794b8466395baY.jpg_300x300.jpg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://s.alicdn.com/@sc04/kf/Ha425f08d23ab4911ba76ac71c221924eD.jpg_300x300.jpg",
        },
      ],
      modelsList: [
        { id: 1, modelImg: require("../../../assets/imgs/Models/model1.svg") },
        { id: 2, modelImg: require("../../../assets/imgs/Models/model2.svg") },
        { id: 3, modelImg: require("../../../assets/imgs/Models/model3.svg") },
        { id: 4, modelImg: require("../../../assets/imgs/Models/model4.svg") },
      ],
    },
  ]);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-3 top-[25%] z-10 text-center cursor-pointer no-underline w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-3 top-[25%] z-10 text-center cursor-pointer no-underline w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} />
      </div>
    );
  };

  const NextArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-3 top-[40%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} />
      </div>
    );
  };
  const PrevArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-3 top-[40%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} />
      </div>
    );
  };

  const NextArrowshoesWear = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-3 top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} />
      </div>
    );
  };
  const PrevArrowshoesWear = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-3 top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} />
      </div>
    );
  };

  const NextArrowAccessory = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-3 top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} />
      </div>
    );
  };
  const PrevArrowAccessory = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-3 top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} />
      </div>
    );
  };

  const [getSliderId, setGetSliderId] = useState({
    headWearId: 1,
    headWearPrice: 0,

    outWearId: 1,
    outWearPrice: 0,

    underWearId: 1,
    underWearPrice: 0,

    legWearId: 1,
    legWearPrice: 0,

    accessoryId: 1,
    accessoryPrice: 0,
  });

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

    afterChange: (current) =>
      setGetSliderId({ ...getSliderId, headWearId: current + 1 }),
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
    afterChange: (current) =>
      setGetSliderId({ ...getSliderId, outWearId: current + 1 }),
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
    afterChange: (current) =>
      setGetSliderId({ ...getSliderId, underWearId: current + 1 }),
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
    afterChange: (current) =>
      setGetSliderId({ ...getSliderId, legWearId: current + 1 }),
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
    afterChange: (current) =>
      setGetSliderId({ ...getSliderId, accessoryId: current + 1 }),
  };

  

  const OpenShowModel = (modelId) => {
    setProductList((current) => {
      return current?.map((data) => {
        if (data?.id == modelId) {
          return { ...data, SetToModel: !data.SetToModel };
        } else {
          return data;
        }
      });
    });
  };

  const [open, setOpen] = useState(false);
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [open]);

  return (
    <div className="w-full flex flex-row flex-wrap box-border gap-y-5 gap-x-5 h-fit justify-between">
      {productList.map((producListMap) => {
        return (
          <div
            key={productList?.id}
            className="w-full md:w-[305px] flex flex-row overflow-hidden"
          >
            <div className="w-full  border bg-white border-searchBgColor pt-4 rounded-lg">
              {producListMap?.SetToModel ? (
                <div className="w-full h-[572px] flex justify-center">
                  <img src={model1} alt="" />
                </div>
              ) : (
                <div>
                  {/* HeadWear */}
                  <div className="w-full h-fit ">
                    {producListMap?.headWear?.length >= 2 ? (
                      <Slider {...headWear} className={`w-full h-[72px] `}>
                        {producListMap?.headWear?.map((item) => {
                          return item.id ? (
                            <div
                              key={item?.id}
                              className={`!w-[192px] box-border ml-[47px] ls:ml-[66px] ll:ml-[83px] md:ml-[56px] cursor-pointer flex items-center justify-center h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center ">
                                <div className="w-full h-full hover:scale-110 ease-in-out	duration-300 flex items-center justify-center">
                                  <img
                                    className="w-[100px] h-full m-auto  "
                                    src={item?.head_wear_img}
                                    alt="head_wear_img"
                                  />
                                </div>
                                <div
                                  className={`   flex ${
                                    !item?.active
                                      ? "justify-between"
                                      : "justify-end"
                                  } `}
                                >
                                  {!item?.active ? (
                                    <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-6 h-6 flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="w-0 h-0"></div>
                          );
                        })}
                      </Slider>
                    ) : (
                      <div>
                        <div className={`w-full h-[72px] `}>
                        {producListMap?.headWear?.map((item) => {
                          return item.id ? (
                            <div
                              key={item?.id}
                              className={` w-[192px] box-border mx-auto cursor-pointer flex items-center justify-center h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center">
                                <div className="w-full h-full hover:scale-110   ease-in-out	duration-300">
                                  <img
                                    className="w-[100px] h-full m-auto  "
                                    src={item?.head_wear_img}
                                    alt="head_wear_img"
                                  />
                                </div>
                                <div
                                  className={`   flex ${
                                    !item?.active
                                      ? "justify-between"
                                      : "justify-end"
                                  } `}
                                >
                                  {!item?.active ? (
                                    <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-6 h-6 flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="w-0 h-0"></div>
                          );
                        })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* OutWear */}
                  <div className="w-full h-fit  mt-1">
                    {producListMap?.outWear?.length >= 2 ? (
                      <Slider {...outWear} className={`w-full h-[160px]`}>
                        {producListMap?.outWear.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`!w-[192px] cursor-pointer flex justify-center items-center ml-[47px] ls:ml-[66px] ll:ml-[83px] md:ml-[56px] h-[148px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center">
                                <div className="w-full h-full hover:scale-110 ease-in-out	duration-300 flex items-center justify-center">
                                  <img
                                    className="h-[90%]"
                                    src={item?.out_wear_img}
                                    alt="head_wear_img"
                                  />
                                </div>
                                <div
                                  className={`   flex ${
                                    !item?.active
                                      ? "justify-between"
                                      : "justify-end"
                                  } `}
                                >
                                  {!item?.active ? (
                                    <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-6 h-6 flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    ) : (
                      <div>
                        <div className={`w-full h-[160px]`}>
                          {producListMap?.outWear.map((item) => {
                            return (
                              <div
                                key={item?.id}
                                className={`w-[192px] cursor-pointer flex justify-center items-center mx-auto h-[148px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                              >
                                <div className="group relative w-full h-full flex items-center justify-center">
                                  <div className="w-full h-full hover:scale-110 ease-in-out	duration-300 flex items-center justify-center">
                                    <img
                                      className="h-[90%]"
                                      src={item?.out_wear_img}
                                      alt="head_wear_img"
                                    />
                                  </div>
                                  <div
                                    className={`   flex ${
                                      !item?.active
                                        ? "justify-between"
                                        : "justify-end"
                                    } `}
                                  >
                                    {!item?.active ? (
                                      <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                        <img
                                          src={statusFalse}
                                          alt="statusFalse"
                                        />
                                      </div>
                                    ) : null}
                                    <div className="absolute w-6 h-6 flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                      <img src={Liked} alt="Liked" />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                    <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
                                      <img src={nextInfo} alt="nextInfo" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* UnderWear */}
                  <div className="w-full h-fit -mt-2">
                    {producListMap?.underWear?.length >= 2 ? (
                      <Slider {...underWear} className={`w-full h-[180px]`}>
                        {producListMap?.underWear.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`!w-[192px] flex justify-center cursor-pointer items-center ml-[56px]  h-[168px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center">
                                <div className="w-full h-full hover:scale-110   ease-in-out	duration-300 flex items-center justify-center">
                                  <img
                                    className="h-[90%]"
                                    src={item?.under_wear_img}
                                    alt="under_wear_img"
                                  />
                                </div>
                                <div
                                  className={`   flex ${
                                    !item?.active
                                      ? "justify-between"
                                      : "justify-end"
                                  } `}
                                >
                                  {!item?.active ? (
                                    <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-6 h-6 flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    ) : (
                      <div className={`w-full h-[180px]`}>
                        {producListMap?.underWear.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`w-[192px] flex justify-center cursor-pointer items-center mx-auto  h-[168px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center">
                                <div className="w-full h-full hover:scale-110   ease-in-out	duration-300 flex items-center justify-center">
                                  <img
                                    className="h-[90%]"
                                    src={item?.under_wear_img}
                                    alt="under_wear_img"
                                  />
                                </div>
                                <div
                                  className={`   flex ${
                                    !item?.active
                                      ? "justify-between"
                                      : "justify-end"
                                  } `}
                                >
                                  {!item?.active ? (
                                    <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-6 h-6 flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* LegWear */}
                  <div className="w-full h-fit -mt-2">
                    {producListMap?.legWear?.length >= 2 ? (
                      <Slider {...legWear} className={`w-full h-[72px]`}>
                        {producListMap?.legWear.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`!w-[192px] flex justify-center items-center  cursor-pointer ml-[56px] h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center">
                                <div className="w-full h-full hover:scale-110   ease-in-out	duration-300 flex items-center justify-center">
                                  <img
                                    className="h-[90%]"
                                    src={item?.leg_wear_img}
                                    alt="leg_wear_img"
                                  />
                                </div>
                                <div
                                  className={`   flex ${
                                    !item?.active
                                      ? "justify-between"
                                      : "justify-end"
                                  } `}
                                >
                                  {!item?.active ? (
                                    <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-6 h-6 flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    ) : (
                      <div className={`w-full h-[72px]`}>
                        {producListMap?.legWear.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`w-[192px] flex justify-center items-center  cursor-pointer mx-auto h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center">
                                <div className="w-full h-full hover:scale-110   ease-in-out	duration-300 flex items-center justify-center">
                                  <img
                                    className="h-[90%]"
                                    src={item?.leg_wear_img}
                                    alt="leg_wear_img"
                                  />
                                </div>
                                <div
                                  className={`   flex ${
                                    !item?.active
                                      ? "justify-between"
                                      : "justify-end"
                                  } `}
                                >
                                  {!item?.active ? (
                                    <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-6 h-6 flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Accessory */}
                  <div className="w-full h-fit mt-1 mb-4">
                    {producListMap?.Accessory?.length >= 2 ? (
                      <Slider {...Accessory} className={`w-full h-[72px]`}>
                        {producListMap?.Accessory.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`!w-[192px] flex items-center cursor-pointer justify-center ml-[47px] ls:ml-[66px] ll:ml-[83px] md:ml-[56px] h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center">
                                <div className="w-full h-full hover:scale-110   ease-in-out	duration-300 flex items-center justify-center">
                                  <img
                                    className="h-[90%]"
                                    src={item?.accessor_wear_img}
                                    alt="accessor_wear_img"
                                  />
                                </div>
                                <div
                                  className={`   flex ${
                                    !item?.active
                                      ? "justify-between"
                                      : "justify-end"
                                  } `}
                                >
                                  {!item?.active ? (
                                    <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-6 h-6 flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    ) : (
                      <div className={`w-full h-[72px]`}>
                        {producListMap?.Accessory.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`w-[192px] flex items-center cursor-pointer justify-center mx-auto h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center">
                                <div className="w-full h-full hover:scale-110   ease-in-out	duration-300 flex items-center justify-center">
                                  <img
                                    className="h-[90%]"
                                    src={item?.accessor_wear_img}
                                    alt="accessor_wear_img"
                                  />
                                </div>
                                <div
                                  className={`   flex ${
                                    !item?.active
                                      ? "justify-between"
                                      : "justify-end"
                                  } `}
                                >
                                  {!item?.active ? (
                                    <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-6 h-6 flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {producListMap?.category.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="w-full relative border-y border-searchBgColor px-4 py-3"
                  >
                    <div className="font-AeonikProRegular text-sm leading-4 text-gray-500">
                      Набор:
                      <span className="not-italic font-AeonikProMedium text-base text-black ml-2">
                        {item?.name}
                      </span>
                    </div>
                    {producListMap.SetToModel ? (
                      <button
                        onClick={() => {
                          OpenShowModel(producListMap?.id);
                        }}
                        className={` absolute top-[7px] right-2 group w-9 h-9 hover:w-[120px] bg-bgCard hover:bg-white   duration-300 rounded-lg overflow-hidden border border-searchBgColor flex items-center justify-between`}
                      >
                        <span className="  flex flex-nowrap items-center ml-[-100px] group-hover:ml-[12px]  not-italic overflow-hidden p-[1px] duration-300   font-AeonikProRegular leading-3  text-black text-sm ">
                          Структура
                        </span>
                        <span className="w-8 h-8 flex items-center justify-center">
                          <img
                            className="mr-[2px]"
                            src={modelToSet}
                            alt="model-to-set"
                          />
                        </span>
                      </button>
                    ) : producListMap.modelsList.length > 0 ? (
                      <button
                        onClick={() => {
                          OpenShowModel(producListMap?.id);
                        }}
                        className={`absolute top-[7px] right-2 group w-9 h-9 hover:w-[98px] bg-bgCard hover:bg-white   duration-300 rounded-lg overflow-hidden border border-searchBgColor flex items-center justify-between`}
                      >
                        <span className="  flex flex-nowrap items-center ml-[-100px] group-hover:ml-[14px]  not-italic overflow-hidden  duration-300   font-AeonikProRegular leading-3  text-black text-sm ">
                          Модель
                        </span>
                        <span className="w-8 h-8 flex items-center justify-center">
                          <img
                            className="mr-[2px]"
                            src={setpersonIcons}
                            alt="setpersonIcons"
                          />
                        </span>
                      </button>
                    ) : null}
                  </div>
                );
              })}

              <div className="w-full pr-2 pl-4 pb-2 pt-2 flex flex-wrap content-between">
                <div className="relative flex w-full justify-between items-center">
                  <div className="flex items-center mt-4 mb-3">
                    <span className="mr-[6px] flex  items-center">
                      <img src={star} alt="star" />
                    </span>
                    <span className="not-italic font-AeonikProMedium text-base leading-4 text-black">
                      2.5{" "}
                      <span className="mr-1 not-italic font-AeonikProRegular text-xs leading-3 text-setTexOpacity">
                        (20 голосов)
                      </span>
                    </span>
                  </div>
                  <Button
                    type="primary"
                    onClick={() => setOpen(true)}
                    className="group absolute -top-1 right-0 rounded-lg bg-btnBgColor border border-searchBgColor flex items-center justify-center pl-[10px] pr-[5px] py-[7px] hover:bg-SignInBgColor transition ease-in duration-300"
                  >
                    <span className="group-hover:text-white flex  items-center font-AeonikProRegular text-center text-black text-[12px] mr-1">
                      Обзор набора
                    </span>
                    <svg
                      className="group-hover:fill-white group-hover:stroke-white stroke-black"
                      opacity={100}
                      viewBox="-6 -6 36 36"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      {" "}
                      <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
                    </svg>
                  </Button>
                  {open && (
                    <div className="fixed inset-0 z-50 ">
                      <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
                      <div className="flex items-center min-h-screen ">
                        <div className="relative w-[1000px] h-[90vh]   mx-auto bg-white rounded-md shadow-lg">
                          <div
                            onClick={() => setOpen(false)}
                            className="w-[44px] h-[44px] border  border-searchBgColor select-none rounded-lg bg-btnBgColor flex justify-center items-center active:scale-95	active:opacity-70 p-2 cursor-pointer absolute z-50 top-2 right-2"
                          >
                            <img
                              className="w-[16px] h-4"
                              src={MenuClose}
                              alt=""
                            />
                          </div>

                          <div className="h-[100%] flex items-center">
                            <SetClothesOpenModelModal />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <Modal
                    centered
                    closable={false}
                    open={open}
                    footer={null}
                    className="!w-[1000px] !h-[100vh]   border border-red-500 flex  items-center"
                  >
                    <div className="w-full h-[90vh] !my-auto border border-green-800">
                      <div
                        onClick={() => setOpen(false)}
                        className="w-[44px] h-[44px] border  border-searchBgColor select-none rounded-lg bg-btnBgColor flex justify-center items-center active:scale-95	active:opacity-70 p-2 cursor-pointer absolute z-50 top-2 right-2"
                      >
                        <img className="w-[16px] h-4" src={MenuClose} alt="" />
                      </div>
                      <div className="h-[90vh] flex items-center">
                        <SetClothesOpenModelModal />
                      </div>
                    </div>
                  </Modal> */}
                </div>
                <div className="flex items-center w-full justify-between">
                  <div>
                    <span className="not-italic font-AeonikProMedium text-2xl leading-7 text-setPriceRed mr-[6px]">
                      828000
                    </span>
                    <span className="not-italic font-AeonikProRegular line-through	 text-sm leading-4 text-setTexOpacity">
                      1054000
                    </span>
                  </div>
                  <button className="w-[36px] h-[36px] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                    <img src={addBag} alt="addbag" className="w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="w-full h-fit flex items-center justify-center mt-14">
        <div className="w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-lg border border-searchBgColor bg-btnBgColor">
          Показать ещё 12 наборов
        </div>
      </div>
    </div>
  );
}
