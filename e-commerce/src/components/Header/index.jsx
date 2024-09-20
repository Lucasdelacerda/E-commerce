
import { useState } from 'react';

export default function Header() {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className='fixed bg-white w-screen flex justify-around items-center border py-[30px]'>
            <h2 className='font-bold text-2xl'>Bandage</h2>
            <ul className='flex gap-4 text-sm text-secondaryTextColor font-semibold'>
                <li><a className='hover:underline' href='#'>Home</a></li>
                <li id='shop' className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <a className="flex items-center gap-1 font-normal text-black" href='#'>
                        Shop
                        <img src="/arrowIcon.svg" />

                    </a>
                    <div className={`transition-opacity duration-500 absolute top-7 left-[-80%]  z-10 flex flex-col items-center gap-2 py-6 px-5 rounded bg-darkBackgroundColor  text-white text-sm font-normal ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={{ visibility: isHovered ? 'visible' : 'hidden' }}>
                        <a className="hover:underline" href='#'>Men</a>
                        <a className="hover:underline" href='#'>Women</a>
                        <a className="hover:underline" href='#'>Kids</a>
                        <a className="hover:underline" href='#'>Accessories</a>
                    </div>
                </li>
                <li><a className='hover:underline' href='#'>About</a></li>
                <li><a className='hover:underline' href='#'>Blog</a></li>
                <li><a className='hover:underline' href='#'>Contact</a></li>
                <li><a className='hover:underline' href='#'>Pages</a></li>
            </ul>
            <div className='flex gap-5 items-center'>
                <a href='#' className='flex gap-1 text-base font-semibold text-primary'>
                    <img src='/loginIcon.svg' className='' />
                    Login/Register</a>
                <a href='#' className='flex gap-1'>
                    < img src='/searchIcon.svg' className='' />
                    <h3 className='font-normal text-primary'></h3>
                </a>
                <a href='#' className='flex gap-1'>
                    <img className='' src='/chartIcon.svg' />
                    <h3 className='font-normal text-primary'></h3>
                </a>
                <a href='#' className='flex gap-1'>
                    <img className='' src='/heartIcon.svg' />
                    <h3 className='font-normal text-primary'></h3>
                </a>

            </div>
        </section>
    )
}