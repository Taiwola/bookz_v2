type Props = {
    title: string,
    image: string,
    proffession: string,
    social_media: string[]
}


const AboutCard = ({...props}: Props) => {
    return (
        <div className="flex flex-col bg-customSecondaryColor md:p-10 p-5 justify-end items-center md:gap-5 gap-3">
            <div>
                <img src={props.image} alt="" />
            </div>
            <div>
                <h2 className="manrope-bold font-semibold md:text-[24px] text-customMainColor text-[14px]">{props.title}</h2>
            </div>
            <div>
                <p className="font-medium manrope-semibold text-[#8D8D8D] text-nowrap md:text-[18px] text-[10px]">{props.proffession}</p>
            </div>
            <div className="flex gap-3 justify-center items-center">
                {props.social_media.map((media) => (
                    <div className="md:w-[16px] md:h-[14px] w-[11.59px] h-[10.14px]">
                        <a href="/"><img src={media} alt="..." className="text-customMainColor w-full h-full object-contain" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default AboutCard;