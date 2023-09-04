import { Link } from "react-router-dom"

interface ICount {
    count: string
}

export default function Count({ count }: ICount) {
    console.log("count", count)
    return (
        <Link to="/">API fetched {count} times</Link>
    )
}