import '../styles/Hero.css'

function Hero () {
    return (
        <section className="hero fade-up">
            <h1>Backend Developer</h1>

            <p>
                I build modern and responsive web applications
                using React and TypeScript.
            </p>


            <div className="hero-buttons">
                <a href="#projects">Projects</a>

                <a href="https://github.com/roziboyevolmasbek391-source" 
                target="_blank"
                >
                    GitHub
                </a>
            </div>
        </section>
    )
}

export default Hero