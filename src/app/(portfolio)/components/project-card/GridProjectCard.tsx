import React from 'react'
import { ProjectCard } from './ProjectCard'

const ProjectCardData = [
    {
        title: "Personal Projects",
        description: "Projects I've worked on my own time!",
        path: "/projects/personal-projects"
    },
    {
        title: "Work Projects",
        description: "Projects I've worked on for companies",
        path: "/projects/work-projects"
    },
]

export const GridProjectCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-40">
            {ProjectCardData.map((project, index) => (
                <ProjectCard key={index} title={project.title} description={project.description} path={project.path} />
            ))}
        </div>
    )
}
