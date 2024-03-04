import BestSeller from "../component/bestSeller";
import Carousel1 from "../component/carousel1";
import Carousel2 from "../component/carousel2";
import Categories from "../component/categories";
import Collections from "../component/collections";
import Hero from "../component/hero";
import Newsletter from "../component/newletter";
// import Recommended from "../component/recommended";
import Service from "../component/services";
import Testimonials from "../component/testimonial";

const hero = {
        image: "/images/book_reading.png",
        title: "Encounter a Wealth of Books and Inspiration",
        description: "We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!",
        button: "Buy now"
    }

    const bestSeller = {
        title: "Best Sellers",
        description: "A must read book for anyone who  exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference"
    }

    const collections = {
        image: "/images/books.png",
        description: "We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!",
        title: "Find your next favorite read from our carefully curated book collection.",
        button: "Buy Now"
    }

const Home = () => {
    return (
        <main>
             <Hero
             title={hero.title}
             description={hero.description}
             button={hero.button}
             imageUrl={hero.image}
             />
             <BestSeller
             title={bestSeller.title}
             description={bestSeller.description}
             />
             <Carousel1 />
             <Service />
             <Carousel2 />
             {/* <Recommended /> */}
             <Collections
             title={collections.title}
             description={collections.description}
             image={collections.image}
             buttonText={collections.button}
             />
             <Testimonials />
             <Newsletter />
             <Categories />
        </main>
    )
}

export default Home;