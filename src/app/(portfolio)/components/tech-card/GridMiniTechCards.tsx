import { MiniTechCard } from "./MiniTechCard"

export const GridMiniTechCards = () => {
    return (
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-4">
            <MiniTechCard />
            <MiniTechCard />
            <MiniTechCard />
            <MiniTechCard />
            <MiniTechCard />
            <MiniTechCard />
        </div>
    )
}
