import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"

interface TechCardProps {
    title: string
    description: string
    image: StaticImageData
    bgColor?: string
    primaryColor?: string
    secondaryColor?: string
}

export const TechCard = ({ title, description, image, bgColor, primaryColor, secondaryColor }: TechCardProps) => {
    return (
        <div className="w-full">
            <Card className="h-52 lg:h-64" style={{ backgroundColor: bgColor ?? "transparent" }}>
                <div className="flex h-full">
                    <div className="w-1/5 xl:w-2/5 flex items-center">
                        <Image src={image} alt={"vue-img"} className="w-24 lg:w-44 xl:w-52 mx-4" />
                    </div>
                    {/* Name and description */}
                    <div className="flex flex-col w-3/5 xl:w-2/5 ml-1 xl:ml-0">
                        <CardHeader className="pb-2 xl:pl-0">
                            <CardTitle className="text-base md:text-lg lg:text-2xl font-bold" style={{ color: primaryColor ?? "black" }}
                            >{title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-white xl:pl-0">
                            <p className="text-sm  lg:text-xl">{description}</p>
                        </CardContent>
                    </div>

                    {/* Box decoration */}
                    <div className="flex w-1/5 xl:w-1/5 justify-end space-x-3 xl:space-x-6">
                        <div>
                            <div className="w-6 xl:w-12 h-full" style={{ backgroundColor: primaryColor ?? "black" }}></div>
                        </div>
                        <div className="pr-2 xl:pr-4">
                            <div className="w-6 xl:w-12 h-full" style={{ backgroundColor: secondaryColor ?? "black" }}></div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
