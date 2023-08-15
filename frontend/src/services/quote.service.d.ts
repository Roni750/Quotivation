interface Quote {
    quote: string
    author: string
}

export function loadQuote(): Promise<Quote>