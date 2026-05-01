import '../styles/Projects.css'

const projects = [
    {
        title: "Mini Telegram",
        desc: "Realtime messaging application",
        link: "https://chat-production-2d79.up.railway.app/",
    },
    {
        title: "Mini Ai",
        desc: "Ai chat application",
    },
    {
        title: "Mini Instagram",
        desc: "Social media application",
    }
]

function Projects() {
    return (
        <section className='projects fade-up' id='projects'>
            <h1>Projects</h1>

            <div className='project-grid'>
                {projects.map((project, index) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className={project.link ? "project-card-link" : ""}>
                        <div className="project-card">
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects