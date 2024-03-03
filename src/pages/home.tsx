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

const Home = () => {
    return (
        <main>
             <Hero />
             <BestSeller />
             <Carousel1 />
             <Service />
             <Carousel2 />
             {/* <Recommended /> */}
             <Collections />
             <Testimonials />
             <Newsletter />
             <Categories />
        </main>
    )
}

export default Home;