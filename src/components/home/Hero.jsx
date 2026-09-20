import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { Link } from 'react-router'

const carousel = [
    "/images/carousel/image1.png",
    "/images/carousel/image2.avif",
    "/images/carousel/image3.avif",
    "/images/carousel/image4.avif",
    "/images/carousel/image5.avif",
    "/images/carousel/image6.avif",
    "/images/carousel/image7.png",
    "/images/carousel/image8.png",
    "/images/carousel/image9.png",
    "/images/carousel/image10.png",
    "/images/carousel/image11.png",
    "/images/carousel/image12.png",
    "/images/carousel/image13.png",
    "/images/carousel/image14.png",
    "/images/carousel/image15.png",
]

const Hero = () => {
    return (
        <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper">
            {
                carousel.map((item, index) => <SwiperSlide>
                    <div className='relative'>
                        <img className="w-full h-[300px] sm:h-[400px] lg:h-full md:object-cover pt-5 md:pt-10 pb-10 lg:pb-15"
                            src={item} alt="image" />

                            <Link to='/offers/croissant' className='absolute top-1/2 left-1/2 hover:bg-white duration-300 border uppercase text-[13px] lg:text-[16px] px-3 lg:py-0.5 lg:px-8 rounded-2xl bg-[#cfeb0b]'>ətraflı</Link>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    )
}

export default Hero