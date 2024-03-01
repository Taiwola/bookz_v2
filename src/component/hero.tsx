const Hero = () => {
    return (
        <div className="mx-auto container max-w-6xl p-4">
            <div className="grid">
                <div className="grid gap-24 grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col lg:text-left text-center gap-3 justify-start">
                            <h1 className="manrope-bold text-[32px] text-customMainColor md:text-[62px]">
                            Encounter a Wealth of Books and Inspiration
                            </h1>
                            <p className="manrope-semibold text-[13px] text-customMainColor md:text-[20px]">We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!</p>
                            <button className="bg-customPrimaryColor transition duration-300 hover:bg-blue-700 mx-auto lg:mx-0 w-[197px] px-[7px] py-[10px] rounded-md text-white">
                                Buy now
                            </button>
                        </div>
                        <div className="relative w-full md:w-fit">
                            <div className="w-[304px] mx-auto md:w-[565px]">
                                <img src="/images/book_reading.png" alt="..."  className="w-full object-cover"/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Hero;