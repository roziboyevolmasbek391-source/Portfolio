import "../styles/Sections.css"

const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "Fastify",
    "PostgreSQL",
    "Docker",
    "JWT",
    "SQL",
    "Redis"
]

function Skills() {
    return (
        <section id='skills' className='skills fade-up'>
            <h1>Skills</h1>

            <div className='skills-grid'>
                {skills.map((skill, index) => (
                    <div key={index} className='skill-card'>
                        {skill}
                        </div>
                ))}
            </div>
        </section>
    )
}

export default Skills