import { Snippet } from "../../components/snippet"

export function DocsGetById() {
    const BASE_URL = 'https://quotivation.onrender.com'

    const fetchQuoteById = `async function fetchData() {
    try {
        const response = await fetch("${BASE_URL}/api/quote/64dbbab3606bb353c68c771f");
    
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
    
        const data = await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}`

    const responseQuoteById = `{
    "_id": "64dbbab3606bb353c68c771f",
    "quote": "Life isn\`t about getting and having, it\`s about giving and being.",
    "author": "Kevin Kruse"
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