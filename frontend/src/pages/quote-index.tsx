import { useEffect, useState, CSSProperties } from 'react';
import { quoteService } from '../services/quote.service.js';
import Quote from '../components/quote';
import CircleLoader from 'react-spinners/CircleLoader.js';

interface IQuoteData {
    quote: string;
    author: string;
}

// interface IQuoteProps {
//     data: IQuoteData
// }

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function QuoteIndex() {
    const [data, setData] = useState<IQuoteData | null>(null);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const quote = await quoteService.loadQuote();
            if (quote && typeof quote === 'object') { // Ensure it's an object
                setData(quote as IQuoteData); // Use type assertion here
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="quote-index">
            {data ? (
                <Quote data={data} />
            ) : (
                <div className="quote">
                    <CircleLoader
                        color="#252c3a"
                        loading={true}
                        cssOverride={override}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}
        </div>
    );
}
