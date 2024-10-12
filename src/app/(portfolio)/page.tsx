import { CircleCarousel } from "./components/circle-carousel/CircleCarousel";
import { RainbowWords } from "./components/words/RainbowWords";

export default function HomePage() {
    return (
        <>
            <div className="pt-3 sm:pt-0 block md:flex md:min-h-96 justify-between items-center">
                <div className="md:w-1/3">
                    <div className="flex justify-center">
                        <div className="text-xl md:text-2xl lg:text-3xl">My Name is</div>

                    </div>
                    <div className="flex justify-center">
                        <div className="text-2xl md:text-2xl lg:text-4xl xl:text-6xl mt-5">
                            <RainbowWords text="Kevin Reyes" />
                        </div>

                    </div>
                </div>
                <div className="w-full xl:w-3/4 h-full md:pl-12 lg:pl-20 mt-8 md:mt-0">
                    <CircleCarousel />
                </div>
            </div>

            <div className="mt-14 lg:mt-32">
                <h2 className="text-xl md:text-2xl lg:text-3xl">About Me</h2>
            </div>
        </>
    );
}
