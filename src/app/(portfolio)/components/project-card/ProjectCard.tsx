import { Button } from "@/components/ui/button"
import {
    Card
} from "@/components/ui/card"
import { poppins } from "@/config/font"
import Link from "next/link"

interface ProjectCardProps {
    title: string,
    description: string,
    path: string
}

export const ProjectCard = ({ title, description, path }: ProjectCardProps) => {
    return (
        <div className="w-72 h-80 lg:w-[23rem] lg:h-96 xl:w-[26rem] xl:h-[27rem]">
            <Card className="w-full h-full border-2 border-custompink">
                <div className="flex justify-center items-center h-full">
                    <div>
                        <div className={`${poppins.className} text-xl lg:text-2xl antialiased text-center font-bold px-20 xl:px-36`}>{title}</div>
                        <div className="px-2 text-base lg:text-lg text-center mt-6">{description}</div>
                        <div className="flex justify-center">
                            <Link href={path}>
                                <Button className="mt-6 border-2 border-custompink" variant={"outline"}>View All</Button>
                            </Link>
                        </div>
                    </div>

                </div>

            </Card>

        </div>
    )
}
