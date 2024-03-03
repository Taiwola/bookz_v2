type Props = {
    image: string,
    title: string,
    rating: string,
    tags?: string[],
    description: string,
    price: string,
    prevPrice: string,
    star: string
}

const Card = ({...props}: Props) => {
    return (
        <div className="flex flex-col bg-white">
            <div>
                <img src={props.image} alt={props.description} className="object-cover w-full" />
            </div>
            <div className="bg-white border border-solid border-gray-300 rounded-b-2xl p-4">
                <div className="grid gap-4">
                    <div className="flex justify-between">
                        <h1 className="manrope-bold text-[22px] text-customMainColor">{props.title}</h1>
                        <p className="inline-flex justify-center items-center gap-2">
                            <img src={props.star} alt="..." /> <span className="text-[20px] font-[500] text-customMainColor">{props.rating}</span>
                        </p>
                    </div>
                    {props.tags ? <div className="flex gap-[6px] flex-wrap">
                        {props.tags?.map((tag,i) => (
                            <span key={i} className="bg-customSecondaryColor text-customMainSecondaryColor manrope-semibold text-[12px] px-[10px] py-[3px] border-none rounded-[5px]">{tag}&nbsp;</span>
                        ))}
                    </div> : null}
                    <div>
                        <p className="manrope-semibold text-[14px] text-customMainSecondaryColor">{props.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="bg-customPrimaryColor hover:bg-blue-700 transition duration-300 md:text-[18px] px-[12px] py-[6px] text-white font-medium text-[14px] rounded-[8px]">
                            <a href="#">Buy now</a>
                        </button>
                        <div className="flex gap-2 justify-center">
                            <p className="font-medium md:text-[25px] text-[21px] text-customMainColor">N{props.price}</p>
                            <p className="text-customMainThird md:text-xl line-through">N{props.prevPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default Card;