import { Snippet } from "../../components/snippet"

export function DocsRandom() {
    const BASE_URL = 'https://quotivation.onrender.com'

    const fetchRandomQuote = `async function fetchData() {
    try {
        const response = await fetch("${BASE_URL}/api/quote");
    
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
    
        const data = await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}`

    const json1 = `{
    "_id": "64ccc1c57fc90e687dccf5ff",
    "quote": "“Success is how high you bounce after you hit bottom",
    "author": "General George Patton"
}`

    return (
        <>
            <h2>1. Get a Random Quote</h2>
            <p>Returns a random motivational quote.</p>
            <ul>
                <li>URL: /api/quote/</li>
                <li>Method: GET</li>
            </ul>

            <p>Example request:</p>
            <Snippet language="javascript" code={fetchRandomQuote} />
            <p>Example response:</p>
            <Snippet language="json" code={json1} />
        </>
    )
}