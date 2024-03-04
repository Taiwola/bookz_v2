const AboutCard2 = () => {
    return (
       <div className="mx-auto container max-w-6xl p-4">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-5">
            <div className="grid grid-cols-1 gap-3">
                <div className="flex flex-col gap-1">
                    <h1 className="manrope-bold text-customMainColor md:text-[50px] text-[30px] text-center md:text-left">Committed to Give You the Best Service</h1>
                    <p className="manrope-semibold md:text-[20px] text-customMainSecondaryColor text-[14px] text-center md:text-left">We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col justify-start  md:w-[188px] md:h-[94px]  w-[120px] h-[82px]">
                            <h2 className="inline-flex font-semibold md:text-[55px] text-[35px] text-customMainColor items-center ">12000<span className="md:text-[40px]"><img src="/images/plus.png" alt="" /></span></h2>
                            <div className="mx-auto">
                            <p className=" font-normal text-customMainSecondaryColor md:text-[18px]">Book Authors</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start  md:w-[188px] md:h-[94px]  w-[120px] h-[82px]">
                            <h2 className="inline-flex font-semibold md:text-[55px] text-[35px] text-customMainColor items-center ">20000<span className="md:text-[40px]"><img src="/images/plus.png" alt="" /></span></h2>
                            <p className="text-center font-normal text-customMainSecondaryColor md:text-[18px]">Book Readers</p>
                        </div>
                        <div className="flex flex-col justify-start   md:w-[188px] md:h-[94px]  w-[120px] h-[82px]">
                            <h2 className="inline-flex font-semibold md:text-[55px] text-[35px] text-customMainColor items-center ">35000<span className="md:text-[40px]"><img src="/images/plus.png" alt="" /></span></h2>
                            <p className="text-center font-normal text-customMainSecondaryColor md:text-[18px]">Books Sold</p>
                        </div>
                        <div className="flex flex-col justify-start  md:w-[188px] md:h-[94px]  w-[120px] h-[82px]">
                            <h2 className="inline-flex font-semibold md:text-[55px] text-[35px] text-customMainColor items-center ">14000<span className="md:text-[40px]"><img src="/images/plus.png" alt="" /></span></h2>
                            <p className="text-center font-normal text-customMainSecondaryColor md:text-[18px]">Book Sharers</p>
                        </div>
                </div>
                <div className="mt-10">
                    <button className="bg-customPrimaryColor md:block hidden transition duration-300 hover:bg-blue-700 mx-auto lg:mx-0 w-[197px] px-[7px] py-[10px] rounded-md text-white">
                                <a href="/get_started">Get Started</a>
                            </button>
                </div>
            </div>
            <div className="md:my-auto md:mx-auto md:w-[400px] md:h-[350px]">
                <img src="/images/about-img3.png" alt="..." className="shadow-[4px_4px_10px_1px_#00000040]
 w-full h-full object-cover rounded-[25px]" />
            </div>
        </div>
       </div>
    )
}

export default AboutCard2;