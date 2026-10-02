import type { Project } from '../types/portfolio.ts'

export function ProjectCard({ project }: { project: Project }) {
    return (
        <section className="project-card">
            <div className="project-window">
                <div className="window-preview">
                    <iframe src={project.url} loading="lazy" />
                </div>
                <div className="window-footer">
                    <div className="project-meta">
                        <span className="project-number">{project.id}</span>
                        <h2>{project.title}</h2>
                        <p>{project.category}</p>
                        <div className="project-tech">
                            {project.tech.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <a href={project.url} target="_blank" className="project-link">
                        Explore Website
                        <span>↗</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
