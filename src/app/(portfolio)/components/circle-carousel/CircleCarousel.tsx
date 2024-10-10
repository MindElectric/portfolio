import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import shiba from "../../../../../public/imgs/carousel/shiba.png"
import someone from "../../../../../public/imgs/carousel/someone.png"

export const CircleCarousel = () => {
    return (
        <div className="w-full h-full bg-blue-800 rounded-xl ">
            <Carousel autoplay={4000} opts={{
                loop: true
            }}>
                <CarouselContent>
                    <CarouselItem className="flex justify-center"><Image src={someone} alt={"someone-img"} className="w-96" /></CarouselItem>
                    <CarouselItem className="flex justify-center"><Image src={shiba} alt={"shiba-logo"} className="w-96" /></CarouselItem>
                </CarouselContent>
            </Carousel>

        </div>
    )
}
