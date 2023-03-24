import React, { useState } from 'react'
import { Radio } from 'antd';

export default function DataItem() {
    const [changeColor, setChangeColor] = useState([
        { id: 1, data: 1, action: false, colors: "bg-black" },
        { id: 2, data: 2, action: false, colors: "bg-white" },
        { id: 3, data: 3, action: false, colors: "bg-zinc-500" },
        { id: 4, data: 4, action: false, colors: "bg-purple-500" },
        { id: 5, data: 5, action: false, colors: "bg-sky-600" },
        { id: 6, data: 6, action: false, colors: "bg-amber-400 " },
        { id: 7, data: 7, action: false, colors: "bg-green-700 " },
        { id: 8, data: 8, action: false, colors: "bg-amber-600 " },
        { id: 9, data: 9, action: false, colors: "bg-red-700  " },
        { id: 10, data: 10, action: false, colors: "bg-purple-800 " },
        { id: 11, data: 11, action: false, colors: "bg-blue-900  " },
        { id: 12, data: 12, action: false, colors: "bg-yellow-900 " },
    ]);
    const [getRadio, setGetRadio] = useState('')
    console.log(getRadio, "getRadiogetRadio");
    return (
        <div className='h-[300px] border border-red-500'>
            <div className='px-3 w-[580px] duration-500 h-[100px]  flex items-center justify-between'>
                {changeColor?.map(data => {
                    return (
                        <div className='w-fit'>
                            <input
                                type="radio"
                                id={data?.id}
                                name="checkStatus"
                                value={data?.id}
                                onChange={(e) => setGetRadio(e.target.value)}
                                className={" hidden z-0 "}
                            />
                            <label
                                key={data?.id}
                                htmlFor={data?.id}
                                // onClick={() => handleGetChecked(data?.id)}
                                className={`rounded-full w-6 h-6 relative  ${data?.colors} z-50 cursor-pointer flex items-center justify-center   border-borderColorCard	`} >

                            </label>
                        </div>
                    )
                })
                }
            </div>
            <div>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio value="a">Hangzhou</Radio>

                </Radio.Group>
            </div>

        </div>
    )
}
