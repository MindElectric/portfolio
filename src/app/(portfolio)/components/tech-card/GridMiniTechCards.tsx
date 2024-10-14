import technologies from "@/data/MiniTechData.json"
import { MiniTechCard } from "./MiniTechCard"
export const GridMiniTechCards = () => {
    return (
        <div className="grid grid-cols-2  md:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
                <MiniTechCard key={index} name={tech.name} icon={tech.icon} />
            ))}
        </div>
    )
}
