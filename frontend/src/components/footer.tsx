import { useEffect, useState } from "react"
import axios from 'axios'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Count from "./count"
import { NavLink } from "react-router-dom"

interface ICount {
    count: string
}

export function Footer() {
    const [data, setData] = useState<ICount | null>()

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const res = await axios.get("http://localhost:3030/api/count/")
            setData(res.data[0])
            console.log("res.data[0]", res.data[0])
            console.log("res.data", res.data)
        } catch (err) {
            console.error("err", err)
        }
    }

    return (
        <footer>
            <nav>
                <NavLink to="/docs">Docs</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            {data && <Count data={data} />}
            <div className="socials">
                <a href="https://github.com/Roni750"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/yerushalmi-roni/"><FaLinkedin color="#0a66c2" /></a>
            </div>
        </footer>
    )
}
