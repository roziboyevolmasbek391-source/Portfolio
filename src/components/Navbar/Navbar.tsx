import './Navbar.css'
import { useState } from 'react'

function Navbar() {
    const [ darkmode , setDarkmode ] =useState( false )

    const toggleTheme = () => {
        setDarkmode(!darkmode)

        if(!darkmode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }

    return (
        <nav className="navbar">
            <h1 className="logo">Ruzibayev</h1>

            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button onClick={toggleTheme}>
                {darkmode ? 'Light' : 'Dark'}
            </button>
        </nav>
    )
}

export default Navbar