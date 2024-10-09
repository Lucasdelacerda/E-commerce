import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Products from '../../components/Products'


export default function HomePage() {
    return (
        <section className=''>
            <Header />
            <Container>
                <section className='mt-[8vh]'>
                    <Banner />
                    <div className='flex gap-11  justify-center items-center mt-20 '>
                        <a href='#' className='bg-white flex gap-5 border rounded-lg shadow-lg border-gray-200 p-4 pr-0 pb-0 max-w-[333px] max-h-[232px] relative hover:scale-105 transition duration-300'>
                            <div className='flex flex-col absolute z-30'>
                                <h3 className='font-light text-sm '>Your Space</h3>
                                <h2 className='font-bold text-xl mt-4'>Unique <br /> Life</h2>
                            </div>
                            <img className='w-[175px]' src='/images/h5-baner-3 1 (1).png ' alt='Product image' />

                        </a>
                        <a href='#' className='bg-white flex gap-5 border rounded-lg shadow-lg border-gray-200 p-4 pr-0 pb-0 max-w-[333px] max-h-[232px] relative hover:scale-105 transition duration-300'>
                            <div className='flex flex-col absolute z-30'>
                                <h3 className='font-light text-sm '>Your Space</h3>
                                <h2 className='font-bold text-xl mt-4'>Elements <br /> Style</h2>
                            </div>
                            <img className='w-[175px] ' src='/images/h5-baner-1 1 (1).png ' alt='Product image' />

                        </a>
                        <a href='#' className='bg-white flex gap-5 border rounded-lg shadow-lg border-gray-200 p-4 pr-0 pb-0 max-w-[333px] max-h-[232px] relative hover:scale-105 transition duration-300'>
                            <div className='flex flex-col absolute z-30'>
                                <h3 className='font-light text-sm '>Your Space</h3>
                                <h2 className='font-bold text-xl mt-4'>Elements <br /> Style</h2>
                            </div>
                            <img className='w-[175px] ' src='/images/h5-baner-1 1.png ' alt='Product image' />

                        </a>
                    </div>
                    <section className='flex gap-10 pt-5 mt-32 p-20'>
                        <div className='flex flex-col gap-1 p-12 w-[30%] h-[90vh] bg-[url("https://i.pinimg.com/originals/1a/94/d8/1a94d84e637746f6055449f167656fe1.png")] bg-cover'>
                            <h6 className='font-semibold text-black text-sm'>FURNITURE</h6>
                            <h4 className='font-light text-xs text-secondaryTextColor '> 5 Items</h4>
                        </div>
                        <Products />
                    </section>
                </section>
            </Container>
            <Footer />
        </section>
    )
}