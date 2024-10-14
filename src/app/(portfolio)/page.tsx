import { Button } from "@/components/ui/button";
import { CircleCarousel } from "./components/circle-carousel/CircleCarousel";
import { LogoScroll } from "./components/logo-scroll/LogoScroll";
import { GridCards } from "./components/tech-card/GridCards";
import { RainbowWords } from "./components/words/RainbowWords";
import Link from "next/link";
import { GridMiniTechCards } from "./components/tech-card/GridMiniTechCards";

export default function HomePage() {
    return (
        <>
            <section className="pt-3 sm:pt-0 block md:flex md:min-h-96 justify-between items-center px-8 md:px-12">
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
                <aside className="w-full xl:w-3/4 h-full md:pl-12 lg:pl-20 mt-8 md:mt-0">
                    <CircleCarousel />
                </aside>
            </section>

            {/* TODO: Turn these to high order components */}

            <section className="mt-14 lg:mt-32 px-8 md:px-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">About Me</h2>
                <p className="text-lg md:text-xl lg:text-2xl mt-6">I am a software engineer</p>
            </section>

            <section className="w-full mt-14 lg:mt-32">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold px-8 md:px-12 mb-6">Companies I've Worked for</h2>
                <LogoScroll />
                <Link className=" flex justify-center mt-4" href={"/projects/work-projects"}>
                    <Button size={"lg"}> Find Out More! </Button>
                </Link>
            </section>

            <section className="mt-14 lg:mt-32 px-8 md:px-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">What I Work With</h2>
                <GridCards />
            </section>

            <section className="mt-14 lg:mt-32 px-8 md:px-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">Other Technologies I Use</h2>
                <GridMiniTechCards />
            </section>

            <section className="mt-14 lg:mt-32 px-8 md:px-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">Projects</h2>
            </section>
        </>
    );
}
