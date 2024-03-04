const Footer = () => {
    return (
        <div className="mx-auto container max-w-6xl pt-[98px] pb-14 px-4 md:py-32 rounded-[12px] grid md:grid-cols-3 place-content-center gap-3 md:gap-10">
        <div className="flex flex-col justify-center items-start">
        <a href="/" className="">
              <img src="/images/Group 205.png" alt="Logo" />
            </a>
            <p className="manrope-semibold md:text-[16px] text-[#827F7F] text-[12px]">
                A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes
            </p>
        </div>

        <div className="flex flex-col justify-end items-start gap-2">
            <h2 className="manrope-bold text-[#011B31] text-[18px] md:text-[24px] md:text-customMainColor">Get in Touch Us</h2>
            <address className="flex">
                <img src="/images/location.png" alt="location" />
                <p className="manrope-semibold text-customMainSecondaryColor text-[12px] md:text-[16px]">1 Ogunlesi Street, Onipanu, Lagos</p>
            </address>
            <p className="flex">
                <span><img src="/images/call.png" alt="location" /></span>
                <span className="manrope-semibold text-customMainSecondaryColor text-[12px] md:text-[16px]">
                    +234 814 6745 450
                </span>
            </p>

            <p className="flex">
                <span><img src="/images/sms.png" alt="location" /></span>
                <span className="manrope-semibold text-customMainSecondaryColor text-[12px] md:text-[16px]">
                    support@bookers.com
                </span>
            </p>
        </div>

        <div className="flex flex-col justify-end items-start">
            <img src="/images/mapss.png" alt="map" />
        </div>
    </div>
    )
}

export default Footer;