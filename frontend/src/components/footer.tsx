import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export function Footer() {

    return (
        <footer>
            <nav>
                <Link to="/docs">Docs</Link>
                <Link to="/about">About</Link>
            </nav>
            <div className="count">
                <Link to="/">Used 2,028 times</Link>
            </div>
            <div className="socials">
                <a href="https://github.com/Roni750"><FaGithub /></a>
                <a href="www.linkedin.com/in/roni-yerushalmi-2184b0227"><FaLinkedin color="#0a66c2" /></a>
            </div>
        </footer>
    )
}