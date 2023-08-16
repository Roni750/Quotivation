import { NavLink, Outlet } from "react-router-dom"

export function Docs() {

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
            <nav className="docs-nav">
                <NavLink to="random">Random Quote</NavLink>
                <NavLink to="author">Get Quotes by author</NavLink>
                <NavLink to="batch">Quotes batch</NavLink>
                <NavLink to="getbyid">Get quote by id</NavLink>
            </nav>
            <Outlet />
        </section>
    )
}