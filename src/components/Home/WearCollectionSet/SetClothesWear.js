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
  miximize,
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
        {
          id: 2,
          product_id: 2,
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
        {
          id: 2,
          product_id: 2,
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
        {
          id: 2,
          product_id: 2,
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
        className={`absolute right-8 ls:right-0 ll:right-[4px] md:right-3 top-[23%] z-10 text-center cursor-pointer no-underline w-[25px] h-[25px] md:w-8 md:h-8 flex items-center justify-center  md:rounded-full md:bg-btnBgColor duration-200 md:border md:border-solid md:border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} className="w-6 h-6 md:w-4 md:h-4" />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-8 ls:left-0 ll:left-[4px] md:left-3 top-[23%] z-10 text-center cursor-pointer no-underline w-[25px] h-[25px] md:w-8 md:h-8 flex items-center justify-center md:rounded-full md:bg-btnBgColor duration-200 md:border md:border-solid md:border-searchBgColor`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} className="w-6 h-6 md:w-4 md:h-4"/>
      </div>
    );
  };

  const NextArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-8 ls:right-0 ll:right-[4px] md:right-3 top-[37%] z-10 text-center cursor-pointer no-underline w-[25px] h-[25px] md:w-8 md:h-8 flex items-center justify-center  md:rounded-full md:bg-btnBgColor duration-200 md:border md:border-solid md:border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} className="w-6 h-6 md:w-4 md:h-4" />
      </div>
    );
  };
  const PrevArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-8 ls:left-0 ll:left-[4px] md:left-3 top-[36%] z-10 text-center cursor-pointer no-underline w-[25px] h-[25px] md:w-8 md:h-8 flex items-center justify-center md:rounded-full md:bg-btnBgColor duration-200 md:border md:border-solid md:border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} className="w-6 h-6 md:w-4 md:h-4" />
      </div>
    );
  };

  const NextArrowshoesWear = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-8 ls:right-0 ll:right-[4px] md:right-3 top-[23%] z-10 text-center cursor-pointer no-underline w-[25px] h-[25px] md:w-8 md:h-8 flex items-center justify-center  md:rounded-full md:bg-btnBgColor duration-200 md:border md:border-solid md:border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} className="w-6 h-6 md:w-4 md:h-4" />
      </div>
    );
  };
  const PrevArrowshoesWear = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-8 ls:left-0 ll:left-[4px] md:left-3 top-[22%] z-10 text-center cursor-pointer no-underline w-[25px] h-[25px] md:w-8 md:h-8 flex items-center justify-center md:rounded-full md:bg-btnBgColor duration-200 md:border md:border-solid md:border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} className="w-6 h-6 md:w-4 md:h-4" />
      </div>
    );
  };

  const NextArrowAccessory = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-8 ls:right-0 ll:right-[4px] md:right-3 top-[14%] md:top-[25%] z-10 text-center cursor-pointer no-underline w-[25px] h-[25px] md:w-8 md:h-8 flex items-center justify-center  md:rounded-full md:bg-btnBgColor duration-200 md:border md:border-solid md:border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} className="w-6 h-6 md:w-4 md:h-4" />
      </div>
    );
  };
  const PrevArrowAccessory = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-8 ls:left-0 ll:left-[4px] md:left-3 top-[14%] md:top-[25%] z-10 text-center cursor-pointer no-underline w-[25px] h-[25px] md:w-8 md:h-8 flex items-center justify-center md:rounded-full md:bg-btnBgColor duration-200 md:border md:border-solid md:border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} className="w-6 h-6 md:w-4 md:h-4" />
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex flex-row flex-wrap gap-y-[10px] md:gap-y-5 md:gap-x-5 h-fit justify-between">
      {productList.map((producListMap) => {
        return (
          <div
            key={productList?.id}
            className="w-full ls:w-[48.8%] md:w-[305px] flex flex-row overflow-hidden"
          >
            <div className="w-full border bg-white border-searchBgColor rounded-lg">
              {producListMap?.SetToModel ? (
                <div className="relative w-full h-[350px] md:h-[572px] flex justify-center">
                  <img src={model1} alt="" />
                  <Button 
                    type="primary" 
                    onClick={showModal} 
                    className="shadow-none px-[7px] absolute !bg-transparent hidden ls:flex md:hidden items-center justify-center bottom-2 right-2 md:w-0 md:h-0 rounded-lg border border-solid border-searchBgColor"
                    >
                      <img src={miximize} alt="maxsimize-icon" />
                  </Button>
                  <Modal 
                    open={isModalOpen} 
                    onOk={handleOk} 
                    onCancel={handleCancel}
                    footer={null}
                    className="modalSetMobile overscroll-none overflow-y-scroll"
                    >
                    <img src={model1} alt="" />
                  </Modal>
                </div>
              ) : (
                <div className="h-[350px] md:h-[572px] pt-3 md:pt-4">
                  {/* HeadWear */}
                  <div className="w-full h-fit ">
                    {producListMap?.headWear?.length >= 2 ? (
                      <Slider {...headWear} className={`w-full h-11 md:h-[72px] `}>
                        {producListMap?.headWear?.map((item) => {
                          return item.id ? (
                            <div
                              key={item?.id}
                              className={`!w-[110px] md:!w-[192px] h-11 md:h-[72px] box-border ml-[30%] ls:ml-[10%] ll:ml-[16%] md:ml-[46px] cursor-pointer flex items-center justify-center rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center ">
                                <div className="w-full h-full hover:scale-110 ease-in-out	duration-300 flex items-center justify-center">
                                  <img
                                    className="md:w-[full] h-full m-auto  "
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
                                  <div className="absolute w-6 h-6 hidden md:flex items-center justify-center top-[2px] right-[2px] md:top-1 md:right-1 cursor-pointer border border-searchBgColor bg-white rounded-[6px] md:rounded-lg">
                                    <img 
                                    src={Liked} 
                                    alt="Liked" 
                                    className="pr-0 pt-0" />
                                  </div>
                                </div>
                                <div className="absolute md:bottom-[-35px] md:right-1 md:group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className="z-50 w-4 h-4 md:w-6 md:h-6 cursor-pointer border border-searchBgColor   bg-white rounded-[6px] md:rounded-lg hidden md:flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" className="pr-0"/>
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
                        <div className={`w-full h-11 md:h-[72px] `}>
                        {producListMap?.headWear?.map((item) => {
                          return item.id ? (
                            <div
                              key={item?.id}
                              className={`!w-[110px] md:!w-[192px] h-11 md:h-[72px] box-border mx-auto cursor-pointer flex items-center justify-center  rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="group relative w-full h-full flex items-center justify-center">
                                <div className="w-full h-full hover:scale-110   ease-in-out	duration-300">
                                  <img
                                    className="m-auto md:w-[full] h-full pr-[1px] pt-[1px] md:pr-0 md:pt-0 "
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
                                    <div className="absolute  w-[18px] h-[18px] md:w-6 md:h-6  cursor-pointer border border-searchBgColor bg-white  rounded-lg flex items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                        className="w-[80%] md:w-[100%] pr-[1px] pt-[1px] md:pr-0 md:pt-0" 
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-[18px] h-[18px] md:w-6 md:h-6 hidden md:flex items-center justify-center top-[2px] right-[2px] md:top-1 md:right-1 cursor-pointer border border-searchBgColor bg-bgCard hover:bg-white transition ease-out duration-500 rounded-[6px] md:rounded-lg">
                                    <img src={Liked} 
                                    alt="Liked" 
                                    className="pl-[1px] pt-[1px] md:pl-0 md:pt-0"/>
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 hidden md:flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-bgCard hover:bg-white transition ease-out duration-500 rounded-lg flex items-center justify-center">
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
                      <Slider {...outWear} className={`w-full h-[90px] md:h-[160px]`}>
                        {producListMap?.outWear.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`!w-[110px] md:!w-[192px] cursor-pointer flex justify-center items-center ml-[30%] ls:ml-[10%] ll:ml-[16%] md:ml-[46px] h-[90px] md:h-[148px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
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
                                  <div className="absolute w-6 h-6 hidden md:flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 hidden md:flex justify-end">
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
                        <div className={`w-full h-[90px] md:h-[160px]`}>
                          {producListMap?.outWear.map((item) => {
                            return (
                              <div
                                key={item?.id}
                                className={`!w-[110px] md:!w-[192px] cursor-pointer flex justify-center items-center mx-auto h-[90px] md:h-[148px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
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
                                      <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white  rounded-lg hidden md:flex items-center justify-center">
                                        <img
                                          src={statusFalse}
                                          alt="statusFalse"
                                        />
                                      </div>
                                    ) : null}
                                    <div className="absolute w-6 h-6 hidden md:flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-bgCard hover:bg-white transition ease-out duration-500 rounded-lg">
                                      <img src={Liked} alt="Liked" />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 hidden md:flex justify-end">
                                    <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-bgCard hover:bg-white transition ease-out duration-500 rounded-lg flex items-center justify-center">
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
                  <div className="w-full h-fit mt-1 md:-mt-2">
                    {producListMap?.underWear?.length >= 2 ? (
                      <Slider {...underWear} className={`w-full h-[90px] md:h-[180px]`}>
                        {producListMap?.underWear.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`!w-[110px] md:!w-[192px] flex justify-center cursor-pointer items-center ml-[30%] ls:ml-[10%] ll:ml-[16%] md:ml-[46px] h-[90px] md:h-[168px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
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
                                  className={`hidden md:flex ${
                                    !item?.active
                                      ? "justify-between"
                                      : "justify-end"
                                  } `}
                                >
                                  {!item?.active ? (
                                    <div className="absolute w-6 h-6 cursor-pointer border border-searchBgColor bg-white rounded-lg items-center justify-center">
                                      <img
                                        src={statusFalse}
                                        alt="statusFalse"
                                      />
                                    </div>
                                  ) : null}
                                  <div className="absolute w-6 h-6 hidden md:flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-bgCard hover:bg-white transition ease-out duration-500 rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="hidden md:flex absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300  justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-bgCard hover:bg-white transition ease-out duration-500 rounded-lg flex items-center justify-center">
                                    <img src={nextInfo} alt="nextInfo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    ) : (
                      <div className={`w-full h-[90px] md:h-[180px]`}>
                        {producListMap?.underWear.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`!w-[110px] md:!w-[192px] flex justify-center cursor-pointer items-center mx-auto h-[90px] md:h-[168px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
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
                                  <div className="absolute w-6 h-6 hidden md:flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-bgCard hover:bg-white transition ease-out duration-500 rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 hidden md:flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-bgCard hover:bg-white transition ease-out duration-500 rounded-lg flex items-center justify-center">
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
                  <div className="w-full h-fit mt-1 md:-mt-2">
                    {producListMap?.legWear?.length >= 2 ? (
                      <Slider {...legWear} className={`w-full h-11 md:h-[72px]`}>
                        {producListMap?.legWear.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`!w-[110px] md:!w-[192px] flex justify-center items-center cursor-pointer ml-[30%] ls:ml-[10%] ll:ml-[16%] md:ml-[46px] h-11 md:h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
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
                                  <div className="absolute w-6 h-6 hidden md:flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 hidden md:flex justify-end">
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
                      <div className={`!w-full h-11 md:h-[72px]`}>
                        {producListMap?.legWear.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`!w-[110px] md:!w-[192px] flex justify-center items-center cursor-pointer mx-auto h-11 md:h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
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
                                  <div className="absolute w-6 h-6 hidden md:flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-bgCard hover:bg-white transition ease-out duration-500 rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 hidden md:flex justify-end">
                                  <div className=" z-50 w-6 h-6 cursor-pointer border border-searchBgColor bg-bgCard hover:bg-white transition ease-out duration-500 rounded-lg flex items-center justify-center">
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
                  <div className="w-full h-fit mt-2 mb-4">
                    {producListMap?.Accessory?.length >= 2 ? (
                      <Slider {...Accessory} className={`w-full h-[72px]`}>
                        {producListMap?.Accessory.map((item) => {
                          return (
                            <div
                              key={item?.id}
                              className={`!w-[110px] md:!w-[192px] flex items-center cursor-pointer justify-center ml-[30%] ls:ml-[10%] ll:ml-[16%] md:ml-[46px] h-11 md:h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
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
                                  <div className="absolute w-6 h-6 hidden md:flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 hidden md:flex justify-end">
                                  <div className=" z-50 w-6 h-6 cursor-pointer border border-searchBgColor   bg-white rounded-lg flex items-center justify-center">
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
                              className={`!w-[110px] md:!w-[192px] flex items-center cursor-pointer justify-center mx-auto h-11 md:h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
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
                                  <div className="absolute w-6 h-6 hidden md:flex items-center justify-center top-1 right-1 cursor-pointer border border-searchBgColor bg-bgCard hover:bg-white transition ease-out duration-500 rounded-lg">
                                    <img src={Liked} alt="Liked" />
                                  </div>
                                </div>
                                <div className="absolute bottom-[-35px] right-1 group-hover:bottom-1 duration-300 flex justify-end">
                                  <div className=" z-50 w-[24px] h-[24px] cursor-pointer border border-searchBgColor   bg-bgCard hover:bg-white transition ease-out duration-500rounded-lg hidden md:flex items-center justify-center">
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
                    className="w-full relative border-y border-searchBgColor px-3 md:px-4 py-3"
                  >
                    <div className="font-AeonikProRegular truncate text-sm leading-4 text-gray-500">
                      <span className="hidden md:inline-block">Набор:</span>
                      <span className="not-italic font-AeonikProMedium text-xs md:text-base text-black ml-0 md:ml-2">
                        {item?.name}
                      </span>
                    </div>
                    {producListMap.SetToModel ? (
                      <button
                        onClick={() => {
                          OpenShowModel(producListMap?.id);
                        }}
                        className={` absolute top-1 md:top-[7px] right-2 group w-[32px] h-[32px] md:w-[36px] md:h-[36px] md:hover:w-[120px] bg-bgCard hover:bg-white   duration-300 rounded-lg overflow-hidden border border-searchBgColor flex items-center justify-between`}
                      >
                        <span className="hidden md:flex flex-nowrap items-center ml-0 md:ml-[-100px] group-hover:ml-0 md:group-hover:ml-[12px]  not-italic overflow-hidden p-[1px] duration-300   font-AeonikProRegular leading-3  text-black text-sm ">
                          Структура
                        </span>
                        <span className="w-4 h-4 md:w-8 md:h-8 flex items-center justify-center">
                          <img
                            className="ml-[14px] md:ml-0 md:mr-[2px]"
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
                        className={`absolute top-1 md:top-[7px] right-2 group w-[32px] h-[32px] md:w-[36px] md:h-[36px] md:hover:w-[98px] bg-bgCard hover:bg-white   duration-300 rounded-lg overflow-hidden border border-searchBgColor flex items-center justify-between`}
                      >
                        <span className="hidden md:flex flex-nowrap items-center ml-0 md:ml-[-100px] group-hover:ml-0 md:group-hover:ml-[14px]  not-italic overflow-hidden duration-300 font-AeonikProRegular leading-3  text-black text-sm ">
                          Модель
                        </span>
                        <span className="w-4 h-4 md:w-8 md:h-8 flex items-center justify-center">
                          <img
                            className="ml-[14px] md:ml-0 md:mr-[2px]"
                            src={setpersonIcons}
                            alt="setpersonIcons"
                          />
                        </span>
                      </button>
                    ) : null}
                  </div>
                );
              })}

              <div className="w-full h-[124px] md:h-[104px] px-3 md:pr-2 md:pl-4 md:pb-2 md:pt-2 flex flex-wrap content-between">
                
                <div className="relative flex w-full justify-between items-center">
                  <div className="flex items-center mt-3 md:mt-4 mb-[10px] md:mb-3">
                    <span className="mr-[6px] mt-[-5px] flex  items-center">
                      <img src={star} alt="star" />
                    </span>
                    <span className="not-italic font-AeonikProMedium text-xs md:text-base leading-4 text-black">
                      2.5{" "}
                      <span className="mr-1 not-italic font-AeonikProRegular text-xs leading-3 text-setTexOpacity">
                        (20 голосов)
                      </span>
                    </span>
                  </div>
                  <Button
                    type="primary"
                    onClick={() => setOpen(true)}
                    className="group shadow-none absolute top-9 right-0 left-0 md:left-36 md:-top-1 md:right-0 rounded-lg bg-btnBgColor border border-searchBgColor flex items-center justify-center pl-[10px] pr-[5px] py-[7px] hover:bg-SignInBgColor transition ease-in duration-300"
                  >
                    <span className="group-hover:text-white flex items-center font-AeonikProRegular text-center text-black text-[12px] mr-1">
                    Страница образа
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
                </div>

                <div className="relative flex items-center w-full justify-between">
                  <div>
                    <span className="not-italic font-AeonikProMedium text-lg md:text-2xl leading-7 text-setPriceRed mr-[6px]">
                      828 000
                    </span>
                    <span className="absolute bottom-[26px] left-0 md:left-[98px] md:bottom-[4px] not-italic font-AeonikProRegular line-through text-xs md:text-sm leading-4 text-setTexOpacity">
                      105 4000
                    </span>
                  </div>
                  <button className="absolute w-[32px] h-[32px] md:w-[40px] md:h-[40px] -right-1 bottom-2 md:right-0 md:bottom-0 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                    <img src={addBag} alt="addbag" className="w-[28px]" />
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
