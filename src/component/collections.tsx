const Collections = () => {
    return (
        <div className="mx-auto md:mt-16 mt-10 container max-w-6xl p-4">

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
                <img src="/images/books.png" alt="..." className="object-cover" />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="manrope-bold text-center text-customMainColor text-[30px] md:text-[50px] md:text-left">Find your next favorite read from our carefully curated book collection.</h1>
                <p className="text-center md:text-left manrope-semibold text-[14px] text-customMainSecondaryColor">We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!</p>
                <button className="hidden md:block md:bg-customPrimaryColor md:w-fit md:px-[15px] md:py-[10px] rounded-[10px] text-white font-bold">Buy Now</button>
            </div>
        </div>
 </div>
    )
}

export default Collections