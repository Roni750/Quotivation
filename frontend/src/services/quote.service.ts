import { httpService } from './http.service.js'

const BASE_URL = 'quote/'
const COUNTER_URL = 'count/'

export const quoteService = {
    query,
    loadQuote,
    fetchCount
}

interface ICount {
    _id: string
    count: string
}

async function loadQuote() {
    try {
        const quote = await query()
        return quote
    } catch (err) {
        console.error("Quote couldn't be fetched:", err)
    }
}

function query() {
    return httpService.get(BASE_URL)
}

async function fetchCount() {
    try {
        const heyo: ICount[] = await httpService.get(COUNTER_URL)
        return heyo[0]
    } catch (err) {
        console.error("API counter couldn't be fetched.")
    }
}