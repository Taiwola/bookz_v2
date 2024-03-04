type Props = {
    title: string,
    description: string
}

const BestSeller = ({...props}: Props) => {
    return (
        <div className="mt-10 mb-10 max-w-6xl px-4 container mx-auto">
            <div className="gap-4 flex flex-col justify-center items-center text-center md:px-[150px]">
                <h1 className="manrope-bold text-[30px] text-customMainColor md:text-[50px]">{props.title}</h1>
                <p className="manrope-semibold text-[14px] text-center text-customMainColor md:text-[20px]">{props.description}</p>
            </div>
        </div>
    )
}


export default BestSeller;