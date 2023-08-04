import { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from '../components/quote';

interface IQuoteProps {
    data: {
        quote: String
        author: String
    }
}

export function QuoteIndex() {
    const [data, setData] = useState<IQuoteProps | any>()

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get("http://localhost:3030/api/quote/")
                setData(res.data)
            } catch (err) {
                console.error("err", err)
            }
        }

        fetchData()

        console.log("data", data)
    }, []);

    return (
        <div className="quote-index">
            {data &&
                <Quote data={data} />
            }
        </div>
    )
}