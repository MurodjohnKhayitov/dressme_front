import React, { useState } from "react";
import { DownCate, InputCheck, search } from "../../../../assets/imgs";
import { BsCheckLg } from "react-icons/bs";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default function CategoryForBrand() {
  
  const [product, setProduct] = useState({
    brandWear: [
      { id: 1, action: false, name: "Adidas", count: 125 },
      { id: 2, action: false, name: "Reebok", count: 125 },
      { id: 3, action: false, name: "Nike", count: 125 },
      { id: 4, action: false, name: "Puma", count: 125 },
      { id: 5, action: false, name: "ECCO", count: 125 },
      { id: 6, action: false, name: "New Balance", count: 125 },
      { id: 7, action: false, name: " Asics", count: 125 },
      { id: 8, action: false, name: "Columbian", count: 125 },
      { id: 9, action: false, name: "Under Armour", count: 125 },
    ],
    prizes: [
      { id: 1, action: false, name: "Undes 10$" },
      { id: 2, action: false, name: "Undes 50$" },
      { id: 3, action: false, name: "Undes 100$" },
      { id: 4, action: false, name: "Above 100$" },
    ],
    changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-black" },
        { id: 2, value: 2, action: false, colors: "bg-white" },
        { id: 3, value: 3, action: false, colors: "bg-purple-700" },
        { id: 4, value: 4, action: false, colors: "bg-gray-500" },
        { id: 5, value: 5, action: false, colors: "bg-red-700" },
        { id: 6, value: 6, action: false, colors: "bg-yellow-500" },
        { id: 7, value: 7, action: false, colors: "bg-green-600" },
        { id: 8, value: 8, action: false, colors: "bg-sky-500" },
        { id: 9, value: 9, action: false, colors: "bg-yellow-700" },
        { id: 10, value: 10, action: false, colors: "bg-rose-900" },
        { id: 11, value: 11, action: false, colors: "bg-pink-600" },
        { id: 12, value: 12, action: false, colors: "bg-cyan-900" },
      ],
      availability: [
        { id: 1, action: false, title: "In stock is available", count: 892 },
        { id: 2, action: false, title: "Delivery available", count: 641 },
      ]
  });

  const [state, setState] = useState({
    brandShow: true,
    checkBrand: false,
    checkedPrize: true,
    availability: true,
    customerRreviews:true,
  });

  const [value, SetValue] = useState({ min: 20, max: 150 });

  const HandleCheckStatus = (e) => {
    // console.log(e, "id");
    // setProduct((current) => {
    //   return current.brandWear.map((data) => {
    //     if (data?.id == e) {
    //       return { ...data, action: !data.action };
    //     } else return data;
    //   });
    // });
  };
  
  const onColorChecked = (itemId, colorId) => {
    setProduct((current) => {
      return current?.map((data) => {
        if (data?.id == itemId) {
          let newDataColor = data.changeColor.map((e) => {
            if (e.id == colorId) {
              return { ...e, action: !e.action };
            } else return e;
          });
          return { ...data, changeColor: [...newDataColor] };
        } else return data;
      });
    });
  };
  
  
  return (
    <div className="w-full h-hull border border-searchBgColor rounded-lg px-5 py-[30px]">
        <div className="w-full flex flex-wrap gap-x-[4px] gap-y-[8px]">
            <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white rounded-lg">
            Men
            </button>
            <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white rounded-lg">
            Women
            </button>
            <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white rounded-lg">
            Kids
            </button>
            <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white rounded-lg">
            Sale
            </button>
        </div>
        {/* Brands filter */}
        <div className="w-full h-fit mt-[40px]">
            {/* Controls */}
            <div className="openBrands w-full flex justify-between items-center" 
                onClick={(event) => {
                event.target.classList.toggle("open");}}>
                <div onClick={() => setState({ ...state, brandShow: !state.brandShow })}
                    className="flex items-center cursor-pointer select-none">
                    <span className="not-italic mr-1 font-AeonikProMedium text-lg leading-4 text-black">
                    Brands
                    </span>
                    <img
                        src={DownCate}
                        className={`${
                        state?.brandShow ? "rotate-[180deg]" : ""
                        } duration-300`}
                        alt=""
                    />
                </div>
                <span className="not-italic font-AeonikProMedium text-base leading-4 text-fullBlue cursor-pointer">
                    Clear
                </span>
            </div>
            <div className="mt-5 openedBrands">
                {/* Search */}
                <div className="h-[44px] w-full flex items-center justify-between px-4 border border-searchBgColor rounded-lg ">
                    <input
                    className="w-[85%] h-full "
                    type="text"
                    name="search"
                    placeholder="Search for brand"
                    />
                    <img src={search} className="" />
                </div>

                {/* Field */}
                <div className="h-[300px] w-full my-5 overflow-auto scrollbar dark:scrollbar categoryScroll">
                    {product?.brandWear.map((data) => {
                    return (
                        <div
                        key={data?.id}
                        onClick={HandleCheckStatus(data?.id)}
                        className="flex items-center cursor-pointer select-none mb-4 overflow-auto"
                        >
                        <div
                            className={`w-[22px] h-[22px] p-1 flex items-center ${
                            state?.checkBrand ? "bg-fullBlue " : "bg-white"
                            }  mr-[10px] rounded border border-borderColorCard`}
                        >
                            {state?.checkBrand && (
                            <span className="text-white">
                                <BsCheckLg size={12} />
                            </span>
                            )}
                        </div>
                        <div className="flex items-center not-italic mr-2 font-AeonikProRegular text-lg leading-4 text-black">
                            {data?.name}
                        </div>
                        <div className="flex items-center not-italic font-AeonikProRegular text-base leading-4 text-setTexOpacity">
                            ({data?.count})
                        </div>
                        </div>
                    );
                    })}
                </div>
            </div>
        </div>

        {/* Prizes */}
        <div  className="w-full flex justify-between items-center mb-[30px]" onClick={(event) => {event.target.classList.toggle("open")}}>
            <div
                onClick={() => setState({ ...state, checkedPrize: !state.checkedPrize })}
            className="flex items-center cursor-pointer select-none"
            >
            <span className="not-italic mr-1 font-AeonikProMedium text-lg leading-4 text-black">
                Budget
            </span>
            <img
                src={DownCate}
                className={`${
                state?.checkedPrize ? "rotate-[180deg]" : ""
                } duration-300`}
                alt=""
            />
            </div>
        </div>
        <div className="mb-[50px]">
            <div className="w-full flex flex-wrap gap-x-1 gap-y-2">
            {product.prizes.map((item) => (
                <button
                key={item.id}
                className="h-11 w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white transition ease-linear duration-200 rounded-lg"
                >
                {item.name}
                </button>
            ))}
            </div>
            <div className="w-full bg-bgCategory mt-4 h-12 rounded-lg">
            <InputRange
                formatLabel={(value) => `${value}$`}
                minValue={0}
                maxValue={200}
                value={value}
                onChange={(value) => SetValue(value)}
            />
            </div>
        </div>


        {/* Colors */}
        <div className="w-full h-fit mt-[40px] border border-red-600">
            {/* Controls */}
            <div
            className="openBrands w-full flex justify-between items-center"
            onClick={(event) => {
                event.target.classList.toggle("open");
            }}
            >
            <div onClick={() => setState({ ...state, brandShow: !state.brandShow })} className="flex items-center cursor-pointer select-none">
                <span className="not-italic mr-1 font-AeonikProMedium text-lg leading-4 text-black">
                Colors
                </span>
                <img
                src={DownCate}
                className={`${
                    state?.brandShow ? "rotate-[180deg]" : ""
                } duration-300`}
                alt=""
                />
            </div>
            <span className="not-italic font-AeonikProMedium text-base leading-4 text-fullBlue cursor-pointer">
                Clear
            </span>
            </div>
            {/* Colors */}
            <div className="w-full flex flex-wrap items-center  border-solid bg-white hover:backdrop-brightness-125 hover:bg-white/60 transition ease-out duration-500 mt-5 gap-x-2 gap-y-2 mb-[50px]">
                {product?.changeColor.map((item) => {
                return (
                    <div
                    key={item?.id}
                    onClick={() =>
                        onColorChecked(item?.id)
                    }
                    className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 w-8 h-8 ${item?.colors} cursor-pointer  border border-solid border-borderColorCard`}
                    htmlFor="Color1"
                    >
                    {item?.action ? (
                        <img
                        className="w-[14px]"
                        src={InputCheck}
                        alt=""
                        />
                    ) : null}
                    </div>
                );
                })}
            </div>
        </div>

        {/* Availability */}
        <div className="w-full h-fit border border-blue-700">

            <div className="w-full flex justify-between items-center mb-5" 
                onClick={(event) => {event.target.classList.toggle("open")}}>
                <div onClick={() => setState({ ...state, availability: !state.availability })} className="flex items-center cursor-pointer select-none">
                    <span className="not-italic mr-1 font-AeonikProMedium text-lg leading-4 text-black">
                        Availability
                    </span>
                    <img
                        src={DownCate}
                        className={`${
                        state?.availability ? "rotate-[180deg]" : ""
                        } duration-300`}
                        alt=""
                    />
                </div>
            </div>
            <div className="mb-[50px]">
                {/* Field */}
                <div className="w-full my-5 overflow-auto scrollbar dark:scrollbar categoryScroll">
                    {product?.availability.map((data) => {
                    return (
                        <div className="flex items-center cursor-pointer select-none mb-4"
                            key={data?.id} 
                            onClick={HandleCheckStatus(data?.id)} 
                        >
                            <div className={`w-[22px] h-[22px] p-1 flex items-center ${ state?.checkBrand ? "bg-fullBlue " : "bg-white" }  mr-[10px] rounded border border-borderColorCard`}>
                                {state?.checkBrand && (
                                <span className="text-white">
                                    <BsCheckLg size={12} />
                                </span>
                                )}
                            </div>
                            <div className="flex items-center not-italic mr-2 font-AeonikProRegular text-lg leading-4 text-black">
                                {data?.title}
                            </div>
                            <div className="flex items-center not-italic font-AeonikProRegular text-base leading-4 text-setTexOpacity">
                                ({data?.count})
                            </div>
                        </div>
                    );
                    })}
                </div>
            </div>

        </div>

        {/* Customer reviews */}
        <div className="w-full h-fit border border-blue-700">

            <div className="w-full flex justify-between items-center mb-5" 
                onClick={(event) => {event.target.classList.toggle("open")}}>
                <div onClick={() => setState({ ...state, customerRreviews: !state.customerRreviews })} className="flex items-center cursor-pointer select-none">
                    <span className="not-italic mr-1 font-AeonikProMedium text-lg leading-4 text-black">
                        Customer reviews
                    </span>
                    <img
                        src={DownCate}
                        className={`${
                        state?.customerRreviews ? "rotate-[180deg]" : ""
                        } duration-300`}
                        alt=""
                    />
                </div>
            </div>
            <div className="mb-[50px]">
                {/* Field */}
                <div className="w-full my-5 overflow-auto">
                    
                </div>
            </div>

        </div>

    </div>
  );
}
