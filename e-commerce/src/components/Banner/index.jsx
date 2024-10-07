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
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4500,
                disableOnInteraction: true,
            }}
            className='h-[80vh] w-full'
        >
            <SwiperSlide className="bg-[url('https://i.pinimg.com/originals/3b/78/7b/3b787beb8b596f242cd76ae861e1beab.png')] bg-cover">
                <div className='w-full h-full flex flex-col items-center bg-black/30'>
                    <h1 className='font-semibold text-5xl text-white mt-[30vh]'>GROCERIES DELIVERY</h1>
                    <p className='text-xl text-white font-light max-w-[480px] text-center mt-6'>We know how large objects will act, but things on a small scale just do not act that way.</p>
                    <a href='#' className='font-semibold text-white text-xl rounded bg-primary mt-6 px-10 py-4 hover:bg-primary/90'>Start Now</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('https://i.pinimg.com/originals/98/9a/5d/989a5d83cfa1a77d41baa77d63536529.png')] bg-cover">
                <div className='w-full h-full flex flex-col items-center bg-black/30'>
                    <h1 className='font-semibold text-5xl text-white mt-[30vh]'>SUSHI DELIVERY</h1>
                    <p className='text-xl text-white font-light max-w-[480px] text-center mt-6'>We know how large objects will act, but things on a small scale just do not act that way.</p>
                    <a href='#' className='font-semibold text-white text-xl rounded bg-primary mt-6 px-10 py-4 hover:bg-primary/90'>Start Now</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('https://i.pinimg.com/originals/58/a3/a4/58a3a4d6a0a7798e44666c80af0d9b21.png')] bg-cover">
                <div className='w-full h-full flex flex-col items-center bg-black/30'>
                    <h1 className='font-semibold text-5xl text-white mt-[30vh]'>SANDWISH DELIVERY</h1>
                    <p className='text-xl text-white font-light max-w-[480px] text-center mt-6'>We know how large objects will act, but things on a small scale just do not act that way.</p>
                    <a href='#' className='font-semibold text-white text-xl rounded bg-primary mt-6 px-10 py-4 hover:bg-primary/90'>Start Now</a>
                </div>
            </SwiperSlide>
            <div ref={navigationPrevRef} />
            <div ref={navigationNextRef} />
        </Swiper>
    )
}
