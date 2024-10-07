import 'animate.css'

export default function ShopMenu({ show }) {
    return (
        <section className={` animate__animated  absolute top-[100%] left-0  z-10 flex flex-col items-center bg-primary min-w-[130px]  text-white text-sm font-normal ${show ? "block" : "hidden"}`}>

            <a className="hover:bg-secondaryTextColor w-full py-3 text-center" href='#'>Best Sellers</a> 
            <a className="hover:bg-secondaryTextColor w-full py-3 text-center" href='#'>Most Popular</a>
        </section>
    )
}