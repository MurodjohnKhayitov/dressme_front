import React, { useState } from "react";
import { DownCate, search } from "../../../../assets/imgs";
import InputRange from 'react-input-range';
import { BsCheckLg } from "react-icons/bs";
import "react-input-range/lib/css/index.css"

export default function CategoryForBrand() {
  
    const [state, setState] = useState({
        brandShow: true,
        checkBrand: false,
        checkedPrize: true,
    });
    
    const [value, SetValue] = useState({ min: 20, max: 150 })

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
            {id:1, action: false, name: 'Undes 10$'},
            {id:2, action: false, name: 'Undes 50$'},
            {id:3, action: false, name: 'Undes 100$'},
            {id:4, action: false, name: 'Above 100$'},
        ]
    });
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

    // console.log(state?.brandShow);
    return (
        <div className="w-full h-hull border border-green-500 rounded-lg px-5 py-[30px]">
        <div className="w-full border border-red-500 flex flex-wrap gap-x-[4px] gap-y-[8px]">
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
                onClick={(event)=>{event.target.classList.toggle('open')}}
            >
            <div
                onClick={() => setState({ ...state, brandShow: !state.brandShow })}
                className="flex items-center cursor-pointer select-none"
            >
                <span className="not-italic mr-1 font-AeonikProMedium text-lg leading-4 text-black" >
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
                <div className="h-[300px] w-full border border-blue-600 my-5 overflow-auto scrollbar dark:scrollbar categoryScroll">
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
        <div className="w-full flex justify-between items-center mb-[30px] border border-red-500">
            <div onClick={() => setState({ ...state, checkedPrize: !state.checkedPrize })} className="flex items-center cursor-pointer select-none">
                <span className="not-italic mr-1 font-AeonikProMedium text-lg leading-4 text-black">
                    Budget
                </span>
                <img src={DownCate} className={`${state?.checkedPrize ? "rotate-[180deg]" : ""
                } duration-300`} alt="" />
            </div>
        </div>    
        <div className="w-full border border-red-500 flex flex-wrap gap-x-1 gap-y-2">
            {product.prizes.map( item => (
                <button key={item.id} className="h-11 w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white transition ease-linear duration-200 rounded-lg">
                    {item.name}
                </button>
            ))}
        </div>
        <div className="w-full bg-bgCategory mt-4 h-12 rounded-lg">
            <InputRange
                formatLabel={value => `${value}$`}
                minValue={0} maxValue={200}
                value={value}
                onChange={value => SetValue( value )} 
            />
        </div>

        {/* Brands filter */}
        <div className="w-full h-fit mt-[40px]">
            
            {/* Controls */}
            <div className="openBrands w-full flex justify-between items-center" 
                onClick={(event)=>{event.target.classList.toggle('open')}}
            >
            <div
                onClick={() => setState({ ...state, brandShow: !state.brandShow })}
                className="flex items-center cursor-pointer select-none"
            >
                <span className="not-italic mr-1 font-AeonikProMedium text-lg leading-4 text-black" >
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
                <div className="h-[300px] w-full border border-blue-600 my-5 overflow-auto scrollbar dark:scrollbar categoryScroll">
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

        </div>
    );
}
