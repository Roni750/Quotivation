import { useEffect, useState, CSSProperties } from 'react'
import { quoteService } from '../services/quote.service.js'
import Quote from '../components/quote';
import CircleLoader from 'react-spinners/CircleLoader.js';

interface IQuoteProps {
    data: {
        quote: String
        author: String
    }
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


export function QuoteIndex() {
    const [data, setData] = useState<IQuoteProps | any>()

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const quote = await quoteService.loadQuote()
            setData(quote)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="quote-index">
            {data ? (
                <Quote data={data} />
            ) : <div className="quote">
                <CircleLoader
                    color="#252c3a"
                    loading={true}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
            }
        </div>
    )
}