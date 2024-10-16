import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import vue from '../../../../../public/imgs/logos/tech-logos/vue_logo.png'
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Props {
    title: string
    description: string
    image: StaticImageData
    alt: string
    technologies: string[]
    background?: string
    href: string
}
export const PersonalCard = ({ title, description, image, alt, technologies, background, href }: Props) => {
    return (
        <div>
            <Card className="h-72 w-80 md:w-full lg:h-80 bg-gray-400"
                style={{ backgroundColor: background ?? "transparent" }}
            >
                <div className="flex h-full md:px-7">
                    <div className=" flex items-center">
                        <Image src={image} alt={alt} className="w-32 md:w-40 lg:w-44 xl:w-52 mx-4" />
                    </div>
                    {/* Name and description */}
                    <div className="flex flex-col ml-5 xl:ml-10 w-full">
                        <CardHeader className="pb-2 xl:pl-0">
                            <CardTitle className="text-base text-background md:text-lg lg:text-2xl font-bold"
                            >{title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-white xl:pl-0 flex-grow">
                            <p className="text-sm  lg:text-xl">{description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center pl-0">
                            <div className="hidden md:flex">
                                <p className="text-sm mt-auto text-background  lg:text-xl">Technologies:</p>

                                {technologies.map((tech, index) => (
                                    <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
                                        key={index}
                                        alt={"alt-text"}
                                        width={35}
                                        height={35}
                                        className="ml-3"
                                    />
                                ))}

                            </div>

                        </CardFooter>
                    </div>

                </div>
            </Card>
            <div className="flex justify-end py-4 md:py-7">

                <Link href={href}>
                    <Button className="text-xs md:text-sm lg:text-base ">Find out more!</Button>
                </Link>
            </div>
        </div>
    )
}
