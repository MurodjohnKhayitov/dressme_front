import React from 'react'

export default function SkeletonHome() {
    const CarosuelOne = [
        { id: 1, name: "carosuel" },
        { id: 2, name: "carosuel" },
        { id: 3, name: "carosuel" },
        { id: 4, name: "carosuel" },
        { id: 5, name: "carosuel" },
        { id: 6, name: "carosuel" },
    ]
    const CardFour = [
        { id: 1, name: "carosuel" },
        { id: 2, name: "carosuel" },
        { id: 3, name: "carosuel" },
        { id: 4, name: "carosuel" },

    ]
    const card = [
        { id: 1, name: "carosuel" },
        { id: 2, name: "carosuel" },
        { id: 3, name: "carosuel" },
        { id: 4, name: "carosuel" },
        { id: 5, name: "carosuel" },

    ]
    return (
        <div className='box-border flex flex-col justify-center  my-6'>
            <div className='w-full 	  h-fit'>
                {/* Carosuel One */}
                <div className='flex items-center justify-between '>
                    {
                        CarosuelOne?.map(data => {
                            return (
                                <div key={data?.id} className='w-[196px] h-[260px]'>
                                    <div className='h-[230px] w-[196px] bg-skeltonColor rounded-lg'>

                                    </div>
                                    <div className='h-4 w-[150px] bg-skeltonColor rounded flex items-center justify-start  mt-3'>

                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
                {/* Carosuel Two */}
                <div className='flex items-center justify-between  mt-[64px] '>
                    {
                        CarosuelOne?.map(data => {
                            return (
                                <div key={data?.id} className='w-[196px] h-[92px] rounded-lg'>
                                    <div className='h-[100%] w-[196px] bg-skeltonColor rounded-lg'>

                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
                {/* Carosuel Three */}
                <div className='flex items-center justify-between  mt-[64px] '>
                    {
                        CardFour?.map(data => {
                            return (
                                <div key={data?.id} className='w-[305px] h-[100px] flex flex-wrap content-between bg-btnBgColor rounded-lg px-4 py-5  border border-searchBgColor'>
                                    <div className='w-full'>
                                        <div className='w-[180px] h-4 bg-skeltonColor rounded'>

                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <div className='w-[250px] h-4 bg-skeltonColor rounded'>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* Carosuel four */}
                <div className='flex items-center justify-between   mt-[86px]'>
                    {
                        card?.map(data => {
                            return (
                                <div key={data?.id} className='h-[425px] w-[240px] flex flex-wrap overflow-hidden content-between   rounded-lg  '>
                                    <div className='h-[305px] w-full rounded-lg bg-skeltonColor'>

                                    </div>
                                    <div className='h-[120px] p-3 mt-1 w-full flex flex-wrap content-around'>
                                        <div className='w-full '>
                                            <div className='w-full h-4 bg-skeltonColor rounded'>

                                            </div>
                                            <div className='w-1/2 h-4 mt-2 bg-skeltonColor rounded'>

                                            </div>

                                        </div>
                                        <div className='w-full flex items-center justify-between'>
                                            <div className='w-[30%] h-4 bg-skeltonColor rounded'>
                                            </div>
                                            <div className='w-[30px] h-[30px] rounded-full bg-skeltonColor '>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </div>
    )
}
