
type Props = {
    image: string,
    description: string,
    name: string,
    proffession: string,
    star: string,
    rating: string,
}

const Card2 = ({...props}: Props) => {
    return (
        <div className="static bg-black overflow-visible">
        <div className="bg-customSecondaryColor2 relative overflow-visible px-[30px] py-[40px] grid grid-cols-1 gap-5">
            <div className="z-50 overflow-visible w-[74px] h-[74px]">
                <img src={props.image} alt="..." className="w-full h-full object-cover overflow-hidden" />
            </div>
            <p className="manrope-semibold text-customMainSecondaryColor md:text-[16px] text-[14px]">{props.description}</p>
            <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center items-start">
                    <p className="manrope-semibold md:manrope-bold md:text-[20px] text-customMainColor">{props.name}</p>
                    <p className="manrope-semibold md:text-[16px] text-customMainSecondaryColor text-[14px]">{props.proffession}</p>
                </div>
                <div className="flex justify-center items-center">
                    <img src={props.star} alt="Star"  className=""/>
                    <p className="font-normal manrope-semibold md:manrope-bold md:text-[18px] text-customMainColor text-[16px]">{props.rating}</p>
                </div>
            </div>
        </div>
    </div>
    
    )
};

export default Card2;