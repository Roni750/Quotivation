import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Count from "./count"

interface ICount {
    count: string
}

export function Footer() {
    const [data, setData] = useState<ICount | null>()

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get("http://localhost:3030/api/count/")
                setData(res.data[0])
                
            } catch (err) {
                console.error("err", err)
            }
        }

        fetchData()

    }, []);
    
    return (
        <footer>
            <nav>
                <Link to="/docs">Docs</Link>
                <Link to="/about">About</Link>
            </nav>
            {data && <Count data={data} />}
            <div className="socials">
                <a href="https://github.com/Roni750"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/yerushalmi-roni/"><FaLinkedin color="#0a66c2" /></a>
            </div>
        </footer>
    )
}
