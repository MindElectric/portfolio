import React from 'react'
import { WorkCard } from './WorkCard'
// import WorkData from "@/data/WorkCardData.json"
import grupoCruces from "../../../../../public/imgs/logos/company-logos/logo_grupo_cruces.png"
import capufe from "../../../../../public/imgs/logos/company-logos/logo_capufe.png"
import telmex from "../../../../../public/imgs/logos/company-logos/Telmex-Logo.png"
import pequeño from "../../../../../public/imgs/logos/company-logos/Pequeños_logo.png"

import database from "../../../../../public/imgs/gif/Icon/database.gif"
import pieChart from "../../../../../public/imgs/gif/Icon/pie-chart.gif"
import chatbot from "../../../../../public/imgs/gif/Icon/chatbot.gif"
import responsive from "../../../../../public/imgs/gif/Icon/responsive.gif"
import { RevealStagger } from '@/components/animation/RevealStagger'

const WorkData = [
    {
        "title": "Grupo Cruces",
        "image": grupoCruces,
        "alt": "logo grupo cruces",
        "icon": database,
        "description": "At Grupo Cruces I participated in creating an automatic e-mail sender in MicrosoftSQLServer whenever the database created a backup. I also recorded the data by making queries."
    },
    {
        "title": "CAPUFE",
        "image": capufe,
        "alt": "logo capufe",
        "icon": pieChart,
        "description": "At CAPUFE I worked with a team to create a website for viewing data through charts like: Pie Charts, Line Charts, and Bar Charts; using HTML, CSS, and JavaScript."
    },
    {
        "title": "TELMEX",
        "image": telmex,
        "alt": "logo telmex",
        "icon": chatbot,
        "description": "At TELMEX I worked with NodeJS and WhatsApp's API to create a chatbot to automating tasks through text commands"
    },
    {
        "title": "Pequeños Momentos",
        "image": pequeño,
        "alt": "logo pequenos momentos",
        "icon": responsive,
        "description": "At Pequeños Momentos I created and designed an inventory system using ReactJS, NodeJS with Express. I also created the database using PostgreSQL. With these tools I created a responsive and reliable website for keeping track of invetory stock in the company"
    }
]

export const WorkCardGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-14 xl:gap-32 md:mx-10 xl:mx-10'>
            {WorkData.map((project, index) => (
                <RevealStagger index={index} key={index}>
                    <WorkCard title={project.title} alt={project.alt} image={project.image} icon={project.icon} description={project.description} />

                </RevealStagger>
            ))}
        </div>
    )
}
