import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Banner() {

    return (

        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={1}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4500,
                disableOnInteraction: true,
            }}
            className='h-[80vh] w-full my-swipper'
        >
            <SwiperSlide className="bg-[url('https://i.pinimg.com/originals/4d/16/54/4d1654928883f268e114dd2e109b3949.png')] bg-cover">
                <div className='w-full h-full flex flex-col items-center bg-black/30'>
                    <h1 className='font-semibold text-5xl text-white mt-[30vh]'>GROCERIES DELIVERY</h1>
                    <p className='text-xl text-white font-light max-w-[480px] text-center mt-6'>We know how large objects will act, but things on a small scale just do not act that way.</p>
                    <a href='#' className='font-semibold text-white text-xl rounded bg-primary mt-6 px-10 py-4 hover:scale-105 transition duration-300'>Start Now</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('https://i.pinimg.com/originals/93/9a/a8/939aa8dd14409500aefd4d77f446175a.png')] bg-cover">
                <div className='w-full h-full flex flex-col items-center bg-black/30'>
                    <h1 className='font-semibold text-5xl text-white mt-[30vh]'>SUSHI DELIVERY</h1>
                    <p className='text-xl text-white font-light max-w-[480px] text-center mt-6'>We know how large objects will act, but things on a small scale just do not act that way.</p>
                    <a href='#' className='font-semibold text-white text-xl rounded bg-primary mt-6 px-10 py-4 hover:scale-105 transition duration-300'>Start Now</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('https://i.pinimg.com/originals/57/b4/3a/57b43a989fc5f32349c7e7b1cd604bea.png')] bg-cover">
                <div className='w-full h-full flex flex-col items-center bg-black/30'>
                    <h1 className='font-semibold text-5xl text-white mt-[30vh]'>SANDWISH DELIVERY</h1>
                    <p className='text-xl text-white font-light max-w-[480px] text-center mt-6'>We know how large objects will act, but things on a small scale just do not act that way.</p>
                    <a href='#' className='font-semibold text-white text-xl rounded bg-primary mt-6 px-10 py-4 hover:scale-105 transition duration-300'>Start Now</a>
                </div>
            </SwiperSlide>

        </Swiper>
    )
}
