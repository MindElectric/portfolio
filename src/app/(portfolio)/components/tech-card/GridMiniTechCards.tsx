import technologies from "@/data/MiniTechData.json"
import { MiniTechCard } from "./MiniTechCard"
import { RevealStagger } from "@/components/animation/RevealStagger"
export const GridMiniTechCards = () => {
    return (
        <div className="grid grid-cols-2  md:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
                <RevealStagger key={index} index={index}>
                    <ul>
                        <li>
                            <MiniTechCard key={index} name={tech.name} icon={tech.icon} />
                        </li>
                    </ul>
                </RevealStagger>
            ))}
        </div>
    )
}
