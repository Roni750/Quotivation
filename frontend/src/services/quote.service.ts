import { httpService } from './http.service.js'

const BASE_URL = 'quote/'
const COUNTER_URL = 'count/'

export const quoteService = {
    query,
    loadQuote,
    fetchCount
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
        const heyo = await httpService.get(COUNTER_URL)
        console.log("heyo", heyo)  
        return httpService.get(COUNTER_URL)
    } catch (err) {
        console.error("API counter couldn't be fetched.")
    }
}

// function get(quoteId) {
//     // return storageService.get(STORAGE_KEY, quoteId)
//     return httpService.get(BASE_URL + quoteId)
// }

// function remove(quoteId) {
//     // return storageService.remove(STORAGE_KEY, quoteId)
//     return httpService.delete(BASE_URL + quoteId)
// }

// function save(quote) {
//     if (quote._id) {
//         // return storageService.put(STORAGE_KEY, quote)
//         return httpService.put(BASE_URL, quote)
//     } else {
//         return httpService.post(BASE_URL, quote)
//         // return storageService.post(STORAGE_KEY, quote)
//     }
// }