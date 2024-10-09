

export default function Produts() {
    return (
        <section className="flex flex-col w-[70vw] h-[90vh] border-2 border-black">
            <div className="flex p-5 border-b-[2px] border-[#ECECEC] justify-between  w-auto items-center">
                <h5 className="text-lg font-semibold ">BESTSELLER PRODUCTS</h5>
                <h6 className=" font-normal text-sm text-secondaryTextColor cursor-pointer">MEAT</h6>
                <h6 className="font-normal text-sm text-secondaryTextColor cursor-pointer">FAST FOOD</h6>
                <h6 className="font-normal text-sm text-secondaryTextColor cursor-pointer">FRUITS</h6>
                <div className="flex gap-3">
                    <button className="rounded-full p-2  border-[1px] border-secondaryTextColor"><img src="./icons/left_arrow.svg" alt="Left arrow" /></button>
                    <button className="rounded-full p-2 border-[1px] border-secondaryTextColor"><img src="./icons/right_arrow.svg" alt="Right arrow" /></button>
                </div>
                <div className='flex flex-row '></div>
                <div className=''>
                    
                </div>
            </div>
        </section>
    )
}