const Newsletter = () => {
    return (

        <div className="newletter">
            <div className="md:py-[119px] md:px-[116px] py-[10px] px-[60px] gap-2 md:gap-0 grid grid-cols-1 md:grid-cols-3 place-content-center">
                <div className="md:col-span-2">
                    <h1 className="manrope-bold text-white text-[16px] text-center md:text-[37px]">Subscribe to our Newsletter for the latest books and updates</h1>
                </div>
                <div className="flex justify-center items-center">
                <label className="relative flex">
                    <input 
        type="text" 
        placeholder="Enter Your Email" 
        className="rounded-[9px] border border-[#ccc] placeholder-[#FAF8F8] placeholder:font-[600] placeholder:text-[12px] w-full outline-none box-border text-[#FAF8F8] bg-transparent py-[7px] md:py-[15px] px-12"
    />
    <button className="absolute right-0 top-0 bottom-0 px-4 hover:bg-blue-700 transition duration-300 rounded-[9px] bg-blue-500 text-white">Subscribe</button>
</label>

                </div>
            </div>
        </div>

    )
};

export default Newsletter