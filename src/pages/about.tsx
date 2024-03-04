import AboutCard from "../component/about-card";
import AboutCard2 from "../component/about-card2";
import BestSeller from "../component/bestSeller";
import Categories from "../component/categories";
import Collections from "../component/collections";
import Hero from "../component/hero";
import Newsletter from "../component/newletter";
import Service from "../component/services";

const hero = {
    title: "The Bookers - A Passionate Community of Book Lovers",
    description: "We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!",
    button: "Get Started",
    image: "/images/about-img1.png"
}

const mission = {
    title: "Our Mission",
    description: "We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!"
}

const collection = {
    image: "/images/about-img2.png",
    title: "Why Choose The Bookers",
    description: "We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!",
    button: "Get Started"
}

const team = {
    title: "Meet Our Team",
    description: "We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you "
}


const teamData = [
    {
        image: "/images/team-image1.png",
        name: "Declan Rice",
        proffesion: "CEO/Founder",
        social_media: ["/images/twitter.png", "/images/fb.png", "/images/liknd.png", "/images/insta.png"]
    },
    {
        image: "/images/team-image2.png",
        name: "Maryam Atkinson",
        proffesion: "Sales and Marketing Manager",
        social_media: ["/images/twitter.png", "/images/fb.png", "/images/liknd.png", "/images/insta.png"]
    },
    {
        image: "/images/team-image3.png",
        name: "Jurgen Klopp",
        proffesion: "Inventory Manager",
        social_media: ["/images/twitter.png", "/images/fb.png", "/images/liknd.png", "/images/insta.png"]
    },
    {
        image: "/images/team-image4.png",
        name: "Jonathan Joules",
        proffesion: "Book Curator",
        social_media: ["/images/twitter.png", "/images/fb.png", "/images/liknd.png", "/images/insta.png"]
    },
    {
        image: "/images/team-image5.png",
        name: "Nathan Ake",
        proffesion: "Data Analyst",
        social_media: ["/images/twitter.png", "/images/fb.png", "/images/liknd.png", "/images/insta.png"]
    },
    {
        image: "/images/team-image6.png",
        name: "Lilian Robinson",
        proffesion: "Customer Service Representative",
        social_media: ["/images/twitter.png", "/images/fb.png", "/images/liknd.png", "/images/insta.png"]
    },
]

const aboutCard = teamData.map((data, i) => (
    <div key={i}>
        <AboutCard
        title={data.name}
        image={data.image}
        proffession={data.proffesion}
        social_media={data.social_media}
        />
    </div>
))

const About = () => {
    return (
        <main>
            <Hero
            title={hero.title}
            description={hero.description}
            imageUrl={hero.image}
            button={hero.button}
            />
            <BestSeller 
            title={mission.title}
            description={mission.description}
            />
            <Collections
            title={collection.title}
            description={collection.description}
            buttonText={collection.button}
            image={collection.image}

            />
            <BestSeller 
            title={team.title}
            description={team.description}
            />
            <div className="mx-auto container max-w-6xl p-4 grid grid-cols-2 md:grid-cols-3 gap-5">
                {aboutCard}
            </div>
            <Service />
            <AboutCard2 />
            <Newsletter />
            <Categories />
        </main>
    )
}

export default About;