'use client'
import clsx from "clsx"
import { useState } from "react"
interface MiniTechCardProps {
    name: string
    icon: string
}

export const MiniTechCard = ({ name, icon }: MiniTechCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className=" group border-primary rounded-md border-2 h-10 md:h-14 lg:h-20 hover:text-slate-100 hover:bg-primary transition-all duration-100 ease-in"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex h-full items-center">
                <div className="h-full bg-custompink border-custompink w-11 border-2 rounded-tl-sm rounded-bl-sm"></div>
                <div className="ml-2 lg:ml-5">
                    <i className={clsx("text-2xl md:text-3xl  lg:text-5xl", icon, { 'colored': !isHovered })}></i>
                </div>
                <div className="ml-2 lg:ml-5 w-full">
                    <p className="text-xs md:text-sm lg:text-xl font-bold dark:text-slate-200">{name}</p>
                </div>
            </div>
        </div>
    )
}
