import { Snippet } from "../components/snippet"

export function Docs() {
    const json1 = `{
    "quote": "Example is not the main thing in influencing other people; it’s the only thing.",
    "author": "Abraham Lincoln"
}`

    const fetchQuoteByAuthorName = `async function fetchData() {
    try {
        const response = await fetch("http://localhost:3030/api/quote/Steve Jobs");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}`

    const responseByAuthorName = `[
    {
        "_id": "64ccc1c57fc90e687dccf4ce",
        "quote": "Your time is limited, so don’t waste it living someone else’s life.",
        "author": "Steve Jobs"
    },
    {
        "_id": "64ccc1c57fc90e687dccf51e",
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "_id": "64ccc1c57fc90e687dccf600",
        "quote": "“Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
        "author": "Steve Jobs"
    }
]`

    const fetchBatchOfQuotes = `async function fetchData() {
    try {
        const response = await fetch("http://localhost:3030/api/quote/batch/3");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}`

    const responseBatch = `[
    {
        "_id": "64ccc1c67fc90e687dccf65e",
        "quote": "“Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will spend its whole life believing it is stupid.",
        "author": "Albert Einstein, Theoretical Physicist"
    },
    {
        "_id": "64ccc1c57fc90e687dccf547",
        "quote": "There is no happiness except in the realization that we have accomplished something.",
        "author": "Henry Ford"
    },
    {
        "_id": "64ccc1c57fc90e687dccf4c6",
        "quote": "We become what we think about.",
        "author": "Earl Nightingale"
    }
]`

    return (
        <section className="docs">
            <h2>
                Quotes API
            </h2>
            <p>Welcome to the API documentation for Quotivation.
                This API provides motivational quotes to inspire and motivate developers. It allows you to fetch random quotes, search for quotes, and perform other actions related to motivational quotes.</p>

            <h2>
                Base URL
            </h2>
            The base URL for the API is: http://your-api-base-url.com
            <p></p>

            <h2>
                Authentication
            </h2>
            <p>
                The API does not require authentication for most endpoints. However, certain advanced features may require API keys or authentication in the future.
            </p>

            <h2>
                Rate Limits
            </h2>
            <p>
                The API has rate limits to prevent abuse and ensure fair usage. The current rate limits are as follows:<br />
                Public Endpoints: X requests per minute/hour/day.
            </p>

            <h2>Error Handling</h2>
            <p>
                The API returns appropriate HTTP status codes to indicate the success or failure of a request. In case of an error, the response will include a JSON object with an error property containing the error message.
            </p>

            <h1>Endpoints</h1>
            <h2>1. Get a Random Quote</h2>
            <p>Returns a random motivational quote.</p>
            <ul>
                <li>URL: /api/quote/random</li>
                <li>Method: GET</li>
            </ul>

            <p>Example response:</p>
            <Snippet language="json" code={json1} />

            <h2>2. Search quotes by author</h2>
            <p>Searches for motivation quotes by author name</p>
            <ul>
                <li>URL: /api/quote/author/:name</li>
                <li>Method: GET</li>
            </ul>

            <p>Example request:</p>
            <Snippet language="javascript" code={fetchQuoteByAuthorName} />
            <p>Example response:</p>
            <Snippet language="json" code={responseByAuthorName} />

            <h2>3. Get a batch of quotes</h2>
            <p>Randomly picks up the amount of quotes defined in the request</p>
            <ul>
                <li>URL: /api/quote/batch/:amount</li>
                <li>Method: GET</li>
            </ul>

            <p>Example request:</p>
            <Snippet language="javascript" code={fetchBatchOfQuotes} />
            <p>Example response:</p>
            <Snippet language="json" code={responseBatch} />


        </section>
    )
}