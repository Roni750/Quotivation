import { Snippet } from "../../components/snippet"

export function DocsRandom() {
    const json1 = `{
        "quote": "Example is not the main thing in influencing other people; it’s the only thing.",
        "author": "Abraham Lincoln"
    }`

    return (
        <>
            <h2>1. Get a Random Quote</h2>
            <p>Returns a random motivational quote.</p>
            <ul>
                <li>URL: /api/quote/random</li>
                <li>Method: GET</li>
            </ul>

            <p>Example response:</p>
            <Snippet language="json" code={json1} />
        </>
    )
}