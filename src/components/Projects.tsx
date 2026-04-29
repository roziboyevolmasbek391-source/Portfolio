import '../styles/Projects.css'

const projects = [
    {
        title: "Mini Telegram",
        desc: "Realtime messaging application",
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
                    <div className="project-card" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects