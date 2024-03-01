import BestSeller from "../component/bestSeller";
import Carousel1 from "../component/carousel1";
import Hero from "../component/hero";
import Service from "../component/services";

const Home = () => {
    return (
        <main>
             <Hero />
             <BestSeller />
             <Carousel1 />
             <Service />
        </main>
    )
}

export default Home;