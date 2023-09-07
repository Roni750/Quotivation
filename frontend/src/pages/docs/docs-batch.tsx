import { Snippet } from "../../components/snippet";

export function DocsBatchQuotes() {
    const BASE_URL = 'https://quotivation.onrender.com'

    const fetchBatchOfQuotes = `async function fetchData() {
    try {
        const response = await fetch("${BASE_URL}/api/quote/batch/3")

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
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
        <>
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
        </>
    )
}