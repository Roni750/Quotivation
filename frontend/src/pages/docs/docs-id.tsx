import { Snippet } from "../../components/snippet"

export function DocsGetById() {
    const BASE_URL = process.env.NODE_ENV

    const fetchQuoteById = `async function fetchData() {
        try {
            const response = await fetch("${BASE_URL}/api/quote/64ccc1c57fc90e687dccf4c6");
    
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
    
            const data = await response.json()
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }`

    const responseQuoteById = `{
        "_id": "64ccc1c57fc90e687dccf4c6",
        "quote": "We become what we think about.",
        "author": "Earl Nightingale"
    }`
    return (
        <>
            <h2>4. Get quote by id</h2>
            <p>Fetches the quote with the given id</p>
            <ul>
                <li>URL: /api/quote/:id</li>
                <li>Method: GET</li>
            </ul>

            <p>Example request:</p>
            <Snippet language="javascript" code={fetchQuoteById} />
            <p>Example response:</p>
            <Snippet language="json" code={responseQuoteById} />
        </>
    )
}