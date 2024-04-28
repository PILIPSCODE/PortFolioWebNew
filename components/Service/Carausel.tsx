
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function Carausel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 18,
                    },
            
                    1241: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                    },
                }}
                modules={[Pagination,Navigation]}
                className="mySwiper bg-white   rounded-md lg:w-8/12 max-lg:w-11/12 "
            >
                <SwiperSlide>
                    <div className="card rounded-none  bg-base-100 shadow-xl ">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body text-sm">
                            <h2 className="card-title justify-between text-base">
                                <div className='gap-2 flex items-center'>
                                    Landing Page
                                </div>

                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center pt-1">
                                <div className="badge badge-outline">Next js</div>
                                <div className="badge badge-outline">Tailwind css</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card rounded-none  bg-base-100 shadow-xl ">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body text-sm">
                            <h2 className="card-title justify-between text-base">
                                <div className='gap-2 flex items-center'>
                                    Landing Page
                                </div>

                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center pt-1">
                                <div className="badge badge-outline">Next js</div>
                                <div className="badge badge-outline">Tailwind css</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card rounded-none  bg-base-100 shadow-xl ">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body text-sm">
                            <h2 className="card-title justify-between text-base">
                                <div className='gap-2 flex items-center'>
                                    Landing Page
                                </div>

                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center pt-1">
                                <div className="badge badge-outline">Next js</div>
                                <div className="badge badge-outline">Tailwind css</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card rounded-none  bg-base-100 shadow-xl ">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body text-sm">
                            <h2 className="card-title justify-between text-base">
                                <div className='gap-2 flex items-center'>
                                    Landing Page
                                </div>

                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center pt-1">
                                <div className="badge badge-outline">Next js</div>
                                <div className="badge badge-outline">Tailwind css</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
