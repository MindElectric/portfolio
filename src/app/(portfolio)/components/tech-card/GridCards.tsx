import { TechCard } from "./TechCard"
import vue from "../../../../../public/imgs/logos/tech-logos/vue_logo.png"
import react from "../../../../../public/imgs/logos/tech-logos/react_logo.png"
import node from "../../../../../public/imgs/logos/tech-logos/node_logo.png"
import flutter from "../../../../../public/imgs/logos/tech-logos/flutter_logo.png"
import next from "../../../../../public/imgs/logos/tech-logos/next_logo.png"

const CardDetails = [
    {
        title: "Vue",
        description: "Skilled in building dynamic user interfaces with Vue.js, leveraging its reactive and component-based architecture.",
        image: vue,
        bg_color: "#4A637A",
        primary_color: "#41B883",
        secondary_color: "#34495E"
    },
    {
        title: "React",
        description: "Experienced in developing interactive and high-performance web applications using React.",
        image: react,
        bg_color: "#409BB0",
        primary_color: "#61DBFB",
        secondary_color: "#61DBFB"
    },
    {
        title: "NodeJS + Express",
        description: "Experienced in using Node and Express JS to create robust APIs and streamline server-side development.",
        image: node,
        bg_color: "#53804F",
        primary_color: "#303030",
        secondary_color: "#68A063"
    },
    {
        title: "Flutter",
        description: "Skilled in developing cross-platform mobile applications with Flutter",
        image: flutter,
        bg_color: "#042B59",
        primary_color: "#027DFD",
        secondary_color: "#0553B1"
    },
    {
        title: "NextJS",
        description: "",
        image: next,
        bg_color: "#2F4F4F",
        primary_color: "#fff",
        secondary_color: "#4A637A"
    }
]

export const GridCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CardDetails.map((card, index) => (
                <TechCard key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    bgColor={card.bg_color}
                    primaryColor={card.primary_color}
                    secondaryColor={card.secondary_color}
                />
            ))}
        </div>
    )
}
