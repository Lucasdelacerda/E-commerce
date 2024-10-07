
export default function Footer() {
    return (
        <section className='flex flex-col font-semibold text-xs w-screen py-10 px-[13.54%] bg-darkBackgroundColor text-white '>
            <div className='flex w-[100%] justify-between'>
                <h2 className='flex flex-col gap-1 text-xl'>
                    Consulting Agency For Your Business
                    <span className='text-white/80 font-thin text-sm '>the quick fox jumps over the lazy dog</span>
                </h2>
                <button className='px-10 py-4 rounded text-sm bg-primary hover:bg-primary/85 font-semibold'>
                    Contact Us
                </button>
            </div>
            <ul className='grid grid-cols-5 justify-center items-center mt-[50px]'>
                <li className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-base">Company Info</h3>
                    <a className="mt-2.5 text-sm font-semibold hover:underline" href=" #">About Us</a>
                    <a className=" hover:underline" href="#">Carrier</a>
                    <a className=" hover:underline" href="#">We are hiring</a>
                    <a className=" hover:underline" href="#">Blog</a>
                </li>
                <li className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-base">Legal</h3>
                    <a className="mt-2.5 text-sm font-semibold hover:underline" href="#">About Us</a>
                    <a className=" hover:underline" href="#">Carrier</a>
                    <a className=" hover:underline" href="#">We are hiring</a>
                    <a className=" hover:underline" href="#">Blog</a>
                </li>
                <li className="flex flex-col gap-2.5 inline-block w-auto">
                    <h3 className="font-bold text-base">Features</h3>
                    <a className="mt-2.5 text-sm font-semibold hover:underline" href="#">Business Marketing</a>
                    <a className="  hover:underline" href="#">User Analityc</a>
                    <a className=" hover:underline" href="#">Live Chat</a>
                    <a className=" hover:underline" href="#">Unlimited Suport</a>
                </li>
                <li className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-base">Resources</h3>
                    <a className="mt-2.5 text-sm font-semibold hover:underline" href="#">IOS & Android</a>
                    <a className=" hover:underline" href="#">Whatch a Demo</a>
                    <a className=" hover:underline" href="#">Customers</a>
                    <a className=" hover:underline" href="#">API</a>
                </li>
                <li className="flex flex-col gap-2.5 ">
                    <h3 className="font-bold text-base">Get In Touch</h3>
                    <a className="mt-2.5  flex items-center gap-1 hover:underline" href="#"><img src='/icons/telephoneIcon.svg' /> (480) 555-0103</a>
                    <a className=" flex gap-1 items-center hover:underline" href="#"><img src="/icons/localizationIcon.svg" /> 4517 Washington</a>
                    <a className=" flex gap-1 items-center hover:underline" href="#"><img src="/icons/mailIcon.svg" /> lacerdalucas270@gmail.com</a>
                </li>
            </ul>
            <div className='flex items-center justify-between mt-[40px] pr-10'>
                <h2 className="">Made With Love By Finland All Right Reserved </h2>
                <div className="flex gap-5 items-center">
                    <a href="#">
                        <img src="/icons/facebookIcon.svg" />
                    </a>
                    <a href="#">
                        <img src="/icons/instagramIcon.svg" />
                    </a>
                    <a href="#">
                        <img src="/icons/twitterIcon.svg" />
                    </a>
                </div>
            </div>
        </section>
    )
}