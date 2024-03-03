import Slider from "react-slick";
import {useRef, useState} from "react"


const img = [
    {
        image: "/images/journey1.png"
    },
    {
        image: "/images/journey2.png"
    },
    {
        image: "/images/journey3.png"
    },
    {
        image: "/images/journey4.png"
    },
    {
        image: "/images/journey5.png"
    },
]





const Recommended = () => {

    const [imageIndex, setImageIndex] = useState(0);

    const imgArr = img.map((imgx, i) => (
        <>
        <div key={i} className={i === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={imgx.image} alt="...." key={i}/>
        </div>
        </>
    ));


    var settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        // centerPadding: 0,
        beforeChange: (current:number, next:number) => setImageIndex(next),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            }
          ]
    }

    const arrowRef = useRef<Slider>(null);

    const incrementAndDecrement = (btn: string) => {
        if (btn === "increment") {
            arrowRef.current?.slickNext()
        } else {
            arrowRef.current?.slickPrev()
        }
      }

    return (
        <div className="mx-auto container max-w-6xl p-4">
             <div className="grid place-content-center">
                    <h1 className="manrope-bold text-center text-customMainColor mt-5 md:text-[50px] font-[30px]">Recommended Books</h1>
                    <p className="manrope-semibold text-center font-[14px] md:font-[20px] text-customMainSecondaryColor lg:px-48">A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference</p>
             </div>

             <div className="d_container mt-[5rem]">
                <Slider ref={arrowRef} {...settings}>
                        {imgArr}
                </Slider>

                <div>
                <button onClick={() => incrementAndDecrement("decrement")}>
                <img src="/images/G200.png" alt="..." />
            </button>
            <button onClick={() => incrementAndDecrement("increment")}>
                <img src="/images/G201.png" alt="..." />
            </button>
                </div>
             </div>
        </div>
    );
}

export default Recommended;