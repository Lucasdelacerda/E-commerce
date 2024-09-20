
export default function Footer() {
    return (
        <section className='flex flex-col w-screen py-10 px-[13.54%] bg-darkBackgroundColor text-white '>
            <div className='flex w-[100%] justify-between'>
                <h2 className='flex flex-col gap-1 text-xl'>
                    Consulting Agency For Your Business
                    <span className='text-white/80 font-thin text-sm '>the quick fox jumps over the lazy dog</span>
                </h2>
                <button className='px-10 py-4 rounded text-sm bg-primary hover:bg-primary/85 font-semibold'>
                    Contact Us
                </button>
            </div>
            <ul className='grid grid-cols-5 justify-center items-center mt-[90px]'>
                <li className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-base">Company Info</h3>
                    <a className="mt-2.5 text-sm font-semibold hover:underline" href=" #">About Us</a>
                    <a className="text-sm font-semibold hover:underline" href="#">Carrier</a>
                    <a className="text-sm font-semibold hover:underline" href="#">We are hiring</a>
                    <a className="text-sm font-semibold hover:underline" href="#">Blog</a>
                </li>
                <li className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-base">Legal</h3>
                    <a className="mt-2.5 text-sm font-semibold hover:underline" href="#">About Us</a>
                    <a className="text-sm font-semibold hover:underline" href="#">Carrier</a>
                    <a className="text-sm font-semibold hover:underline" href="#">We are hiring</a>
                    <a className="text-sm font-semibold hover:underline" href="#">Blog</a>
                </li>
                <li className="flex flex-col gap-2.5 inline-block w-auto">
                    <h3 className="font-bold text-base">Features</h3>
                    <a className="mt-2.5 text-sm font-semibold hover:underline" href="#">Business Marketing</a>
                    <a className="text-sm font-semibold  hover:underline" href="#">User Analityc</a>
                    <a className="text-sm font-semibold hover:underline" href="#">Live Chat</a>
                    <a className="text-sm font-semibold hover:underline" href="#">Unlimited Suport</a>
                </li>
                <li className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-base">Resources</h3>
                    <a className="mt-2.5 text-sm font-semibold hover:underline" href="#">IOS & Android</a>
                    <a className="text-sm font-semibold hover:underline" href="#">Whatch a Demo</a>
                    <a className="text-sm font-semibold hover:underline" href="#">Customers</a>
                    <a className="text-sm font-semibold hover:underline" href="#">API</a>
                </li>
                <li className="flex flex-col gap-2.5 ">
                    <h3 className="font-bold text-base">Get In Touch</h3>
                    <a className="mt-2.5 text-sm font-semibold flex items-center gap-1 hover:underline" href="#"><img src='/telephoneIcon.svg' /> (480) 555-0103</a>
                    <a className="text-sm font-semibold flex gap-1 items-center hover:underline" href="#"><img src="localizationIcon.svg" /> 4517 Washington</a>
                    <a className="text-sm font-semibold flex gap-1 items-center hover:underline" href="#"><img src="mailIcon.svg" /> lacerdalucas270@gmail.com</a>
                </li>
            </ul>
            <div className='flex items-center justify-between mt-[77px] pr-10'>
                <h2 className="font-semibold text-sm">Made With Love By Finland All Right Reserved </h2>
                <div className="flex gap-5 items-center">
                    <a href="#">
                        <img src="/facebookIcon.svg" />
                    </a>
                    <a href="#">
                        <img src="/instagramIcon.svg" />
                    </a>
                    <a href="#">
                        <img src="/twitterIcon.svg" />
                    </a>
                </div>
            </div>
        </section>
    )
}