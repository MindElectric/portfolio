import { CircleCarousel } from "./components/circle-carousel/CircleCarousel";

export default function HomePage() {
    return (
        <>
            <div className="pt-3 sm:pt-0 block md:flex md:min-h-96 justify-between items-center">
                <div>
                    <div className="flex justify-center">
                        <div className="text-xl md:text-2xl lg:text-3xl">My Name is</div>

                    </div>
                    <div className="flex justify-center">
                        <div className="text-4xl md:text-5xl lg:text-6xl">Kevin Reyes</div>

                    </div>
                </div>
                <div className="w-full md:w-3/4 h-full md:pl-40 mt-8 md:mt-0">
                    <CircleCarousel />
                </div>
            </div>

            <div className="h-1/2">
                <div className="text-xl md:text-2xl lg:text-3xl">My Projects</div>
            </div>
        </>
    );
}
