import { PersonalCard } from "./PersonalCard"
import vue from "../../../../../public/imgs/logos/tech-logos/vue_logo.png"
import next from "../../../../../public/imgs/logos/tech-logos/next_logo.png"
import flutter from "../../../../../public/imgs/logos/tech-logos/flutter_logo.png"
const PersonalCardData = [
    {
        title: "PokéCards",
        description: "A web application for creating cards using data from the popular franchise, Pokémon! In this website I create images based on user inputs, then i fetch the data from PokéAPI and produce an image from a template.",
        image: vue,
        alt: "logo vue",
        technologies: ["vuejs", "typescript", "tailwindcss", "docker"],
        background: "#4A637A",
        href: "https://github.com/MindElectric/PokemonCards"
    },
    {
        title: "UPC Tour",
        description: "An application made in Flutter for a school project. Use your phone's camera to scan QR codes to obtain information about certain locations of my university. Data is fetched from the Firebase backend.",
        image: flutter,
        alt: "logo flutter",
        technologies: ["flutter", "dart", "firebase"],
        background: "#042B59",
        href: "https://github.com/MindElectric/UpcTour"
    },
    {
        title: "Portfolio",
        description: "My portfolio website. Use this to learn more about me and my work. I also use this to showcase my skills and projects I've done.",
        image: next,
        alt: "logo next",
        technologies: ["nextjs", "typescript", "tailwindcss"],
        background: "#2F4F4F",
        href: "https://github.com/MindElectric/portfolio"
    }
]

export const ColumnCards = () => {
    return (
        <div className="w-full">
            {PersonalCardData.map((card, index) => (
                <PersonalCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    alt={card.alt}
                    technologies={card.technologies}
                    background={card.background}
                    href={card.href}
                />
            ))}
        </div>
    )
}
