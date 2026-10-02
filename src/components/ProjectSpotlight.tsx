import type { Project } from '../types/portfolio.ts'
import { ProjectCard } from './ProjectCard.tsx'

export function ProjectSpotlight({ projects }: { projects: Project[] }) {
    return (
        <>
            <h2>Project Spotlight &rarr;</h2>
            <section id="portfolio">
                <div className="portfolio-container">
                    <div id="projects">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
