import { useEffect, useState } from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Count from "./count";
import { NavLink } from "react-router-dom";
import { quoteService } from "../services/quote.service";

interface ICount {
    _id: string;
    count: string;
}

export function Footer() {
    const [data, setData] = useState<ICount | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const count: ICount | undefined = await quoteService.fetchCount();
            if (count) {
                setData(count);
                console.log("count", count);
            }
        } catch (err) {
            console.error("err", err);
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
    );
}
