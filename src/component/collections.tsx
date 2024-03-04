type Props = {
  image: string,
  title: string,
  description: string,
  buttonText: string  
}

const Collections = ({...props}: Props) => {
    return (
        <div className="mx-auto md:mt-16 mt-10 container max-w-6xl p-4">

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
                <img src={props.image} alt="..." className="object-cover" />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="manrope-bold text-center text-customMainColor text-[30px] md:text-[50px] md:text-left">{props.title}</h1>
                <p className="text-center md:text-left manrope-semibold text-[14px] text-customMainSecondaryColor">{props.description}</p>
                <button className="hidden md:block md:bg-customPrimaryColor md:w-fit md:px-[15px] md:py-[10px] rounded-[10px] text-white font-bold">{props.buttonText}</button>
            </div>
        </div>
 </div>
    )
}

export default Collections