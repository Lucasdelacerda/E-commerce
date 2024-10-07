import { useState, useEffect } from 'react';
import ShopMenu from '../ShopMenu';

export default function Header() {

    const [show, setShow] = useState(false);

    return (
        <section className='fixed top-0 bg-white w-screen flex justify-around items-center h-[8vh] z-20'>
            <h2 className='font-bold text-2xl'>Bandage</h2>
            <div className='flex text-sm text-secondaryTextColor font-semibold h-full items-center'>
                <a className='h-full flex items-center px-4 hover:text-white  hover:bg-primary' href='#'>Home</a>
                <div id='shop' className="flex relative px-4  hover:bg-primary h-full" onClick={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                    <a className={`flex items-center gap-1 font-normal text-black w-full h-full  ${show ? "text-white" : "text-black"}`} href='#' >
                        Shop
                        <img src="/icons/arrowIcon.svg" />
                    </a>
                    <ShopMenu show={show} />
                </div>
                <a className='h-full flex items-center px-4 hover:text-white  hover:bg-primary' href='#'>About</a>
                <a className='h-full flex items-center px-4 hover:text-white  hover:bg-primary' href='#'>Blog</a>
                <a className='h-full flex items-center px-4 hover:text-white  hover:bg-primary' href='#'>Contact</a>
                <a className='h-full flex items-center px-4 hover:text-white  hover:bg-primary' href='#'>Pages</a>
            </div>
            <div className='flex gap-5 items-center'>
                <a href='#' className='flex gap-1 text-base font-semibold text-primary'>
                    <img src='/icons/loginIcon.svg' className='' />
                    Login/Register</a>
                <a href='#' className='flex gap-1'>
                    < img src='/icons/searchIcon.svg' className='' />
                    <h3 className='font-normal text-primary'></h3>
                </a>
                <a href='#' className='flex gap-1'>
                    <img className='' src='/icons/chartIcon.svg' />
                    <h3 className='font-normal text-primary'></h3>
                </a>
                <a href='#' className='flex gap-1'>
                    <img className='' src='/icons/heartIcon.svg' />
                    <h3 className='font-normal text-primary'></h3>
                </a>

            </div>
        </section>
    )
}