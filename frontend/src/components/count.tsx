import { Link } from "react-router-dom"

interface ICount {
    data: {
        count: string
    }
}

function Count({ data: { count } }: ICount) {
    
    return (
        <Link to="/">Used {count} times</Link>
    )
}

export default Count