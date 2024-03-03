import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import Card from "../component/card"

const Carousel2 = () => {

    const bookData = [
        {
            image: "/images/img1.png",
            title: "Crack the Code",
            rating: "4.3",

            description: `A must read book for anyone who is exploring philosophical ideas through a comelling and ...` ,
            price: "7,500",
            prevPrice: "8,600",
            star: "/images/star.png"
        },
        {
            image: "/images/img2.png",
            title: "Sunset kiss",
            rating: "4.6",
            tags: [
                "Biograpgh",
                "Racism",
                "Western"
            ],
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and ... ",
            price: "12,500",
            prevPrice: "8,600",
            star: "/images/star.png"
        },
        {
            image: "/images/img3.png",
            title: "Say you'll be mine",
            rating: "4.6",
            tags: [
                "Biograpgh",
                "Racism",
                "Western"
            ],
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and ... ",
            price: "9,000",
            prevPrice: "8,600",
            star: "/images/star.png"
        },
        {
            image: "/images/img2.png",
            title: "Say you'll be mine",
            rating: "4.6",
            tags: [
                "Biograpgh",
                "Racism",
                "Western"
            ],
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and ... ",
            price: "9,000",
            prevPrice: "8,600",
            star: "/images/star.png"
        },
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
      };

      const arrowRef = useRef<Slider>(null);

      const card = bookData.map((book,i) => (
       
            <Card 
        key={i}
        image={book.image}
        title={book.title}
        description={book.description}
        prevPrice={book.prevPrice}
        price={book.price}
        rating={book.rating}
        star={book.star}
        />
      ))

      const incrementAndDecrement = (btn: string) => {
        if (btn === "increment") {
            arrowRef.current?.slickNext()
        } else {
            arrowRef.current?.slickPrev()
        }
      }

      return (
        <>
        
        <div className="slick-container container md:w-[100%] md:overflow-hidden">
        <h1 className="manrope-bold mb-2 text-center  md:px-8 md:text-[50px] md:text-left text-customMainColor md:mb-7 container mx-auto text-[30px]">Special Offers</h1>
              <Slider ref={arrowRef} {...settings}>
                {card}
            </Slider>
        <div className="slick-arrows">
            <button onClick={() => incrementAndDecrement("decrement")}>
                <img src="/images/G200.png" alt="..." />
            </button>
            <button onClick={() => incrementAndDecrement("increment")}>
                <img src="/images/G201.png" alt="..." />
            </button>
        </div>
        </div>
        </>
      );
}

export default Carousel2;