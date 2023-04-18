import React, { useState } from "react";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
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
            "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097",
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
          out_wear_img: "https://footbolka.ru/images/polo01.jpg",
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
            "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg",
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
            "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg",
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
            "https://s.alicdn.com/@sc04/kf/HTB1k0BHgOAnBKNjSZFvq6yTKXXaa.jpg_300x300.jpg",
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
            "https://s.alicdn.com/@sc04/kf/HTB1GTM5bh6I8KJjSszfq6yZVXXaZ.jpg_300x300.jpg",
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
            "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097",
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
          out_wear_img: "https://footbolka.ru/images/polo01.jpg",
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
            "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg",
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
            "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg",
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
            "https://s.alicdn.com/@sc04/kf/H9f0e0ce6f3e8416291df7819fa6af755X.jpg_300x300.jpg",
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
            "https://s.alicdn.com/@sc04/kf/H2068dcd30c574549af603c8ff077d5cdJ.jpg_300x300.jpg",
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
            "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097",
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
          out_wear_img: "https://footbolka.ru/images/polo01.jpg",
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
            "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg",
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
            "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg",
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
            "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097",
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
          out_wear_img: "https://footbolka.ru/images/polo01.jpg",
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
            "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg",
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
            "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg",
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
        className={`absolute right-3 top-[20%] z-10 text-center cursor-pointer no-underline w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
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
        className={`absolute left-3 top-[20%] z-10 text-center cursor-pointer no-underline w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor`}
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

  const [clothesSetWear, setClothesSetWear] = useState(true);
  const [openToModel, setOpenToModel] = useState(false);

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

  return (
    <div className="w-full flex flex-row flex-wrap box-border gap-y-5 gap-x-5 h-fit justify-between">
      {productList.map((producListMap) => {
        return (
          <div
            key={productList?.id}
            className="w-[305px] flex flex-row overflow-hidden"
          >
            <div className="w-full  border bg-white border-searchBgColor pt-4 rounded-lg">
              {producListMap?.SetToModel ? (
                <div className="w-full h-[572px] flex justify-center">
                  <img src={model1} alt="" />
                </div>
              ) : (
                <div>
                  {/* HeadWear */}
                  <div className="w-full h-fit">
                    {producListMap?.headWear?.length >= 2 ? (
                      <Slider {...headWear} className={`w-full h-[72px] mb-3`}>
                        {producListMap?.headWear?.map((item) => {
                          return item.id ? (
                            <div
                              key={item?.id}
                              className={`!w-[192px] box-border ml-[56px] flex items-center justify-center h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="w-full h-full">
                                <img
                                  className="w-[100px] h-full m-auto"
                                  src={item?.head_wear_img}
                                  alt="head_wear_img"
                                />
                              </div>
                              <div
                                className={`absolute w-[190px] top-1 px-1 flex ${
                                  !item?.active
                                    ? "justify-between"
                                    : "justify-end"
                                }`}
                              >
                                {!item?.active ? (
                                  <div className="w-6 h-6 cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                    <img src={statusFalse} alt="statusFalse" />
                                  </div>
                                ) : null}
                                <div className="w-6 h-6 flex items-center justify-center top-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                  <img src={Liked} alt="Liked" />
                                </div>
                              </div>
                              <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px] flex justify-end">
                                <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor data-hover:bg-red-500 bg-white rounded-lg flex items-center justify-center">
                                  <img src={nextInfo} alt="nextInfo" />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="w-0 h-0"></div>
                          );
                        })}
                      </Slider>
                    ) : (
                      <div className={`w-full h-[72px] mb-3`}>
                        {producListMap?.headWear?.map((item) => {
                          return item.id ? (
                            <div
                              key={item?.id}
                              className={`!w-[192px] box-border ml-[56px] flex items-center justify-center h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                            >
                              <div className="w-full h-full">
                                <img
                                  className="w-[100px] h-full m-auto"
                                  src={item?.head_wear_img}
                                  alt="head_wear_img"
                                />
                              </div>
                              <div
                                className={`absolute w-[190px] top-1 px-1 flex ${
                                  !item?.active
                                    ? "justify-between"
                                    : "justify-end"
                                } `}
                              >
                                {!item?.active ? (
                                  <div className="w-6 h-6 cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                    <img src={statusFalse} alt="statusFalse" />
                                  </div>
                                ) : null}
                                <div className="w-6 h-6 flex items-center justify-center top-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                  <img src={Liked} alt="Liked" />
                                </div>
                              </div>
                              <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px] flex justify-end">
                                <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor data-hover:bg-red-500 bg-white rounded-lg flex items-center justify-center">
                                  <img src={nextInfo} alt="nextInfo" />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="w-0 h-0"></div>
                          );
                        })}
                      </div>
                    )}
                  </div>
             

                  {/* OutWear */}
                  <div className="w-full h-fit ">
                    
                    <Slider {...outWear} className={`w-full h-[160px]`}>
                      {producListMap?.outWear.map((item) => {
                        return (
                          <div
                            key={item?.id}
                            className={`!w-[192px] flex justify-center items-center ml-[56px] h-[148px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                          >
                            <div className="w-full h-full">
                              <img
                                className=" h-full m-auto"
                                src={item?.out_wear_img}
                                alt="out_wear_img"
                              />
                            </div>
                            <div
                              className={`absolute top-1 px-1 flex ${
                                !item?.active
                                  ? "justify-between"
                                  : "justify-end"
                              }  w-[190px] `}
                            >
                              {!item?.active ? (
                                <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                  <img src={statusFalse} alt="" />
                                </div>
                              ) : null}
                              <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                <img src={Liked} alt="" />
                              </div>
                            </div>
                            <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end">
                              <div className="w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                <img src={nextInfo} alt="nextInfo" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>

                  {/* UnderWear */}
                  <div className="w-full h-fit -mt-2">
                    <Slider {...underWear} className={`w-full h-[180px]`}>
                      {producListMap?.underWear.map((item) => {
                        return (
                          <div
                            key={item?.id}
                            className={`!w-[192px] flex justify-center items-center ml-[56px] h-[168px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                          >
                            <div className="w-full h-full">
                              <img
                                className=" h-full m-auto"
                                src={item?.under_wear_img}
                                alt="under_wear_img"
                              />
                            </div>
                            <div
                              className={`absolute top-1 px-1 flex ${
                                !item?.active
                                  ? "justify-between"
                                  : "justify-end"
                              }  w-[190px] `}
                            >
                              {!item?.active ? (
                                <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center">
                                  <img src={statusFalse} alt="" />
                                </div>
                              ) : null}
                              <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                <img src={Liked} alt="" />
                              </div>
                            </div>
                            <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end">
                              <div className="w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                <img src={nextInfo} alt="nextInfo" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>

                  {/* LegWear */}
                  <div className="w-full h-fit -mt-2">
                    <Slider {...legWear} className={`w-full h-[72px]`}>
                      {producListMap?.legWear.map((item) => {
                        return (
                          <div
                            key={item?.id}
                            className={`!w-[192px] flex justify-center items-center  ml-[56px] h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                          >
                            <div className="w-full h-full">
                              <img
                                className=" h-full m-auto"
                                src={item?.leg_wear_img}
                                alt="leg_wear_img"
                              />
                            </div>
                            <div
                              className={`absolute top-1 px-1 flex ${
                                !item?.active
                                  ? "justify-between"
                                  : "justify-end"
                              }  w-[190px] `}
                            >
                              {!item?.active ? (
                                <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center">
                                  <img src={statusFalse} alt="" />
                                </div>
                              ) : null}
                              <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                <img src={Liked} alt="" />
                              </div>
                            </div>
                            <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end">
                              <div className="w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                <img src={nextInfo} alt="nextInfo" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>

                  {/* Accessory */}
                  <div className="w-full h-fit mt-3 mb-4">
                    <Slider {...Accessory} className={`w-full h-[72px]`}>
                      {producListMap?.Accessory.map((item) => {
                        return (
                          <div
                            key={item?.id}
                            className={`!w-[192px] flex items-center justify-center ml-[56px] h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                          >
                            <div className="w-full h-full">
                              <img
                                className="w-[100px] h-full m-auto"
                                src={item?.accessor_wear_img}
                                alt="accessor_wear_img"
                              />
                            </div>
                            <div
                              className={`absolute top-1 px-1 flex ${
                                !item?.active
                                  ? "justify-between"
                                  : "justify-end"
                              }  w-[190px] `}
                            >
                              {!item?.active ? (
                                <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center">
                                  <img src={statusFalse} alt="" />
                                </div>
                              ) : null}
                              <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                <img src={Liked} alt="" />
                              </div>
                            </div>
                            <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end">
                              <div className="w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                <img src={nextInfo} alt="nextInfo" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
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
                          setClothesSetWear(false);
                          setOpenToModel(false);
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
                          setClothesSetWear(true);
                          setOpenToModel(true);
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
                  <Modal
                    centered
                    closable={false}
                    open={open}
                    footer={null}
                    className="!w-[1000px] !h-[100vh] relative"
                  >
                    <div
                      onClick={() => setOpen(false)}
                      className="flex justify-end p-2 cursor-pointer absolute z-50 top-2 right-2"
                    >
                      <img src={MenuClose} alt="" />
                    </div>
                    <div className="h-full">
                      <SetClothesOpenModelModal />
                    </div>
                  </Modal>
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
