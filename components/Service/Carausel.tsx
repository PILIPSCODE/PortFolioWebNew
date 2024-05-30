
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
                modules={[Pagination, Navigation]}
                className="mySwiper bg-white Service text-white  rounded-md lg:w-8/12 max-lg:w-11/12 "
            >
                <SwiperSlide>
                    <div className="card  bg-black shadow-xl ">
                        <div className="card-body text-sm">
                            <h2 className="card-title justify-between text-base">
                                <div className='gap-2 flex items-center'>
                                    Comming Soon
                                </div>

                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card  bg-black shadow-xl ">
                        <div className="card-body text-sm">
                            <h2 className="card-title justify-between text-base">
                                <div className='gap-2 flex items-center'>
                                    Comming Soon
                                </div>

                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card  bg-black shadow-xl ">
                        <div className="card-body text-sm">
                            <h2 className="card-title justify-between text-base">
                                <div className='gap-2 flex items-center'>
                                    Comming Soon
                                </div>

                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card  bg-black shadow-xl ">
                        <div className="card-body text-sm">
                            <h2 className="card-title justify-between text-base">
                                <div className='gap-2 flex items-center'>
                                    Comming Soon
                                </div>

                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
