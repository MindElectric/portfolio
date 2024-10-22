import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import shiba from "../../../../../public/imgs/carousel/shiba.png"
import someone from "../../../../../public/imgs/carousel/someone.png"

export const CircleCarousel = () => {
    return (
        <div className="w-full h-full bg-blue-800 dark:bg-blue-900 rounded-xl ">
            <Carousel autoplay={6000} opts={{
                loop: true
            }}>
                <CarouselContent>
                    <CarouselItem className="flex justify-center"><Image src={someone} alt={"someone-img"} priority className="w-60 md:w-96 xl:w-[29rem]" /></CarouselItem>
                    <CarouselItem className="flex justify-center"><Image src={shiba} alt={"shiba-logo"} className="w-60 md:w-96 xl:w-[29rem]" /></CarouselItem>
                </CarouselContent>
            </Carousel>

        </div>
    )
}
