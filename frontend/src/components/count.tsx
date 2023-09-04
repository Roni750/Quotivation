import { Link } from "react-router-dom"

interface ICount {
    data: {
        count: string
    }
}

export default function Count({ data: { count } }: ICount) {
    return (
        <Link to="/">API fetched {count} times</Link>
    )
}