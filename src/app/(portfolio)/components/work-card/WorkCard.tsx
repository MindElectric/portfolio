import { Card } from "@/components/ui/card"

import Image, { StaticImageData } from "next/image"

interface WorkCardProps {
    title: string
    alt: string
    image: StaticImageData
    icon: StaticImageData
    description: string
}

export const WorkCard = ({ title, alt, image, icon, description }: WorkCardProps) => {
    return (
        <Card className="flex justify-center w-full md:min-h-full border-2 border-primary mt-6 md:mt-0">
            <div>
                {/* Image */}
                <div className="flex justify-center items-center">
                    <div className="flex items-center border-2 border-primary rounded-full w-40 h-40 lg:w-60 lg:h-60 mt-6">
                        <Image src={image} alt={alt} priority className="w-full p-5" />
                    </div>
                </div>

                {/* Title */}
                <div className="flex justify-center mt-3">
                    <h1 className="text-base md:text-lg lg:text-2xl xl:text-3xl font-bold dark:text-slate-200">{title}</h1>
                </div>

                {/* Icon */}
                <div className="flex justify-center py-5 lg:py-12">
                    <Image src={icon} alt="chatbot gif" unoptimized className="h-14 w-14 lg:h-20 lg:w-20" />
                </div>

                {/* Description */}
                <div className="flex justify-center mx-5 text-xs lg:text-base xl:mx-20 text-justify mb-8">
                    <p className="leading-loose dark:text-slate-200">{description}</p>
                </div>
            </div>
        </Card>
    )
}
