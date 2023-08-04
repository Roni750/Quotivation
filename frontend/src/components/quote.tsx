interface IQuoteProps {
    data: {
        quote: String
        author: String
    }
}

function Quote({ data: { quote, author } }: IQuoteProps) {

    return (
        <section className="quote">
            <h2>“{quote}”</h2>
            <span>-{author}</span>
        </section>
    )
}

export default Quote