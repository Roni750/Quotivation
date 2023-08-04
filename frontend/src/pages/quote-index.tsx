import { useEffect, useState } from 'react'
import axios from 'axios'

export function QuoteIndex() {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:3030/api/quote/")
        .then((res) => setData(res.data))
        .catch(err => {
            console.error("err", err)
        })

        console.log("data", data)
    }, [])

    return (
        <div className="quote-index">
            <h2>QuoteIndex</h2>
        </div>
    )
}