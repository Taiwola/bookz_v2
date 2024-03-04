type Props = {
    title: string,
    imageUrl: string,
    button?: string,
    description: string
}

const Hero = ({...props}: Props) => {
    return (
        <div className="mx-auto container max-w-6xl p-4">
            <div className="grid">
                <div className="grid gap-24 grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col lg:text-left text-center gap-3 justify-start">
                            <h1 className="manrope-bold text-[32px] text-customMainColor md:text-[62px]">
                            {props.title}
                            </h1>
                            <p className="manrope-semibold text-[13px] text-customMainColor md:text-[20px]">{props.description}</p>
                           {props.button ? <button className="bg-customPrimaryColor transition duration-300 hover:bg-blue-700 mx-auto lg:mx-0 w-[197px] px-[7px] py-[10px] rounded-md text-white">
                                {props.button}
                            </button> : null}
                        </div>
                        <div className="relative w-full md:w-fit">
                            <div className="w-[304px] mx-auto md:w-[565px]">
                                <img src={props.imageUrl} alt="..."  className="w-full object-cover"/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Hero;