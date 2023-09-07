interface ICount {
    data: {
        count: string
    }
}

export default function Count({ data }: ICount) {
    // Check if data and data.count are defined
    if (!data || !data.count) {
        return null; // or some other fallback UI
    }

    return (
        <span>API fetched {data.count} times</span>
    )
}
