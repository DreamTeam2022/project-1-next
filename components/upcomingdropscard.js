import { Swiper, SwiperSlide } from 'swiper/react';
import react, {useState, useEffect} from 'react';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';



import React from 'react'

export default function upcomingdropscard({data}) {
    return (
        <div className='py-6 px-4'>
            <Swiper
          
          spaceBetween={10}
          slidesPerView={3}
          pagination= {false}
          showsPagination={false}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        > 
          {data.map((item,index) => {
                 return (   
                    <SwiperSlide  key={index} >                               

                    <div className=''>
                                                            
                            <div className='w-full bg-zinc-800 rounded-2xl'>
                                    <img src={item.image_url} alt='femae' className='rounded-t-xl w-full h-[320px] ' />
                                    <div className='p-3 border-b-[1px] border-gray-900'>
                                    <p className='text-gray-500'></p>
                                    <h1 className='text-gray-200 text-lg'>
                                        Pig Gang
                                    </h1>
                                    <p className='text-gray-500'> Mint size : 5498465</p>
                                 </div>
                                            <div className='p-3 mb-3 text-gray-500'>
                                                 <div className='flex justify-between pb-3'>
                                                        <p>1514564</p>
                                                             <p> -552144%</p>
                                                                    </div>
                                                                    <button className='text-center bg-black w-full py-2 rounded-xl text-white'>
                                                                            Add to Callendar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                        </SwiperSlide>
                         )
                })}  
        </Swiper>
        </div>
      );
}
