import { useEffect, useState } from 'react'
import {quoteService} from '../services/quote.service.js'
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
        fetchData()
    }, [])

    async function fetchData() { 
        try {
            const quote = await quoteService.loadQuote()
            setData(quote)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <div className="quote-index">
            {data ? (
                <Quote data={data} />
            ) : <h4>No quotes for display</h4>
            }
        </div>
    )
}