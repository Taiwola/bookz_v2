import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import Card2 from "./card2";

const Testimonials = () => {

    const bookData = [
        {
            image: "/images/userimg1.png",
            title: "Crack the Code",
            rating: "4.3",

            description: `A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes ` ,
            name: 'Adumeta Chinedu',
            star: "/images/star2.png",
            proffession: "Ui Designer, Apple Inc"
        },
        {
            image: "/images/userimg2.png",
            title: "Sunset kiss",
            rating: "4.6",
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes ",
            name: "Alisha Gazel",
            star: "/images/star2.png",
            proffession: "UX Writer, Google"
        },
        {
            image: "/images/userimg3.png",
            title: "Say you'll be mine",
            rating: "4.6",
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes  ",
            name: 'Sheriff Baba T',
            star: "/images/star2.png",
            proffession: "Front end Developer AirBnB"
        }
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
       
            <Card2 
        key={i}
        image={book.image}
        description={book.description}
        proffession={book.proffession}
        name={book.name}
        star={book.star}
        rating={book.rating}
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
        
        <div className="slick-container relative z-10 container md:w-[100%] md:overflow-hidden">
        <h1 className="manrope-bold mb-2 text-center mt-20 md:px-8 md:text-[50px] md:text-center text-customMainColor md:mb-7 container mx-auto text-[30px]">Hear from our Happy Readers</h1>
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

export default Testimonials;