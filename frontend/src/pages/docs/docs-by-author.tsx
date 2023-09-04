import { Snippet } from "../../components/snippet"

export function DocsByAuthor() {
    const BASE_URL = window.location.href

    const fetchQuoteByAuthorName = `async function fetchData() {
        try {
            const response = await fetch("${BASE_URL}/api/quote/Steve Jobs")
    
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
    
            const data = await response.json()
        } catch (error) {
            console.error('Error fetching data:', error)
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
    return (
        <>
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
        </>
    )
}